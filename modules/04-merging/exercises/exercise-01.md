# Exercise 01 — Fast-forward merge

## Goal
See a fast-forward merge happen and understand
why Git chose that strategy.

## Tasks

### Part A — create a feature branch and add commits
```bash
git switch main
git switch -c feature/fast-forward
```

Open app.js and add this line:
```javascript
console.log("fast-forward merge practice");
```
```bash
git add app.js
git commit -m "feat: add fast-forward merge practice log"
```

Add one more commit:
Open app.js and add:
```javascript
console.log("second commit on feature branch");
```
```bash
git add app.js
git commit -m "feat: add second commit on feature branch"
```

### Part B — check the graph before merging
```bash
git log --oneline --graph --all
```

You should see feature/fast-forward is ahead of main.
main has not moved since you created the branch.
That is the condition for a fast-forward.

### Part C — merge
```bash
git switch main
git merge feature/fast-forward
```

Read the output carefully. You should see:
```
Fast-forward
```

Git moved the main pointer forward. No new commit
was created. Main now points to the same commit
as feature/fast-forward.

### Part D — check the graph after merging
```bash
git log --oneline --graph --all
```

Notice: the history is a straight line.
No merge commit. No branching shape.
Just main moved forward.

### Part E — clean up
```bash
git branch -d feature/fast-forward
```

## What to notice
Fast-forward only happens when the target branch
has not diverged from the feature branch.
Git takes the easy path — move the pointer.
No new commit needed.