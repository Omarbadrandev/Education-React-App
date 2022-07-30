In this file some of the definition and explanations of react hooks and components 

# Intrinsic elements in React
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

usefull tutorials and articles:
https://www.youtube.com/watch?v=Ef3nvKLS4no
https://tsh.io/blog/code-splitting-with-react-webpack-for-frontend-optimisation/


should react lazy replaced in the router "more delaration will come"

When is it worth it to use code splitting? In particular:

- in large JavaScript applications,
- when you need to initialise the app quickly, without using too much processing power (e.g. for mobile devices), or when the application has multiple permission groups or sections visible only to specific users.
- As well as in many other cases.

when we should use code splitting, it’s helpful to introduce the term Time-to-Interactive (TTI).

Time to Interactive (TTI) is a performance metric that measures a page's load responsiveness and helps identify situations where a page looks interactive but actually isn't. TTI measures the earliest time after First Contentful Paint (FCP) when the page is reliably ready for user interactivity.

Benefits of using code splitting
The most important code splitting benefits include:

- Drastic reduction of the data which you need to download and parse in order to make the application interactive (achieving much better Time-to-Interactive).
- Physical separation of different parts of the application and being able to decide when a browser should load them.
- The ability to exclude administrative code for regular users to optimise file size and hide potentially sensitive data.
- Client-side caching improvements achieved by updating only those parts of the application which have actually changed.
Of course, all technologies have their downsides and code splitting is no different:

It may sound obvious to you, but you should keep in mind that code splitting requires downloading some data after the page initialises. When the internet connection is down, there’s no way to load additional modules. Be ready for this and prepare an appropriate message for the user.
You also need to write additional logic to load multiple modules when they are required. However, thanks to Webpack, implementing it is as easy as using one function called import()
Each separate bundle needs to have a header code that allows it to be injected into the application. For Webpack in the production mode, it’s only 80 bytes per file.
There is a slight delay caused by the need to load additional code chunks (but only during the first load).

# WEBPACK
webpack is a build tool you could say but it really does more than only build the code it manages the code

webpack also offer the functionality of minifying the code

to get the webpack the easiest and the most common way is to use the npm "node package manager" which is the defective package manager for front-end and for managing all the dependencies 

bundle all the files together 