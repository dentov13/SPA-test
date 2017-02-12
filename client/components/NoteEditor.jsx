import React from 'react';
import './NoteEditor.less';

const NoteEditor = React.createClass({
  getInitialState() {
    return {
      title: '',
      text: '',
      color: '#FFFFFF'
    };
  },
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  },
  handleTitleChange(e) {
    this.SetState({ title: e.target.value });
  },
  handleNoteAdd() {
    const newNode = {
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '', title: '', color: '#FFFFFF' });
  },
  render() {
    return (
      <div class='NoteEditor'>
        <input
          text='text'
          className='NoteEditor__title'
          placeholder='Enter title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          className='NoteEditor__text'
          placeholder='Enter note text'
          rows={5}
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <div className='NoteEditor__footer'>
          <button
            className='NoteEditor__button'
            disabled={!this.state.text}
            onClick={this.handleNoteAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
});

export default NoteEditor;
