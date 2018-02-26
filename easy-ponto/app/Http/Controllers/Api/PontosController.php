<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PontoRequest;
use App\Repositories\HorarioRepository;
use App\Repositories\PontoRepository;


class PontosController extends Controller
{

    /**
     * @var PontoRepository
     */
    protected $repository;

    /**
     * @var HorarioRepository
     */
    protected $repositoryHorario;

    public function __construct(PontoRepository $repository, HorarioRepository $repositoryHorario)
    {
        $this->repository = $repository;
        $this->repositoryHorario = $repositoryHorario;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PontoRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(PontoRequest $request)
    {
        $user = \JWTAuth::parseToken()->toUser();

        $data = [
            'dia' => date("Y-m-d", strtotime("+2 day")),
            'user_id' => $user->id
        ];

        $ponto = $this->repository->findWhere($data)->first();

        if (!$ponto) {
            $ponto = $this->repository->create($data);
        }

        $horario = $this->repositoryHorario->create([
            'ponto_id' => $ponto->id,
            'horario' => date("H:i:s"),
            'device_uuid' => $request->input('device_uuid'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude')
        ]);

        return response()->json($horario, 201);
    }


    /**
     * Display the specified resource.
     *
     * @param  int $user_id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
    {
        $pontos = $this->repository->orderBy('dia', 'desc')->findByField('user_id', $user_id);

        if (count($pontos) < 1) {
            return response()->json(['error' => 'points_not_found'], 404);
        }

        $data = [];

        foreach ($pontos as $ponto) {
            $info = [
                'dia' => $ponto->dia,
                'horarios' => $this->repositoryHorario->findByField('ponto_id', $ponto->id)
            ];
            array_push($data, $info);
        }

        return response()->json($data, 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  PontoRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(PontoRequest $request, $id)
    {
        $ponto = $this->repository->update($request->all(), $id);
        return response()->json($ponto, 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if ($deleted) {
            return response()->json([], 204);
        }

        return response()->json([
            'error' => 'Resource can not be deleted'
        ], 500);
    }
}
