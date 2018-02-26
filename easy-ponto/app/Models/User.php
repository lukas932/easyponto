<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome', 'cpf', 'email', 'password', 'cargo_id', 'perfil_id', 'ativo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    public function cargo()
    {
        return $this->belongsTo(Cargo::class);
    }

    public function perfil()
    {
        return $this->belongsTo(Perfil::class);
    }
}
