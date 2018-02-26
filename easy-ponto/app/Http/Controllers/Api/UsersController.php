<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Repositories\UserRepository;

class UsersController extends Controller
{

    /**
     * @var UserRepository
     */
    private $repository;


    /**
     * UsersController constructor.
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->with(['cargo', 'perfil'])->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $user = $this->repository->create($request->all());
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->repository->with(['cargo', 'perfil'])->find($id);
    }

    /**
     * Display the specified resource.
     *
     * @param  string $like
     *
     * @return \Illuminate\Http\Response
     */
    public function showByName($like)
    {
        return User::where('nome', 'like', "%{$like}%")->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UserRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(UserRequest $request, $id)
    {
        $cargo = $this->repository->update($request->all(),$id);
        return response()->json($cargo, 200);
    }
}
