import React, { Component } from 'react';
import Tree from './components/Tree';
import { treeData2 } from './DataSource';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { treeList: null };
  }

  componentDidMount() {
    this.setState({ treeList: treeData2 });
  }

  render() {
    return this.state.treeList && <Tree data={this.state.treeList} />;
  }
}
export default App;
