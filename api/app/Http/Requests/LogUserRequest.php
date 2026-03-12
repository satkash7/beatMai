<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class LogUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'login' => 'required|string',
            'password' => 'required|string',
        ];
    }
    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
            'success'=>false,
            'status_code'=>422,
            'error'=>true,
            'message'=>'Login error',
            'errorsList' => $validator->errors(),
        ]));
    }
    public function messages(){
        return [
            'email.required' => 'Please fill the email address or email',
            'email.exists' => 'This email or email doesn\'t exist!',
            'password.required' => 'Please fill a password for your acccount',
        ];
    }
}
