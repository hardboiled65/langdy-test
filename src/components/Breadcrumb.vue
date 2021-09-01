<template>
  <div class="breadcrumb flex-center">
    <div :class="{
      purple: progress >= 0,
    }">컨텐츠 선택</div>
    <div class="triple-dot">…</div>
    <div :class="{
      purple: progress >= 1,
    }">선생님 & 시간 선택</div>
    <div class="triple-dot">…</div>
    <div :class="{
      purple: progress >= 2,
    }">강의 신청</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },

  computed: {
    progress(): number {
      if (this.$route.path === '/') {
        return 0;
      } else if (this.$route.path === '/timetable') {
        return 1;
      } else if (this.$route.path === '/submit-lesson') {
        return 2;
      }

      return 0;
    },
  },
})
</script>

<style lang="scss">
.breadcrumb {
  height: 56px;
  background-color: #ffffff;

  .triple-dot {
    font-weight: bold;
    margin: 0 10px;
  }
}
</style>
