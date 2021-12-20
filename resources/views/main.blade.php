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
        <header-component></header-component>
            <example-component></example-component>
        <footer-component></footer-component>
    </div>
    
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>