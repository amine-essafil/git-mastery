# GITLOG — M03 Remotes
— notes from doing the exercises*

---

## Was it hard?

Not technically. The commands are simple.

What was hard was unlearning the assumption that
local and remote are always in sync.

They are not. That was the real lesson.

---

## The mental shift going into this module

In M02, I understood that branches are just pointers.

In M03, that idea extended further.

Your local repo and GitHub are not the same thing.
They are two separate databases.

They only sync when you explicitly move commits
between them.

That changed how I think about every push and pull.

---

## What a remote actually is

I ran:
```bash
git remote -v
```

Two lines appeared. Both pointing to the same GitHub URL.
One for fetch. One for push.

That URL is the only connection between my machine
and GitHub. Without it, Git has no idea GitHub exists.

`origin` is not special. It is just a name.
A nickname for that URL.

---

## git fetch — the one that changed how I think

Before this module, I thought fetch and pull were
basically the same thing. They are not.

`git fetch` downloads commits from GitHub but
does not touch your files. Not a single file changes.

It only updates your remote-tracking references —
`origin/main`, `origin/module/03-remotes`.

That means fetch is always safe.

`git pull` is fetch plus merge in one command —
which means it modifies your working branch immediately.

The workflow I now understand:
```bash
git fetch origin
git log --oneline --graph --all
git merge origin/main
```

Fetch first. See what came in. Then decide.

---

## origin/main is not the remote

`origin/main` is not GitHub's branch.

It is your local snapshot of what GitHub looked like
the last time you fetched or pushed.

It can be outdated. It only updates when you
communicate with GitHub.

So when I run `git branch -r`, I am not seeing
live data — I am seeing memory.

---

## The divergence I didn't plan

This was the most valuable moment in the module.

My local branch and `origin/module/03-remotes` diverged
without me planning it. It just happened while working.
```
* 3f24e34 (HEAD -> module/03-remotes)
* 60c72a6
* 89a4cb1
| * 5976c8a (origin/module/03-remotes)
|/
* b71014f
```

Two histories split from the same commit.

Local had commits the remote didn't have.
The remote had a commit I didn't have.

Git rejected my push.

Because pushing would have overwritten a commit
that exists on the remote but not in my local history.

This is not an error. It is protection.

---

## How I fixed it — rebase
```bash
git rebase origin/module/03-remotes
```

Rebase replayed my commits on top of the remote commit.

The divergence disappeared. The history became linear.

But the commit hashes changed.

Same content. Different hashes.

Because a commit hash depends on its content
and its parent. Changing the base changes the identity.

This is why rebasing shared commits is dangerous.
Other developers still have the old hashes.
Your history and theirs no longer match.

---

## Why push gets rejected

A rejected push means your local history is not
a direct continuation of the remote history.

Git refuses to lose commits it cannot guarantee
you have integrated.

The solution is never to force push blindly.

The solution is always:
```bash
git fetch
git log --oneline --graph --all
git rebase origin/<branch>
git push
```

Fetch. Inspect. Integrate. Then push.

---

## What git branch -vv showed me
```bash
git branch -vv
```

Showed tracking relationships:
```
main               [origin/main]
module/03-remotes  [origin/module/03-remotes]
```

The bracket shows the upstream.

Without it, `git push` doesn't know where to send
commits and `git pull` doesn't know where to pull from.

This is why the first push of a new branch needs `-u`.
It creates that relationship.

---

## What changed

- I no longer treat push and pull as the same action
- I fetch before integrating anything from remote
- I understand that `origin/*` is a snapshot, not live data
- A rejected push is information, not an error
- I saw rebase rewrite history and watched hashes change
- I now run `git fetch` before working on any shared branch

---

## Final insight

M01 made Git usable.
M02 made Git make sense.
M03 made Git feel like a network —

Two independent databases
where synchronization is explicit, not automatic.