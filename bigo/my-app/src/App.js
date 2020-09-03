import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Hakkimda from './components/hakkimda';
import İletisim from './components/iletisim';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Hakkimda data={this.state.landingPageData.Hakkimda} />
        <İletisim data={this.state.landingPageData.İletisim} />
      </div>
    )
  }
}

export default App;
