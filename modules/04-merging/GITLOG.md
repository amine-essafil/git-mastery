# GITLOG — M04 Merging
— notes from doing the exercises*

---

## Was it hard?

The commands were not hard.

Understanding what Git is actually doing during a merge —
that took more attention.

Especially when things went wrong.
Which they did. On purpose and by accident.

---

## The two types of merge — not the same thing

Before this module I thought merge was just merge.

It is not. Git uses two completely different strategies
depending on the history.

**Fast-forward** happens when main has not moved
since you created the feature branch.
Git does not create a new commit.
It just moves the pointer forward.
```
Before:
main:     A --- B
                 \
feature:          C --- D

After fast-forward:
main:     A --- B --- C --- D
```

No merge commit. No branching shape in the graph.
Just a pointer that moved.

**Real merge commit** happens when both branches
have diverged — both have commits the other doesn't.
Git cannot slide a pointer. It has to combine two
histories into one new commit with two parents.
```
Before:
main:     A --- B --- E
                \
feature:         C --- D

After merge:
main:     A --- B --- E --- M
                \          /
feature:         C --- D
```

M is the merge commit. Two parents. Two histories combined.

---

## The fast-forward in practice

I created `feature/fast-forward`, added two commits,
then switched back to main without touching it.

When I merged:
```bash
git merge feature/fast-forward
```

The output said:
```
Fast-forward
```

Checked the graph — straight line. No merge commit shape.
Main just moved forward to where the feature branch was.

That is Git taking the easy path when the history allows it.

---

## --no-ff — why it exists

By default Git fast-forwards when it can.
That means the branch that existed leaves no trace
in the history. It looks like everything happened on main.

With `--no-ff`:
```bash
git merge --no-ff feature/no-ff-test
```

Git creates a merge commit even when it didn't have to.
The branch shape appears in the graph.
You can always see that this work came from a separate branch.

Many teams require this on main.
Not for technical reasons — for history readability.

---

## The real merge conflict I hit

This was the most important moment in the module.

I created a branch called `fast` and committed a change
to `app.js`. Then I switched to main and committed
a different change to the same file.

History looked like this:
```
* 98a088d (main)
| * 7f30725 (fast)
|/
* dcb0f2d
```

Both branches modified the same lines.
Conflict was guaranteed before I even ran the merge.

When I ran:
```bash
git merge fast
```

Git responded:
```
CONFLICT (content): Merge conflict in app.js
```

Git stopped. It did not guess which version to keep.
It put conflict markers inside the file and waited for me:
```
<<<<<<< HEAD
code from main
=======
code from fast
>>>>>>> fast
```

HEAD is what main had.
Below the `=======` is what the feature branch had.
That decision — which one survives — is mine. Not Git's.

---

## What "merge state" actually means

At this point Git was frozen.

Not crashed. Not broken. Frozen on purpose.

The history was not updated. The merge was not finished.
Git was waiting for me to resolve the conflict and
tell it to continue.

I learned that you cannot switch branches, cannot create
new branches, cannot do almost anything while in merge state.
Git blocks you with:
```
error: you need to resolve your current index first
```

Because the history is in an unstable state.
Git protects you from making it worse.

---

## The common mistake — losing changes silently

This is the thing that matters most from this module.

If you resolve a conflict by keeping only one side
and discarding the other — Git will not warn you.

You run `git add app.js` and `git commit` and everything
looks fine. But the changes from the discarded branch
are gone from the result.

The commit still exists in history.
The content is just not in main anymore.

This is how developers lose work without realizing it.
The fix is to always combine both sides intentionally
rather than just deleting one.

---

## How I fixed it

Step 1 — edit app.js manually and combine both versions.
Step 2 — mark as resolved:
```bash
git add app.js
```

Step 3 — finish the merge:
```bash
git commit -m "merge: resolve conflict between main and fast"
```

Final result in the graph:
```
*   f53af6d (main) merge: resolve conflict
|\
| * 7f30725 (fast)
* | 98a088d
|/
```

That shape is proof the merge happened correctly.
Two parents. Two histories combined into one.

---

## The emergency exit

If a conflict gets too messy and you want to go back
to before the merge started:
```bash
git merge --abort
```

This cancels everything and restores the state
to exactly before you ran git merge.

That is your safety net. It always works as long as
you have not committed the merge yet.

---

## What git reflog taught me

Even if changes seem lost after a bad merge:
```bash
git reflog
```

Shows every single position HEAD has been in.
Commits are almost never truly gone.
They are just unreachable by name.
Reflog finds them.

---

## What changed

- I understand why fast-forward and merge commit
  are two completely different operations
- I know what merge state is and how to get out of it
- I resolve conflicts by combining, not by deleting
- I use --no-ff when I want the branch history preserved
- I know git merge --abort exists and when to use it

---

## Final insight

A merge conflict is not an error.
It is Git saying: two people changed the same thing
and I do not know which version you want.

That decision belongs to the developer, not the tool.


git add modules/04-merging/GITLOG.md
git commit -m "docs: complete M04 GITLOG personal reflection"
git push

git switch main
git merge module/04-merging
git push
git branch -d module/04-merging
git push origin --delete module/04-merging
git add README.md
git commit -m "chore: mark M04 as complete in curriculum table"
git push