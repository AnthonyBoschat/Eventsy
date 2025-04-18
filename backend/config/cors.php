<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Endpoints soumis au CORS
    |--------------------------------------------------------------------------
    */
    'paths' => [
        'api/*',         // toutes les routes /api/…
        'sanctum/csrf-cookie',
    ],

    /*
    |--------------------------------------------------------------------------
    | Méthodes HTTP autorisées
    |--------------------------------------------------------------------------
    */
    'allowed_methods' => ['*'],   // GET, POST, PUT…

    /*
    |--------------------------------------------------------------------------
    | Origines autorisées
    |--------------------------------------------------------------------------
    */
    'allowed_origins' => [
        '*',   // Vite en dev
    ],

    // Laisse les autres réglages par défaut
    'allowed_origins_patterns' => [],
    'allowed_headers'           => ['*'],
    'exposed_headers'           => [],
    'max_age'                   => 0,
    'supports_credentials'      => false,
];
