<template>
  <div class="lesson-modal">
    <div class="modal-overlay" v-on:click="$emit('closeModal')">
    </div>
    <div :class="{
      'course-box': true,
      'show': boxShow ? true : false,
    }">
      <header class="header">
        <Badge :title="course.level" :color="course.badgeColor" />
        <div class="title">{{ course.title }}</div>
      </header>
      <div class="container">
        <div class="lesson" v-for="lesson in course.lessons" v-bind:key="lesson.number"
          v-on:click="onClickLesson(lesson)">
          <Badge :title="lesson.number" :color="course.badgeColor" />
          <div class="description">{{ lesson.description }}</div>
          <div class="select-button flex-center"
            v-if="lesson.number === selectedLessonNumber"
            v-on:click="onSelectLesson"
          >선택하기</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import Badge from './Badge.vue'

export default defineComponent({
  components: {
    Badge,
  },

  setup() {
  },

  props: {
    course: Object,
  },

  data: () => ({
    selectedLessonNumber: null,
    boxShow: false,
  }),

  emits: [
    'closeModal',
  ],

  mounted() {
    // this.boxShow = true;
    setTimeout(() => { this.boxShow = true; }, 100);
  },

  beforeUnmounted() {
    this.boxShow = false;
  },

  methods: {
    onClickLesson(lesson) {
      this.selectedLessonNumber = lesson.number;
      this.$store.commit('setSelectedLesson', lesson);
      this.$store.commit('setSelectedLessonBadgeColor', this.course.badgeColor);
    },

    onSelectLesson() {
      this.$router.push('/timetable');
    },
  },
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
    background-color: #00000070;
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
  opacity: 0;
  transition: opacity 0.3s linear;

  &.show {
    opacity: 1;
  }

  .header {
    background-color: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .container {
    padding: 10px;
    max-height: 80%;
    overflow-y: auto;

    .lesson {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-bottom: none;
      box-sizing: border-box;
      padding: 14px;
      position: relative;

      &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
      }

      &:last-child {
        border-bottom: 1px solid #e0e0e0;
      }

      .description {
        margin-left: 12px;
      }

      .select-button {
        background-color: #9a6dff;
        color: #ffffff;
        width: 64px;
        height: 54px;
        position: absolute;
        right: 0;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
