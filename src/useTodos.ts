import { useCallback, useReducer } from "react";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

export function useTodos(initialTodos: Todo[]): {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
} {
  //useReducer a variant of a way to store the Data
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
            done: false
          }
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
      default:
        throw new Error();
    }
  }, initialTodos);

  // In order to hide dispatch two extra functions are developed : 1-addTodo 2-removeTodo

  // addTodo + removeTodo functions have no dependencies that means
  // everytime that we go through this custom hook which we will every single time app renders we will not get a new add to do function we will get a refernece
  // to the original function because the dependency hasn't changed
  const addTodo = useCallback((text: string) => {
    dispatch({
      type: "ADD",
      text: ""
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id
    });
  }, []);
  return { todos, addTodo, removeTodo };
}
