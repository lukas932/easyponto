<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'cors'], function() {

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:api');

    Route::post('login', 'Api\AuthController@login');

    Route::post('refresh', 'Api\AuthController@refreshToken');

    Route::group(['middleware' => 'jwt.auth'], function() {
        Route::get('users/teste/{like}', 'Api\UsersController@showByName');
        Route::resource('users', 'Api\UsersController', ['except' => ['create', 'edit']]);
        Route::resource('pontos', 'Api\PontosController', ['except' => ['create', 'edit']]);
        Route::resource('cargos', 'Api\CargosController', ['except' => ['create', 'edit']]);
        Route::resource('perfis', 'Api\PerfisController', ['except' => ['create', 'edit']]);
        Route::get('logout', 'Api\AuthController@logout');
        Route::get('user', 'Api\AuthController@me');
    });


});

