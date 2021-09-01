<template>
  <div class="timetable">
    <h2 class="title">시간 선택</h2>
    <table class="table">
      <thead>
        <tr>
          <th>-</th>
          <th v-for="head in tableHeads" v-bind:key="head">
            <div class="weekday">{{ head.weekday }}</div>
            <div class="date">{{ head.date }}일</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in tableItems" v-bind:key="time.time">
          <th>{{ time.time }}</th>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday1st && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(0), weekday1st, time.time)"
          ></td>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday2nd && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(1), weekday2nd, time.time)"
          ></td>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday3rd && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(2), weekday3rd, time.time)"
          ></td>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday4th && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(3), weekday4th, time.time)"
          ></td>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday5th && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(4), weekday5th, time.time)"
          ></td>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday6th && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(5), weekday6th, time.time)"
          ></td>
          <td :class="{
              'date-pick': true,
              'selected': selectedWeekday === weekday7th && selectedTime == time.time,
            }"
            v-on:click="onSelectDate(dateOffset(6), weekday7th, time.time)"
          ></td>
        </tr>
      </tbody>
    </table>
    <TimetableModal v-if="showModal"
      v-bind:date="selectedDate"
      v-bind:weekday="selectedWeekday"
      v-bind:time="selectedTime"
      @closeModal="onCloseModal"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import TimetableModal from './TimetableModal.vue'

const weekdays = [
  '일',
  '월',
  '화',
  '수',
  '목',
  '금',
  '토',
];

export default defineComponent({
  components: {
    TimetableModal,
  },
  
  setup() {
  },

  data: () => ({
    tableItems: [
      {
        time: '0:00',
      },
      {
        time: '1:00',
      },
      {
        time: '2:00',
      },
      {
        time: '3:00',
      },
      {
        time: '4:00',
      },
      {
        time: '5:00',
      },
      {
        time: '6:00',
      },
      {
        time: '7:00',
      },
      {
        time: '8:00',
      },
      {
        time: '9:00',
      },
      {
        time: '10:00',
      },
      {
        time: '11:00',
      },
      {
        time: '12:00',
      },
      {
        time: '13:00',
      },
      {
        time: '14:00',
      },
      {
        time: '15:00',
      },
      {
        time: '16:00',
      },
      {
        time: '17:00',
      },
      {
        time: '18:00',
      },
      {
        time: '19:00',
      },
      {
        time: '20:00',
      },
      {
        time: '21:00',
      },
      {
        time: '22:00',
      },
      {
        time: '23:00',
      },
    ],

    selectedDate: null,
    selectedWeekday: null,
    selectedTime: null,
    showModal: false,
  }),

  computed: {
    tableHeads() {
      const today = new Date();
      let date = today;
      let heads = [];

      heads.push({
        date: date.getDate(),
        weekday: weekdays[date.getDay()],
      });
      for (let i = 0; i < 6; ++i) {
        date.setDate(date.getDate() + 1);
        heads.push({
          date: date.getDate(),
          weekday: weekdays[date.getDay()],
        });
      }

      return heads;
    },

    weekday1st() {
      const today = new Date();

      return today.getDay();
    },
    weekday2nd() {
      const today = new Date();
      let day = today;
      day.setDate(day.getDate() + 1);

      return day.getDay();
    },
    weekday3rd() {
      const today = new Date();
      let day = today;
      day.setDate(day.getDate() + 2);

      return day.getDay();
    },
    weekday4th() {
      const today = new Date();
      let day = today;
      day.setDate(day.getDate() + 3);

      return day.getDay();
    },
    weekday5th() {
      const today = new Date();
      let day = today;
      day.setDate(day.getDate() + 4);

      return day.getDay();
    },
    weekday6th() {
      const today = new Date();
      let day = today;
      day.setDate(day.getDate() + 5);

      return day.getDay();
    },
    weekday7th() {
      const today = new Date();
      let day = today;
      day.setDate(day.getDate() + 6);

      return day.getDay();
    },
  },

  methods: {
    onSelectDate(date, weekday, time) {
      if (weekday === this.selectedWeekday && time === this.selectedTime) {
        this.showModal = true;
        return;
      }

      this.selectedDate = date;
      this.selectedWeekday = weekday;
      this.selectedTime = time;
    },

    onCloseModal() {
      this.showModal = false;
    },

    dateOffset(offset) {
      let date = new Date();

      if (offset > 0) {
        date.setDate(date.getDate() + offset);
      }

      return date;
    },
  },
})
</script>

<style lang="scss">
.timetable {
  background-color: #fffdfa;

  .title {
    font-size: 12px;
  }
}
.table {
  border: 1px solid black;
  border-collapse: collapse;
  margin: 0 auto;
  margin-bottom: 12px;

  tr {
    background-color: #eeeeee;
  }

  th, td {
    border: 1px solid grey;
  }

  .date-pick {
    width: 100px;
    background-color: #ffffff;

    &:hover {
      background-color: #9a6dff;
      cursor: pointer;
    }

    &.selected {
      background-color: #9a6dff;
      color: #ffffff;
      font-size: 12px;

      &::after {
        content: '선택하기';
      }
    }
  }
}
</style>
