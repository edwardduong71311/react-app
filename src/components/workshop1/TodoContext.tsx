import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {addTodo, deleteFinishedTodo, changeFinishStatusAll, getTodos, removeTodo, toggleFinishTodo} from "../../data/workshop1";

type Props = {
    children: ReactNode;
}
export type Todo = {
    id: string;
    value: string;
    finished: boolean;
}
type TodoContextType = {
    getTodoList: () => Todo[];
    saveTodo: (todo: Todo) => void;
    finishTodo: (todo: Todo) => void;
    deleteTodo: (todo: Todo) => void;
    removeAllFinished: () => void;
    changeFinishedStatus: (value: boolean) => void;
}

const TodoContextProvider = createContext<TodoContextType>({
    getTodoList(): Todo[] { return [] },
    saveTodo(todo: Todo): void {},
    finishTodo(todo: Todo): void {},
    deleteTodo(todo: Todo): void {},
    removeAllFinished(): void {},
    changeFinishedStatus(value): void {},
})

export default function TodoContext(props: Readonly<Props>) {
    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodoList = useCallback(() => {
        return todos;
    }, [todos])

    const deleteTodo = async (todo: Todo) => {
        const data = await removeTodo(todo.id);
        setTodos(data);
    }

    const saveTodo = async (todo: Todo) => {
        const data = await addTodo(todo);
        setTodos(data);
    }

    const finishTodo = async (todo: Todo) => {
        const data = await toggleFinishTodo(todo.id);
        setTodos(data);
    }

    const removeAllFinished = async () => {
        const data = await deleteFinishedTodo();
        setTodos(data);
    }

    const changeFinishedStatus = async (value: boolean) => {
        const data = await changeFinishStatusAll(value);
        setTodos(data);
    }

    useEffect(() => {
        const controller = new AbortController();
        getTodos(controller.signal).then((data) => {
            setTodos(data);
        });

        return () => {
            controller.abort();
        }
    }, []);

    const value = useMemo(() => {
        return {
            getTodoList,
            deleteTodo,
            saveTodo,
            finishTodo,
            removeAllFinished,
            changeFinishedStatus
        }
    }, [getTodoList]);

    return (
        <TodoContextProvider.Provider value={value}>
            {props.children}
        </TodoContextProvider.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContextProvider);