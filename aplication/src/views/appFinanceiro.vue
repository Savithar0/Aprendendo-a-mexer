<template>
  <section>
    <h2>ola</h2>
    <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      </v-navigation-drawer>
  </section>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>