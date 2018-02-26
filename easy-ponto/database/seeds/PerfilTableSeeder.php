<?php

use Illuminate\Database\Seeder;

class PerfilTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Perfil::class,1)->create([
            'tipo' => 'administrador',
            'descricao' => 'Administrador',
            'ativo' => true
        ]);

        factory(\App\Models\Perfil::class,1)->create([
            'tipo' => 'gestor',
            'descricao' => 'Gestor',
            'ativo' => true
        ]);

        factory(\App\Models\Perfil::class,1)->create([
            'tipo' => 'colaborador',
            'descricao' => 'Colaborador',
            'ativo' => true
        ]);
    }
}
