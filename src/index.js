import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/python';

import {toolboxConfig} from './toolbox-config';
import {downloadBlob} from './utils';

class App {
  lang = 'Python';
  workspace = null;
  genCodeBtn = null;
  codeDiv = null;
  saveJsonBtn = null;

  constructor() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: toolboxConfig,
      trashcan: true,
    });

    this.genCodeBtn = document.getElementById('generateCode');
    this.codeDiv = document.getElementById('code');
    this.saveJsonBtn = document.getElementById('saveJSONButton');

    this.genCodeBtn.addEventListener('click', this.genCodeHandler.bind(this))
    this.saveJsonBtn.addEventListener('click', this.saveJsonHandler.bind(this))
  }

  genCodeHandler() {
    this.codeDiv.innerHTML = Blockly[this.lang].workspaceToCode(this.workspace);
  }

  saveJsonHandler() {
    const json = Blockly.serialization.workspaces.save(this.workspace);
    const blob = new Blob([JSON.stringify(json)]);
    downloadBlob(blob, 'block.json');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App()
});
