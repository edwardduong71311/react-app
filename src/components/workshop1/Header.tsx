import {Todo, useTodoContext} from "./TodoContext";
import {useState} from "react";

export default function Header() {
    const [text, setText] = useState<string>('')
    const { saveTodo } = useTodoContext();

    const onEnter = (todo: Todo) => {
        saveTodo(todo);
        setText('');
    }

    return (
        <div className="todo-header">
            <input
                type="text" placeholder="Enter task name"
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        onEnter({
                            id: '',
                            value: text,
                            finished: false,
                        });
                    }
                }}
            />
        </div>
    )
}