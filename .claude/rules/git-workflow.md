# Git Workflow

These rules apply only when a task involves git (committing, branching, pushing, opening PRs).
They don't restrict reading history (`git log`, `git diff`, `git blame`, `git status`).

## Hard Rules

- Never push to `main`, and never force-push to `main` or to a branch someone else is working on.
- Don't commit unless the user asks for a commit. Don't push unless the user asks for a push.
- Don't amend, rebase, reset `--hard`, or delete branches unless explicitly asked.
- Never skip hooks (`--no-verify`) or signing.
- Never commit `.env` or any other file listed in `rules/security.md` as off-limits.
- If currently on `main` and a commit is requested, create a branch first.

## Branches

- Feature branches are named after their GitHub issue: `<issue-number>-<short-kebab-slug>`
  (e.g. `18-authentification-check`, `21-complete-phase-1`).
- Work without an issue uses a short descriptive kebab name (e.g. `client-prod-fixes`).
- Branch from an up-to-date `main`; changes reach `main` only through a pull request.

## Commits

- Conventional-commit type in lowercase, then a capitalized imperative subject:
  - `feat: Add empty image fallback`
  - `fix: Clamp cart quantity on paste`
  - `refactor: Refactor checkout pages`
- Types in use: `feat`, `fix`, `refactor`. Use `chore` for tooling/config, `docs` for docs only.
- One logical change per commit; stage specific files rather than `git add -A`.
- Run `npm run check` before committing.

## Pull Requests

- Target `main`. Title follows the commit format; the body says what changed and why, and links the
  issue (`Closes #<n>`).
- CI (`npm run check`) must pass before merge.
