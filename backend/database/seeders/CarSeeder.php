<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Car;

class CarSeeder extends Seeder
{
    public function run(): void
    {
        Car::create([
            'brand' => 'BMW',
            'model' => 'X5',
            'year' => 2020,
            'fuel_type' => 'Petrol',
            'transmission' => 'Automatic',
            'price' => 50000,
            'mileage' => 15000,
            'image' => 'cars/car22.jpg'
        ]);

        Car::create([
            'brand' => 'Audi',
            'model' => 'A4',
            'year' => 2019,
            'fuel_type' => 'Diesel',
            'transmission' => 'Manual',
            'price' => 35000,
            'mileage' => 30000,
            'image' => 'cars/car33.jpg'
        ]);

        Car::create([
            'brand' => 'Renault',
            'model' => 'Clio',
            'year' => 2021,
            'fuel_type' => 'Petrol',
            'transmission' => 'Manual',
            'price' => 18000,
            'mileage' => 10000,
            'image' => 'cars/car44.jpg'
        ]);
    }
}