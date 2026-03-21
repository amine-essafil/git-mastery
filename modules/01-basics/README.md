# M01 — Git Basics

## Goal
Build strong habits with the core Git workflow:
edit → stage → commit → inspect

Understand how changes move through Git's three zones:
working directory → staging area → local repository

---

## Commands covered

| Command | What it does |
|---------|-------------|
| `git init` | Initialize a repository |
| `git status` | Check current state — run this constantly |
| `git add <file>` | Stage a specific file |
| `git add .` | Stage all changes |
| `git add -p` | Stage changes interactively, chunk by chunk |
| `git commit -m "msg"` | Create a snapshot of staged changes |
| `git log --oneline` | View compact commit history |
| `git log --oneline --graph --all` | Visualize full branch history |
| `git diff` | See unstaged changes |
| `git diff --staged` | See staged changes vs last commit |
| `git commit --amend` | Rewrite the last commit |

---

## Exercises

| Exercise | Topic | Status |
|----------|-------|--------|
| 01 | Three meaningful commits on real code | Done |
| 02 | git diff vs git diff --staged | Done |
| 03 | Fix a bad commit with --amend | Done |

---

## Completion checklist

- Understand working directory, staging area, and repository
- Used git status before and after every action
- All commit messages follow conventional commits format
- Completed all three exercises
- Wrote personal notes in GITLOG.md

---

## Key insight from this module

Git is not a save button. It is a system of pointers
and snapshots. Every commit is a permanent node in a
linked structure. HEAD is your current position in
that structure.

Understanding that changes everything about how you
use Git intentionally.