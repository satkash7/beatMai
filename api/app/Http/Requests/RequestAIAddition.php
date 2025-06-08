<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RequestAIAddition extends FormRequest
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
                'visitoremail'=>'required',
            ];
        }
        public function failedValidation(Validator $validator){
            throw new HttpResponseException(response()->json([
                'success'=>false,
                'status_code'=>422,
                'error'=>true,
                'message'=>'Error while saving the form.',
                'errorsList' => $validator->errors(),
            ]));
        }
    
        public function messages(){
            return [
                'visitoremail' => 'You must provide the email!',
            ];
        }
    }
    