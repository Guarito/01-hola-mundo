import { useState } from "react";



const TaskForm = ({ addTask }) => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input type="text" className="form-control" id="task" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input type="text" className="form-control" id="description" />
            </div>
            <div className="mb-3">
                <label htmlFor="level">Level priority</label>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    id="level"
                    placeholder="Open this select menu"
                >
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="blocking">Blocking</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={addTask}>
                Add
            </button>
        </form>
    );
};

export default TaskForm;
