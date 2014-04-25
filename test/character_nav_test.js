var characterNav;

module('CharacterNav', {
  setup: function () {
    characterNav = CharacterNav({
      label: 'title',
      data: getData()
    });
  }
});

function getData() {
return [
        { title: 'ZOMG', id: 1 },
        { title: 'WTF', id: 2 },
        { title: 'PWND', id: 3 },
        { title: 'Yes', id: 4 },
        { title: 'Amphibious', id: 5 },
        { title: 'Astroboy', id: 6 },
        { title: '! Kerrang', id: 7 }
      ];
}

test('Is set', function() {
  ok(CharacterNav, 'CharacterNav');
});

test('Character initialization', function () {
  characterNav.props.showMissing = false;
  deepEqual(['!', 'A', 'P', 'W', 'Y', 'Z'], characterNav.getItems(), 'Return sorted unique characters');

  characterNav.props.showMissing = true;
  deepEqual('!ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), characterNav.getItemsWithMissing(), 'Show missing abecedary characters');

  var component = CharacterNav();
  console.log(component);
  equal(component.props, {showMissing: true}, 'Default props are set');
});

test('Selected ids', function () {
  deepEqual([5, 6], characterNav.select('A'), 'Get ids corresponding to initial character');
});
