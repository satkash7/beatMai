<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests\RequestCreateComment;
use App\Models\Comment;
use App\Models\Reusable;
use Exception;

class CommentController extends Controller
{
     // Declare $tools property at the class level
     protected $reuse;

     public function __construct()
     {
         // Initialize $tools in the constructor
         $this->reuse = new Reusable();
     }
    public function index(Request $request)
    {
        try {
            $query = Comment::query();
            if (!$request->input('page') && !$request->input('search')){
                $type = $request->input('type');
                $id = $request->input('id');
                $query->where('commentType', $type);
                $query->where('commentTypeId', $id);
                $query->orderBy('created_at', 'desc');
                $result = $query->get();
                $result->transform(function ($item) {
                    $userId = $item->commentOwner;
                    $username = $this->reuse->getUserInfoFromId($item->commentOwner, 'name');
                    if (strpos($username, '@') !== false) {
                        // If yes, extract the part before the "@" symbol
                        $username = strstr($username, '@', true);
                    }
                    $item->commentOwner = $username;
                    $item->ownerUrl = $username == "anonymous" ? null : $this->reuse->getUserInfoFromId($userId, 'photoUrl');;
                   // Convert the 'created_at' field to a usable date format directly here
                    $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                    return $item;
                });
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'All comments',
                    'comments' => $result
                ]); 
            }
            else{
                $search = $request->input('search');
                if ($search) {
                    // Perform search
                    $query->where('commentData', 'LIKE', '%' . $search . '%');
                }
                $result = $query->get();
                // Replace summarized_by id with the corresponding user names
                // $result->transform(function ($item) {
                //     $item->blogCreator = $item->blogCreator ? "Admin" : 'None';
                //     return $item;
                // });
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'All comments',
                    'comments' => $result
                ]);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function store(RequestCreateComment $request){
        try {
            $comment = new Comment();
             // in frontend, this $request->commentOwner is a username, in db it's user id
           
            $comment->commentOwner = $this->reuse->getUserInfoFromUsername($request->commentOwner, 'id');
            // $this->reuse->getUserInfoFromId(auth()->user()->id, );
            $comment->commentType = $request->commentType;
            $comment->commentTypeId = $request->commentTypeId;
            $comment->commentData = $request->commentData;
            $comment->commentHidden = '0';

            $comment->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The comment was saved successfully!',
                'comment' => $comment,
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
   }
}
