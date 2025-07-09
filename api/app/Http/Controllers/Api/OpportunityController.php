<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestCreateOpportunity;
use App\Models\Opportunity;
use App\Models\Reusable;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OpportunityController extends Controller
{
    // Declare $tools property at the class level
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
            $query = Opportunity::query();
            if (!$request->input('page') && !$request->input('search')){
                $route = $request->input('route');
                if ($route) {
                    // Filter by status
                    $query->where('opportunityRoute', $route);
                    $result = $query->get();
                    $result->transform(function ($item) {
                        $item->creator = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                    });
                    return response()->json([
                        'status_code' => 200,
                        'status_message' => 'single opportunity',
                        'opportunity' => $result
                    ]);
                }
                else{
                    $result = $query->get();
                    // use transform for each opportunity, return username, creator and creation_date
                    $result->transform(function ($item) {
                        $item->creator = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                    });

                   return response()->json([
                       'status_code' => 200,
                       'status_message' => 'All opportunities',
                       'current_page' => 1,
                       'last_page' => 1,
                       'opportunities' => $result
                   ]);
                }
            }
            else{
                $perPage = 100;
                $page = $request->input('page', 1);
                $status = $request->input('status');
                $search = $request->input('search');
                if ($status) {
                    // Filter by status
                    $query->where('status', $status);
                }
                if ($search) {
                    // Perform search
                    // Split the search string into an array of individual words
                    $keywords = explode(' ', $search);
                    $query->where(function ($query) use ($keywords) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('opportunityTitle', 'LIKE', '%' . $keyword . '%');
                        }
                    });
                }
                $total = $query->count();
                $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();
                 // Replace summarized_by id with the corresponding user names
                $result->transform(function ($item) {
                    $item->creator = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'username');
                    $item->realnames = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'name');
                    $item->username = $this->reuse->getUserInfoFromId($item->opportunityCreator, 'username');
                    $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                    return $item;
                });
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Opportunities',
                    'current_page' => $page,
                    'last_page' => ceil($total / $perPage),
                    'opportunities' => $result
                ]);
            }
        } catch (Exception  $e) {
            return response()->json($e);
        }
    }

    public function store(RequestCreateOpportunity $request){
        try {
            $opportunity = new Opportunity();
            $opportunity->opportunityCreator = auth()->user()->id;
            $opportunity->opportunityTitle = $request->opportunityTitle;
            $opportunity->opportunityCaption = $request->opportunityCaption;
            $opportunity->opportunityRoute = $request->opportunityRoute;
            $opportunity->opportunityData = $request->opportunityData;
            $opportunity->opportunityCategory = $request->opportunityCategory;
            $opportunity->publicPost = $request->publicPost == 1 ? 1 : 0;
            $opportunity->status = 'published';

            $imageUrl = null;
            // Handle opportunity image upload

            if ($request->hasFile('imageUrl')) {
                $image = $request->file('imageUrl');
            
                // Extract original name and extension
                $originalName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $extension = $image->getClientOriginalExtension();
            
                // Sanitize the name
                $sanitizedName = preg_replace('/\s+/', '_', $originalName); // Replace spaces with "_"
                $sanitizedName = preg_replace('/[()]/', '-', $sanitizedName); // Replace "(" and ")" with "-"
            
                // Final formatted filename
                $imageName = time() . '_' . $sanitizedName . '.' . $extension;
            
                // Store the file
                $image->storeAs('public', $imageName);
                $opportunity->blogImage = $imageName;
            
                // Generate the public URL for the image
                $imageUrl = asset('storage/' . $imageName);
            }
            $opportunity->imageUrl = $imageUrl;
            $opportunity->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The opportunity was saved successfully!',
                'opportunity' => $opportunity,
                'image_url' => $imageUrl
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
   }

   public function updateOpportunity(Request $request, $id) {
        try {
            $opportunity = Opportunity::find($id);
            // if request contains opportunityTitle
            //return unauthrozed if action taker is not owner of that post
            if ($opportunity->opportunityCreator != auth()->user()->id) {
                return response()->json([
                    'status_code' => 401,
                    'status_message' => 'You are not authorized to perform this action!'
                ]);
            }

            if($request->opportunityTitle && $request->opportunityTitle != "skip") {
                $opportunity->opportunityTitle = $request->opportunityTitle;
            }
            if ($request->opportunityCaption && $request->opportunityCaption != "skip") {
                $opportunity->opportunityCaption = $request->opportunityCaption;
            }
            if ($request->opportunityRoute && $request->opportunityRoute != "skip") {
                $opportunity->opportunityRoute = $request->opportunityRoute;
            }
            if ($request->opportunityData && $request->opportunityData != "skip") {
                $opportunity->opportunityData = $request->opportunityData;
            }
            if ($request->opportunityCategory && $request->opportunityCategory != "skip") {
                $opportunity->opportunityCategory = $request->opportunityCategory;
            }
            if ($request->imageUrl && $request->imageUrl != "skip") {
                $imageUrl = null;
                // Handle opportunity image upload
                if ($request->hasFile('imageUrl')) {

                    $image = $request->file('imageUrl');
                    $imageName = time() . '_' . $image->getClientOriginalName();
                    $image->storeAs('public', $imageName);
                    $opportunity->opportunityImage = $imageName;
                    // Generate the public URL for the image
                    $imageUrl = asset('storage/' . $imageName);
                    $opportunity->imageUrl = $imageUrl;

                    // remove old image from storage
                    $oldImage = $opportunity->opportunityImage;
                    if ($oldImage && Storage::exists('public/' . $oldImage)) {
                        Storage::delete('public/' . $request->oldImageUrl);
                    }
                }
            }
            $opportunity->publicPost = $request->publicPost;
            $opportunity->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The opportunity was updated successfully!',
                'opportunity' => $opportunity
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function deleteBlog($id) {
        try {
            $opportunity = Opportunity::find($id);
            $opportunity->delete();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The opportunity was deleted successfully!'
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
   }
}
