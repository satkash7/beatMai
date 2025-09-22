<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RequestCreateBlog;
use App\Models\Blog;
use App\Models\Reusable;
use Exception;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
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
            $query = Blog::query();
            if (!$request->input('page') && !$request->input('search')){
                $route = $request->input('route');
                if ($route) {
                    // Filter by status
                    $query->where('blogRoute', $route);
                    $result = $query->get();
                    $result->transform(function ($item) {
                        $item->creator = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->blogCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                    });
                    return response()->json([
                        'status_code' => 200,
                        'status_message' => 'single blog',
                        'blog' => $result
                    ]);
                }
                else{
                    $result = $query->get();
                    // use transform for each blog, return username, creator and creation_date
                    $result->transform(function ($item) {
                        $item->creator = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                        $item->realnames = $this->reuse->getUserInfoFromId($item->blogCreator, 'name');
                        $item->username = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                        $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                        return $item;
                    });

                   return response()->json([
                       'status_code' => 200,
                       'status_message' => 'All blogs',
                       'current_page' => 1,
                       'last_page' => 1,
                       'blogs' => $result
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
                            $query->orWhere('blogTitle', 'LIKE', '%' . $keyword . '%');
                        }
                    });
                }
                $total = $query->count();
                $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();
                 // Replace summarized_by id with the corresponding user names
                $result->transform(function ($item) {
                    $item->creator = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                    $item->realnames = $this->reuse->getUserInfoFromId($item->blogCreator, 'name');
                    $item->username = $this->reuse->getUserInfoFromId($item->blogCreator, 'username');
                    $item->creation_date = $this->reuse->getUsableDate($item->created_at);
                    return $item;
                });
                return response()->json([
                    'status_code' => 200,
                    'status_message' => 'Blogs',
                    'current_page' => $page,
                    'last_page' => ceil($total / $perPage),
                    'blogs' => $result
                ]);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function store(RequestCreateBlog $request){
        try {
            $blog = new Blog();
            $blog->blogCreator = auth()->user()->id;
            $blog->blogTitle = $request->blogTitle;
            $blog->blogCaption = $request->blogCaption;
            $blog->blogRoute = $request->blogRoute;
            $blog->blogData = $request->blogData;
            $blog->blogCategory = $request->blogCategory;
            $blog->publicPost = $request->publicPost == 1 ? 1 : 0;
            $blog->status = 'published';

            $imageUrl = null;
            // Handle blog image upload
            // Handle blog image upload
            if ($request->hasFile('imageUrl')) {
                try { 
                    // Validate the image or pdf
                    $request->validate([
                        'imageUrl' => 'required',
                    ]);

                    $image = $request->file('imageUrl');

                    // Extract original name and extension
                    $originalName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                    $extension = $image->getClientOriginalExtension();

                    // Sanitize the name
                    $sanitizedName = preg_replace('/\s+/', '_', $originalName);
                    $sanitizedName = preg_replace('/[()]/', '-', $sanitizedName);

                    // Final formatted filename
                    $imageName = time() . '_' . $sanitizedName . '.' . $extension;

                    // Store the file in storage/app/public/blogs/ if saving in temp fails, fix
                    $image->storeAs('public/blogs', $imageName);

                    // Save relative path in DB (storage/blogs/filename)
                    $blog->blogImage = $imageName;

                    // Generate public URL for API response
                    $imageUrl = asset('storage/blogs/' . $imageName);

                } catch (Exception $e) {
                    return response()->json([
                        'status_code' => 422,
                        'status_message' => 'Invalid image file: ' . $e->getMessage()
                    ]);
                }
            }

            $blog->imageUrl = $imageUrl;
            $blog->save();

            return response()->json([
                'status_code' => 200,
                'status_message' => 'The blog was saved successfully!',
                'blog' => $blog,
                'image_url' => $imageUrl
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status_code' => 501,
                'status_message' => 'Invalid image file: ' . $e->getMessage()
            ]);
        }
   }

   public function updateBlog(Request $request, $id) {
        try {
            $blog = Blog::find($id);
            // if request contains blogTitle
            //return unauthrozed if action taker is not owner of that post
            if ($blog->blogCreator != auth()->user()->id) {
                return response()->json([
                    'status_code' => 401,
                    'status_message' => 'You are not authorized to perform this action!'
                ]);
            }

            if($request->blogTitle && $request->blogTitle != "skip") {
                $blog->blogTitle = $request->blogTitle;
            }
            if ($request->blogCaption && $request->blogCaption != "skip") {
                $blog->blogCaption = $request->blogCaption;
            }
            if ($request->blogRoute && $request->blogRoute != "skip") {
                $blog->blogRoute = $request->blogRoute;
            }
            if ($request->blogData && $request->blogData != "skip") {
                $blog->blogData = $request->blogData;
            }
            if ($request->blogCategory && $request->blogCategory != "skip") {
                $blog->blogCategory = $request->blogCategory;
            }
            // Handle image upload if provided
            if ($request->hasFile('imageUrl')) {
                // Delete old image if exists
                if ($blog->blogImage && Storage::exists('public/blogs/' . $blog->blogImage)) {
                    Storage::delete('public/blogs/' . $blog->blogImage);
                }
            
                $image = $request->file('imageUrl');
                $imageName = time() . '_' . $image->getClientOriginalName();
                
                // Save in the same blogs folder
                $image->storeAs('public/blogs', $imageName);
            
                $blog->blogImage = $imageName;
                $blog->imageUrl = asset('storage/blogs/' . $imageName);
            }
            
            $blog->publicPost = $request->publicPost;
            $blog->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The blog was updated successfully!',
                'blog' => $blog
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function deleteBlog($id) {
        try {
            $blog = Blog::find($id);
            $blog->delete();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'The blog was deleted successfully!'
            ]);
        } catch (Exception $e) {
            return response()->json($e);
        }
   }
}