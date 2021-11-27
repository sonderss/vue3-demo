<template>
  <div class="article p-lr-5 p-tb-5">
    <div class="title el-1">
      {{ content.title }}
    </div>
    <div class="desc flex j-start a-center">
      <div class="flex a-center icon_desc m-right-10 f12">
        <CalendarOutlined
          type="calendar"
          :style="{ width: '12px', height: '12px' }"
        />
        <span class="p-left-5 f14">{{ formatDate(content.date) }}</span>
      </div>
      <div class="flex a-center icon_desc m-right-10 f12">
        <FolderOpenOutlined
          type="calendar"
          :style="{ width: '12px', height: '12px' }"
        />
        <span class="p-left-5 f14">{{ setType(content.type) }}</span>
      </div>
      <div class="flex a-center icon_desc m-right-10 f12">
        <SmileOutlined
          type="calendar"
          :style="{ width: '12px', height: '12px' }"
        />
        <span class="p-left-5 f14">{{ content.auth }}</span>
      </div>
    </div>
    <div class="content el-2 p-tb-10">{{ content.desc }}</div>
    <div class="more_detail flex j-between a-center p-top-10">
      <div class="flex j-end a-center">
        <a-tag
          :color="item.color"
          v-for="(item, index) in setTags(content.tags)"
          :key="index"
        >
          {{ item.value }}
        </a-tag>
      </div>
      <div class="flex j-end a-center" @click="() => $emit('toDetail')">
        查看详情
        <RightOutlined :style="{ width: '12px', height: '12px' }" />
        <RightOutlined :style="{ width: '12px', height: '12px' }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @description 文章卡片
 * @Auth sonders
 * @Date 2021-11-25 11:20:11
 */
import {
  CalendarOutlined,
  FolderOpenOutlined,
  SmileOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, toRef, toRefs } from "vue";

export default defineComponent({
  name: "Article",
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["toDetail"],
  components: {
    CalendarOutlined,
    FolderOpenOutlined,
    SmileOutlined,
    RightOutlined,
  },
  setup(props, contex) {
    const dataMap = reactive({
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
    return { ...toRefs(dataMap) };
  },
});
</script>
<style lang="scss">
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
</style>
