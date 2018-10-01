import { initializeEditPage, genereateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const noteId = location.hash.substring(1);
const noteTitle =  document.querySelector('#note-title');
const timeFromNow = document.querySelector('#timeFromNow');
const noteBody = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

initializeEditPage(noteId);


// note will update every time something is changed in either title or body of the note
noteTitle.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
  timeFromNow.textContent = genereateLastEdited(note.updatedAt);
})

noteBody.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
  timeFromNow.textContent = genereateLastEdited(note.updatedAt);
})

// Button to remove a single note
removeElement.addEventListener('click', (e) => {
  removeNote(noteId);
  location.assign('/index.html');
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
  
  // Populate inputs with notes title and note body
  genereateLastEdited(note.updatedAt);
  noteTitle.value = note.title;
  noteBody.value = note.body;
})