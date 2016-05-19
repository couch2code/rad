const TAG_NAMES = [
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base',
  'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
  'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'dir', 'div', 'dl',
  'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
  'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend',
  'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'q', 'rp', 'rt',
  'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span',
  'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot',
  'th', 'thead', 'title', 'tr', 'u', 'ul', 'video', 'progress'
].map(e => [e, e])

Blockly.Blocks['element'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldDropdown(TAG_NAMES), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

Blockly.JavaScript['element'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME').toLowerCase();
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = `<${dropdown_name}>\n${statements_name}</${dropdown_name}>\n`;
  return code;
}

Blockly.Blocks['inner_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("text"), "innerText");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

Blockly.JavaScript['inner_text'] = function(block) {
  var text_innertext = block.getFieldValue('innerText');
  // TODO: Assemble JavaScript into code variable.
  var code = text_innertext + '\n';
  return code;
}

Blockly.Blocks['element_advanced'] = {
  init: function() {
    this.appendStatementInput("attributes")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown(TAG_NAMES), "NAME")
        .appendField("attributes");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("innerHTML");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

Blockly.JavaScript['element_advanced'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_attributes = Blockly.JavaScript.statementToCode(block, 'attributes');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `<${dropdown_name} ${statements_attributes}>\n${statements_name}</${dropdown_name}>\n`;
  return code;
}

Blockly.Blocks['attribute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldTextInput("key"), "key")
        .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['attribute'] = function(block) {
  var text_key = block.getFieldValue('key');
  var text_value = block.getFieldValue('value');
  var code = `${text_key}="${text_value}" `;
  return code;
}

Blockly.Blocks['css_attribute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldTextInput("key"), "key")
        .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['css_attribute'] = function(block) {
  var text_key = block.getFieldValue('key');
  var text_value = block.getFieldValue('value');
  var code = `${text_key}: ${text_value};\n`;
  return code;
};

// setup workspace
var workspace = Blockly.inject('blocklyDiv', {
  media: 'https://rawgit.com/google/blockly/master/media/',
  toolbox: document.getElementById('html_toolbox'),
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  }
})

document.getElementById('css_button').addEventListener('click', function(e) {

})


document.getElementById('generate').addEventListener('click', function(e) {

    Blockly.JavaScript.addReservedWords('code');
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var el = document.getElementById('code')
    el.innerText = code

})
