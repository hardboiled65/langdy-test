import { createStore } from 'vuex'

// Vue.use(Vuex)

const store = createStore({
  state: {
    count: 0,
    selectedLesson: null,
    selectedLessonBadgeColor: 'red',
    selectedDate: null,
    selectedTime: '0:00',
    selectedTeacher: null,
  },

  mutations: {
    increment(state) {
      state.count++;
    },

    setSelectedLesson(state, payload) {
      state.selectedLesson = payload;
    },

    setSelectedLessonBadgeColor(state, payload) {
      state.selectedLessonBadgeColor = payload;
    },

    setSelectedDate(state, payload) {
      state.selectedDate = payload;
    },

    setSelectedTime(state, payload) {
      state.selectedTime = payload;
    },

    setSelectedTeacher(state, payload) {
      state.selectedTeacher = payload;
    },
  },
})

export default store
