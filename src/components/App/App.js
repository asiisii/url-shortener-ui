import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const allUrls = await getUrls()
      console.log(allUrls);
      this.setState({urls: allUrls.urls})
    } catch (e) {
      this.setState({error: `oops something went wrong`})
    }
  }

  submitNewUrl = newUrl => {
    postUrls(newUrl)
      .then(response => response.ok && response.json())
      .catch(() => this.setState({error: `Check the url data`}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>
        {!this.state.urls.length && <h1>Loading..</h1>}
        {this.state.urls.length && 
        <UrlContainer urls={this.state.urls}/>
        } 
      </main>
    );
  }
}

export default App;
