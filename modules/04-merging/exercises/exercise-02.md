# Exercise 02 — Real merge commit

## Goal
Force Git to create a real merge commit by making
both branches diverge before merging.

## Tasks

### Part A — create a feature branch
```bash
git switch main
git switch -c feature/real-merge
```

Add a commit on the feature branch:
```javascript
console.log("real merge practice");
```
```bash
git add app.js
git commit -m "feat: add real merge practice log"
```

### Part B — add a commit to main while on feature branch
This is the key step. Switch to main and add a commit
there too — now both branches have diverged.
```bash
git switch main
```

Open app.js and add:
```javascript
console.log("commit on main while feature branch exists");
```
```bash
git add app.js
git commit -m "feat: add commit on main to force real merge"
```

### Part C — check the graph before merging
```bash
git log --oneline --graph --all
```

You should see the `|/` shape. Both branches have
commits the other doesn't have. This is divergence.
Git cannot fast-forward. It must create a merge commit.

### Part D — merge
```bash
git merge feature/real-merge
```

Your editor will open for a merge commit message.
Save and close it. Or add -m to skip the editor:
```bash
git merge feature/real-merge -m "merge: bring in feature/real-merge"
```

### Part E — check the graph after merging
```bash
git log --oneline --graph --all
```

You should see the merge commit M with two parent lines
converging into it. That shape is the proof of a
real merge commit.

### Part F — clean up
```bash
git branch -d feature/real-merge
```

## What to notice
The merge commit has two parents.
That is what makes it different from every other commit.
It is the point where two histories became one.