import Item from "./Item";
import {useTodoContext} from "./TodoContext";

export default function Options() {
    const { getTodoList } = useTodoContext();

    return (
        <ul className="todo-main">
            {getTodoList().map(todo => (
                <li key={todo.id} className="todo-item">
                    <Item {...todo}/>
                </li>
            ))}
        </ul>
    )
}