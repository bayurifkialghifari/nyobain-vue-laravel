<template>
  <!-- <section v-if="$route.params.name">
    <h1>Hello {{ $route.params.name }}</h1> -->
  <section v-if="name">
    <h1>Hello {{ name }}</h1>
  </section>

  <section v-else>
    <h1>Daftar User</h1>
    <ul v-for="r in users">
      <!-- <router-link :to="`/user/${r.name}`">{{ r.name }}</router-link> -->

      <!-- <router-link :to="profile_url(r.name)">{{ r.name }}</router-link> -->

      <a href="" @click.prevent="userdetail(r.name)">{{ r.name }}</a>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    // Call api with axios
    axios.get("/api/users").then((res) => {
      this.users = res.data;
    });
  },
  methods: {
    profile_url(name) {
      return `user/${name.toLowerCase()}`;
    },
    userdetail(name) {
      return this.$router.push(`user/${name.toLowerCase()}`);
    },
  },
};
</script>
