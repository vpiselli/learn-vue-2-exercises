<h1 class="title">My Projects</h1>

@foreach ($projects as $p)
<div class="block">
    <a href="#" class="is-primary">{{$p->name}}</a>
    {{-- <p>{{$p->description}}</p> --}}
</div>
@endforeach
<hr>