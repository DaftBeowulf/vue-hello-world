<template>
  <ul>
    <li v-for="(hobbit, i) in hobbits" v-bind:key="i">Hobbit #{{i+1}}: {{hobbit}}</li>
  </ul>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      hobbits: ["Samwise", "Frodo", "Bilbo"]
    };
  },
  components: {}
};
</script>

<style>
</style>
