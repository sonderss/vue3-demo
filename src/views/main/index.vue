<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout style="background: #f3fafd">
      <a-layout-header :style="{ padding: 0 }" class="header">
        <Header />
        <!-- <div class="header_main flex p-lr-10 j-between a-center">
          <div>sonders个人博客</div>
          <div class="aboutMe">
            <ContactsOutlined />
          </div>
        </div> -->
      </a-layout-header>
      <a-layout-content class="content m-tb-10 m-lr-10">
        <div class="content_main" v-if="list.length">
          <Article
            :content="item"
            v-for="item in list"
            :key="item._id"
            class="m-tb-10"
            @toDetail="toDetail(item)"
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
          :total="100"
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
import Header from "@/components/header.vue";
import { getArticles } from "../../api/api";
export default defineComponent({
  name: "MyBlob",
  components: {
    Article,
    Header,
  },
  setup() {
    const route = useRoute();
    const dataMap = reactive({
      current: 1,
      route: route,
      list: Array(),
      router: useRouter(),
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
        dataMap.list = result;
      },
      toDetail(e) {
        dataMap.router.push({
          name: "Detail",
          query: { title: e.title },
          params: {
            item: JSON.stringify(e),
          },
        });
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
@import "@/style/page.scss";
</style>
