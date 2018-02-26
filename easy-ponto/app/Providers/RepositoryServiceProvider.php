<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Repositories\CargoRepository::class, \App\Repositories\CargoRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PerfilRepository::class, \App\Repositories\PerfilRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\UserRepository::class, \App\Repositories\UserRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PontoRepository::class, \App\Repositories\PontoRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\HorarioRepository::class, \App\Repositories\HorarioRepositoryEloquent::class);
        //:end-bindings:
    }
}
