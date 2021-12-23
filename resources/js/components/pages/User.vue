<template>
  <!-- <section v-if="$route.params.name">
    <h1>Hello {{ $route.params.name }}</h1> -->
  <section v-if="name">
    <h1>Hello {{ name }}</h1>
  </section>

  <section v-else>
    <h1>Daftar User</h1>
    <ul v-for="r in users">
      <li>{{ r.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      users: [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" },
        { id: 4, name: "Test4" },
      ],
    };
  },
};
</script>
