<template>
  <div class="lesson-modal">
    <div class="modal-overlay" v-on:click="$emit('closeModal')">
    </div>
    <div class="course-box">
      <div class="header">
        <div class="level">{{ course.level }}</div>
        <div class="title">{{ course.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },

  props: {
    course: Object,
  },

  emits: [
    'closeModal',
  ],
})
</script>

<style lang="scss">
.lesson-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  .modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #7e7e7e50;
  }
}

.course-box {
  width: 530px;
  height: 80%;
  margin: auto;
  top: 100px;
  background-color: #ffffff;
  position: relative;
  z-index: 1;

  .header {
    background-color: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
