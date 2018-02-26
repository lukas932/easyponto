<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\HorarioRepository;
use App\Models\Horario;
use App\Validators\HorarioValidator;

/**
 * Class HorarioRepositoryEloquent
 * @package namespace App\Repositories;
 */
class HorarioRepositoryEloquent extends BaseRepository implements HorarioRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Horario::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
