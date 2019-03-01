import React from 'react';
import {createTask} from "../actions";
import {connect} from "react-redux";
import TaskList from './TaskList';

class TaskNew extends React.Component {
    state = {
        id:0,
        title: '',
    }

    onSubmit = async e => {
        console.log(this.state.title);
        let lastId= this.state.id;
        let newId= lastId+1;
        console.log(newId);
        await this.setState({id:newId, title: this.state.title})
        this.props.createTask(this.state.id, this.state.title);
    }


    async handleTitleChange(e) {
        await this.setState({title: e.target.value});


    }
    render() {
        return (
            <div>
                <div className="ui container">
                    <div>
                        <br/>
                        <h2>Create a new task</h2>
                        <br/>
                        <div className="ui inverted segment">
                            <div className="ui inverted form">
                                <div className="field">
                                    <label>Title</label>
                                    <input
                                        placeholder="Title"
                                        type="text"
                                        value={this.state.title}
                                        onChange={(e) => this.handleTitleChange(e)}/>
                                </div>

                            </div>
                            <button onClick={(e) => this.onSubmit(e)}
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                </div>
                </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        newTask: state.newTask
    };
}
export default connect(mapStateToProps, {createTask})(TaskNew);