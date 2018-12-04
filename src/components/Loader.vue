<template>
  <div class="loader">
    <div class="message">
      Суетимся...
    </div>
  </div>
</template>

<style scoped lang="scss">
  .loader {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    font-size: 30px;
  }
</style>
