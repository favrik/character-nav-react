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
      var selected = this.props.selected == item ? true : false;
      return <CharacterNavItem selected={selected} character={item} clicked={this.handleClick} />;
    }, this);


    return <ul className="character-nav">{items}</ul>;
  }
});

var CharacterNavItem = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    this.props.clicked(this.props.character);
  },

  render: function () {
    var css = 'character-nav-item';
    css += this.props.selected ? ' character-nav-selected' : '';
    return (
      <li><a className={css} onClick={this.handleClick} href="#">{ this.props.character }</a></li>
    );
  }
});

