<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:3000', 'http://192.168.1.65:3000','https://192.168.1.65:3000', 'http://192.168.1.65:3000/', 'http://192.168.1.65:3000/', 'http://192.168.1.65:3000', 'https://beatexpertise.com', 'http://beatexpertise.com', 'https://www.beatexpertise.com', 'http://www.beatexpertise.com', 'http://testing.beatexpertise.com','http://www.testing.beatexpertise.com', 'chrome-extension://[a-z0-9]+', 'https://web.postman.co',],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
