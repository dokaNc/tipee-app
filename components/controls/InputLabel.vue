<template>
  <label :for="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style scoped lang="scss">
label {
  font-size: 1rem;
  font-weight: 400;
  color: #898b8c;
}
</style>
