# Exercise 02 — Branch naming and pushing to GitHub

## Goal
Practice professional branch naming and understand
the difference between a local branch and a remote branch.

## Tasks

### Part A — create three properly named branches
```bash
git switch -c feature/update-app-info
git switch main
git switch -c fix/typo-in-readme
git switch main
git switch -c module/02-branching
```

Run `git branch` — you should see all three plus main.

### Part B — do real work on one branch
Switch to `module/02-branching`:
```bash
git switch module/02-branching
```
Open app.js and update the currentModule line to:
```javascript
currentModule: "M02 - Branching"
```
Commit it:
```bash
git add app.js
git commit -m "chore: update current module to M02"
```

### Part C — push the branch to GitHub
```bash
git push -u origin module/02-branching
```
Go to GitHub and check your repo — you'll see the new
branch listed. This is the first time a branch other
than main exists on GitHub.

### Part D — clean up unused branches
The other two branches are empty — delete them:
```bash
git switch main
git branch -d feature/update-app-info
git branch -d fix/typo-in-readme
```

## What to notice
A branch only exists on GitHub after you push it.
Until then it's purely local — GitHub has no idea it exists.
This is an important distinction when working in a team.