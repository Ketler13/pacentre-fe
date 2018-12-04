<template>
  <div class="home-page">
    <div class="greeting">
      Здорова, начальник!
    </div>
    <div class="motto">
      Фарту, масти, на районе кипят страсти.
    </div>
    <div class="app-logo-wrapper">
      <img
        alt="logo"
        class="app-logo"
        :src="logo"
        >
    </div>
  </div>
</template>

<script>
import logo from '../assets/pacentre.png';

export default {
  name: 'Home',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scope lang="scss">
  .home-page {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    height: calc(100vh - 64px);
  }

  .greeting {
    margin-top: 20px;
    font-size: 24px;
  }

  .app-logo-wrapper {
    max-width: 50%;
  }

  .app-logo {
    max-width: 100%;
    margin-top: 100px;
  }
</style>
