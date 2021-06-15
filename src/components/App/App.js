import React, { Component } from 'react';
import './App.css';
import { deleteUrl, getUrls, postUrls } from '../../apiCalls';
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
    postUrls(newUrl)
    // this.setState({urls: [...this.state.urls, newUrl]})
      // .then(response => response.json())
      .then(url => {
        console.log(url)
        this.setState({ urls: [...this.state.urls, url]})
      })
      .catch(() => this.setState({error: `Check the url data`}))

  }

  deleteUrl = id => {
    console.log(id);
    deleteUrl(id)
    .then(() => {
      const urls = this.state.urls.find(url => url.id === id)
      const getIndex = this.state.urls.indexOf(urls)
      this.state.urls.splice(getIndex, 1)
    })
    // console.log(this.state.urls.indexOf(urls));
    // console.log(urls);
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
        <UrlContainer urls={this.state.urls} deleteUrl={this.deleteUrl}/>
        } 
      </main>
    );
  }
}

export default App;
