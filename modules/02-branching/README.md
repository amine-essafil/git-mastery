# M02 — Branching

## Goal
Understand branches deeply — not just how to create them
but what they actually are and how Git tracks them.

Branches should feel as natural as saving a file.

---

## What a branch actually is

A branch is just a lightweight pointer to a commit.
Creating a branch doesn't copy your files — it creates
a new pointer that can move independently from main.

---

## Commands covered

| Command | What it does |
|---------|-------------|
| `git branch` | List all local branches |
| `git branch <name>` | Create a branch |
| `git switch <name>` | Move to a branch |
| `git switch -c <name>` | Create and move in one step |
| `git branch -d <name>` | Delete a branch (safe) |
| `git branch -D <name>` | Force delete a branch |
| `git push origin <name>` | Push branch to GitHub |
| `git push origin --delete <name>` | Delete remote branch |
| `git branch -r` | List remote branches |
| `git log --oneline --graph --all` | Visual branch history |

---

## Naming conventions

| Prefix | Purpose |
|--------|---------|
| `feature/` | New functionality |
| `fix/` | Bug fix |
| `module/` | Learning modules in this repo |
| `chore/` | Config or tooling changes |

---

## Exercises

| Exercise | Topic | Status |
|----------|-------|--------|
| 01 | Create, switch, and delete branches | Done |
| 02 | Branch naming and push to GitHub | Done |
| 03 | Understand HEAD movement across branches | Done |

---

## Completion checklist

- Know what a branch actually is at the Git level
- Used git switch instead of git checkout
- Can explain where HEAD points at any moment
- Deleted branches both locally and on GitHub
- Ran git log --oneline --graph --all after every action

---

## Key insight from this module

A branch is not a copy. It is a pointer.
Switching branches rewrites your working directory.
HEAD is always exactly one place — know where it is
before every action you take.