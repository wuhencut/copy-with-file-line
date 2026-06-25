// VS Code 扩展 API 入口 —— `vscode.env.clipboard.writeText` 写入剪贴板，`window.setStatusBarMessage` 给用户反馈
const vscode = require('vscode');

/**
 * 注册两个命令，供用户通过快捷键或命令面板调用：
 *  - `copyWithFileLine.copy`：选中代码 → 拼装 `{文件路径}:{行号}\n{选中代码}` → 写入剪贴板
 *  - `copyWithFileLine.copyPath`：同上，但不含代码正文
 *
 * @param context - VS Code 扩展上下文；`subscriptions.push` 注册命令，扩展停用时自动清理
 */
function activate(context) {
  // 将两个命令注册推入 subscriptions，确保停用时释放
  context.subscriptions.push(
    // 命令①：复制代码 + 文件路径 + 行号
    vscode.commands.registerCommand('copyWithFileLine.copy', () => {
      // 获取当前活跃编辑器，没有则静默退出
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      // 当前文档对象，用于取文件路径和代码内容
      const doc = editor.document;
      // 当前选中的范围（开始/结束位置）
      const sel = editor.selection;
      // 文件绝对路径，写入剪贴板以供引用
      const filePath = doc.uri.fsPath;
      // 行号从 0 起始转为 1 起始（人类可读）
      const startLine = sel.start.line + 1;
      // 选中结束行号，同上转换
      const endLine = sel.end.line + 1;
      // 选中区域的代码正文
      const text = doc.getText(sel);
      // 单行显示 `249`，多行显示 `249-260`
      const lineRange = startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
      // 前缀 = 文件路径 + 冒号 + 行号范围 + 换行
      const prefix = `${filePath}:${lineRange}\n`;
      // 完整内容写入剪贴板
      vscode.env.clipboard.writeText(prefix + text);
      // 状态栏短暂提示成功信息（3 秒后自动消失）
      vscode.window.setStatusBarMessage(`Copied ${filePath}:${lineRange}`, 3000);
    }),
    // 命令②：只复制文件路径 + 行号（不含代码）
    vscode.commands.registerCommand('copyWithFileLine.copyPath', () => {
      // 获取当前活跃编辑器
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      // 当前文档对象
      const doc = editor.document;
      // 当前选中范围
      const sel = editor.selection;
      // 文件绝对路径
      const filePath = doc.uri.fsPath;
      // 起始行号（1 起始）
      const startLine = sel.start.line + 1;
      // 结束行号（1 起始）
      const endLine = sel.end.line + 1;
      // 单行 / 多行行号字符串
      const lineRange = startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
      // 仅写入路径+行号到剪贴板，不带代码
      vscode.env.clipboard.writeText(`${filePath}:${lineRange}`);
      // 状态栏反馈
      vscode.window.setStatusBarMessage(`Copied ${filePath}:${lineRange}`, 3000);
    })
  );
}

// 扩展停用时的清理函数；本例无资源需要释放
function deactivate() {}

// 导出让 VS Code 扩展宿主加载 activate / deactivate
module.exports = { activate, deactivate };
