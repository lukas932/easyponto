<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'nome' => $faker->name,
        'cpf' => '98765432100',
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'cargo_id' => '1',
        'perfil_id' => '1',
        'ativo' => $faker->boolean,
        'remember_token' => str_random(10),
    ];
});

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Cargo::class, function (Faker\Generator $faker) {

    return [
        'nome' => $faker->name,
        'ativo' => $faker->boolean
    ];
});

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Perfil::class, function (Faker\Generator $faker) {

    return [
        'tipo' => $faker->name,
        'descricao' => $faker->name,
        'ativo' =>$faker->boolean
    ];
});