import React, { Component } from 'react';
import "./App.css"
import MessageList from './Components/MessageList/MessageList';
import { Switch, Route } from 'react-router-dom';
import avatar from './image/bender.png';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import Toolbar from './Components/Toolbar/Toolbar'


class App extends Component {


  render() {
    return (
      <div className='app'>
        <header className='app__header'>
          <div className='app_btn'>
            <button className='app__add'>
              Lorem
            </button>
            <button className='app__add'>
              Ipsum
            </button>
            <button className='app__add'>
              Dolor
            </button>
          </div>
          <div className='app__texto'>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
          </div>
          <div className='fa-icon'>
            <i className="fas fa-trophy"></i>
            <span className='fa-icon'>
              <i className="fas fa-rocket"></i>
            </span>
            <i className="fas fa-users"></i>
            <span className='fa-icon'>
              <img src={avatar} alt="Avatar" className="avatar" />
            </span>
          </div>
        </header>
        <div className='grid'>
          <aside className='app__aside'>
            <Sidebar />
          </aside>
          <section className='app__view'>
            <Toolbar />
            <div>
              <Switch>
                <Route exact path='/' component={MessageList} />
              </Switch>
              <Chat />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
