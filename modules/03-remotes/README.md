# M03 — Remotes

## Goal
Understand that your local repo and GitHub are always
two separate databases. You control when they sync
and how.

Never assume they are in sync — always verify.

---

## What a remote actually is

A remote is just a named URL pointing to another repo.

When you run `git clone` or `git remote add origin`,
Git saves that URL under the name `origin`. That name
is just an alias — you could call it anything, but
`origin` is the universal convention.

Your local repo and the remote are completely
independent until you explicitly push or fetch.

---

## The three commands and what they actually do

`git push` — sends your local commits to GitHub.
Only moves commits. Never touches your working files.

`git fetch` — downloads commits from GitHub into
your remote-tracking references (origin/main etc)
but does NOT touch your working files or local branches.
Safe. Non-destructive. Always.

`git pull` — fetch + merge in one command.
Downloads AND applies changes to your current branch.
Convenient but less control than fetch + merge.

---

## Commands covered

| Command | What it does |
|---------|-------------|
| `git remote -v` | Show all remotes and their URLs |
| `git remote add origin <url>` | Connect local repo to GitHub |
| `git push -u origin <branch>` | Push new branch and set upstream |
| `git push` | Push current branch (upstream already set) |
| `git fetch origin` | Download remote changes, don't merge |
| `git pull` | Fetch and merge in one step |
| `git pull --rebase` | Fetch and rebase instead of merge |
| `git branch -r` | List all remote branches |
| `git branch -vv` | Show local branches with tracking info |

---

## Exercises

| Exercise | Topic | Status |
|----------|-------|--------|
| 01 | Inspect your remote setup | Done |
| 02 | Push, fetch, and understand the difference | Done |
| 03 | Simulate being out of sync and recover | Done |

---

## Completion checklist

- Can explain the difference between fetch and pull
- Know what origin/main actually is
- Understand why local and remote can be out of sync
- Used git fetch before git merge at least once
- Know what git branch -vv shows and why it matters

---

## Key insight from this module

git pull is not magic. It is fetch plus merge.
Understanding fetch first makes everything else clear.
origin/main is not the remote — it is your local
snapshot of what the remote looked like last time
you fetched.