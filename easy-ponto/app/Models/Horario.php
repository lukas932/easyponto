<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Horario extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'horario', 'device_uuid', 'latitude', 'longitude', 'ponto_id'
    ];

}
