import React, {Component} from "react";
import {connect} from "react-redux";

class TaskListItem extends Component {

    state = {
        checked:false
    }
    async onSubmit(e){
        await this.setState({line:!this.state.isStrikeThrough,checked:!this.state.checked})
        console.log(this.state.checked)
    }
    render() {
        const {title} = this.props.task;
        console.log(this.props.task)
        console.log(this.props);
        return (
            <div className="ui card">
                <div className="content">
                    <input

                        checked={this.state.checked}
                        onClick={(e) => this.onSubmit(e)}
                        type="checkbox"
                    />
                    <div className="header"
                         style={{
                             textDecoration: this.state.checked ? 'line-through' : 'none',
                         }}
                    >

                        {title}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {tasks: state.tasks};
};
export default connect(
    mapStateToProps,
    {}
)(TaskListItem);
