<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            {{-- <carousel :autoplay="true">
                <img src="https://placeimg.com/640/480/any?1">
                <img src="https://placeimg.com/640/480/any?2">
                <img src="https://placeimg.com/640/480/any?3">
                <img src="https://placeimg.com/640/480/any?4">
                <img src="https://placeimg.com/640/480/any?5">
            </carousel> --}}

            <section>
                <div class="container">
                    <testimonials></testimonials>
                </div>
            </section>
        </div>
        
        <script src="/js/app.js"></script>
    </body>
</html>
