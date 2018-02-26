<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Ponto;

/**
 * Class PontoTransformer
 * @package namespace App\Transformers;
 */
class PontoTransformer extends TransformerAbstract
{

    /**
     * Transform the \Ponto entity
     * @param \Ponto $model
     *
     * @return array
     */
    public function transform(Ponto $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
