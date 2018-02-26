<?php

namespace App\Presenters;

use App\Transformers\CargoTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class CargoPresenter
 *
 * @package namespace App\Presenters;
 */
class CargoPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new CargoTransformer();
    }
}
