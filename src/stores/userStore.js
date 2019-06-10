import Vue from 'vue';

export const userStore = Vue.observable({ user: null });

window.userStore = userStore;