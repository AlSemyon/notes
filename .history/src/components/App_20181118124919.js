import React, {Component} from 'react';
import PropTypes from 'prop-types';
import notes from '../notes'
import Note from './Note'
import './style.css'


class App extends Component {
    state = {notes};

    eachNote = (note) => {
        <Note key={note.id} id={note.id}> {note.text} </Note>
    }

    render() {
        return (
            <div className="container">
                <div className="grid">
                    {this.state.notes.map(this.eachNote)}
                </div>
            </div>
        )
    }

}