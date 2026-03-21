# Exercise 03 — Understand HEAD movement

## Goal
Make HEAD visible. Run git log after every action
so you can literally see the pointer moving.

## Tasks

### Step 1
Make sure you're on main:
```bash
git switch main
git log --oneline --graph --all
```
Note where HEAD points.

### Step 2
Create and switch to a new branch:
```bash
git switch -c feature/head-test
git log --oneline --graph --all
```
HEAD now points to feature/head-test.
main and feature/head-test point to the same commit —
because you just created the branch, nothing has diverged yet.

### Step 3
Make a commit on the new branch:
```bash
# edit app.js — add any small line
git add app.js
git commit -m "test: HEAD movement observation"
git log --oneline --graph --all
```
Now feature/head-test is one commit ahead of main.
You can see them diverge in the graph.

### Step 4
Switch back to main:
```bash
git switch main
git log --oneline --graph --all
```
HEAD is back on main. The commit you made on the
feature branch is still there — you can see it in
the graph — but HEAD is no longer pointing at it.

### Step 5 — clean up
```bash
git branch -D feature/head-test
```
We use -D here because the branch was never merged.
-d would refuse to delete it. -D forces it.

## The key insight
HEAD is always exactly one place.
Every time you switch branches, HEAD moves.
Every time you commit, HEAD moves forward.
Understanding HEAD = understanding where you are in Git.