import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isedit: false
        }
    }
    edit = () => {
        this.setState({isedit: true})
    }

    remove = () => {
        console.log('Remove')
    }

    save = e => {
        e.preventDefault();
        this.setState({isedit: false})
    }
    renderForm = () => 
        <div className="note">
            <form>
                <textarea ref={node => this.newNote = node}/>
                <button onClick={this.save} className="save"><FaSave/></button>
            </form>
        </div>

    renderDisplay = () => 
        <div className="note">
        <p>{this.props.children}</p>
        <span>
            <button onClick={this.edit} className="edit"><FaPencilAlt/></button>
            <button onClick={this.remove} className="edit"><FaTrash/></button>
        </span>
    </div>

    render() {
        return(
            <div className="grid">
                {this.state.isedit ? this.renderForm(): this.renderDisplay()}
            </div>
        )
    }
}

export default Note;