<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RequestCreateTip;
use App\Models\Reusable;
use App\Models\Tip; 
use Exception;
use Illuminate\Support\Facades\Storage;
class TipController extends Controller
{
    // Declare $tools property at the class level
    protected $reuse;

    public function __construct()
    {
        // Initialize $tools in the constructor
        $this->reuse = new Reusable() ;
    }
    public function index(Request $request)
    {
        try {
            $query = Tip::query();
            if (!$request->input('page') && !$request->input('search')){
                $route = $request->input('route');
                if ($route) {
                    // Filter by status
                    $query->where('tipRoute', $route);
                    $result = $query->get();
                    $result->transform(function ($item) {
                        $item->creator = $this->reuse->getUserInfoFromId($item->tipCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->tipCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->tipCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                    });
                    return response()->json([
                        'status_code' => 200,
                        'status_message' => 'single tip',
                        'tip' => $result
                    ]);
                }
                else{
                    $result = $query->get();
                    // use transform for each blog, return username, creator and creation_date
                    $result->transform(function ($item) {
                        $item->creator = $this->reuse->getUserInfoFromId($item->tipCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->tipCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->tipCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                    });
                    return response()->json([
                        'status_code' => 200,
                        'status_message' => 'All tips',
                        'current_page' => 1,
                        'last_page' => 1,
                        'tips' => $result
                    ]);
                }
            }
            else{
                $perPage = 100;
                $page = $request->input('page', 1);
                $status = $request->input('status');
                $route = $request->input('route');
                $search = $request->input('search');
                if ($status) {
                    // Filter by status
                    $query->where('status', $status);
                }
                if ($route) {
                    // Filter by status
                    $query->where('tipRoute', $route);
                }
                if ($search) {
                    // Perform search
                    $query->where('tipTitle', 'LIKE', '%' . $search . '%');
                }
                $total = $query->count();
                $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();
                 // Replace summarized_by id with the corresponding user names
                $result->transform(function ($item) {
                    $item->creator = $this->reuse->getUserInfoFromId($item->tipCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->tipCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->tipCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                });
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'tips',
                    'current_page' => $page,
                    'last_page' => ceil($total / $perPage),
                    'tips' => $result
                ]);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function store(RequestCreateTip $request){
        try {
            $tip = new Tip();
            $tip->tipCreator = auth()->user()->id;
            $tip->tipTitle = $request->tipTitle;
            $tip->tipRoute = $request->tipRoute;
            $tip->tipCaption = $request->tipCaption;
            $tip->tipData = $request->tipData;
            $tip->tipCategory = $request->tipCategory;
            $tip->status = 'published';

            $imageUrl = null;
            // Handle tip image upload
            if ($request->hasFile('imageUrl')) {

                $image = $request->file('imageUrl');
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public', $imageName);
                // $tip->tipImage = $imageName;
                 // Generate the public URL for the image
                $tip->tipImage = $imageName;
                $imageUrl = asset('storage/' . $imageName);
            }
            $tip->imageUrl = $imageUrl;
            $tip->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The tip was saved successfully!',
                'tip' => $tip,
                'image_url' => $imageUrl
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
   }
   public function updateTip(Request $request, $id) {
    try {
        $tip = Tip::find($id);
        // if request contains tipTitle

         //return unauthrozed if action taker is not owner of that post
        if ($tip->tipCreator != auth()->user()->id) {
            return response()->json([
                'status_code' => 401,
                'status_message' => 'Unauthorized action!'
            ]);
        }
        if($request->tipTitle && $request->tipTitle != "skip") {
            $tip->tipTitle = $request->tipTitle;
        }
        if ($request->tipCaption && $request->tipCaption != "skip") {
            $tip->tipCaption = $request->tipCaption;
        }
        if ($request->tipRoute && $request->tipRoute != "skip") {
            $tip->tipRoute = $request->tipRoute;
        }
        if ($request->tipData && $request->tipData != "skip") {
            $tip->tipData = $request->tipData;
        }
        if ($request->tipCategory && $request->tipCategory != "skip") {
            $tip->tipCategory = $request->tipCategory;
        }
        if ($request->imageUrl && $request->imageUrl != "skip") {
            $imageUrl = null;
            // Handle tip image upload
            if ($request->hasFile('imageUrl')) {

                $image = $request->file('imageUrl');
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public', $imageName);
                $tip->tipImage = $imageName;
                // Generate the public URL for the image
                $imageUrl = asset('storage/' . $imageName);
                $tip->imageUrl = $imageUrl;

                // remove old image from storage
                $oldImage = $tip->tipImage;
                if ($oldImage && Storage::exists('public/' . $oldImage)) {
                    Storage::delete('public/' . $request->oldImageUrl);
                }
            }
        }
        $tip->save();
        return response()->json([
            'status_code' => 200,
            'status_message' => 'The tip was updated successfully!',
            'tip' => $tip
        ]);
    } catch (Exception $e) {
        return response()->json($e);
    }
} 
}