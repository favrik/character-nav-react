/** @jsx React.DOM */

var CharacterNav = React.createClass({
  getDefaultProps: function () {
    return {
      showMissing: true,
    };
  },

  getItems: function () {
    var initials = [];
    for (var i = 0, c = this.props.data.length; i < c; i++) {
      var character = this.props.data[i][this.props.label].charAt(0);
      if (initials.indexOf(character) == -1) {
        initials.push(character);
      }
    }

    return initials.sort();
  },

  getItemsWithMissing: function () {
    var characters = this.getItems();
    var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    var diff = abc.filter(function(i) {
      return characters.indexOf(i) < 0;
    });

    return characters.concat(diff).sort();
  },

  select: function (character) {
    
  },

  render: function () {
    var characters = this.props.showMissing ? this.getItemsWithMissing() : this.getItems();
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

