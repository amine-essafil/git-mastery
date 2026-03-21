# Exercise 03 — fix a bad commit with amend

## Goal
Learn to fix the last commit before pushing.
This is something you will use every week on a real team.

## Task
1. Edit app.js — add any small change
2. Stage it: git add app.js
3. Commit with a terrible message on purpose:
   git commit -m "zzzz bad message"
4. Run git log --oneline — see the bad commit
5. Fix it immediately:
   git commit --amend -m "refactor: clean up app.js console output"
6. Run git log --oneline — the bad message is gone

## Rule to remember
amend rewrites the last commit.
Never amend after you have pushed — it rewrites
history that others may already have pulled.Êê