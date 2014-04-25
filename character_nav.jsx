/** @jsx React.DOM */

var CharacterNav = React.createClass({
  getDefaultProps: function () {
    return {
      extra: []
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
      return <CharacterNavItem character={item} clicked={this.handleClick} />;
    }, this);


    return <ul className="character-nav">{items}</ul>;
  }
});

var CharacterNavItem = React.createClass({
  handleClick: function () {
    this.props.clicked(this.props.character);
  },

  render: function () {
    return (
      <li><a onClick={this.handleClick} href="#">{ this.props.character }</a></li>
    );
  }
});

