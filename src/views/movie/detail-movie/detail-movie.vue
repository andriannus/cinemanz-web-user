<template>
  <div>
    <div class="columns is-multiline is-mobile">
      <div class="column is-12 has-text-centered">
        <img src="https://via.placeholder.com/280x420?text=No+Picture" :alt="movie.title" />
      </div>

      <div class="column is-12">
        <div class="mb-3">
          <p class="has-text-weight-bold">Genre</p>

          <span
            v-for="(genre, index) in movie.genres"
            :key="'g-' + index"
            class="is-capitalized"
          >
            {{ genre + (index + 1 === movie.genres.length ? '' : ', ') }}
          </span>
        </div>

        <div class="mb-3">
          <p class="has-text-weight-bold">Producer</p>
          <span
            v-for="(producer, index) in movie.producers"
            :key="'p-' + index"
            class="is-capitalized"
          >
            {{ producer + (index + 1 === movie.producers.length ? '' : ', ') }}
          </span>
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

          <span v-for="(cast, index) in movie.casts" :key="'c-' + index" class="is-capitalized">
            {{ cast + (index + 1 === movie.casts.length ? '' : ', ') }}
          </span>
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
