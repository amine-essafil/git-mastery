# Exercise 02 — Push, fetch, and understand the difference

## Goal
Feel the difference between push and fetch.
Understand what each one does and does not do
to your working files.

## Tasks

### Part A — make a change and push it
Open app.js and update currentModule to:
```javascript
currentModule: "M03 - Remotes"
```
Stage and commit:
```bash
git add app.js
git commit -m "chore: update current module to M03"
git push
```
Go to GitHub and refresh your repo.
You should see the new commit on the
module/03-remotes branch. That's push — your
local commit is now on GitHub.

### Part B — run fetch and observe
```bash
git fetch origin
```
Nothing changed in your files. Nothing changed
in your working directory. But Git updated all
your remote-tracking references.

Now run:
```bash
git log --oneline --graph --all
```
You should see origin/module/03-remotes and
your local branch pointing at the same commit.
That means you are in sync.

### Part C — understand what fetch actually updated
```bash
git branch -r
```
These references updated when you fetched.
They now reflect exactly what GitHub has.

### Part D — the safe workflow
The professional way to bring in remote changes:
```bash
git fetch origin
git log origin/main
git diff origin/main
git merge origin/main
```
Fetch first. Look at what came in.
Then decide to merge.

This gives you full control instead of
git pull doing everything blindly.

## What to notice
fetch never touches your working files.
push never touches your working files.
Both only move commits between databases.
Your files only change when you merge or switch branches.