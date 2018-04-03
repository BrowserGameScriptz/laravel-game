<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RouteController extends Controller
{
    public function pingpong()
    {
        return view ('pingpong');
    }
}
