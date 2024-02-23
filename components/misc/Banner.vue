<template>
  <div class="banner text-center" :class="{ red: red }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    red: Boolean,
  },
};
</script>

<style scoped lang="scss">
.banner {
  font-family: "Oswald";
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  font-size: 3rem;
  padding: 3rem 1rem 3rem;
  margin-bottom: 2rem;
  background-image: linear-gradient(90deg, #86b3e4, #6f8fe7);
}

.red {
  background-image: linear-gradient(-145deg, #d54757, #e9595b);
}
</style>
