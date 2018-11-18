import React, {Component} from 'react';
import PropTypes from 'prop-types';
import notes from '../notes'
import Note from './Note'
import './style.css'
import { FaPlus } from 'react-icons/fa';


class App extends Component {
    state = {notes};

    update = (text, id) => this.setState(({notes}) => ({
        notes: notes.map(note => note.id !== id ? note : {...note, text})
    }))

    eachNote = (note) => 
        <Note key={note.id} id={note.id} onChange={this.update}> {note.text} </Note>

    render() {
        return (
            <div className="container">
                <div className="grid">
                    {this.state.notes.map(this.eachNote)}
                </div>
                <button className="add"><FaPlus/></button>
            </div>
        )
    }
}

export default App;