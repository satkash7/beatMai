<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RequestAIvalidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
     
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
                'name'=>'required',
                'link'=>'required',
                'descriptions'=>'required',
                'imageUrl'=>'required',
                'category'=>'required',
            ];
        }
        public function failedValidation(Validator $validator){
            throw new HttpResponseException(response()->json([
                'success'=>false,
                'status_code'=>422,
                'error'=>true,
                'message'=>'Error while validating new AI tool.',
                'errorsList' => $validator->errors(),
            ]));
        }
    
        public function messages(){
            return [
                'link.required' => 'You must provide  a link!',
                'name.required' => 'You must provide a name!',
                'descriptions.required' => 'You must provide a decription!',
                'imageUrl.required' => 'You must provide an imageUrl!',
                'category.required' => 'You must provide an category!',
            ];
        }
    }
    