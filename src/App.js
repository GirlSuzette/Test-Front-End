import React, { Component } from 'react';
import "./App.css"
import MessageList from './Components/MessageList/MessageList';
import { Switch, Route, Link } from 'react-router-dom';
import avatar from './assets/bender.png';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import Toolbar from './Components/Toolbar/Toolbar';
import MessageListRoboto from './Components/MessageList/MessageListRoboto';
import ToolbarRoboto from './Components/Toolbar/ToolbarRoboto';
import ToolbarCss from './Components/Toolbar/ToolbarCss';
import MessageListCss from './Components/MessageList/MessageListCss';

class App extends Component {

  state = {
    showItemOne: true,
    showItemTwo: false,
    showItemThree: false
  }

  onchangeOne = () => {
    this.setState({
      showItemOne: !this.state.showItemOne,
      showItemTwo: false,
      showItemThree: false
    })
  }

  onchangeTwo = () => {
    this.setState({
      showItemTwo: !this.state.showItemTwo,
      showItemOne: false,
      showItemThree: false
    })
  }

  onchangeThree = () => {
    this.setState({
      showItemThree: !this.state.showItemThree,
      showItemOne: false,
      showItemTwo: false

    })
  }

  render() {
    return (
      <div className='app'>
        <header className='app__header'>
          <div className='app_btn'>
            <Link to='/'>
              <button className='app__add' onClick={this.onchangeOne}>
                Bender
              </button>
            </Link>
            <Link to='/rick'>
              <button className='app__add' onClick={this.onchangeTwo}>
                Pickle
              </button>
            </Link>
            <Link to='/rich' >
              <button className='app__add' onClick={this.onchangeThree}>
                Rich
            </button>
            </Link>
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
            <Sidebar
              showItemOne={this.state.showItemOne}
              showItemTwo={this.state.showItemTwo}
              showItemThree={this.state.showItemThree}
            />
          </aside>
          <section className='app__view'>
            <Toolbar showItemOne={this.state.showItemOne} />
            <ToolbarRoboto showItemTwo={this.state.showItemTwo} />
            <ToolbarCss showItemThree={this.state.showItemThree} />
            <div>
              <Switch>
                <Route exact path='/' component={MessageList} />
                <Route exact path='/rick' component={MessageListRoboto} />
                <Route exact path='/rich' component={MessageListCss} />
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
