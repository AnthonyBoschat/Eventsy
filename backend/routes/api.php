<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/coucou", function(){
    return response()->json("Tout est sous contrôle Benoit, le front et le back fonctionne correctement (Ce message vient du backend)");
});