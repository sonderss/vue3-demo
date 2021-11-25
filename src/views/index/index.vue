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
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getArticles } from "../../api/api";
// reactive 创建引用类型 底层用ES6的proxy 控制属性的操作 不需要.value
// ref 创建基本类型 底层会去调用reactive  .value
export default defineComponent({
  setup() {
    const nums = ref(0);
    function timer(): void {
      const times = setInterval(() => {
        nums.value += 1;
        if (nums.value === 100) {
          clearInterval(times);
        }
      }, 30);
    }
    timer();
    const fetechData = async () => {
      const list = await getArticles({
        page: 1,
        limit: 10,
        type: null,
      });
      console.log(list);
    };

    onMounted(() => {
      fetechData();
    });
    return { nums, fetechData };
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
