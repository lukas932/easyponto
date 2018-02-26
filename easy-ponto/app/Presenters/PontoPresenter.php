<?php

namespace App\Presenters;

use App\Transformers\PontoTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PontoPresenter
 *
 * @package namespace App\Presenters;
 */
class PontoPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PontoTransformer();
    }
}
