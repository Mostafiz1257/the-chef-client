import React from 'react';
import Navbar from '../Main/Navbar';
import Footer from '../Main/Footer';


const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='m-12 gap-5'>
                <p className='font-bold'>Tell us the differences between uncontrolled and controlled components.</p>
                <p>Ans:Uncontrolled components:

                    An uncontrolled component manages its own state internally, without any intervention from the parent component.
                    They obtain their initial value from the defaultValue prop, and then their state can be updated through user input using the ref attribute to access the underlying DOM element.
                    Uncontrolled components can be simpler to implement since the parent component does not have to manage their state.
                    <br />
                    Controlled components:

                    A controlled component is a component where the parent component manages the component’s state through props, typically with the useState hook.
                    Controlled components are more flexible since their state can be accessed and updated from the parent component.
                    However, they require more code and can be more complex to implement.</p>
                <br />
                <p className='font-bold'>How to validate React props using PropTypes ?</p>
                <p>Ans:1.nstall PropTypes: PropTypes is included as a separate package in React. To use it, you need to install it in your project using a package manager such as npm or yarn. <br />
                    2.Import PropTypes: In the component file where you want to validate the props, import the PropTypes library . <br />
                    3.efine PropTypes: Define the PropTypes for your component by adding a propTypes static property to the component. The propTypes object should have keys that correspond to the names of the props, and values that specify the expected data types.
                </p> <br />
                <p className='font-bold'>Tell us the difference between nodejs and express js.</p>
                <p>Ans:1.Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of the browser, on the server-side. It provides a platform for building scalable, high-performance network applications using event-driven, non-blocking I/O. Express.js, on the other hand, is a web application framework that is built on top of Node.js, providing a layer of abstraction for building web applications.
                    <br />
                    2.Node.js provides a range of built-in modules for low-level system programming, such as file system access, networking, and cryptography, while Express.js is a higher-level framework that provides features for building web applications, such as routing, middleware, and templating. <br />
                    3.While Node.js can be used to build a variety of applications, Express.js is primarily used for building web applications. It provides a range of features and tools that make it easy to build REST APIs, web applications, and real-time applications.
                    <br />
                    <p>What is a custom hook, and why will you create a custom hook?</p>
                    <p>Ans:  custom hook in React is a reusable function that encapsulates some commonly used logic or stateful behavior, allowing it to be shared across multiple components. Custom hooks provide a way to share logic between components without the need for inheritance or prop drilling.

                        Custom hooks can be used to abstract away complex logic, such as API calls, form validation, and state management, making it easier to reuse that logic across multiple components. Custom hooks can also help to improve code organization and readability by separating out complex logic from the components themselves.</p>
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;