<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Requests\StoreEventRequest;

class EventController extends Controller
{

    public function index(){
        $events = Event::all();
        return response()->json([
            "success" => true,
            "data" => EventResource::collection($events)
        ]);
    }
    public function add(StoreEventRequest $request) {

        
        $event = Event::create([
            'name' => $request->name,
            'date' => $request->date,
            'time' => $request->time,
            'street' => $request->street,
            'city' => $request->city,
            'postal_code' => $request->postalCode
        ]);
        if(!$event){
            return response()->json([
                'success' => false,
                'message' => "Une erreur est survenue lors de la création de l'évènement"
            ]);
        }

        return response()->json([
            "success" => true,
            "data" => new EventResource($event),
            "message" => "L'évènement a été créé avec succès"
        ]);
    }

    public function toggleFavorite(Request $request) {
        
        $request->validate([
            'id' => 'required|integer|min:1'
        ]);

        $eventId = $request->id;
        $event = Event::find($eventId);

        if(!$event){
            return response()->json([
                'success' => false,
                'message' => "Une erreur est survenue lors de la modification de l'évènement : cet évènement n'existe pas"
            ]);
        }
        $event->favorite = !$event->favorite;
        $event->save();

        return response()->json([
            'success' => true,
            "data" => $event->id,
        ]);

    }
}
