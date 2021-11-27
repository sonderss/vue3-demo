<template>
  <div class="welcome flex j-center a-center column">
    <div class="progress">
      <!-- type="circle" -->
      <a-progress
        style="font-size: 1em"
        strokeColor="#87d068"
        status="normal"
        :percent="nums"
      >
        <template #format="percent">
          <div class="flex">
            <div style="width: 30px">{{ percent }}</div>
            <div>%</div>
          </div>
        </template>
      </a-progress>
    </div>
    <div>资源加载中...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getArticles } from "../../api/api";
// reactive 创建引用类型 底层用ES6的proxy 控制属性的操作 不需要.value
// ref 创建基本类型 底层会去调用reactive  .value
export default defineComponent({
  setup() {
    const data = reactive({
      nums: 0,
      router: useRouter(),
      list: Array(),
      async getArticles() {
        const result: any = await getArticles({
          page: 1,
          limit: 10,
          type: null,
        });
        data.list = result;
      },
    });
    function timer(): void {
      const times = setInterval(() => {
        data.nums += 1;
        if (data.nums === 100) {
          clearInterval(times);
          let a = JSON.stringify(data.list);
          data.router.push({
            name: "MyBlob",
            params: { list: a },
          });
        }
      }, 30);
    }
    timer();
    onMounted(() => {
      data.getArticles();
    });
    return { ...toRefs(data) };
  },
});
</script>
<style lang="scss">
.welcome {
  width: 100%;
  height: 100vh;
  // background: skyblue;
  font-size: 2em;
  font-family: "shouxieti01";
  .progress {
    width: 80%;
  }
}
</style>
