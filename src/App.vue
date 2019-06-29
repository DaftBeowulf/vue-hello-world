<template>
  <div>
    <app-header />
    <hobbits v-bind:hobbits="hobbits"></hobbits>
    <app-footer />
  </div>
</template>

<script>
// registered locally--only usable in this app
import Hobbits from "./components/Hobbits";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      hobbits: [
        { name: "Samwise", specialty: "true hero", show: false },
        { name: "Frodo", specialty: "dead weight", show: false },
        { name: "Bilbo", specialty: "smoking leaves", show: false }
      ]
    };
  },
  components: {
    hobbits: Hobbits,
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
