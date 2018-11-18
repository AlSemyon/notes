import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';


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
                        <button onClick={this.edit} className="edit"><FaPencil/></button>
                        <button onClick={this.remove} className="edit"><FaTrash/></button>
                    </span>
                </div>
            </div>
        )
    }
}