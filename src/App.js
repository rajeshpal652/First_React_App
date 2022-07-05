
import './App.css';
import React from 'react';
import logo from './assets/BridgeLabz-logo.jpg';

class App extends React.Component {

  url = 'https://www.bridgelabz.com'
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }

  //onClick function
  onClick = ($event) => {
    console.log("Save Button is Clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    //set the title using setState method
    this.setState({ userName: event.target.value })
    if (nameRegex.test(event.target.value)) {
      this.setState({nameError: '' })
    } else {
      this.setState({nameError: 'Name is Incorrect'})
    }
  }

  render() {
    return (
      <>
      <div>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img src={logo} onClick={this.onClick} 
          alt="The Bridgelabz Logo: a Bridge to employment through lab works" />
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className='error-output'>{this.state.nameError}</span>
      </div>
      <div>
        <h5>
          At BridgeLabz, we're a community of 
          <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
          </ul>
          <br />
          <div>
            Working together to keep the Tech Employability of Engineers alive and accessible, so tech
            companies worldwide can get contributors and creators for technology solutions. We believe
            this act of human collaboration accross an Employability  platform is essential to individual growth and our collective future.
            <br />
            To know about us , visit <a href="https://bridgelabz.com">BridgeLabz</a> to learn even more about our mission <strong>i.e. Employability to all.</strong>
          </div>

        </h5>
      </div>

      </>
    )
  }
}

export default App;


