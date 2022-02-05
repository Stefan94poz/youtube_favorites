<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;


class GetDataController extends Controller
{
    public function index() {
      $videoLists = $this->videoList('cat');
      return $videoLists;
    }

    protected function videoList($keyword) {
        $part = 'snippet';
        $contry = 'BD';
        $apiKey = config('services.youtube.api_key_youtube');
        $endPoint = config('services.youtube.search_endpoint');
        $maxResults = 20;
        $type = 'video';
        
        $url = "$endPoint?part=$part&$maxResults&regionCode=$contry&type=$type&key=$apiKey&q=$keyword";
        $response = Http::get($url);

        return json_decode($response);
    }
}
