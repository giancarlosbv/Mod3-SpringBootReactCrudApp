import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import Footer from './components/Footer';
import Header from './components/Header';
import ListTasks from './components/ListTasks';
import UpdateTasks from './components/UpdateTasks';
import ViewTask from './components/ViewTask';

const App = ()=> {
  return (
    <div>
      <Router>
        <Header />
        <div className="router container">
        
          <Switch>
            <Route path="/" exact component={ListTasks}></Route>
            <Route path="/tasks" component={ListTasks}></Route>
            <Route path="/add-task" component={AddTask}></Route>
            <Route path="/update-task/:id" component={UpdateTasks}></Route>
            <Route path="/delete-task/:id" component={DeleteTask}></Route>
            <Route path="/view-task/:id" component={ViewTask}></Route>

          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
