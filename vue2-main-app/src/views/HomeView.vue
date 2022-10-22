<template>
  <div class="home">
    <h1>基座应用 — my-micro-fe</h1>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
