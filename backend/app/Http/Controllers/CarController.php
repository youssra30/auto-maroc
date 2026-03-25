<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index()
{
    $cars = Car::all();

    foreach ($cars as $car) {
        $car->image = asset('storage/' . $car->image);
    }

    return response()->json($cars);
}

public function show($id)
{
    $car = Car::findOrFail($id);

    $car->image = asset('storage/' . $car->image);

    return response()->json($car);
}
}