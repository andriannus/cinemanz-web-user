<template>
  <div>
    <div class="columns is-multiline is-mobile">
      <div class="column is-12 has-text-centered">
        <movie-poster :src="movie.poster" :alt="movie.title"></movie-poster>
      </div>

      <div class="column is-12">
        <div class="mb-3">
          <p class="has-text-weight-bold">Genre</p>
          <flat-list :words="movie.genres"></flat-list>
        </div>

        <div class="mb-3">
          <p class="has-text-weight-bold">Producer</p>
          <flat-list :words="movie.producers"></flat-list>
        </div>

        <div class="mb-3">
          <p class="has-text-weight-bold">Director</p>
          <span>{{ movie.director || '-' }}</span>
        </div>

        <div class="mb-3">
          <p class="has-text-weight-bold">Writer</p>
          <span>{{ movie.writer || '-' }}</span>
        </div>

        <div class="mb-3">
          <p class="has-text-weight-bold">Production</p>
          <span>{{ movie.production || '-' }}</span>
        </div>

        <div class="mb-3">
          <p class="has-text-weight-bold">Casts</p>
          <flat-list :words="movie.casts"></flat-list>
        </div>

        <hr />

        <div>
          <p class="has-text-weight-bold">Synopsis</p>
          <span>{{ movie.synopsis || '-' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./detail-movie.js"></script>
