<template>
  <Navbar @searchValue="search = $event"/>
  <Notes :notes="filterNotes" @delNote="delNote" @changeNote="changeNote" />
  <Modal 
  v-show="modalOpen" 
  :edit="edit"
  :editNote="editNote"
  @closeModal="closeModal" 
  @addNote="addNote"
  @editedNote="editedNote" 
  />
  <AddButton @openModal="openModal" />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Notes from "@/components/Notes.vue";
import Modal from "@/components/Modal.vue";
import AddButton from "@/components/AddButton.vue";

export default {
  components: {
    Navbar,
    Notes,
    Modal,
    AddButton,
  },
  data() {
    return {
      modalOpen: false,
      notes: [],
      edit: false,
      editNote: {},
      search: '',
    };
  },
  computed: {
    filterNotes(){
      return this.search ? this.notes.filter(note => note.title.toLowerCase().includes(this.search.toLowerCase())) : this.notes;
    }
  },
  watch: {
    notes: {
      handler(newUsers) {
        localStorage.notes = JSON.stringify(this.notes);
      },
      deep: true,
    },
  },
  methods: {
    openModal() {
      this.modalOpen = true;
      this.edit = false;
    },
    closeModal(status) {
      this.modalOpen = status;
    },
    addNote(item) {
      this.notes.push(item);
      this.modalOpen = false;
    },
    delNote(id) {
      let index = this.notes.findIndex((note) => note.id == id);
      this.notes.splice(index, 1);
    },
    getNotes() {
      let notes = localStorage.notes;

      if (notes) {
        this.notes = JSON.parse(notes);
      }
    },
    changeNote(id) {
      this.modalOpen = this.edit = true;

      let pikedNote = this.notes.find((note) => note.id == id);
      this.editNote = pikedNote;
    },
    editedNote(newNote){
      this.notes.forEach(note => {
        
        if(note.id == newNote.id){
          note.title = newNote.title;
          note.desc = newNote.desc;
          note.date = newNote.date;
        }
        
      })
    }
  },
  created() {
    this.getNotes();
  },
};
</script>

<style>
</style>
