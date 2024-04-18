<template>
  <header class="header">
    <Transition name="header__nav">
      <nav class="header__nav" v-show="header">
        <button class="header__lang" @click="switchLang">{{$i18n.locale}}</button>
        <h1 class="header__title">{{$t('notes')}}</h1>
        <button class="header__search" @click="header = false">
          <img src="@/assets/images/search.svg" alt="" />
        </button>
      </nav>
    </Transition>
    <Transition name="header__search">
    <nav class="header__search" v-show="!header">
      <button class="header__back" @click="(header = true), (search = '')">
        <img src="@/assets/images/back.svg" alt="" />
      </button>
      <div class="container">
        <input
          v-model="search"
          type="text"
          class="header__input"
          placeholder="Поиск..."
        />
      </div>
      <button class="header__clear" @click="search = ''">
        <img src="@/assets/images/clear.svg" alt="" />
      </button>
    </nav>
    </Transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      header: true,
      search: "",
    };
  },
  watch: {
    search(val){
      this.$emit('searchValue', val);
    }
  },
  methods: {
    switchLang(){
      this.$i18n.locale == 'ru' ? this.$i18n.locale = 'uz' : this.$i18n.locale = 'ru';
      localStorage.lang = this.$i18n.locale
    }
  }
};
</script>

<style scoped>
.header {
  background: #f3edf7;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 14px 16px;
  height: 64px;
  overflow: hidden;
}

.header__nav,
.header__search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__lang {
  font-size: 22px;
  color: #1c1b1f;
  text-transform: uppercase;
}

.header__title {
  color: #1c1b1f;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 127%;
}

.header__input {
  display: block;
  width: 100%;
  color: #9d9d9d;
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
}

.header__nav-enter-active, .header__nav-leave-active {
  transition: 0.5s linear;
}

.header__nav-enter-from, .header__nav-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}

.header__nav-enter-to, .header__nav-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.header__search-enter-active, .header__search-leave-active {
  transition: 0.5s linear;
}

.header__search-enter-from, .header__search-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.header__search-enter-to, .header__search-leave-from {
  opacity: 1;
  transform: translateY(0px);
}


</style>