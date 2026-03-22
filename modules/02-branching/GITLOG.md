# GITLOG — M02 Branching
— notes from doing the exercises*

---

## git init — what actually happens

In M01, Git felt like a save system.

In M02 that idea broke.

It's not one history. It's multiple histories running
at the same time. main is not "the project" — it's
just one branch. One pointer. One version.

Everything else can move independently.

---

## What a branch actually is

I thought a branch was a copy of the project.

It's not.

A branch is just a pointer to a commit. Nothing is
duplicated. No files are copied. Git creates another
reference that can move on its own.

So when I ran:
```bash
git switch -c feature/hello-world
```

Git didn't copy anything. It just created a new pointer
at the current commit and moved HEAD to it.

That's it.

This is why branching is instant. It's not working
on files — it's just moving a pointer.

---

## What actually happens when you switch branches

When I ran `git switch main` and opened app.js,
my changes were gone.

First reaction: something got deleted.

It didn't.

Git replaced the file. Switching branches rewrites
your working directory. Git looks at the commit that
branch points to and forces your files to match it.

Same file name. Different content.

The changes didn't disappear — they belong to another
branch. They're still there. Just not here.

---

## The moment the graph made sense

Running this after every single action:
```bash
git log --oneline --graph --all
```

That was the most important habit in this module.

Before this, commits looked like a straight line.
Then I saw the `|/` shape when two branches diverged
from the same commit. That shape changed everything.

Commits point to parents.
Branches point to commits.
HEAD points to a branch.

Everything is just pointers. Same conclusion as M01
but now I can see it in the graph.

---

## HEAD — now I actually see it move

In M01 I understood HEAD moves.
In M02 I watched it move.

Switch branches → HEAD moves sideways.
Make a commit → HEAD moves forward.

HEAD is always exactly one place. Never two.

That means every command I run depends on where
HEAD is. If I don't know where HEAD is, I don't
know what I'm doing.

---

## Why Git blocked me

I tried switching branches without committing first.
Git refused.

Made sense immediately — if it switched, it would
overwrite my uncommitted work. Gone.

So it stops me. That's not an error. That's protection.

Clean working directory = safe to switch.
That's the rule.

---

## Branch naming

Creating branches like `feature/update-app-info` or
`fix/typo-in-readme` felt like a small thing.

But when I looked at the branch list, I could read
the repo without opening a single file.

That's not naming. That's communication.

---

## Local vs remote

I created branches and couldn't see them on GitHub.

Because they didn't exist there yet.

A branch only exists on GitHub after you push it:
```bash
git push -u origin module/02-branching
```

Before that command — local only.
After that command — GitHub knows it exists.

GitHub knows nothing unless you tell it.

---

## Deleting branches

Deleted `feature/hello-world`. The branch was gone.
The commit was still there.

That confirmed it — deleting a branch removes the
pointer, not the history.

`-d` checks if it's safe first.
`-D` forces it without checking.

One protects you. One trusts you.

---

## What to check before creating a branch

I created a branch once without checking where I was.

If you branch from a feature branch by mistake,
that new branch carries all the previous branch's
commits. They're no longer independent.

Fix is simple:
```bash
git branch
git switch main
```

Always know where HEAD is before branching.

---

## Final understanding

Git is not managing files.
Git is managing pointers to snapshots.

Commits = snapshots.
Branches = pointers.
HEAD = where I am right now.

Switching branches doesn't change code.
It changes which snapshot my files are rebuilt from.

---

