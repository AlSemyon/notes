import React, {Component} from 'react';
import PropTypes from 'prop-types';
import notes from '../notes'
import Note from './Note'
import './style.css'


class App extends Component {
    state = {notes};

    eachNate = (note) => {
        <Note id={note.id}>{note.text}
    }

    render() {
        return (
            <div className="container">
                <div className="grid">

                </div>
            </div>
        )
    }

}