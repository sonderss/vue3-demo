<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.cache" :key="$route.path" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.cache" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
@import "./style/index.scss";
</style>
