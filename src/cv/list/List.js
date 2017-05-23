import React, {Component} from 'react';

class List extends Component {
  render() {
    var items=this.props.children;
    return <div>{items.map((item, index) => <div key={index}>{item}</div>)}</div>;
  }
}

export default List;
