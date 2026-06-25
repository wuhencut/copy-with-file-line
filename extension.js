const vscode = require('vscode');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copyWithFileLine.copy', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      const doc = editor.document;
      const sel = editor.selection;
      const filePath = doc.uri.fsPath;
      const startLine = sel.start.line + 1;
      const endLine = sel.end.line + 1;
      const text = doc.getText(sel);
      const lineRange = startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
      const prefix = `${filePath}:${lineRange}\n`;
      vscode.env.clipboard.writeText(prefix + text);
      vscode.window.setStatusBarMessage(`Copied ${filePath}:${lineRange}`, 3000);
    }),
    vscode.commands.registerCommand('copyWithFileLine.copyPath', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      const doc = editor.document;
      const sel = editor.selection;
      const filePath = doc.uri.fsPath;
      const startLine = sel.start.line + 1;
      const endLine = sel.end.line + 1;
      const lineRange = startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
      vscode.env.clipboard.writeText(`${filePath}:${lineRange}`);
      vscode.window.setStatusBarMessage(`Copied ${filePath}:${lineRange}`, 3000);
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
