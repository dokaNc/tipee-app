<template>
  <input class="mb-16" id="name" type="text" :value="value" @input="$emit('input', $event.target.value)" required />
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style scoped lang="scss">
input:not([type="radio"]):not([type="checkbox"]) {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  color: #404040;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem 0.3rem;
  transition: all 0.1s ease;
  width: 100%;
}

input:not([type="radio"]):not([type="checkbox"]):focus {
  border-color: #6f8fe7;
  outline: 0;
}
</style>
