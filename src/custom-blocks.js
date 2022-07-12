import * as Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([{
  type: 'call_print_api',
  'message0': Blockly.Msg['TEXT_PRINT_TITLE'],
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'text_blocks',
  'tooltip': Blockly.Msg['TEXT_PRINT_TOOLTIP'],
  'helpUrl': Blockly.Msg['TEXT_PRINT_HELPURL'],
}]);

Blockly.Python['call_print_api'] = function(block) {
  // Print statement.
  const msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  return 'print(' + msg + ')\n';
};
