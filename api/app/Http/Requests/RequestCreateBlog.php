<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RequestCreateBlog extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            "blogTitle" => 'required',
            "blogRoute" => 'required',
            "blogCaption" => 'required',
            "blogData" => 'required',
            "blogCategory" => 'required',
        ];
    }
    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
            'success'=>false,
            'error'=>true,
            'message'=>'Validation error',
            'errorsList' => $validator->errors(),
        ]));
    }

    public function messages(){
        return [
            'blogTitle.required' => 'Please fill the blogTitle field !',
            'blogCaption.required' => 'Please fill the blogCaption field !',
            'blogRoute.required' => 'Please fill the blogRoute field !',
            'blogData.required' => 'Please fill the blogData field !',
            'blogCategory.required' => 'Please fill the blogCategory field !'
        ];
    }
}