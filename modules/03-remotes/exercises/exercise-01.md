# Exercise 01 — Inspect your remote setup

## Goal
Understand what remotes you have, where they point,
and what tracking relationships exist between your
local branches and GitHub.

## Tasks

### Part A — see your remotes
```bash
git remote -v
```
You should see two lines — one for fetch, one for push.
Both pointing to your GitHub URL under the name origin.

That URL is the only thing that connects your local
repo to GitHub. Without it, Git has no idea GitHub exists.

### Part B — see all remote branches
```bash
git branch -r
```
These are your remote-tracking references. They are
local copies of what GitHub's branches looked like
the last time you fetched or pushed.

They are not live. They only update when you
run git fetch or git push.

### Part C — see tracking relationships
```bash
git branch -vv
```
This shows every local branch, its latest commit,
and which remote branch it is tracking.

You should see something like:
main               6c103cf [origin/main] docs: clean up...
module/03-remotes  b71014f [origin/module/03-remotes] init...

The part in brackets is the upstream — the remote
branch this local branch is connected to.

## What to notice
origin/main is not the actual GitHub branch.
It is your local snapshot of it.
It only updates when you communicate with GitHub.