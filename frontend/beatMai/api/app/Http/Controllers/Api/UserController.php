<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\LogUserRequest;
use App\Http\Requests\profileUpdateRequest;
use App\Http\Requests\RegisterUser as RegisterUserRequest;
use App\Models\User;
use App\Mail\NotifyNewUserAdded;
use App\Mail\NotifyNewUserSelfCreated;
use App\Mail\PasswordResetRequest;
use App\Models\Blog;
use App\Models\Doc;
use App\Models\Reusable;
use App\Models\Tip;
use App\Models\Token;
use App\Models\Training;
use App\Models\Trend;
use App\Models\Upload;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
// use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    protected $reuse;

    public function __construct()
    {
        // Initialize $tools in the constructor
        $this->reuse = new Reusable();
       


    }
    // // Declare $tools property at the class level
    // protected $tools;

    // public function __construct()
    // {
    //     // Initialize $tools in the constructor
    //     $this->tools = new Tools();
    // }
    // //GET ALL USERS
    // public function index(Request $request){
    //     try {
    //         $query = User::query();
    //         $perPage = 100;
    //         $page = $request->input('page', 1);
    //         $search = $request->input('search');
    //         // if ($category == "endusers"){
    //         //     $query->where('accesshash', 'time_enduser');
    //         // }
    //         // else if ($category == "unallowed") {
    //         //     $query->where(function ($query) {
    //         //         $query->where('accesshash', 'time_blocked')
    //         //             ->orWhere('accesshash', 'time_deleted');
    //         //     });
    //         // }
    //         // else if ($category == "timeusers") {
    //         //     $query->where(function ($query) {
    //         //         $query->where('accesshash', 'time_editor')
    //         //             ->orWhere('accesshash', 'time_editorinchief')
    //         //             ->orWhere('accesshash', 'time_contentcurator')
    //         //             ->orWhere('accesshash', 'time_generalmanager');
    //         //     });
    //         // }

    //         if ($search){
    //             // Make search and respect pagination like http://127.0.0.1:8000/api/users/{category}?search=john?page=1
    //             $query->whereRaw("name LIKE '%". $search . "%'");
    //         }
    //         $total = $query->count();
    //         $result = $query->offset(($page -1) * $perPage)->limit($perPage)->get();

    //         return response()->json([
    //             'status_code'=>200,
    //             'status_message'=> 'All users',
    //             'current_page'=>(int)$page,
    //             'last_page'=>ceil($total / $perPage),
    //             'items'=>$result
    //         ]);
    //     }
    //     catch (Exception $e){
    //         return response()->json($e);
    //     }
    // }

    // REGISTER A NEW USER OR CREATE STUDENT ACCOUNT


    public function register(RegisterUserRequest $request) {
    try {
        // first block all requests where referer is not everlytools.com
        $referer = $request->header('referer');
         

            // Check if the user with the provided email exists
            $existingUserEmail = User::where('email', $request->email)->first();
            $existingUsername = User::where('username', $request->username)->first();
            $selfCreating = false;


            if ($existingUserEmail) {
                // If the user exists, return 409 Conflict
                return response()->json([
                    'status_code' => 409,
                    'status_message' => 'Email : ' . $request->email. ' already exists! Go to the forgot password page to reset your password',
                ]);
            }
            else if ($existingUsername) {
                // If the user exists, return 409 Conflict
                return response()->json([
                    'status_code' => 409,
                    'status_message' => 'Username : ' . $request->username . ' already exists! Use different names or Go to the forgot password page to reset your password',
                ]); 
            } 
            else {
                // If the user doesn't exist, create a new record
                $user = new User();
                $user->email = $request->email;
                $user->username = $request->username ? $request->username : $request->email;
                $user->name = $request->name ? $request->name : $request->email;
                $selfCreating = false;

                if ($request->accesshash) {
                    $user->accesshash = 'everlytools_user';
                }

                if ($request->password && $request->accesshash != 'beat_newsletter') {
                    $user->password = Hash::make($request->password, [
                        'rounds' => 12,
                    ]);
                    $selfCreating = true;
                }

                $user->save();
                if ($selfCreating) {
                    try {
                        Mail::to($request->email)->send(new NotifyNewUserSelfCreated($request->email));
                        Mail::to(env('PROJECT_OWNER_MAIL_ID'))->send(new NotifyNewUserAdded($request->email));
                    } catch (\Exception $e) {
                        echo 'Message could not be sent. Mailer Error: ';
                    }
                } else { 
                    Mail::to(env('PROJECT_OWNER_MAIL_ID'))->send(new NotifyNewUserAdded($request->email));
                }
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'User successfully added!',
                    'data' => $user
                ]);
            }
    } catch (Exception $e) {
        return response()->json($e);
    }
}

    public function login(LogUserRequest $request){
        $loginField = $request->input('login');
        $credentials = [
            filter_var($loginField, FILTER_VALIDATE_EMAIL) ? 'email' : 'username' => $loginField,
            'password' => $request->input('password'),
        ];
    
        if (auth()->attempt($credentials)) {
            $user = auth()->user();
            // $user_accesshash = $user['accesshash'];

            $token = $user->createToken('SECRET_77_TIME_PKX011231X')
            ->plainTextToken;
            return response()->json([
                'status_code'=>200,
                'status_message'=>'user connected',
                'user'=>$user,
                'token'=>$token
            ]);
         }
         else{
            //wrong login information
            return response()->json([
                'status_code'=>403,
                'status_message'=>'invalid login info',
            ]);
         }
    }
    public function getUser(){

        if (auth()->user()){
           $user = auth()->user();
            //    $user_accesshash = $user['accesshash'];
            //    $username = $user['username'];
           $userId = $user['id'];

           $queryBlogs = Blog::query();

            $queryBlogs->where('blogCreator', $userId);
            $queryBlogs->where('publicPost', '0'); 
            $blogs = $queryBlogs->get();
            $blogs->transform(function ($item) {
                $item->username = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                return $item;
            });

            // for opportunities, get only where publicPost=1
            $queryOpportunities = Blog::query();
            $queryOpportunities->where('blogCreator', $userId);
            $queryOpportunities->where('publicPost', '1'); // this is opportunity
            $opportunities = $queryOpportunities->get();
            $opportunities->transform(function ($item) {
                $item->username = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                return $item;
            });

            return response()->json([
                'status_code'=>200,
                'status_message'=>'user details',
                'user' => $user,
                'blogs' => $blogs,
                'opportunities' => $opportunities
            ]);
        }
        else{
           //wrong login information
           return response()->json([
               'status_code' => 403,
               'status_message' =>'invalid detailscrequest info',
           ]);
        }
   }

   // get public profile
   public function getpublicProfile($username){

       $userId = $this->reuse->getUserInfoFromUsername($username, 'id');
        $user = User::find($userId);

       // send user blogs, tips, docs, trends
       $queryBlogs = Blog::query();
       $queryTips = Tip::query();
       $queryDocs = Doc::query();
       $queryTrends = Trend::query();
       $queryTrainings = Training::query(); 

        $queryBlogs->where('blogCreator', $userId);
        $blogs = $queryBlogs->get();

        $queryTips->where('tipCreator', $userId);
        $tips = $queryTips->get();

        $queryDocs->where('docCreator', $userId);
        $docs = $queryDocs->get();
        
        $queryTrends->where('trendCreator', $userId);
        $trends = $queryTrends->get();

        $queryTrainings->where('creator', $userId);
        $trainings = $queryTrainings->get();

        return response()->json([
            'status_code'=>200,
            'status_message'=>'public user details and data',
            'user' => $user,
            'tips' => $tips,
            'docs' => $docs,
            'trends' => $trends,
            'blogs' => $blogs,
            'trainings' => $trainings
        ]);
        }

        public function UpdateUserProfile(profileUpdateRequest $request){
            $user = auth()->user();

            if (!$user) {
                return response()->json([
                    'status_code' => 401,
                    'status_message' =>'Unauthorized!',
                ]);
            }
            // Manually validate required fields 
                // Validate required fields
            // if (empty($request->name) || empty($request->email) || empty($request->password)) {
            //     return response()->json([
            //         'status_code' => 400,
            //         'status_message' => 'Name, Email, and Password can not be empty!',
            //     ]);
            // }

            $user->name = $request->name;
            if ($request->password) {
                $user->password = Hash::make($request->password, [
                    'rounds' => 12,
                ]);
            }
            $user->email = $request->email;
            $user->title = $request->title;
            $user->website = $request->website;
            $user->linkedin = $request->linkedin;
            $user->twitter = $request->twitter;
            $user->github = $request->github;
            $user->bio = $request->bio;
            $user->interest = $request->interest;

            $photoUrl = null;
            if ($request->hasFile('photo')) {

                $photo = $request->file('photo');
                $photoName = time() . '_' . $photo->getClientOriginalName();
                $photo->storeAs('public', $photoName);
                $user->photoUrl = asset('storage/' . $photoName);
            }
            // update user where ID = $userId
            $user->save();
            return response()->json([
                'status_code'=>200,
                'status_message'=>'public user details updated successfully!',
                'user' => $user,
            ]);
        }

             public function UserUploads(Request $request, $username) {
                 $user = auth()->user();
             
                 // Check if the authenticated user is the owner
                 if ($username !== $user->username) {
                     return response()->json([
                         'status_code' => 403,
                         'status_message' => 'Unauthorized!',
                     ]);
                 }
             
                 if (!$request->hasFile('photo')) {
                     return response()->json([
                         'status_code' => 400,
                         'status_message' => 'Image not uploaded',
                     ]);
                 }
             
                 $photo = $request->file('photo');
                 $photoName = time() . '_' . $photo->getClientOriginalName();
                 $photo->storeAs('public', $photoName); 
             
                 $photoUploadUrl = asset('storage/' . $photoName);
             
                 // Save to database
                 $uploading = new Upload();
                 $uploading->uploader = $user->id;
                 $uploading->uploads = $photoUploadUrl;
                 $uploading->save();
             
                 return response()->json([
                     'status_code' => 200,
                     'status_message' => 'Image uploaded successfully',
                     'url' => $photoUploadUrl,
                 ]);
             }
             
             // Delete user blogs, tips, docs, and trends
                public function deleteUserPost($category, $id) {
                    $user = auth()->user();
                    
                    // reject if user is not the poster
                    $userId = $user->id;
                    $userIsPostOwner = $this->reuse->checkUserPostOwnership($userId, $category, $id);
                    if (!$userIsPostOwner) {
                        return response()->json([
                            'status_code' => 403,
                            'status_message' => 'Unauthorized!',
                        ]);
                    }

                    
                    // Check if the authenticated user is the owner
                    if ($category === 'blog') {
                        $post = Blog::find($id);
                        if (!$post) {
                            return response()->json([
                                'status_code' => 404,
                                'status_message' => 'Post not found',
                            ]);
                        }
                        $post->delete();
                    } else if ($category === 'tip') {
                        $post = Tip::find($id);
                        if (!$post) {
                            return response()->json([
                                'status_code' => 404,
                                'status_message' => 'Post not found',
                            ]);
                        }
                        $post->delete();
                    } else if ($category === 'doc') {
                        $post = Doc::find($id);
                        if (!$post) {
                            return response()->json([
                                'status_code' => 404,
                                'status_message' => 'Post not found',
                            ]);
                        }
                        $post->delete();
                    } else if ($category === 'trend') {
                        $post = Trend::find($id);
                        if (!$post) {
                            return response()->json([
                                'status_code' => 404,
                                'status_message' => 'Post not found',
                            ]);
                        }
                        $post->delete();
                    } else if ($category === 'training') {
                        $post = Training::find($id);
                        if (!$post) {
                            return response()->json([
                                'status_code' => 404,
                                'status_message' => 'Training not found',
                            ]);
                        }
                        $post->delete();
                    } else {
                        return response()->json([
                            'status_code' => 400,
                            'status_message' => 'Invalid category',
                        ]);
                    }

                    return response()->json([
                        'status_code' => 200,
                        'status_message' => 'Post deleted successfully',
                    ]);
                }
            
                public function passwordResetRequest(Request $request) {
                    $email = $request->email;
                    $user = User::where('email', $email)->first();

                    if (!$user) {
                        return response()->json([
                            'status_code' => 404,
                            'status_message' => 'User not found',
                        ]);
                    }
                    $name = $user->name;
                    $token = $this->reuse->generateRandomString(6);
                
                    // avoid duplicate entry, check if email exist already and delete the entry
                    $existingToken = Token::where('email', $email)->first();
                    if ($existingToken) {
                        $existingToken->delete();
                    }
                    
                    $reset = new Token();
                    $reset->email = $email;
                    $reset->token = $token;
                    $reset->created_at = now();
                    $reset->save();
                    try {
                        Mail::to($email)->send(new PasswordResetRequest($email, $token, $name));
                    } catch (\Exception $e) {
                        return response()->json([
                            'status_code' => 401,
                            'status_message' => 'Message could not be sent to ' . $email . 'error : ' . $e,
                        ]);
                    }

                    return response()->json([
                        'status_code' => 200,
                        'status_message' => 'request received, mail sent with code',
                    ]);
                }

            public function verifyUserToken(Request $request) {
                $email = $request->email;
                $token = $request->token;
                
                // user = token where email is equal to request email and token is equal to request token
                $user = Token::where('email', $email)->where('token', $token)->first();
                //check if the time difference between the saved date and now is greater than 1h, then return error
                $nowDateTime = now();
                $oldDateTime = Carbon::parse($user->created_at); // Convert string to Carbon instance
                $timeDifferenceInMinutes = $oldDateTime->diffInMinutes($nowDateTime);

                if ($timeDifferenceInMinutes > 60) {
                    return response()->json([
                        'status_code' => 401,
                        'status_message' => 'Token expired, Please try again later!',
                    ]);
                }

                if (!$user) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Invalid Token provided, Please try again later!',
                    ]);
                }
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Token verified',
                ]);
            }

            public function resetUserPassword(Request $request) {
                $email = $request->email;
                $token = $request->token;
                $password = $request->password;
                $userToken = Token::where('email', $email)->where('token', $token)->first();
                if (!$userToken) {
                    return response()->json([
                        'status_code' => 404,
                        'status_message' => 'Invalid Action, Please try again later!',
                    ]);
                }
                $user = User::where('email', $email)->first();
                $user->password = Hash::make($password, [
                    'rounds' => 12,
                ]);
                $user->save();
                // remove token and email record from Tokens table
                $userToken->delete();

                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Password reset successful!',
                ]);
            }

            public function getSitemapUrls() {
                $static = [
                    'https://beatexpertise.com/',
                ];
            //dynamic, get blogs urls, tips urls, trends urls, docs urls, trainings urls
            $blogs = Blog::all();
            // get blogRoute, and get blogCreator then convert blogCreator with getUserInfoFromId($item->blogCreator, 'username') then give /username/blogRoute
            $blogUrls = $blogs->map(function ($blog) {
                return 'https://beatexpertise.com/' . $this->reuse->getUserInfoFromId($blog->blogCreator, 'username') . '/' . $blog->blogRoute;
            })->toArray();
            // get tips urls, get tipRoute, and tipCreator, convert tipCreator with getUserInfoFromId($item->tipCreator, 'username') then give /username/tipRoute
            $tips = Tip::all();
            $tipUrls = $tips->map(function ($tip) {
                return 'https://beatexpertise.com/' . $this->reuse->getUserInfoFromId($tip->tipCreator, 'username') . '/' . $tip->tipRoute;
            })->toArray();
            // get trends urls, get trendRoute, and trendCreator, convert trendCreator with getUserInfoFromId($item->trendCreator, 'username') then give /username/trendRoute
            $trends = Trend::all();
            $trendUrls = $trends->map(function ($trend) {
                return 'https://beatexpertise.com/' . $this->reuse->getUserInfoFromId($trend->trendCreator, 'username') . '/' . $trend->trendRoute;
            })->toArray();
            // get docs urls, get docRoute, and docCreator, convert docCreator with getUserInfoFromId($item->docCreator, 'username') then give /username/docRoute
            $docs = Doc::all();
            $docUrls = $docs->map(function ($doc) {
                return 'https://beatexpertise.com/' . $this->reuse->getUserInfoFromId($doc->docCreator, 'username') . '/' . $doc->docRoute;
            })->toArray();

            // get trainings routes from column trainingRoute, get all of them in an array
            $trainings = Training::all();
            $trainingUrls = $trainings->map(function ($training) {
                return 'https://beatexpertise.com/training/' . $training->trainingRoute;
            })->toArray();
            // get user profiles too, get from user table, the value username
            $users = User::all();
            $userUrls = $users->map(function ($user) {
                return 'https://beatexpertise.com/profile/' . $user->username;
            })->toArray();
            // merge all urls
            $allUrls = array_merge($static, $blogUrls, $tipUrls, $trendUrls, $docUrls, $trainingUrls, $userUrls);
            // return a complete content that should be valid to be a sitemap file, so return a complete sitemap file content
            $sitemapdata = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
            $sitemapdata .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">' . "\n";
            foreach ($allUrls as $url) {
                $sitemapdata .= '<url>' . "\n";
                $sitemapdata .= '<loc>' . $url . '</loc>' . "\n";
                $sitemapdata .= '</url>' . "\n";
            }
            $sitemapdata .= '</urlset>' . "\n";

            return response()->json([
                'status_code' => 200,
                'status_message' => 'Sitemap generated successfully',
                'urls' => $sitemapdata,
            ]);
        }
    }
     