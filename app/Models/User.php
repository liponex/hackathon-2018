<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 't_user';

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}