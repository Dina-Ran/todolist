<template>
<Transition name="modal">
  <div class="modal" @click="closeModal">
    <div class="modal__block" @click.stop="">
      <h2 class="modal__title">{{edit ? 'Изменить заметку' : 'Добавить заметку'}}</h2>
      <div class="modal__inputs">
        <label>
          <span>Title</span>
          <input @input="(e) => title = e.target.value" type="text" placeholder="Title" :value="editNote.title" v-if="edit"/>
          <input type="text" placeholder="Title" v-model="title" v-else/>
        </label>
        <label>
          <span>Content</span>
          <textarea placeholder="Content" @input="(e) => desc = e.target.value" :value="editNote.desc" v-if="edit"></textarea>
          <textarea placeholder="Content" v-model="desc" v-else></textarea>
        </label>
      </div>
      <div class="modal__btns">
        <button @click="closeModal" class="modal__btn cancel">Отмена</button>
        <button v-if="!edit" class="modal__btn add" @click="addNote">Добавить</button>
        <button v-else class="modal__btn add" @click="changeNote">Изменить</button>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    edit: Boolean,
    editNote: Object
  },
  data(){
    return {
      title: '',
      desc: '',
    }
  },
  methods: {
    closeModal(){
      this.$emit('closeModal', false);
      this.title = '';
      this.desc = '';
    },
    addNote(){
      if(this.title != '' && this.desc != ''){
        const item = {
          id: uuidv4(),
          title: this.title,
          desc: this.desc,
          date: new Date().toLocaleDateString()
        }
        this.$emit('addNote', item);
        this.title = '';
        this.desc = '';
      }
    },
    changeNote(){
      
      if(this.title != '' || this.desc != ''){
        const editedNote = {
          id: this.editNote.id ,
          title: this.title == '' ? this.editNote.title : this.title,
          desc: this.desc == '' ? this.editNote.desc : this.desc,
          date: new Date().toLocaleDateString(),
        }
        this.$emit('editedNote', editedNote);
        this.closeModal();
      }
    }
  }
};
</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__block {
  border-radius: 28px;
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.11) 0%,
      rgba(103, 80, 164, 0.11) 100%
    ),
    #fffbfe;
  max-width: 312px;
  width: 100%;
  padding: 24px;
}

.modal__title {
  color: #1c1b1f;
  font-size: 24px;
  font-weight: 400;
  line-height: 133%;
  margin-bottom: 16px;
}

.modal__inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.modal__inputs label {
  position: relative;
}

.modal__inputs span {
  position: absolute;
  left: 16px;
  top: 8px;
  color: #6750a4;
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
  letter-spacing: 0.4px;
}

.modal__inputs input,
.modal__inputs textarea {
  border-radius: 4px 4px 0px 0px;
  background: #e7e0ec;
  font-family: 'Roboto';
  width: 100%;
  height: 57px;
  border: none;
  outline: none;
  resize: none;
  padding: 23px 16px 9px;
  color: #49454f;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #1c1b1f;
}

.modal__btns {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.modal__btn {
  padding: 10px 12px;
  font-family: 'Roboto';
  display: flex;
  gap: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 143%;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  border-radius: 5px;
  transition: 500ms;
}

.cancel {
  color: #cf1b1b;
}

.cancel:hover {
  background: #ffe1e1;
}

.add {
  color: #6750a4;
}

.add:hover {
  background: #E6DDFF;
}

.modal-enter-active, .modal-leave-active {
  transition: 200ms linear;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

</style>