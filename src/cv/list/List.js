import React, {Component} from 'react';

class List extends Component {
  render() {
    var items=this.props.children;
    return <div>{items.map((item, index) => this.renderItem(item, index))}</div>;
  }

  renderItem(item,index) {
    if(item.key === this.props.activeContentId || this.props.activeContentId === "default" )
      return <div key={index}>{item}</div>;
    else
      return ;
  }
}

export default List;
