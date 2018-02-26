<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Cargo extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'nome',
        'ativo'
    ];

}
