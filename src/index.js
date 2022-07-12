import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/python';

import './custom-blocks';
import {toolboxConfig} from './toolbox-config';
import {downloadBlob} from './utils';

class App {
  lang = 'Python';
  workspace = null;
  genCodeBtn = null;
  codeDiv = null;
  saveJsonBtn = null;
  jsonInput = null;

  constructor() {
    this.workspace = Blockly.inject('blockly-div', {
      toolbox: toolboxConfig,
      trashcan: true,
    });

    this.genCodeBtn = document.getElementById('generate-code-btn');
    this.codeDiv = document.getElementById('code');
    this.saveJsonBtn = document.getElementById('save-json-btn');
    this.jsonInput = document.getElementById('json-input');

    this.genCodeBtn.addEventListener('click', this.generateCode.bind(this))
    this.saveJsonBtn.addEventListener('click', this.saveJson.bind(this))
    this.jsonInput.addEventListener('change', this.loadJson.bind(this))
  }

  generateCode() {
    this.codeDiv.innerHTML = Blockly[this.lang].workspaceToCode(this.workspace);
  }

  saveJson() {
    const json = Blockly.serialization.workspaces.save(this.workspace);
    const blob = new Blob([JSON.stringify(json)]);
    downloadBlob(blob, 'block.json');
  }

  loadJson() {
    const file = this.jsonInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const json = JSON.parse(`${event.target.result}`);
      Blockly.serialization.workspaces.load(json, this.workspace);
    });
    reader.readAsText(file);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App()
});
