<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Order;

class OrderSeeder extends Seeder
{
    public function run(): void
    {
        Order::create([
            'car_id' => 1,
            'pickup' => 'Casablanca',
            'dropoff' => 'Rabat',
            'status' => 'Pending',
        ]);

        Order::create([
            'car_id' => 2,
            'pickup' => 'Marrakech',
            'dropoff' => 'Agadir',
            'status' => 'Pending',
        ]);
    }
}