import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const initialTask = {
        title: "",
        description: "",
        completed: false,
        level: "",
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
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
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
                    <option value="">--Choose priority level--</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Blocking">Blocking</option>
                </select>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    );
};

export default TaskForm;
