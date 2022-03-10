<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <style>body { padding:40px; }</style>
</head>
<body>

    <div id="app" class="container">
        @include('projects.list')
        
        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.id)">
            <div class="control">
                <label for="name" class="label">Project Name:</label>
                <input type="text" id="name" class="input" v-model="name">
                <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
            </div>

            <div class="control">
                <label for="description" class="label">Project Description:</label>
                <input type="text" id="description" class="input" v-model="description">
                <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
            </div>

            <div class="control">
                <button class="button is-primary" :disabled="errors.any()">Create</button>
            </div>

        </form>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>