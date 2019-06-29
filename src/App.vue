<template>
  <div>
    <app-header />
    <hobbits></hobbits>
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
    return {};
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
