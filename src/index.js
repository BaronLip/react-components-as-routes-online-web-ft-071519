// Make sure to import components after refactoring.
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Refactored to the Navbar.js file
/* Add basic styling for NavLinks */
// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white',
// }

/* add the navbar component */
// const Navbar = () =>
//     <div>
//         <NavLink
//             to="/"
//             /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//             exact
//             /* add styling to Navlink */
//             style={link}
//             /* add prop for activeStyle */
//             activeStyle={{
//                 background: 'darkblue'
//             }}
//         >Home</NavLink>
//         <NavLink
//             to="/about"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'darkblue'
//             }}
//         >About</NavLink>
//         <NavLink
//             to="/login"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'darkblue'
//             }}
//         >Login</NavLink>
//         <NavLink
//             to="/signup"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'darkblue'
//             }}
//         >Signup</NavLink>
//         <NavLink
//             to="/messages"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'darkblue'
//             }}
//         >Messages</NavLink>
//     </div>;

// Refactored to Home.js file.
// const Home = () => <h1>Home!</h1>;

// Refactored to About.js file.
// const About = () => <h1>This is my about component!</h1>;

// Refactored to Login.js file.
// const Login = () =>
//     <form>
//         <h1>Login</h1>
//         <div>
//             <input type="text" name="username" placeholder="Username" />
//             <label htmlFor="username">Username</label>
//         </div>
//         <div>
//             <input type="password" name="password" placeholder="Password" />
//             <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//     </form>;

ReactDOM.render((
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
        </div>
    </Router>),
    document.getElementById('root')
);