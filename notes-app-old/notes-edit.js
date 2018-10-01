'use strict'

const noteId = location.hash.substring(1);
const noteTitle =  document.querySelector('#note-title');
const timeFromNow = document.querySelector('#timeFromNow');
const noteBody = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);



if (!note) {
  location.assign('/index.html')
}

// Populate inputs with notes title and note body
timeFromNow.textContent = genereateLastEdited(note.updatedAt);
noteTitle.value = note.title;
noteBody.value = note.body;

// note will update every time something is changed in either title or body of the note
noteTitle.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();;
  timeFromNow.textContent = genereateLastEdited(note.updatedAt);
  saveNotes(notes);
})

noteBody.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  timeFromNow.textContent = genereateLastEdited(note.updatedAt);
  saveNotes(notes);
})

// Button to remove a single note
removeElement.addEventListener('click', (e) => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
  }
  
  let note = notes.find((note) => note.id === noteId);

  if (!note) {
    location.assign('/index.html')
  }
  
  // Populate inputs with notes title and note body
  genereateLastEdited(note.updatedAt);
  noteTitle.value = note.title;
  noteBody.value = note.body;
})