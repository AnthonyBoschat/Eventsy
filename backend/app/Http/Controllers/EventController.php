<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Requests\StoreEventRequest;

class EventController extends Controller
{
    public function add(StoreEventRequest $request) {

        $event = Event::create([
            'name' => $request->name,
            'date' => $request->date,
            'time' => $request->time,
            'street' => $request->street,
            'city' => $request->city,
            'postal_code' => $request->postalCode
        ]);

        return $event;
    }
}
