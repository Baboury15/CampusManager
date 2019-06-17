import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import  Home from './components/Home';
import Contact from './components/contact'
import  StudentList from './components/StudentList';
import CampusList from './components/campusList' 

class App extends Component {

  
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Campus-Student</Link>} scroll>
            <Navigation>
            <Link to="/Home">Home</Link>
                <Link to="/StudentList">Student list</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/campusList//CampusStudents">Campus list</Link>
                <Link to="/CampusStudents">Campus student</Link>




            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'red'}} to="/">Campus-Student</Link>}>
            <Navigation>
            <Link to="/Home"> Home</Link>
              <Link to="/StudentList">Student list</Link>
              <Link to="/campusList">Campus list</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            
            <Main/>
          
            
         
           
            <div/>
          
        </Content>
    </Layout>
    
</div>

    );
  }
}

export default App;
