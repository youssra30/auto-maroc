<?php
use App\Http\Controllers\CarController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;

Route::get('/orders', [OrderController::class, 'index']);
Route::post('/orders', [OrderController::class, 'store']);

Route::get('/cars', [CarController::class, 'index']); 
Route::get('/cars/{id}', [CarController::class, 'show']);
Route::get('/reservations', [ReservationController::class, 'index']);
