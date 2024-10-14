import {Todo, useTodoContext} from "./TodoContext";

export default function Item(props: Readonly<Todo>) {
    const { finishTodo, deleteTodo } = useTodoContext();

    const toggleFinish = () => {
        finishTodo({...props});
    }

    return(
        <>
            <label>
                <input type="checkbox" onChange={toggleFinish} checked={props.finished}/>
                <span>{props.value}</span>
            </label>
            <button
                className="btn btn-danger"
                onClick={() => {
                    if (window.confirm("Do you really want to delete this todo?")) {
                        deleteTodo({...props});
                    }
                }}
            >Delete</button>
        </>
    );
}