# Exercise 03 — the --no-ff flag

## Goal
Understand why --no-ff exists and when teams use it.

## Tasks

### Part A — create a feature branch
```bash
git switch -c feature/no-ff-test
```

Add one commit:
```javascript
console.log("no-ff flag practice");
```
```bash
git add app.js
git commit -m "feat: add no-ff flag practice log"
```

### Part B — merge with --no-ff
```bash
git switch main
git merge --no-ff feature/no-ff-test -m "merge: feature/no-ff-test into main"
```

### Part C — check the graph
```bash
git log --oneline --graph --all
```

Even though this could have been a fast-forward,
Git created a merge commit anyway because of --no-ff.

You can see the branch shape in the graph even
though main had not diverged.

### Part D — clean up
```bash
git branch -d feature/no-ff-test
```

## Why --no-ff exists

Without it: fast-forward merges leave no trace
that a feature branch ever existed.
The history looks like all commits happened on main.

With --no-ff: every merge leaves a merge commit.
You can always see in the graph that this work
came from a separate branch.

Many teams require --no-ff on main so the history
always shows where features came from.

## What to notice
--no-ff is a team communication decision as much
as a technical one. It preserves the story of
how the code was developed, not just what changed.