import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text'
    }
    this.update = this.update.bind(this);
  }

  update(ev) {
    this.setState({
      txt: ev.target.value
    })
  }

  render() {
    const { txt } = this.state;
    const { update } = this;
    return (
      <div>
        <h1>Hello, Dan</h1>
        <h2>{ txt }</h2>
        <Widget update={ update } />
        <Widget update={ update } />
        <Widget update={ update } />
      </div>
    )
  }
}

const Widget = (props) => {
  const { update } = props;
  return (
    <input type="text" onChange={ update }></input>
  )
}

export default App;
