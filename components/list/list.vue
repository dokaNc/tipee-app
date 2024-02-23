<template>
  <div class="grid sm:grid-cols-2 gap-16">
    <ListItem v-for="item in data" :key="item.slug" :item="item" />
  </div>
</template>

<script>
import ListItem from "@/components/list/listItem";

export default {
  components: { ListItem },
  props: {
    data: Array,
  },
};
</script>
