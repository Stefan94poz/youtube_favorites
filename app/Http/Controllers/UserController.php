<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
   public function login () {
        if (Auth::attempt(['name' => request('name'), 'password' => request('password')],)) {
            /** @var \App\Models\User $user **/
            $user = Auth::user();
            $success['token'] = $user->createToken('youtube_favorite')->accessToken;

            return view('welcome');
        }

        return response()->json(['error'=>'Unauthorisez'], 401);
    }
}
