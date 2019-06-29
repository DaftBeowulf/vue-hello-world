<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      copyright: "Copyright Vue Hobbits"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightblue;
  text-align: center;
}
</style>
