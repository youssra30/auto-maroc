<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
    'brand',
    'model',
    'year',
    'fuel_type',
    'transmission',
    'price',
    'mileage',
    'image'
   ];
    public function reservations()
{
    return $this->hasMany(Reservation::class);
}
}
