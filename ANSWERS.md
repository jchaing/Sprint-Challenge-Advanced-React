- [ ] Why would you use class component over function components (removing hooks from the question)?

    - You would use class components over function components if your component needs state, lifecycle methods or refs. Also, if the project you're working on already implemented class components (legacy code). 

- [ ] Name three lifecycle methods and their purposes.

    - componentDidMount - AKA Mounting Phase. The inital birth phase where your render method is invoked.

    - componentDidUpdate - AKA Upading Phase. Used to change the component's state data, forcing a call to render.

    - componentWillUnmount - AKA Unmounting Phase. When the component is removed from the screen.

- [ ] What is the purpose of a custom hook?

    - Custom Hooks are used to keep your code DRY so that they can be reused to keep the codebase smaller.

- [ ] Why is it important to test our apps?

    - Testing is important to our apps because it can surface bugs faster, allows us to trust the code, think about edge cases, gives the code a safety net and acts as a documentation for our code.
