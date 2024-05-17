<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request){
        try{
            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                $token = Auth::user()->createToken('authToken')->plainTextToken;
                $user = Auth::user();
                return response()->json(['message' => 'Login successful','token'=>$token,'user'=>$user], 200);
            }
            return response()->json(['message' => 'Invalid credentials'], 401);
        } catch (Exception $e) {
            return response()->json(['message' => 'Login failed  ', $e], 500);
        }
    
    }

    public function register(Request $request){
        try{

            $request->validate([
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if(User::where('email', $request->email)->exists()){
                return response()->json(['message' => 'User already exists'], 409);
            }

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
            } else {
                $imageName = '';
            }


            $user = new User();
            $image = $imageName ;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();

            return response()->json(['message' => 'User created'], 201);
        } catch (Exception $e) {
            return response()->json(['message' => 'User creation failed', $e], 500);
        }
    }

    public function logout(Request $request){
        try{
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return response()->json(['message' => 'Logout successful'], 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Logout failed', $e], 500);
        }
    }
}
