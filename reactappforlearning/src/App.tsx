import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState
} from "react";
import "./App.css";

const Heading = (props: { title: string }) => <h2>{props.title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold"
    }}
  >
    {children}
  </div>
);

const List = (props: { items: string[]; onClick?: (item: string) => void }) => (
  <ul>
    {props.items.map((item, index) => (
      <li key={index} onClick={() => props.onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const [payload, setPayload] = useState<Payload | null>(null);

  //  when the dependency array is empty the useEffect will only run the first time a component is loaded
  useEffect(() => {
    fetch("./../public/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setPayload(data);
      });
  }, []);

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
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      });
      newTodoRef.current.value = "";
    }
  }, []);
  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello There</Box>
      <List items={["one", "two", "three"]} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Heading title="Todos" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                id: todo.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
