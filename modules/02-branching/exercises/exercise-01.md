# Exercise 01 — Create, switch, and delete branches

## Goal
Build muscle memory for the branch lifecycle:
create → work → switch → delete

## Tasks

### Part A — create and switch
```bash
git switch -c feature/hello-world
```
You are now on a new branch. Run:
```bash
git branch
```
You should see `* feature/hello-world` and `main`.
The `*` shows where HEAD is.

Now open app.js and add this line:
```javascript
console.log("Hello from feature/hello-world branch");
```
Stage and commit it:
```bash
git add app.js
git commit -m "feat: add hello-world log on feature branch"
```

### Part B — switch back to main
```bash
git switch main
```
Open app.js — notice the line you just added is GONE.
It's not deleted. It lives on the feature branch.
Main is untouched. That's the whole point.

Run:
```bash
git log --oneline --graph --all
```
You'll see the two branches diverging in the graph.

### Part C — delete the branch
```bash
git branch -d feature/hello-world
```
The branch pointer is deleted. The commit still exists
in history but is no longer reachable by name.

## What to notice
Switching branches changes your actual files on disk.
Git is literally swapping out file contents when you
run git switch. That's why your working directory must
be clean before switching — uncommitted changes would
get mixed up between branches.