<?php

namespace App\Presenters;

use App\Transformers\HorarioTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class HorarioPresenter
 *
 * @package namespace App\Presenters;
 */
class HorarioPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new HorarioTransformer();
    }
}
