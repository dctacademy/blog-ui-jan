import React from 'react' 
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Count from './components/Count'
import TaskList from './TaskList'
import UsersList from './UsersList'
import UserShow from './UserShow'

// npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React App!!!</h1>
                <Link to="/">Home</Link> - 
                <Link to="/about">About</Link> - 
                <Link to="/count">Count</Link> - 
                <Link to="/contact">Contact</Link> - 
                <Link to="/tasks">Tasks</Link> - 
                <Link to="/users">Users</Link> - 
            
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/count" component={Count} />
                <Route path="/contact" component={Contact} />
                <Route path="/tasks" component={TaskList} />
                <Route path="/users" component={UsersList} exact={true} />
                <Route path="/users/:id" component={UserShow} />
            </div>
        </BrowserRouter>
    )
}

export default App



// import Greeting from './Greeting'
// import TaskList from './TaskList'
// import UsersList from './UsersList'
    // < Greeting />
    // <TaskList />
    // <UsersList />