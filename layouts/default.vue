<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "@/components/navigation/nav";

export default {
  components: { Nav },
};
</script>

<style lang="scss">
* {
  font-family: "Raleway";
}

body {
  background-color: #fbfbfc;
}

@media all and (max-width: 720px) {
  .layout-maxed {
    display: block;
    padding: 0 3rem !important;
  }
}
</style>
