In this file some of the definition and explanations of react hooks and components 

# intrinsic elements in React
For React, intrinsic elements are emitted as strings (React.createElement("div")), whereas a component you’ve created is not (React.createElement(MyComponent)).

# useEffect hook 
The useEffect Hook allows to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
e.g. : useEffect(<function>, <dependency>)


# useContext hook
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

helpfull documentation and tutorials:
https://www.w3schools.com/react/react_usecontext.asp
https://reactjs.org/docs/hooks-reference.html#usecontext
https://www.youtube.com/watch?v=5LrDIWkK_Bc&ab_channel=WebDevSimplified

# Custom hooks
Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.

simple example:
const useNumber = (initialValue: number) => useState<number>(initialValue);
helpful tutorial: 
https://www.youtube.com/watch?v=qACBGbBxVYY&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&index=26&ab_channel=JackHerrington
https://reactjs.org/docs/hooks-custom.html

# Generics
TypeScript Generics is a tool that provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.

# Code splitting 

When you're doing code splitting, it is important to keep the bundle sizes of the HTML, CSS, and JavaScript as small as possible. But often as applications scale larger bundles are unavoidable. And this can negatively affects the web vitals for your website.

when you come to have a react app you have to download the whole bundle 

so we have to lazy load the components and render some fallback for while components are being loaded in.

usefull tutorial:
https://www.youtube.com/watch?v=Ef3nvKLS4no


# WEBPACK
webpack is a build tool you could say but it really does more than only build the code it manages the code

webpack also offer the functionality of minifying the code

to get the webpack the easiest and the most common way is to use the npm "node package manager" which is the defective package manager for front-end and for managing all the dependencies 

bundle all the files together 