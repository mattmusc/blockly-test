import * as Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([{
  "type": "call_print_api",
  "message0": 'Print API',
  'previousStatement': null,
  'nextStatement': null,
  "colour": 160,
  "tooltip": "Call Print API",
  "helpUrl": ""
}]);

Blockly.Python['call_print_api'] = function() {
  return 'print(Hello, from API!)\n';
};
