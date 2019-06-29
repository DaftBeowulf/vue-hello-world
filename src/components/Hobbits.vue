<template>
  <div>
    <h1>List of hobbits</h1>
    <ul>
      <li v-for="(hobbit, i) in hobbits" v-bind:key="i">Hobbit #{{i+1}}: {{hobbit}}</li>
    </ul>
  </div>
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

<style scoped>
h1 {
  color: red;
}
</style>
