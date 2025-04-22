<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/events/index", [EventController::class, "index"]);
Route::post('/events/add', [EventController::class, 'add']);
Route::post('/events/toggleFavorite', [EventController::class, 'toggleFavorite']);