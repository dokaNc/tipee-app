<template>
  <div class="counter">
    <span>{{ count }}</span> Créateurs
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      count: "lists/countList",
    }),
  },
};
</script>

<style scoped lang="scss">
.counter {
  background-color: #d64758;
  color: #fff;
  border-radius: 10px;
  padding: 0.2rem 1.5rem;
  cursor: pointer;

  span {
    font-weight: 600;
    top: -2px;
    position: relative;
  }
}
</style>
