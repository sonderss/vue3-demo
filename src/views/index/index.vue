<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const msg = ref("我是文本");
    return { msg };
  },
});
</script>
