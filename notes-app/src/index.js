import { createNotes } from './notes'
import { setFilterts } from './filters'
import { renderNotes } from './views'

renderNotes();

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNotes()
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {

    setFilterts({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {

    setFilterts({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
});