<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TrainingBooking;
use Illuminate\Support\Facades\Mail;
use Twilio\Rest\Client;

class TrainingBookingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'programme' => 'required|string',
        ]);

        // Create booking record
        $booking = TrainingBooking::create($request->only(['name','email','phone','programme']));

        // Send email notification to admin
        Mail::raw(
            "New booking for: {$booking->programme}\nFrom: {$booking->name}\nEmail: {$booking->email}\nPhone: {$booking->phone}",
            function($message){
                $message->to('info@tietexpertise.com')
                        ->subject('New Training Booking');
            }
        );

        // Send WhatsApp notification via Twilio
        try {
            $twilio = new Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
            $message = "📢 New Training Booking!\nProgramme: {$booking->programme}\nName: {$booking->name}\nEmail: {$booking->email}\nPhone: {$booking->phone}";

            $twilio->messages->create(
                "whatsapp:" . env('TWILIO_TO'), // Admin WhatsApp number
                [
                    "from" => "whatsapp:" . env('TWILIO_FROM'), // Your Twilio WhatsApp number
                    "body" => $message
                ]
            );
        } catch (\Exception $e) {
            \Log::error("Twilio WhatsApp error: " . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'booking' => $booking,
        ]);
    }
}
