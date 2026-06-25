# Copy with File & Line

选中代码一键复制带文件路径和行号 —— 写 AI Prompt、代码审查、写文档时快速引用。

## 功能

| 快捷键 | 说明 |
|---|---|
| `Shift+Cmd+C` (Mac) / `Shift+Ctrl+C` (Win/Linux) | 复制选中代码，带上完整文件路径和行号 |
| 命令面板搜索 `Copy File Path & Line Number Only` | 仅复制路径+行号，不含代码 |

## 输出格式

```
/Users/you/project/src/app.tsx:15-22
import React from 'react';
const App = () => { ... };
```

## 安装

- VS Code / Cursor 扩展市场搜索 **Copy with File & Line**
- 或直接安装 VSIX：`code --install-extension copy-with-file-line-1.0.0.vsix`

## 开发

```bash
npm install -g @vscode/vsce
vsce package   # 打包 VSIX
vsce publish   # 发布到市场
```
