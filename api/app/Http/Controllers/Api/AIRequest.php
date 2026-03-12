<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use Exception;
use Illuminate\Http\Request;
use App\Http\Requests\RequestAIAddition as RequestAIAddition;
use App\Http\Requests\RequestAIvalidation;
use App\Models\Tool;
use App\Mail\NotifyNewToolAdditionRequest;
use App\Mail\NotifyNewToolAdditionValidated;
use Illuminate\Support\Facades\Mail;

class AIRequest extends Controller
{
    public function add(RequestAIAddition $request) {
        try {
            $message = new Tool();
            $message->visitorname = $request->visitorname;
            $message->visitorphone = $request->visitorphone;
            $message->visitormessage = $request->visitormessage;
            $message->visitoremail = $request->visitoremail . '(' . $request->visitorphone . ')';
            Mail::to(env('PROJECT_OWNER_MAIL_ID'))
            ->send(new NotifyNewToolAdditionRequest($request->visitorname, $request->visitormessage, $request->visitoremail));
            $message->save();
            return response()->json([
                'status_code'=>200,
                'status_message'=>'New message successfully sent!',
                'data'=>$message
            ]);
        }
        catch (Exception $e){
            return response()->json($e);
        }
    }
}
