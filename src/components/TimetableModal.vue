<template>
  <div class="timetable-modal">
    <div class="modal-overlay" v-on:click="$emit('closeModal')">
    </div>
    <div :class="{
      'teacher-box': true,
      'show': boxShow ? true : false,
    }">
      <header class="header">
        <div class="title">
          {{ dateString(date) }} {{ time }} <span class="red">{{ amPm(time) }}</span>
        </div>
      </header>
      <div class="container">
        <div class="teacher" v-for="teacher in teachers" v-bind:key="teacher.name"
          v-on:click="false">
          <div class="profile-wrapper">
            <div class="profile-picture">
              <img :src="teacher.profilePicture" />
            </div>
            <div class="profile-info">
              <div class="profile-name-star">
                <div class="name bold">{{ teacher.name }}</div>
                <div class="star">
                  <span class="purple">★</span>{{ teacher.star.toFixed(1) }}점
                </div>
              </div>
              <div class="edu-tags">
                <div class="edu-tag" v-for="eduTag in teacher.eduTags" v-bind:key="eduTag">
                  {{ eduTag }}
                </div>
              </div>
              <div class="tags">
                <div class="tag" v-for="tag in teacher.tags" v-bind:key="tag">
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },

  emits: [
    'closeModal',
  ],

  props: {
    date: Date,
    weekday: Number,
    time: String,
  },

  data: () => ({
    boxShow: false,
    teachers: [
      {
        name: 'Jeniffer',
        profilePicture: 'https://langd-profile-pic.s3.amazonaws.com/uploads/user/profile_pic/20171/BeautyPlus_20201206121742040_save.jpg',
        star: 4.8,
        eduTags: [
          'TEFL 보유',
        ],
        tags: [
          '친절',
          '차분',
          '꼼꼼',
        ],
      },
      {
        name: 'Danica',
        profilePicture: 'https://langd-profile-pic.s3.amazonaws.com/uploads/user/profile_pic/14724/138554865_1047938902336696_8845788053393351178_n.jpg',
        star: 4.9,
        eduTags: [
          'TEFL 보유',
          '다양한 티칭 경험',
        ],
        tags: [
          '친근',
          '활발',
        ],
      },
      {
        name: 'Robert',
        profilePicture: 'https://langd-profile-pic.s3.amazonaws.com/uploads/user/profile_pic/22700/AirBrush_20210209120341-01.jpeg',
        star: 0.0,
        eduTags: [
          '공인 교사 자격증',
          'TESOL 보유',
        ],
        tags: [
          '친절',
          '활발',
          '꼼꼼',
        ],
      },
      {
        name: 'Joyce',
        profilePicture: 'https://langd-profile-pic.s3.amazonaws.com/uploads/user/profile_pic/18053/20200730_130847.jpg',
        star: 4.8,
        eduTags: [
          'ESL 보유',
          '다양한 티칭 경험',
        ],
        tags: [
          '차분',
          '꼼꼼',
        ],
      },
      {
        name: 'Ava',
        profilePicture: 'https://langd-profile-pic.s3.amazonaws.com/uploads/user/profile_pic/22801/240606395_395341152244008_7584351807268937093_n.jpg',
        star: 5.0,
        eduTags: [
          'TEFL 보유',
        ],
        tags: [
          '친절',
          '활발',
          '꼼꼼',
        ],
      },
      {
        name: 'Kevin',
        profilePicture: 'https://langd-profile-pic.s3.amazonaws.com/uploads/user/profile_pic/21830/595059F4-0FCB-4BFC-9409-2BDF5D0FA029.jpeg',
        star: 4.8,
        eduTags: [
          'TESOL 보유',
        ],
        tags: [
          '친절',
          '활발',
          '꼼꼼',
        ],
      },
    ],
  }),

  methods: {
    dateString(date: Date): string {
      let str = '';
      str += date.getMonth().toString() + '월';
      str += date.getDate().toString() + '일';

      return str;
    },

    amPm(time: string): string {
      const hour: number = Number(time.split(':'));
      if (hour < 12) {
        return '오전';
      }
      return '오후';
    },
  },

  mounted() {
    this.boxShow = true;
  },

  beforeUnmount() {
    this.boxShow = false;
  },
})
</script>

<style lang="scss">
.timetable-modal {
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

.teacher-box {
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

  .profile-picture {
    width: 42px;
    height: 42px;
    border-radius: 25px;
    overflow: hidden;
    margin: 10px;

    img {
      width: 42px;
      height: 42px;
    }
  }

  .edu-tags, .tags {
    display: flex;
    flex-direction: row;
  }

  .edu-tag, .tag {
    margin-right: 4px;
    font-size: 0.8rem;

    &::before {
      content: '#';
    }
  }

  .container {
    padding: 10px;
    max-height: 80%;
    overflow-y: scroll;

    .teacher {
      border: 1px solid #e0e0e0;
      border-bottom: none;

      &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
      }

      .profile-wrapper {
        display: flex;

        .profile-info {
          margin: 10px 0;
          .profile-name-star {
            display: flex;
            align-items: center;

            .name {
              font-size: 20px;
              margin-right: 4px;
            }

            .star {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
