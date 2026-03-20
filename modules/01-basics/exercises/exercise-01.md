# Exercise 01 — Three meaningful commits

## Goal
Practice the edit → stage → commit loop three times
on real code, with proper commit messages.

## Task

### Commit 1
Open app.js and add this line at the bottom:
`console.log("Module: M01 - Basics");`
Then: git add app.js → git commit -m "feat: log current module in app"

### Commit 2
Open app.js and add this line:
`console.log("Status: In progress");`
Then: git add app.js → git commit -m "feat: log module status in app"

### Commit 3
Open app.js and update currentModule to:
`currentModule: "M01 - Basics (complete)"`
Then: git add app.js → git commit -m "chore: update current module label"

## Expected result
Run: git log --oneline
You should see 3 new commits above your previous ones.