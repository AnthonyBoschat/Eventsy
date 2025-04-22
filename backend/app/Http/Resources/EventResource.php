<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'date'          => $this->date,
            'time'          => $this->time,
            'favorite'      => $this->favorite,
            'participants'  => $this->participants,
            'participation' => $this->participation,
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at,
            'place' => [
                'street'      => $this->street,
                'postal_code' => $this->postal_code,
                'city'        => $this->city,
            ],
        ];
    }
}
