<template>
    <div>
    <!-- Header -->
    <div class="container-fluid" id="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand text-white" href="#">MMC-Note</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Your Order</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                Cart
                                <small class="badge badge-danger">7</small>
                            </a>
                        </li>
                    </ul>
                    <div class="form-inline mr-5">
                        <div class="dropdown">
                            <span id="option" type="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" class="btn btn-lg bg-dark text-white btn-rounded">
                                <i class="fas fa-cog"></i>
                            </span>
                            <br>
                            <div class="dropdown-menu text-center bg-dark" aria-labelledby="option">
                                <span class="fa fa-user text-white"></span><br>
                                <span class="fas fa-tags text-white mt-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="text-white">Welcome From MM-Coder Note</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
                        sequi voluptas similique sed minima rerum labore reprehenderit, illo
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
                        sequi voluptas similique sed minima rerum labore reprehenderit, illo
                     
                    </p>
                    <router-link to="/register" class="btn btn-outline-primary">SignUp</router-link>
                    <router-link to="/login" class="btn btn-primary">Login</router-link>
                </div>
                <div class="col-md-6 text-center">
                    <img class=""
                        src="https://wp.xpeedstudio.com/seocify/home-fifteen/wp-content/uploads/sites/27/2020/03/home17-banner-image-min.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- End Header -->
    <div class="container mt-5">
        <slot />
    </div>

    </div>
</template>

<script>
export default {
    name: 'Master',
}
</script>