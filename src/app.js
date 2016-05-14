// get and register blocks

// setup workspace
var workspace = Blockly.inject('blocklyDiv', {
  media: 'https://rawgit.com/google/blockly/master/media/',
  toolbox: document.getElementById('toolbox'),
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  }
})
