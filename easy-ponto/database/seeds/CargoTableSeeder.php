<?php

use Illuminate\Database\Seeder;

class CargoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Cargo::class,1)->create([
            'nome' => 'Analista de Sistemas',
            'ativo' => true
        ]);
    }
}
