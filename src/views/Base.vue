<template>
  <div class="main-layout">
    <router-view class="header" name="header"></router-view>
    <router-view class="content" name="main"></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
  .content {
    margin-top: 64px;
  }
</style>
