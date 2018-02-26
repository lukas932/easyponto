<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Cargo;

/**
 * Class CargoTransformer
 * @package namespace App\Transformers;
 */
class CargoTransformer extends TransformerAbstract
{

    /**
     * Transform the \Cargo entity
     * @param \Cargo $model
     *
     * @return array
     */
    public function transform(Cargo $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
