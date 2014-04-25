/** @jsx React.DOM */

var CharacterNav = React.createClass({
  getDefaultProps: function () {
    return {
      extra: [],
      selectedClass: 'character-nav-selected',
      itemClass: 'character-nav-item'
    };
  },

  handleClick: function (character) {
    this.props.select(character);
  },

  render: function () {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
      .concat(this.props.extra)
      .sort();

    var items = characters.map(function (item, index) {
      return <li><a className={this.props.current == item ? ' ' + this.props.selectedClass : ''} href="#"
                    onClick={this.handleClick.bind(this, item)}>{item}</a>
             </li>;
    }, this);

    return <ul className="character-nav">{items}</ul>;
  }
});
