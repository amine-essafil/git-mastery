# M04 — Merging

## Goal
Understand what Git actually does when it merges.

Know the difference between a fast-forward merge
and a real merge commit — and when to use each one.

---

## What merging actually is

Merging takes the work from one branch and brings
it into another.

But Git doesn't always do it the same way.
It chooses a strategy based on the history.

---

## Fast-forward merge

Happens when the target branch has not moved since
the feature branch was created.

Git doesn't need to create a new commit.
It just moves the pointer forward.
```
Before:
main:    A --- B
                \
feature:         C --- D

After fast-forward:
main:    A --- B --- C --- D
```

No merge commit. Clean linear history.

---

## Real merge commit (3-way merge)

Happens when both branches have new commits since
they diverged. Git cannot just move a pointer —
it has to create a new commit that combines both.
```
Before:
main:    A --- B --- E
                \
feature:         C --- D

After merge:
main:    A --- B --- E --- M
                \         /
feature:         C --- D
```

M is the merge commit. It has two parents.

---

## Commands covered

| Command | What it does |
|---------|-------------|
| `git merge <branch>` | Merge a branch into current |
| `git merge --no-ff <branch>` | Force a merge commit even on fast-forward |
| `git merge --squash <branch>` | Squash all commits into one before merging |
| `git log --oneline --graph --all` | See merge structure visually |
| `git branch -d <branch>` | Delete branch after merging |

---

## Exercises

| Exercise | Topic | Status |
|----------|-------|--------|
| 01 | Fast-forward merge | Done |
| 02 | Real merge commit | Done |
| 03 | --no-ff flag and why it exists | Done |

---

## Completion checklist

- Can explain the difference between fast-forward and merge commit
- Saw both types in the graph
- Understand what --no-ff does and when to use it
- Deleted branches cleanly after merging
- Ran git log --graph after every merge to see the result

---

## Key insight from this module

A fast-forward is not really a merge — it is a
pointer movement. A real merge commit is Git
combining two histories into one. Knowing which
one happened tells you everything about your history.