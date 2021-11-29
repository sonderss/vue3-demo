<template>
  <div>
    <a-result status="404" title="404" sub-title="害，本网站没有这个路由">
      <template #extra>
        <a-button type="primary" @click="backHone"> 返回首页 </a-button>
      </template>
    </a-result>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const backHone = function () {
      router.push("MyBlob");
    };
    return { backHone };
  },
});
</script>
