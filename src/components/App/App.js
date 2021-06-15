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
    console.log(newUrl);
    this.setState({urls: [...this.state.urls, newUrl]})
    postUrls(newUrl)
      // .then(response => response.json())
      // .catch(() => this.setState({error: `Check the url data`}))

    //   .then(url => this.setState({ urls: [...this.state.urls, url]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm submitNewUrl={this.submitNewUrl}/>
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
