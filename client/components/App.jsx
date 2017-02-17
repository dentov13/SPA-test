import React from 'react';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.css';

function getStateFromFlux() {
  return {
    isLoading: NotesStore.isLoading(),
    notes: NotesStore.getNotes()
  };
}

const App = React.createClass({
  getInitialState() {
    return getStateFromFlux();
  },
  componentWillMount() {
    NotesActions.loadNotes();
  },
  componentDidMount() {
    NotesStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    NotesStore.removeChangeListener(this._onChange);
  },
  handleNoteAdd(noteData) {
    NotesActions.createNote(noteData);
  },
  handleNoteDelete(note) {
    NotesActions.deleteNote(note.id);
  },
  render() {
    return (
      <div className='App'>
        <h1 className='App__header'>Notes App</h1>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <NotesGrid
          notes={this.state.notes}
          onNoteDelete={this.handleNoteDelete}
        />
      </div>
    );
  },
  _onChange() {
    this.setState(getStateFromFlux());
  }
});

export default App;
