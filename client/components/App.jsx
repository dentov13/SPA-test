import React from 'react';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.css';

const App = React.createClass({
  handleNoteAdd(data) {
    console.log(data);
  },
  render() {
    return (
      <div className='App'>
        <h1 className='App__header'>NotesApp</h1>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <NotesGrid />
      </div>
    );
  }
});

export default App;
