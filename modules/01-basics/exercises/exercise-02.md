# Exercise 02 — diff before and after staging

## Goal
See exactly what git diff and git diff --staged show
at each point in the workflow.

## Task
1. Edit app.js — add any new console.log line
2. Run: git diff
   (you see the unstaged change highlighted)
3. Run: git add app.js
4. Run: git diff
   (nothing — because it's staged now)
5. Run: git diff --staged
   (you see what is about to be committed)
6. Commit it: git commit -m "exercise: practice diff workflow"

## What to notice
git diff = working directory vs staging area
git diff --staged = staging area vs last commit
These are two different comparisons.