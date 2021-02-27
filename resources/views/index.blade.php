<!DOCTYPE html>
<html style="height: 100%">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>laravel-vue-iview项目</title>
    <link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">

</head>
<style>
    body, html {
        margin: 0;
        padding: 0;
    }
</style>
<body style="height: 100%">
<div id="app">
</div>
<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
