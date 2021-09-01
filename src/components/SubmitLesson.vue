<template>
  <div class="submit-lesson">
    <div class="container">
      <h2 class="title">선택한 강의 목록</h2>
      <div class="collection">
        <div class="collection-title bold">🗹 강의 1</div>
        <div class="lesson-description">
          <Badge :title="selectedLesson.number" :color="badgeColor" />
          <div style="margin-left: 4px;">{{ selectedLesson.description }}</div>
        </div>
        <div class="teacher-datetime">
          <div>{{ selectedTeacher.name }} 선생님 {{ datetimeString }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Badge from './Badge.vue'

export default defineComponent({
  components: {
    Badge,
  },

  setup() {
  },

  computed: {
    selectedLesson(): object {
      return this.$store.state.selectedLesson || {
        number: 0,
        description: '강의를 선택해 주세요',
      };
    },

    badgeColor(): string {
      return this.$store.state.selectedLessonBadgeColor || 'red';
    },

    selectedTeacher(): object {
      return this.$store.state.selectedTeacher || {
        name: '선생님을 선택해 주세요',
      };
    },

    selectedDate(): Date {
      return this.$store.state.selectedDate || new Date();
    },

    selectedTime(): string {
      return this.$store.state.selectedTime || '0:00';
    },

    datetimeString(): string {
      const date = this.selectedDate;
      console.log(date);

      let str: string = '';
      str += date.toISOString().split('T')[0];

      let timeStr = this.selectedTime;
      if (timeStr.length === 4) {
        timeStr = `0${timeStr}`;
      }

      str += ` ${timeStr}`;

      return str;
    },
  },
})
</script>

<style lang="scss">
.submit-lesson {
  .container {
    background-color: #fffdfa;

    .collection {
      width: 70%;
      margin: 0 auto;
      padding: 14px;
      background-color: #ffffff;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.07),0 1.5px 0.5px -1px rgba(0,0,0,0.06),0 0.5px 2.5px 0 rgba(0,0,0,0.1);

      &:hover {
        background-color: #f5f5f5;
      }

      .collection-title {
        display: flex;
        margin-bottom: 10px;
      }

      .lesson-description {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
      }

      .teacher-datetime {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
}
</style>
