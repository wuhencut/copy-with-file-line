# Copy with File & Line

Copy selected code (or current line) with full file path and line numbers to clipboard — one shortcut, ready for AI prompts, code review, bug reports, and documentation.

## Features

| Action | Shortcut / Command | Output |
|---|---|---|
| Copy code + path + line | `Shift+Cmd+C` (Mac) / `Shift+Ctrl+C` (Win/Linux) | `/path/to/file.ts:15-22\nselected code…` |
| Copy path + line only | Command Palette: *Copy File Path & Line Number Only* | `/path/to/file.ts:15-22` |

- **Smart line detection**: Single line → `file.ts:12`, multiple lines → `file.ts:12-18`
- **No selection?** Copies the entire current line automatically
- **Right-click context menu**: Quick access from the editor context menu

## Usage Examples

### AI Prompt Context
```
User's code (from /src/components/Header.tsx:42-55):
function Header() {
  return <nav className="header">...</nav>;
}
```

### Code Review Comment
```
In /src/utils/validator.ts:87-93:
  if (!email.includes('@')) {
    throw new Error('Invalid email');
  }
```

### Bug Report
```
Environment: /config/database.ts:10-14
  host: process.env.DB_HOST,
  port: 5432,
```

## Installation

- Search **Copy with File & Line** in VS Code / Cursor extension marketplace
- Or install via VSIX: `code --install-extension copy-with-file-line-1.1.0.vsix`

## Release Notes

### 1.1.0
- Auto-copy current line when no text is selected
- Improved status bar feedback

### 1.0.0
- Initial release: copy selected code with file path and line numbers

## License

MIT
