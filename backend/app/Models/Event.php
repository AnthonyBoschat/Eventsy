<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'name',
        'date',
        'time',
        'street',
        'city',
        'postal_code',
    ];

    protected $casts = [
        'date' => 'date',
        'time' => 'datetime:H:i:s',
        'postal_code' => 'integer'
    ];
}
