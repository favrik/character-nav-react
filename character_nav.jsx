/** @jsx React.DOM */

var CharacterNav = React.createClass({
  getDefaultProps: function () {
    return {
      extra: []
    };
  },

  select: function (character) {
  },

  render: function () {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
      .concat(this.props.extra)
      .sort();

    var items = characters.map(function (item, index) {
      return <CharacterNavItem character={item} />;
    });

    return <ul className="character-nav">{items}</ul>;
  }
});

var CharacterNavItem = React.createClass({
  render: function () {
    return (
      <li><a href={ this.props.character }>{ this.props.character }</a></li>
    );
  }
});

