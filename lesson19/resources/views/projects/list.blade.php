<h1 class="title">My Projects</h1>

@foreach ($projects as $p)
<div>
    <a href="#">{{$p->name}}</a>
    {{-- <p>{{$p->description}}</p> --}}
</div>
@endforeach