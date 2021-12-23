<!DOCTYPE html>
<html lang="en">
<head>
    <title>Laravel Vue</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 15%;
        }
    </style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>
    
    <div id="app">
        <h1>@{{ title }}</h1>
        <router-view></router-view>
        <header-component></header-component>
        <footer-component></footer-component>
    </div>
    
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>