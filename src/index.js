import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/python';

import {toolboxConfig} from './toolbox-config';

document.addEventListener('DOMContentLoaded', () => {
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolboxConfig,
    trashcan: true,
  });

  const codeDiv = document.getElementById('code');

  const lang = 'Python';
  const genCodeBtn = document.getElementById('generateCode');
  genCodeBtn.addEventListener('click', () => {
    codeDiv.innerHTML = Blockly[lang].workspaceToCode(workspace);
  })

  const saveJsonBtn = document.getElementById('saveJSONButton');
  saveJsonBtn.addEventListener('click', () => {
    const json = Blockly.serialization.workspaces.save(workspace);
    const blob = new Blob([JSON.stringify(json)]);
    downloadBlob(blob, 'block.json');
  });
});

function downloadBlob(blob, name = 'file') {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");

  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  link.download = name;

  // Append link to the body
  document.body.appendChild(link);

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  // Remove link from body
  document.body.removeChild(link);
}
