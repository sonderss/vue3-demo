<template>
  <div class="header_main flex p-lr-10 j-between a-center">
    <!-- <img src="http://sonders.cn/static/media/0.fb5fc520.jpg" /> -->
    <div @click="blobBack" class="select cursor">sonders个人博客</div>
    <div class="aboutMe cursor">
      <ContactsOutlined @click="toMy" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ContactsOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    ContactsOutlined,
  },
  emits: [],
  setup() {
    const router = useRouter();
    const blobBack = () => {
      router.push("MyBlob");
    };
    const toMy = () => {
      router.push("About");
    };
    return { blobBack, toMy };
  },
});
</script>
