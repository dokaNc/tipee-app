<template>
  <button class="btn" @click.prevent="$emit('action')">{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: String,
  },
  emits: ["action"],
};
</script>

<style scoped lang="scss">
.btn {
  background-color: #6f8fe7 !important;
  color: white;
  border-radius: 5px !important;
  padding: 0.5rem 2.5rem !important;
  font-weight: 500 !important;
  font-size: 0.9rem !important;
  transition: all 0.5s !important;

  &:hover {
    background-color: rgba(111, 143, 231, 0.8) !important;
  }

  &:active {
    box-shadow: 0 0 13px rgba(0, 0, 0, 24%);
  }
}
</style>
