<template>
  <div class="notes__item">
    <div class="notes__item-top" :class="{between: !grid}">
      <h3 class="notes__item-title">{{note.title}}</h3>
      <p class="notes__item-date">{{note.date}}</p>
    </div>
    <p class="notes__item-desc">{{note.desc}}</p>
    <div class="notes__item-btns">
      <button class="notes__item-btn edit" @click="$emit('changeNote', note.id)">
        <img src="@/assets/images/edit.svg" alt="" />
        <span>РЕДАКТИРОВАТЬ</span>
      </button>
      <button @click="$emit('delNote', note.id)" class="notes__item-btn del">
        <img src="@/assets/images/del.svg" alt="" />
        <span>Удалить</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: Boolean,
    note: Object
  }
};
</script>

<style>
.notes__item {
  border-radius: 16px;
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.05) 0%,
      rgba(103, 80, 164, 0.05) 100%
    ),
    #fffbfe;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  padding: 16px;
}

.notes__item-top {
  margin-bottom: 17px;
}

.notes__item-top.between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notes__item-title {
  color: #1c1b1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.1px;
}

.notes__item-date {
  color: #cac4d0;
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
  letter-spacing: 0.25px;
}

.notes__item-desc {
  color: #49454f;
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
  letter-spacing: 0.25px;
  margin-bottom: 18px;
}

.notes__item-btns {
  display: flex;
  justify-content: flex-end;
}

.notes__item-btn {
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background: transparent;
  transition: 500ms;
}

.notes__item-btn span {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 143%;
  letter-spacing: 0.1px;
  text-transform: uppercase;
}

.edit {
  color:  #6750A4;
}

.edit:hover {
  background: #E6DDFF;
}

.del {
  color:  #CF1B1B;
}

.del:hover {
  background: #FFE1E1;
}
</style>