<section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        My Steam
                    </a>
                    <span class="navbar-burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                            Home
                        </a>
                        <a class="navbar-item">
                            Examples
                        </a>
                        <a class="navbar-item">
                            Documentation
                        </a>
                        <span class="navbar-item">
                            <a class="button is-primary is-inverted">
                                <span class="icon">
                                    <i class="fab fa-github"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
        <div class="container has-text-centered">
            <p class="title">
                My Stream
            </p>
            <p class="subtitle">
                Laracast Demo
            </p>
        </div>
    </div>
    
    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
        @include('layouts.nav')
    </div>
</section>
