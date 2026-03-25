<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    // هادي باش Laravel يسمحلك تدير mass assignment
    protected $fillable = [
        'car_id',
        'pickup',
        'dropoff',
        // 'status' إلا عندك status field
    ];

    // relation مع car
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}