<template>
  <div id="hobbits">
    <ul>
      <li v-for="(hobbit, i) in hobbits" v-bind:key="i" v-on:click="hobbit.show=!hobbit.show">
        <h2>{{hobbit.name}}</h2>
        <h3 v-show="hobbit.show">Specialty: {{hobbit.specialty}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
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
  components: {}
};
</script>

<style scoped>
#hobbits {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
