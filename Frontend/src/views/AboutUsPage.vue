<template>
  <div class="container py-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">About Us</li>
      </ol>
    </nav>
    <div class="row my-5">
      <div class="col-md-6">
        <div class="p-4 position-relative">
          <img class="img-responsive" src="@/assets/images/about-us.png" >
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div>
          <h1 class="u-custom-font u-font-montserrat u-text u-text-default u-text-1">About</h1>
          <div class="u-border-10 u-border-palette-2-light-2 u-line u-line-horizontal u-line-1"></div>
          <p class="u-custom-font u-font-montserrat u-text u-text-2">Oh feel if up to till like.&nbsp;He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.&nbsp;<br>
            <br>
            <span style="font-weight: 700;">He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</span>
          </p>
          <a href="#" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-hover-palette-2-light-1 u-btn-1"><span class="u-icon u-text-palette-2-light-1"><svg class="u-svg-content" viewBox="0 0 405.333 405.333" x="0px" y="0px" style="width: 1em; height: 1em;"><path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752    c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64    C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32    c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path></svg></span>&nbsp;+1 (234) 567-8910
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
