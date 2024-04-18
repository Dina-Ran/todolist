import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.css'
import { language } from '@/i18n'
import {createI18n} from 'vue-i18n'

const localStorageLang = localStorage.lang;


const i18n = createI18n({
  
  legacy: true,
  locale: localStorageLang || 'ru',
  messages: language
  
})


createApp(App).use(i18n).mount('#app');
