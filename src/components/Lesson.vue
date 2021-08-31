<template>
  <div class="lesson">
    <div class="course-category">
      <div class="category-box">
        <div class="box-title">
          <img class="title-img"
            src="https://cdn1.langdy.net/images/lesson_page/jihu/pc_subject.png"
            alt="box-title"
          />
          <div class="title-container">
            <div class="red bold">파고다 X 랭디 프로젝트!</div>
            <div class="brown bold course-title">지후 코스</div>
          </div>
        </div>
        <div class="courses">
          <div class="course" v-for="course in courses" v-bind:key="course.title"
            v-on:click="onClickCourse(course)">
            <div class="all-in-logo flex-center">
              <img src="https://cdn1.langdy.net/images/lesson_page/all_in_langdy_logo.png" />
            </div>
            <div class="card-image">
              <img v-bind:src="course.image" />
            </div>
            <div class="card-content">
              <div class="title">
                <div class="level">{{ course.level }}</div>
                <div class="content bold">{{ course.title }}</div>
              </div>
              <div class="description">
                <div class="detail">
                  {{ course.detail }}
                </div>
                <div class="target">
                  {{ course.target }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LessonModal v-if="showModal"
      v-bind:course="modalCourse"
      @closeModal="onCloseModal"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import LessonModal from './LessonModal.vue'

export default defineComponent({
  components: {
    LessonModal,
  },

  setup() {
  },

  data: () => ({
    testValue: "Hello!",
    showModal: false,
    modalCourse: null,
    courses: [
      {
        level: '초급',
        title: '디테일로 익히는 기초',
        description: '병원 \'예약\'은 reservation이 아니라고?\n아주 간단한 대화만 가능한 분',
        target: '아주 간단한 대화만 가능한 분',
        detail: '병원 \'예약\'은 reservation이 아니라고?',
        image: 'https://cdn1.langdy.net/images/lesson_page/english_63.gif',
      },
      {
        level: '초중급',
        title: '디테일을 살리는 회화',
        description: 'hard to me와 hard for me의 차이는?\n일상 생활 속 대화가 가능한 분',
        target: '일상 생활 속 대화가 가능한 분',
        detail: 'hard to me와 hard for me의 차이는?',
        image: 'https://cdn1.langdy.net/images/lesson_page/english_64.gif',
      },
      {
        level: '중급',
        title: '디테일로 완성하는 회화',
        description: 'around로 \'반대로\'를 말할 수 있다고?\n익숙한 주제의 대화가 가능한 분',
        target: '익숙한 주제의 대화가 가능한 분',
        detail: 'around로 \'반대로\'를 말할 수 있다고?',
        image: 'https://cdn1.langdy.net/images/lesson_page/english_65.gif',
      },
    ],
  }),

  created() {
  },

  methods: {
    onClickCourse: function(course) {
      this.modalCourse = course;
      this.showModal = true;
    },

    // Event call-backs.A
    onCloseModal: function() {
      this.showModal = false;
    },
  },
})
</script>

<style lang="scss">
  .lesson {
    width: 100%;
    height: 100%;

    .course-category {
      background-color: #ebebeb;
      padding: 5rem calc(8.3333333333% + 1rem + 0.75rem);

      .category-box {
        background-color: white;

        .box-title {
          .course-title {
            display: inline-block;
            border-left: 1px solid #c18425;
            border-right: 1px solid #c18425;
          }
        }
      }
    }
  }

  .courses {
    display: flex;
    justify-content: center;
    padding: 10px;

    .course {
      position: relative;
      width: 256px;
      margin: 0 10.5px;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1),0 1px 2px 0px rgba(0,0,0,0.1),0 1px 5px 0 rgba(0,0,0,0.1);

      &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
      }

      .all-in-logo {
        position: absolute;
        left: -10px;
        top: -10px;
        width: 45px;
        height: 45px;
        background-color: black;
        border-radius: 25px;

        img {
          width: 25px;
          height: 25px;
        }
      }

      .card-image {
        img {
          width: 256px;
        }
      }

      .card-content {
        .title {
          .level {
            display: inline-block;
            background-color: #19c79c;
            color: #ffffff;
            padding: 0 0.4rem;
            font-size: 0.8rem;
          }
          
          .content {
            display: inline-block;
          }
        }

        .description {
          font-size: 0.8rem;
        }
      }
    }
  }
</style>
