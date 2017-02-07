import React from 'react';

import NoteEditor from './NoteEditor.jsx'
import NotesGrid from './NotesGrid.jsx'

const App = React.createClass({
  render() {
    return (
      <div className='App'>
        <h1 className='App__header'>NotesApp</h1>
        <NoteEditor />
        <NotesGrid />
      </div>
    );
  }
});

export default App;
