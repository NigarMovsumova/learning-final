import React from "react";
import TaskNew from '../components/TaskNew';
import TaskList from '../components/TaskList'

export default () => {
    return (
        <div>
            <div className="ui main container" style={{ marginTop: "60px" }}>
                <TaskNew/>
                <TaskList/>
            </div>

        </div>
    );
};
