### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
        React is both a library and a collection of conventions for creating reactive and immersive single-page apps.
        react allows you to easliy create, alter, and manipulate DOM elements from client-side javascript

- What is Babel?
        Babel is a library that provides 'translation' between different syntaxes, in our case from JSX to HTML

- What is JSX?
        JSX is a syntax, very similar to HTML, that allows us to directly create DOM elements in JS without using strings, string template literals, etc.

- How is a Component created in React?
        To create a react component, you define a function (normally in it's own file). This function must return a single HTML element, but this single element may have child elements. 

- What are some difference between state and props?
        State is something that is stored in React's magic 'buffer' between renders. Props are passed down to components as parameters, and are unlikely to change for a given instance of a component, but are designed to allow for resuing components in multiple places.

- What does "downward data flow" refer to in React?
        This refers to how data flows downward, from parent components to child components to create the full picture, through the use of props

- What is a controlled component?
        A controlled component refers to an input who's value is synced with the state. To accomplish this, we have to have an event listener set to update state on every keydown, which in turn updates the value and the display. This allows us to keep react as 'the one source of truth'

- What is an uncontrolled component?
        These elements are not controlled by react, and while unconventional are required by some external libraries

- What is the purpose of the `key` prop when rendering a list of components?
        This helps react keep up with the seperate elements, they act almost like an ID

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
        This is poor because if the memebers of the array are altered, the indexes may change. There is nothing about the index that is uniquely connected to the elements.

- Describe useEffect.  What use cases is it used for in React components?
        These are for things like making API calls, setting timers, changing DOM elemets, or anything else that can be seena as a side-effect of the main functions

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
        useRef is like virtually placing a pin in an element when youa re creating it, which allows us to quickly and efficiently reference live elements in the DOM. It does not cause the component to rerender.

- When would you use a ref? When wouldn't you use one?
        Using a ref can be tempting, but should be avoided if possible. It is most often used for setting up and clearing timers, 

- What is a custom hook in React? When would you want to write one?
        A custom hook can be used for almost anything, it is a custom function that you write! It should be used whenever you have code that could be used in multiple components.