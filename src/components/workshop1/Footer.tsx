import {useTodoContext} from "./TodoContext";
import {ChangeEvent, useMemo} from "react";

export default function Footer() {
    const { getTodoList, changeFinishedStatus, removeAllFinished } = useTodoContext();

    const onCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeFinishedStatus(event.target.checked);
    }

    const deleteAllFinished = () => {
        if (window.confirm("Do you really want to delete all finished todo?")) {
            removeAllFinished();
        }
    }

    const finished = useMemo(() => {
        return getTodoList().filter(todo => todo.finished).length || 0;
    }, [getTodoList]);

    const all = useMemo(() => {
        return getTodoList().length || 0;
    }, [getTodoList]);

    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={onCheckedChange} checked={finished === all}/>
            </label>
            <span>
                <span>Finished {finished}</span> / Total: {all}
            </span>
            <button className="btn btn-danger" onClick={deleteAllFinished}>Delete Finished Tasks</button>
        </div>
    );
}