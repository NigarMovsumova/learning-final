import React, {Component} from "react";
import {connect} from "react-redux";
import {getTasks}from '../actions';
import TaskListItem from './TaskListItem';

class TaskList extends Component {
    render() {
        return (
            <div>
            <h1>Post List</h1>
            <div className="ui cards" style={{align: "center"}}>
                {this.props.tasks.data.map(task => (
                    <TaskListItem key={task.id} task={task}/>
                ))}
            </div>
                 </div>
        )}
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(
    mapStateToProps,
    {getTasks}
)(TaskList);
