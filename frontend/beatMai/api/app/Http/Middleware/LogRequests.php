<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get the response after handling the request
        $response = $next($request);

        // Log request data and response status/content
        Log::info('Request Logged : ', [
            'url' => $request->fullUrl(),
            'method' => $request->method(),
            'request_data' => $request->all(),
            'response data' => $response->getStatusCode() !== 200 ? $response->getContent() : 'Success',
        ]);

        return $response;
    }
}
