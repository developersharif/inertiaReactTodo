<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Todo extends Model
{
    use HasFactory;
    protected $fillable = ["user_id","title", "description", "status", "order"];
    public function user(){
        return $this->belongsTo(User::class);
    }
}