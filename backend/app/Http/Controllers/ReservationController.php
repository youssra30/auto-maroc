<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'car_id' => 'required|exists:cars,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $car = Car::findOrFail($request->car_id);

        $days = Carbon::parse($request->start_date)
            ->diffInDays(Carbon::parse($request->end_date));

        $total = $days * $car->price;

        Reservation::create([
            'user_id' => Auth::id(),
            'car_id' => $car->id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'total_price' => $total,
        ]);

        return redirect()->back()->with('success', 'Réservation envoyée');
    }

    public function index()
    {
        $reservations = Reservation::with('user','car')->get();
        return view('reservations.index', compact('reservations'));
    }

    public function update(Request $request, Reservation $reservation)
    {
        $reservation->update([
            'status' => $request->status
        ]);

        return redirect()->back();
    }
}