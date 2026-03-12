<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RequestCreateComment extends FormRequest
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
            "commentOwner" => 'required',
            "commentType" => 'required',
            "commentTypeId" => 'required',
            "commentData" => 'required',
            "commentHidden" => 'required'
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
            'commentOwner.required' => 'Please fill the commentOwner field !',
            'commentType.required' => 'Please fill the commentType field !',
            'commentTypeId.required' => 'Please fill the commentTypeId field !',
            'commentData.required' => 'Please fill the commentData field !',
            'commentHidden.required' => 'Please fill the commentHidden field !'
        ];
    }
}