# Copy with File & Line / 带文件路径和行号复制

Copy selected code (or current line) with full file path and line numbers to clipboard — one shortcut, ready for AI prompts, code review, bug reports, and documentation.
一键复制选中代码（或当前行），带上完整文件路径和行号到剪贴板 —— 用于 AI 提示词、代码审查、Bug 报告和文档。

## Features / 功能

| Action / 操作 | Shortcut / 快捷键 | Output / 输出 |
|---|---|---|
| Copy path + line only<br>仅复制路径+行号 ⭐（高频） | `Shift+Cmd+C` (Mac) / `Shift+Ctrl+C` (Win/Linux) | `/path/to/file.ts:15-22` |
| Copy code + path + line<br>复制代码+路径+行号 | `Shift+Cmd+Alt+C` (Mac) / `Shift+Ctrl+Alt+C` (Win/Linux) | `/path/to/file.ts:15-22\nselected code…` |

- **Smart line detection / 智能行号**: Single line → `file.ts:12`, multiple lines → `file.ts:12-18`
- **No selection?** Copies the entire current line automatically / **无选区时**自动复制光标所在整行
- **Clipboard verification / 剪贴板校验**: Verifies content matches and shows a popup notification / 写入后回读校验，弹窗提示结果
- **Right-click context menu / 右键菜单**: Quick access from the editor context menu / 编辑器右键菜单快速调用

## Usage Examples / 使用示例

### AI Prompt Context / AI 提示上下文
```
User's code (from /src/components/Header.tsx:42-55):
function Header() {
  return <nav className="header">...</nav>;
}
```

### Code Review Comment / 代码审查评论
```
In /src/utils/validator.ts:87-93:
  if (!email.includes('@')) {
    throw new Error('Invalid email');
  }
```

### Bug Report / Bug 报告
```
Environment: /config/database.ts:10-14
  host: process.env.DB_HOST,
  port: 5432,
```

## Installation / 安装

- Search **Copy with File & Line** in VS Code / Cursor extension marketplace<br>在 VS Code / Cursor 扩展市场搜索 **Copy with File & Line**
- Or install via VSIX: `code --install-extension copy-with-file-line-1.2.0.vsix`<br>或直接安装 VSIX

## Release Notes / 更新日志

### 1.2.0
- Enhanced notification with file path, line range and character count / 增强通知：显示路径、行号范围和字符数
- New app icon with cleaner design / 全新应用图标，简洁大气

### 1.1.0
- Auto-copy current line when no text is selected / 无选区时自动复制整行
- Clipboard verification with popup notification / 剪贴板校验并弹窗提示
- Added `Alt+C` shortcut for Windows/Linux / 新增 Windows/Linux 的 `Alt+C` 快捷键
- Improved metadata and documentation / 完善元数据和文档

### 1.0.0
- Initial release: copy selected code with file path and line numbers / 初始发布：复制选中代码及文件路径和行号

## License / 许可证

MIT
