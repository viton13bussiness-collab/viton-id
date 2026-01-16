# Claude Code + Antigravity (Windows) — быстрый старт

Инструкция для Windows 10/11, чтобы использовать Claude Code с моделями Claude Opus 4.5 и Sonnet 4.5 через Antigravity и CLIProxyAPIPlus.

## Требования

- Windows 10/11 (x64 или ARM64)
- Google‑аккаунт для авторизации Antigravity
- Node.js (LTS)

## Установка

### 1) Node.js

Скачайте LTS с https://nodejs.org и проверьте установку:

```powershell
node --version
```

### 2) Claude Code

```powershell
npm install -g @anthropic-ai/claude-code
```

### 3) CLIProxyAPIPlus

1. Откройте https://github.com/router-for-me/CLIProxyAPIPlus/releases
2. Скачайте архив под вашу архитектуру:
   - `CLIProxyAPIPlus_X.X.X_windows_amd64.zip`
   - `CLIProxyAPIPlus_X.X.X_windows_arm64.zip`
3. Распакуйте в `C:\CLIProxyAPIPlus\`

В папке будут `CLIProxyAPIPlus.exe` и `config.example.yaml`.

### 4) Настройка `config.yaml`

1. Переименуйте `config.example.yaml` → `config.yaml`
2. Закомментируйте секцию `api-keys` целиком, чтобы прокси не пытался использовать примерные ключи:

```yaml
# api-keys:
#   - key: "sk-..."
#     description: "My API key"
```

### 5) Авторизация Antigravity

```powershell
cd C:\CLIProxyAPIPlus
.\CLIProxyAPIPlus.exe --antigravity-login
```

Если браузер не открылся — используйте `--no-browser` и откройте URL вручную.

### 6) Запуск прокси

```powershell
.\CLIProxyAPIPlus.exe
```

Сервер запускается на `http://localhost:8317`. Оставьте окно открытым.

## Запуск Claude Code

### Вариант: через PowerShell (в текущей сессии)

**Opus 4.5 (thinking):**

```powershell
$env:ANTHROPIC_BASE_URL = "http://localhost:8317"
$env:ANTHROPIC_API_KEY = "sk-cliproxyapi-dummy"
$env:ANTHROPIC_MODEL = "gemini-claude-opus-4-5-thinking"
claude
```

**Sonnet 4.5 (thinking):**

```powershell
$env:ANTHROPIC_BASE_URL = "http://localhost:8317"
$env:ANTHROPIC_API_KEY = "sk-cliproxyapi-dummy"
$env:ANTHROPIC_MODEL = "gemini-claude-sonnet-4-5-thinking"
claude
```

### Вариант: через BAT‑файлы

**`opus.bat`**

```batch
@echo off
set ANTHROPIC_BASE_URL=http://localhost:8317
set ANTHROPIC_API_KEY=sk-cliproxyapi-dummy
set ANTHROPIC_MODEL=gemini-claude-opus-4-5-thinking
claude
```

**`sonnet.bat`**

```batch
@echo off
set ANTHROPIC_BASE_URL=http://localhost:8317
set ANTHROPIC_API_KEY=sk-cliproxyapi-dummy
set ANTHROPIC_MODEL=gemini-claude-sonnet-4-5-thinking
claude
```

**`sonnet-no.bat`** (без thinking)

```batch
@echo off
set ANTHROPIC_BASE_URL=http://localhost:8317
set ANTHROPIC_API_KEY=sk-cliproxyapi-dummy
set ANTHROPIC_MODEL=gemini-claude-sonnet-4-5
claude
```

**`g3.bat`** (Gemini 3 Pro)

```batch
@echo off
set ANTHROPIC_BASE_URL=http://localhost:8317
set ANTHROPIC_API_KEY=sk-cliproxyapi-dummy
set ANTHROPIC_MODEL=gemini-3-pro-image-preview
claude
```

## Типичные проблемы

- **Invalid API key** — проверьте, что `api-keys` закомментирована, и перезапустите прокси.
- **Connection refused** — CLIProxyAPIPlus не запущен.
- **Unauthorized** — заново выполните `--antigravity-login`.
- **Проверка работы:**

```powershell
curl http://localhost:8317/v1/models
```

## Полезные ссылки

- Релизы CLIProxyAPIPlus: https://github.com/router-for-me/CLIProxyAPIPlus/releases
- Документация: https://help.router-for.me/
- Репозиторий: https://github.com/router-for-me/CLIProxyAPI
