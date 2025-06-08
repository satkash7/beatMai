<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/web-sitemap-urls', [UserController::class, 'getSitemapUrls']);

//create production symlink storage folder
// php artisan storage:link
Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
    return 'Storage folder symlink created!';
});