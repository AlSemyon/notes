import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';


class Note extends Component {
    edit = () => {
        console.log('Edit')
    }

    remove = () => {
        console.log('Remove')
    }

    save = () => {
        console.log('Save')
    }

    render() {
        return(
            <div className="grid">
                <div className="note">
                    <p>Note text</p>
                    <span>
                        <button onClick={this.edit} className="edit"><FaPencilAlt/></button>
                        <button onClick={this.remove} className="edit"><FaTrash/></button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Note;