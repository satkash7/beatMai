<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    use HasFactory;

    // Specify the table name
    protected $table = 'password_reset_tokens';

    // Since the password_reset_tokens table typically doesn't have an auto-incrementing ID
    public $timestamps = false;
    public $incrementing = false;
    
    // Specify the primary key
    protected $primaryKey = 'email';

    // Define fillable fields
    protected $fillable = ['email', 'token', 'created_at'];
}
