<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RequestCreateOpportunity extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            "opportunityTitle" => 'required',
            "opportunityRoute" => 'required',
            "opportunityCaption" => 'required',
            "opportunityData" => 'required',
            "opportunityCategory" => 'required',
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
            'opportunityTitle.required' => 'Please fill the opportunityTitle field !',
            'opportunityCaption.required' => 'Please fill the opportunityCaption field !',
            'opportunityRoute.required' => 'Please fill the opportunityRoute field !',
            'opportunityData.required' => 'Please fill the opportunityData field !',
            'opportunityCategory.required' => 'Please fill the opportunityCategory field !'
        ];
    }
}