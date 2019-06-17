import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home from './Home';
import CampusList from './campusList';
import Contact from './contact';
import studentList from './StudentList';
import CampusStudents from './CampusStudents'




const Main = () => (
 
 <main>
 <Switch>

    <Route exact path="/Home" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/StudentList" component={studentList} />
    <Route path="/campusList" component={CampusList} />
    <Route path="/CampusStudents" component={CampusStudents} />



</Switch>
</main>
)

export default Main;
