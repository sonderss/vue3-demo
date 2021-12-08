<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout style="background: #f3fafd">
      <a-layout-header :style="{ padding: 0 }" class="header">
        <Header />
      </a-layout-header>
      <a-layout-content class="content m-tb-10 m-lr-10">
        <div class="content_main_about">
          <a-card hoverable style="width: 280px" class="hoverable_pc_avtor">
            <template #cover>
              <img
                alt="暂无头像"
                src="http://sonders.cn/static/media/0.fb5fc520.jpg"
              />
            </template>
            <a-card-meta title="sonders" description="临渊羡鱼不如退而结网">
              <template #avatar>
                <a-avatar
                  alt="暂无头像"
                  src="http://sonders.cn/static/media/0.fb5fc520.jpg"
                />
              </template>
            </a-card-meta>
          </a-card>
          <a-card hoverable style="width: 300px" class="hoverable_m_avtor">
            <a-card-meta title="sonders" description="临渊羡鱼不如退而结网">
              <template #avatar>
                <a-avatar
                  alt="暂无头像"
                  src="http://sonders.cn/static/media/0.fb5fc520.jpg"
                />
              </template>
            </a-card-meta>
          </a-card>
          <div class="desc_txt f-1">
            <div>日积月累，滴水成河</div>
            <div>作茧自缚，破茧成蝶</div>
            <div>蚁穴虽小，溃之千里</div>
            <div>合抱之木，生于毫末</div>
            <div>为者常成，行者常至</div>
            <div style="padding-left: 100px; padding-top: 20px">
              --- 幸福在哪里
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer" style="padding: 0">
        2021 www.sonders.cn
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/header.vue";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: { Header, SettingOutlined, EditOutlined, EllipsisOutlined },
  setup() {},
});
</script>
