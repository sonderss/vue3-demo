<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout style="background: #f3fafd">
      <a-layout-header :style="{ padding: 0 }" class="header">
        <Header />
      </a-layout-header>
      <a-layout-content class="content m-tb-10 m-lr-10">
        <div class="content_main" v-if="info.title">
          <div class="top_view article flex j-center column a-center">
            <div class="title el-1">
              {{ info.title }}
            </div>
            <div class="desc flex j-center a-center">
              <div class="flex a-center icon_desc m-right-10 f12">
                <CalendarOutlined
                  type="calendar"
                  :style="{ width: '12px', height: '12px' }"
                />
                <span class="p-left-5 f14">{{ formatDate(info.date) }}</span>
              </div>
              <div class="flex a-center icon_desc m-right-10 f12">
                <FolderOpenOutlined
                  type="calendar"
                  :style="{ width: '12px', height: '12px' }"
                />
                <span class="p-left-5 f14">{{ setType(info.type) }}</span>
              </div>
              <div class="flex a-center icon_desc m-right-10 f12">
                <SmileOutlined
                  type="calendar"
                  :style="{ width: '12px', height: '12px' }"
                />
                <span class="p-left-5 f14">{{ info.auth }}</span>
              </div>
            </div>
          </div>
          <div
            v-if="html_"
            class="m-top-20 flex column p-top-10 p-lr-10 content_mark"
            style="font-size: 15px; width: 100%"
            v-html="html_"
          ></div>
        </div>

        <div class="flex j-center a-center" v-if="!html_" style="height: 100%">
          <a-empty description="害，该页面不支持刷新操作" />
        </div>
      </a-layout-content>
      <a-layout-footer class="footer" style="padding: 0">
        2021 www.sonders.cn
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/header.vue";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  SmileOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
interface infoFace {
  content: string;
}
export default defineComponent({
  name: "Detail",
  components: {
    CalendarOutlined,
    FolderOpenOutlined,
    SmileOutlined,
    RightOutlined,
    Header,
  },
  setup() {
    const route: any = useRoute();
    let info_: infoFace = { content: "" };
    if (route.params.item) {
      info_ = JSON.parse(route.params.item);
    }
    const dataMap = reactive({
      html_: "",
      info: info_, //,
      setType(type: any) {
        enum typeList {
          study = "学习",
          live = "生活",
          talk = "说话",
        }
        if (type * 1 === 1) {
          return typeList.study;
        }
        if (type * 1 === 2) {
          return typeList.live;
        }
        if (type * 1 === 3) {
          return typeList.talk;
        }
      },
      formatDate(_date: any) {
        if (!_date) return "";
        const date = new Date(_date * 1);
        return (
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate() +
          "  " +
          date.getHours() +
          ":" +
          date.getMinutes() +
          ":" +
          date.getSeconds()
        );
      },
      setTags(tags: any) {
        let tagsArr = JSON.parse(tags);
        tagsArr = tagsArr.filter((item: any) => item.value !== "标签");
        return tagsArr;
      },
    });
    onMounted(() => {
      // dataMap.html_ = marked('', {})
      const markdown: any = dataMap.info.content;
      const render = new marked.Renderer();
      marked.setOptions({
        renderer: render,
        highlight: (code) => {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        // tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      let html = marked(markdown, { renderer: render });
      dataMap.html_ = html;
    });
    return { ...toRefs(dataMap) };
  },
});
</script>
<style></style>
<style lang="scss">
@import "../../style/page.scss";
@import "../../style/marked.css";
.top_view {
  height: auto;
}
.article {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.8em;
  .desc {
    width: 100%;
    font-size: 14px;
    color: #aaa;
    .icon_desc {
      box-sizing: border-box;
    }
  }
  .content {
    height: auto;
    font-size: 0.7em;
  }
  .more_detail {
    height: auto;
    font-size: 0.5em;
    color: cornflowerblue;
  }
}
.content_mark {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
