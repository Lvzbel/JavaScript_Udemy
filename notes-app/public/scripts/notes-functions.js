'use strict'

// ==============================================================
// Generate the DOM structure for a note
// ==============================================================
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p');
  const statusEl = document.createElement('p')

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl);

  // Setup the link
  noteEl.href = `/edit.html#${note.id}`
  noteEl.classList.add('list-item')

  // Setup the status message --- Try to figure out why thi isnt working
  // statusEl.textContent = genereateLastEdited(note.updatedAt);
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)
  
  return noteEl
}

// ==============================================================
// Render application notes
// ==============================================================
const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector('#notes')
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  notesEl.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
      notesEl.appendChild(noteEl)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
  }


}

// ==============================================================
// Generate the last edited message
// ==============================================================
const genereateLastEdited = (timestamp) => timeFromNow.textContent = `Last edited ${moment(timestamp).fromNow()}`;