<template>
  <div class="toast-container">
    <div class="toast-content">
      <div class="message">
        <span class="text text-1">Success</span>
        <span class="text text-2">Your Message Was Sent!</span>
      </div>
      <div class="icon">
        <MaterialIconThumbUp class="thumbs" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-container {
    position: absolute;
    top: 1rem;
    display: grid;
    justify-items: end;
    gap: 1.5rem;
    will-change: transform;
    z-index: 2000;
  }

  .toast-content {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    padding: 0.5em 1em;
    background-color: lightblue;
  }
</style>
