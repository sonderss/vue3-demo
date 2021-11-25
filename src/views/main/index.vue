<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout style="background: #f3fafd">
      <a-layout-header :style="{ padding: 0 }" class="header">
      </a-layout-header>
      <a-layout-content class="content m-tb-10 m-lr-10">
        <div class="content_main">
          <div class="item_all">
            <Article v-for="item in 5" :key="item" class="item m-tb-10" />
          </div>

          <div class="pagination">
            <a-pagination :default-current="6" :total="500" />
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer" style="padding: 0">
        2021 www.sonders.cn
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, reactive } from "vue";
import Article from "@/components/article.vue";
export default defineComponent({
  components: {
    Article,
  },
  setup() {
    const collapsed = reactive(false);
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };
    const onBreakpoint = (broken) => {
      console.log(broken);
    };
    return {
      collapsed,
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>

<style lang="scss">
#components-layout-demo-responsive {
  height: 100vh;
  font-size: 2em;
  font-family: "shouxieti01";
  font-style: normal;
  .header {
    height: 60px;
    background: #c4e4ff;
  }
  .content {
    flex: 1;
    .content_main {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      background: #fff;
      overflow: auto;
      .pagination {
        height: 40px;
      }
      .item_all {
        height: calc(100% - 40px);
        .item {
          width: auto;
          height: 40px;
          background: red;
        }
      }
    }
    .content_main::-webkit-scrollbar {
      display: none;
    }
  }
  // #399ee5
  .footer {
    height: 60px;
    text-align: center;
    line-height: 0;
    background: #399ee5;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 20px;
  }
}
</style>
