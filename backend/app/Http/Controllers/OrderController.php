<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Order;


class OrderController extends Controller
{
    public function index()
    {
        return Order::with('car')->get();
    }

    public function store(Request $request)
    {
        $order = Order::create([
            'car_id' => $request->car_id,
            'pickup' => $request->pickup,
            'dropoff' => $request->dropoff,
        ]);

        return response()->json($order);
    }
}
