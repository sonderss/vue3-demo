<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout style="background: #f3fafd">
      <a-layout-header :style="{ padding: 0 }" class="header">
      </a-layout-header>
      <a-layout-content class="content m-tb-10 m-lr-10">
        <div class="content_main" v-if="list.length">
          <Article
            :content="item"
            v-for="item in list"
            :key="item._id"
            class="m-tb-10"
          />
        </div>
        <div
          class="flex j-center a-center"
          style="height: 100%"
          v-if="!list.length"
        >
          <a-empty description="害，没有更多数据了" />
        </div>
      </a-layout-content>
      <div class="pagination flex j-center a-center m-bottom-10">
        <a-pagination
          v-model="current"
          :default-current="1"
          :defaultPageSize="10"
          :pageSize="10"
          :total="50"
          @change="changeCurrent"
        />
      </div>
      <a-layout-footer class="footer" style="padding: 0">
        2021 www.sonders.cn
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import Article from "@/components/article.vue";
import { getArticles } from "../../api/api";
export default defineComponent({
  name: "Main",
  components: {
    Article,
  },
  setup() {
    const route = useRoute();
    const dataMap = reactive({
      current: 1,
      route: route,
      list: Array(),
      changeCurrent(page, pageSize) {
        console.log(page, pageSize);
        dataMap.form.page = page;
        console.log(dataMap.form);
        dataMap.getArticles();
      },
      form: {
        page: 1,
        limit: 10,
        type: null,
      },
      async getArticles() {
        const result = await getArticles(dataMap.form);
        console.log(result);
        dataMap.list = result;
      },
    });
    if (route.params.list) {
      dataMap.list = JSON.parse(route.params.list);
    }
    onMounted(() => {
      if (!route.params.list) {
        dataMap.getArticles();
      }
    });
    return { ...toRefs(dataMap) };
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
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      // background: #fff;
      overflow: auto;
      .pagination {
        height: 40px;
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

@media screen and (min-width: 300px) and (max-width: 650px) {
  #components-layout-demo-responsive .content .content_main {
    width: auto;
  }
}

@media screen and (min-width: 650px) and (max-width: 1200px) {
  #components-layout-demo-responsive .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #components-layout-demo-responsive .content .content_main {
    width: 70%;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1920px) {
  #components-layout-demo-responsive .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #components-layout-demo-responsive .content .content_main {
    width: 50%;
  }
}
</style>
