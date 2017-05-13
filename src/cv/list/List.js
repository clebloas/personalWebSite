import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {

  render() {
    this.items=this.props.items;
    return <div>{this.items.map((item, index) => this.renderItem(item, index))}</div>;
  }

  renderItem(item,index) {
    var active = item.id === this.props.activeId;
    var props = {
      key: item.id,
      item: item,
      active: active
    };
    if (active) {
      props.ref = "activeItem";
    }

    return <div key={index}>{item}</div>;
  }

  componentDidUpdate(prevProps) {
    // only scroll into view if the active item changed last render
    if (this.props.activeId !== prevProps.activeId) {
      this.ensureActiveItemVisible();
    }
  }

  ensureActiveItemVisible() {
    var itemComponent = this.refs.activeItem;
    if (itemComponent) {
      var domNode = ReactDOM.findDOMNode(itemComponent);
      this.scrollElementIntoViewIfNeeded(domNode);
    }
  }

  scrollElementIntoViewIfNeeded(domNode) {
    // var containerDomNode = ReactDOM.findDOMNode(this);
    ReactDOM.findDOMNode(this);
    // Determine if `domNode` fully fits inside `containerDomNode`.
    // If not, set the container's scrollTop appropriately.
  }

}

export default List;
