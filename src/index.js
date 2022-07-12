import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/python';

import {toolbox} from './toolbox-config';

document.addEventListener("DOMContentLoaded", function () {
  const workspace = Blockly.inject('blocklyDiv', { toolbox });

  const codeDiv = document.getElementById('code');

  const lang = 'Python';
  const button = document.getElementById('blocklyButton');
  button.addEventListener('click', function () {
    codeDiv.innerHTML = Blockly[lang].workspaceToCode(workspace);
  })
});
