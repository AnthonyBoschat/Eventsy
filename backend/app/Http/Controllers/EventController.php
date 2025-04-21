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

    public function toggleFavorite(Request $request) {
       
        $request->validate([
            'id' => 'required|integer|min:1|exists:events,id'
        ]);

        $eventId = $request->id;
        $event = Event::find($eventId);
        $event->favorite = !$event->favorite;
        $event->save();

        return response()->json([
            'success' => true
        ]);

    }
}
