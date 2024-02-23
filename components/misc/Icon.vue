<template>
  <component :is="vueIcon" :name="icon" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  computed: {
    vueIcon() {
      return defineAsyncComponent(() => import(`@/assets/icons/Icon${this.icon}.vue`));
    },
  },
};
</script>
