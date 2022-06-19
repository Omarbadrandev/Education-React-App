import React, { useCallback, useRef, useState } from "react";
import { useTodos } from "./useTodos";
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

interface Payload {
  text: string;
}

const Incrementer: React.FunctionComponent<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ value, setValue }) => (
  <Button onClick={() => setValue(value + 1)}>Add - {value}</Button>
);

//For React, intrinsic elements are emitted as strings
//(React.createElement("div")), whereas a component you’ve created is not (React.createElement(MyComponent)).
const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { title?: string }
> = ({ children, title, style, ...rest }) => (
  <Button
    {...rest}
    style={{
      ...style,
      backgroundColor: "red",
      color: "white",
      fontSize: "large"
    }}
  >
    {children}
  </Button>
);

//Cutom hook
const useNumber = (initialValue: number) => useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useNumber>[0];

type UseNumberSetValue = ReturnType<typeof useNumber>[1];

function App() {
  //  when the dependency array is empty the useEffect will only run the first time a component is loaded
  // useEffect(() => {
  //   fetch("./../public/data.json")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setPayload(data);
  //     });
  // }, []);

  const { todos, addTodo, removeTodo } = useTodos([
    { id: 0, text: "hey there", done: false }
  ]);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = "";
    }
  }, [addTodo]);

  const [value, setValue] = useNumber(0);

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello There</Box>
      <Incrementer value={value} setValue={setValue} />
      <Heading title="Todos" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
        </div>
      ))}

      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

export default App;
