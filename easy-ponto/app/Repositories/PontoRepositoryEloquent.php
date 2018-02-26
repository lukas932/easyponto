<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PontoRepository;
use App\Models\Ponto;
use App\Validators\PontoValidator;

/**
 * Class PontoRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PontoRepositoryEloquent extends BaseRepository implements PontoRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Ponto::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
