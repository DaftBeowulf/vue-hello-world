<template>
  <div>
    <h1>{{title}}</h1>
    <hobbits></hobbits>
  </div>
</template>

<script>
// registered locally--only usable in this app
import Hobbits from "./components/Hobbits";

export default {
  name: "app",
  data() {
    return {
      title: "Hobbit app"
    };
  },
  components: {
    hobbits: Hobbits
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
