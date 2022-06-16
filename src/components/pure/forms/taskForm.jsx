import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { LEVELS } from "../../../models/levels.enun";

const TaskForm = ({ addTask }) => {
    const initialTask = {
        title: "",
        description: "",
        level: LEVELS.NORMAL,
    };
    const [formData, setFormData] = useState(initialTask);

    const resetForm = () => setFormData(initialTask);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => {
            return {
                ...formData,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            ...formData,
            id: uuidv4(),
        });
        resetForm();
    };
    return (
        <form>
            <div className="mb-3">
                <input
                    placeholder="Task title"
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    autoFocus
                />
            </div>
            <div className="mb-3">
                <input
                    placeholder="Description"
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="level">Level priority</label>
                <select
                    className="form-select"
                    name="level"
                    id="level"
                    value={formData.level}
                    onChange={handleChange}
                    // placeholder="Open this select menu"
                >
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.HIGH}>High</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={
                    !formData.title || !formData.description || !formData.level
                }
            >
                Add
            </button>
        </form>
    );
};

export default TaskForm;
