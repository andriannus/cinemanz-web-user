<template>
  <div>
    <app-banner :title="title"></app-banner>

    <div class="section">
      <router-view @titleSpecified="setBannerTitle"></router-view>
    </div>
  </div>
</template>

<script src="./theater.js"></script>
