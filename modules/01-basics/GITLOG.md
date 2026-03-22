# GITLOG — M01 Basics
— notes from doing the exercises*



## git init — what actually happens

I didn't just type `git init` and move on.
I asked myself: what did that actually do?

Git created a hidden `.git` folder. That folder is the
entire database — every commit, every branch, every piece
of history lives inside it. Nothing is on GitHub yet.
Everything is local.

So `git init` isn't just "starting Git". It's creating a
version-controlled database inside your folder.
GitHub comes later. This comes first.


## git status — more than just a check

Every time I ran `git status` I paid attention to what
it was actually telling me. It shows:

- the current branch
- which files are untracked, modified, or staged
- what's ready to commit and what isn't

Files move between states:
```
untracked → staged → committed
tracked → modified → staged → committed
```

The key thing I noticed: Git doesn't care if a file is
"saved" on your machine. It cares about its state in the
tracking system — and those are two very different things.



## Why git add and not git add . every time

`git add .` stages everything. That sounds convenient
until it's not.

You might have a `.env` file with API keys or sensitive
data. If you stage it, you commit it. If you commit it,
you push it. If the repo is public, it's exposed.

That's why `.gitignore` exists, and why being selective
with `git add <file>` matters. Staging blindly is how
mistakes happen.

And if it does happen, here's how to recover:

- Staged but not committed → `git restore --staged <file>`
- Committed but not pushed → `git reset HEAD~1 --soft`

The earlier you catch it, the easier the fix.


## What if a file isn't staged before committing?

Git won't include it. Simple as that.

`git commit` only takes what's in the staging area —
nothing more, nothing less.

That's the real role of the staging area: a deliberate
checkpoint between editing and saving to history.
You decide what goes into each snapshot. Not Git.

## Bad commit message — how to fix it
```bash
git commit --amend -m "the correct message"
```

This rewrites the last commit — the message changes,
the hash changes, the mistake is gone.

One hard rule: only amend before you push.
Once it's on GitHub and someone else has pulled it,
rewriting history creates real problems for your team.
Amend is a local-only fix.

---

## Commit message prefixes — why they matter

At first, prefixes like `feat:` or `fix:` felt like
unnecessary rules. But when I ran `git log --oneline`
and read through a real history, I understood — they
make hundreds of commits readable in seconds.

| Prefix      | When to use it                              |
|-------------|---------------------------------------------|
| `feat:`     | adding new functionality                    |
| `fix:`      | fixing a bug                                |
| `refactor:` | improving structure, no behavior change     |
| `docs:`     | documentation only                          |
| `chore:`    | config, dependencies, tooling               |
| `init:`     | initial project setup                       |
| `test:`     | adding or updating tests                    |
| `style:`    | formatting only, no logic change            |

These aren't just labels. They make large project
histories understandable at a glance.

---

## HEAD — the part that really clicked

When I ran `git log --oneline` I kept seeing HEAD.
I wanted to understand what it actually is — not just
accept it.

HEAD is a pointer. It points to your current position
in the commit structure. When you make a new commit,
HEAD moves forward. When you switch branches, HEAD
moves to that branch.

The realization that changed how I see Git:

Commits are not a timeline — they form a graph.
Each commit points to its parent. It's a linked list
of snapshots, each one referencing the previous one.
HEAD is just your current position in that chain.

Once I saw it this way, Git stopped feeling abstract.
It became something I could actually reason about.

---

## Habits I'm dropping after this module

- staging with `git add .` without thinking
- writing vague commit messages
- committing without checking `git diff --staged` first

Most mistakes in Git don't come from the tool.
They come from not paying attention.

---

