import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: {}
  },
  mutations: {
    SET_FORM_DATA(state, formData) {
        state.formData = formData;
    }
},
actions: {
    submitFormData({ commit }, formData) {
        commit('SET_FORM_DATA', formData);
    }
},
  getters: {
    getFormData: state => state.formData
  }
}); 