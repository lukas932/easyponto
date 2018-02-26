<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\User::class,1)->create([
            'nome' => 'administrador',
            'cpf' => '98765432100',
            'email' => 'admin@entelgy.com',
            'password' => bcrypt('admin'),
            'cargo_id' => '1',
            'perfil_id' => '1',
            'ativo' => true
        ]);

        factory(\App\Models\User::class,1)->create([
            'nome' => 'Lucas Martins',
            'cpf' => '44235708821',
            'email' => 'lucas.silva@entelgy.com',
            'password' => bcrypt('123456a'),
            'cargo_id' => '1',
            'perfil_id' => '3',
            'ativo' => true
        ]);
    }
}
