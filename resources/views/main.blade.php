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