# M02 — Branching

## Goal
Understand branches deeply — not just how to create them
but what they actually are and how Git tracks them.

Branches should feel as natural as saving a file.

## What a branch actually is
A branch is just a lightweight pointer to a commit.
That's it. Creating a branch doesn't copy your files —
it creates a new pointer that can move independently
from main.

## Commands covered
- `git branch` — list all local branches
- `git branch <name>` — create a branch
- `git switch <name>` — move to a branch
- `git switch -c <name>` — create AND move in one step
- `git branch -d <name>` — delete a branch (safe)
- `git branch -D <name>` — force delete a branch
- `git push origin <name>` — push branch to GitHub
- `git push origin --delete <name>` — delete remote branch
- `git branch -r` — list remote branches
- `git log --oneline --graph --all` — visual branch history

## Naming conventions
- `feature/` → new functionality (feature/user-auth)
- `fix/` → bug fix (fix/login-crash)
- `module/` → this repo's learning modules
- `chore/` → config or tooling changes

## Exercises
- [ ] Exercise 01 — create, switch, and delete branches
- [ ] Exercise 02 — branch naming and push to GitHub
- [ ] Exercise 03 — understand HEAD movement across branches

## Completion checklist
- [ ] I know what a branch actually is at the Git level
- [ ] I used git switch instead of git checkout
- [ ] I can explain where HEAD points at any moment
- [ ] I deleted branches both locally and on GitHub
- [ ] I ran git log --oneline --graph --all after every switch