<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AIRequest;
use App\Http\Controllers\Api\BlogController; 
use App\Http\Controllers\Api\CommentController; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::middleware('throttle:60,1')->group(function () {
    
    // api test
    Route::get('api-test', function() {

        return [
            'status'=>'Working!',
            'message'=> 'The api.beatexpertise.com is up! Please check the documentation to start using the APIs and EndPoints '
        ];
    });
    //test database connectivity
    Route::get('/test-db', function () {
        try {
            DB::connection('mysql')->getPdo();
            return 'Database connection successful!';
        } catch (\Exception $e) {
            return 'Database connection failed: ' . $e->getMessage();
        }
    });
    Route::post('visitor/message', [AIRequest::class, 'add']);
    Route::post('user/register', [UserController::class, 'register']);
    Route::post('user/login', [UserController::class, 'login']);
    //public profile url
    // Dynamic route to fetch user details by username
    Route::get('user/{username}/profile', [UserController::class, 'getpublicProfile']);
    // get tools data and services
    Route::get('blog/getall', [BlogController::class, 'index']);
    Route::get('tool/getall', [AIRequest::class, 'index']);
    // post comment
    Route::post('comment/add', [CommentController::class, 'store']);
    Route::get('comment/getall', [CommentController::class, 'index']);
    // post question 
    // password reset steps
    Route::post('user/password/request-reset', [UserController::class, 'passwordResetRequest']);
    Route::post('user/password/verify-token', [UserController::class, 'verifyUserToken']);
    Route::post('user/password/reset', [UserController::class, 'resetUserPassword']);
 
    // get sitemaps
    Route::get('sitemap-urls', [UserController::class, 'getSitemapUrls']);
});

Route::middleware(['auth:sanctum', 'throttle:30,1'])->group(function() {
    
    //get user if authenticated, current connected user
    Route::get("/user/me", function (Request $request){
        return $request->user();
    });
    
    Route::post('tools/validate', [AIRequest::class, 'validation']);
    Route::get('user/mydetails', [UserController::class, 'getUser']);
    Route::post('blog/store', [BlogController::class, 'store']);
 
    // dynamic route to update user profile
    Route::post('user/{username}/profile/update', [UserController::class, 'UpdateUserProfile']);
    // uploads
    Route::post('user/{username}/uploads', [UserController::class, 'UserUploads']);
    // user blogs, tips, docs and trends deletion
    Route::delete('{category}/delete/{id}', [UserController::class, 'deleteUserPost']);
    Route::post('blog/edit/{id}', [BlogController::class, 'updateBlog']);
});
