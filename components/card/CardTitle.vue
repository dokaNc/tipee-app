<template>
  <div class="card-title">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: String,
    blue: Boolean,
  },

  computed: {
    selectedColor() {
      return this.blue ? "rgba(111, 143, 231, 0.4)" : "rgba(137, 139, 140, 0.4)";
    },
  },
};
</script>

<style scoped lang="scss">
.card-title {
  font-size: 1.5rem;
  font-weight: 500;
  position: relative;
  width: fit-content;

  &::before {
    content: "";
    position: absolute;
    background-color: v-bind(selectedColor);
    bottom: 5px;
    height: 10px;
    width: 100%;
  }
}
</style>
