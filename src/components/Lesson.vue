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
                <Badge :title="course.level" :color="course.badgeColor" />
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
import Badge from './Badge.vue';

import LessonModal from './LessonModal.vue'

export default defineComponent({
  components: {
    LessonModal,
    Badge,
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
        badgeColor: '#19c79c',
        title: '디테일로 익히는 기초',
        target: '아주 간단한 대화만 가능한 분',
        detail: '병원 \'예약\'은 reservation이 아니라고?',
        image: 'https://cdn1.langdy.net/images/lesson_page/english_63.gif',
        lessons: [
          {
            number: 301,
            description: '병원 \'예약\'은 reservation이 아니라고?',
          },
          {
            number: 302,
            description: 'anything / something to drink, 차이는? ',
          },
          {
            number: 303,
            description: 'it은 \'그것\'이란 뜻으로만 쓰는 게 아니라고? ',
          },
          {
            number: 304,
            description: 'to는 \'~에게\'란 뜻으로만 쓰는 게 아니라고?',
          },
          {
            number: 305,
            description: '\'칼로 잘랐다\'는 by or with a knife? ',
          },
          {
            number: 306,
            description: '노래 잘한다, you sing well로는 부족하다? ',
          },
          {
            number: 307,
            description: 'take와 bring은 어떻게 구분해서 쓸까?',
          },
        ],
      },
      {
        level: '초중급',
        badgeColor: '#12afb4',
        title: '디테일을 살리는 회화',
        target: '일상 생활 속 대화가 가능한 분',
        detail: 'hard to me와 hard for me의 차이는?',
        image: 'https://cdn1.langdy.net/images/lesson_page/english_64.gif',
        lessons: [
          {
            number: 401,
            description: '두 문장도 귀찮다 하나만 쓰자 (1) - who',
          },
          {
            number: 402,
            description: '두 문장도 귀찮다 하나만 쓰자 (2) - that',
          },
        ],
      },
      {
        level: '중급',
        badgeColor: '#2a89be',
        title: '디테일로 완성하는 회화',
        target: '익숙한 주제의 대화가 가능한 분',
        detail: 'around로 \'반대로\'를 말할 수 있다고?',
        image: 'https://cdn1.langdy.net/images/lesson_page/english_65.gif',
        lessons: [
          {
            number: 501,
            description: 'even if vs. even though가 다르다고?',
          },
          {
            number: 502,
            description: 'around로 \'코앞에, 반대로\' 말하기',
          },
        ],
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
          position: relative;

          .title-img {
            position: absolute;
            left: 10px;
            top: -55px;
          }
          
          .course-title {
            display: inline-block;
            border-left: 2px solid #c18425;
            border-right: 2px solid #c18425;
            padding: 0 10px;
            margin-bottom: 10px;
            font-size: 1.64rem;
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
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .level {
            display: inline-block;
            background-color: #19c79c;
            color: #ffffff;
            padding: 0 0.4rem;
            font-size: 0.8rem;
          }
          
          .content {
            display: inline-block;
            margin-left: 4px;
          }
        }

        .description {
          font-size: 0.8rem;
        }
      }
    }
  }
</style>
