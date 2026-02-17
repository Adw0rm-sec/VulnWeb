# Git Commands for VulnBank

Quick reference for common Git operations with VulnBank repository.

## Initial Setup

### Create and Push to GitHub

```bash
# Navigate to project directory
cd /path/to/vulnbank

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: VulnBank v1.0.0 with 30+ vulnerabilities"

# Rename branch to main
git branch -M main

# Add remote repository (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/vulnbank.git

# Push to GitHub
git push -u origin main
```

### Verify Setup

```bash
# Check remote URL
git remote -v

# Check branch
git branch

# Check status
git status
```

## Daily Workflow

### Check Status

```bash
# See what files have changed
git status

# See detailed changes
git diff

# See changes for specific file
git diff js/config.js
```

### Stage Changes

```bash
# Add all changes
git add .

# Add specific file
git add js/config.js

# Add specific directory
git add js/

# Add multiple files
git add index.html css/styles.css
```

### Commit Changes

```bash
# Commit with message
git commit -m "Add: New SSRF vulnerability"

# Commit with detailed message
git commit -m "Add: New SSRF vulnerability" -m "Added SSRF example in api.js with internal endpoint access"

# Amend last commit (if you forgot something)
git add forgotten-file.js
git commit --amend --no-edit
```

### Push Changes

```bash
# Push to main branch
git push

# Push to specific branch
git push origin feature-branch

# Force push (use carefully!)
git push --force
```

### Pull Changes

```bash
# Pull latest changes
git pull

# Pull from specific branch
git pull origin main

# Pull with rebase
git pull --rebase
```

## Branching

### Create Branches

```bash
# Create new branch
git branch feature/new-vulnerability

# Create and switch to new branch
git checkout -b feature/new-vulnerability

# Create branch from specific commit
git checkout -b hotfix abc1234
```

### Switch Branches

```bash
# Switch to existing branch
git checkout main

# Switch to branch (newer syntax)
git switch main

# Create and switch (newer syntax)
git switch -c feature/new-feature
```

### List Branches

```bash
# List local branches
git branch

# List all branches (including remote)
git branch -a

# List remote branches
git branch -r
```

### Merge Branches

```bash
# Switch to target branch
git checkout main

# Merge feature branch
git merge feature/new-vulnerability

# Merge with no fast-forward
git merge --no-ff feature/new-vulnerability
```

### Delete Branches

```bash
# Delete local branch
git branch -d feature/old-feature

# Force delete local branch
git branch -D feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

## Viewing History

### View Commits

```bash
# View commit history
git log

# View compact history
git log --oneline

# View last 5 commits
git log -5

# View commits with changes
git log -p

# View commits for specific file
git log js/config.js

# View commits by author
git log --author="Your Name"
```

### View Changes

```bash
# Show changes in last commit
git show

# Show changes in specific commit
git show abc1234

# Show changes in specific file
git show abc1234:js/config.js
```

## Undoing Changes

### Discard Local Changes

```bash
# Discard changes in specific file
git checkout -- js/config.js

# Discard all local changes
git checkout -- .

# Newer syntax
git restore js/config.js
git restore .
```

### Unstage Files

```bash
# Unstage specific file
git reset HEAD js/config.js

# Unstage all files
git reset HEAD

# Newer syntax
git restore --staged js/config.js
```

### Undo Commits

```bash
# Undo last commit, keep changes
git reset --soft HEAD~1

# Undo last commit, discard changes
git reset --hard HEAD~1

# Undo last 3 commits, keep changes
git reset --soft HEAD~3

# Revert specific commit (creates new commit)
git revert abc1234
```

## Tagging (for Releases)

### Create Tags

```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "VulnBank v1.0.0 - Initial Release"

# Tag specific commit
git tag -a v1.0.0 abc1234 -m "Release v1.0.0"
```

### Push Tags

```bash
# Push specific tag
git push origin v1.0.0

# Push all tags
git push --tags
```

### List and Delete Tags

```bash
# List all tags
git tag

# List tags matching pattern
git tag -l "v1.*"

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0
```

## Remote Operations

### Manage Remotes

```bash
# List remotes
git remote -v

# Add remote
git remote add upstream https://github.com/original/vulnbank.git

# Change remote URL
git remote set-url origin https://github.com/YOUR-USERNAME/vulnbank.git

# Remove remote
git remote remove upstream
```

### Fetch and Pull

```bash
# Fetch from remote
git fetch origin

# Fetch all remotes
git fetch --all

# Pull from remote
git pull origin main

# Pull with rebase
git pull --rebase origin main
```

## Stashing

### Save Work Temporarily

```bash
# Stash current changes
git stash

# Stash with message
git stash save "WIP: Adding new vulnerability"

# Stash including untracked files
git stash -u
```

### Apply Stashed Changes

```bash
# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{1}

# Apply and remove stash
git stash pop
```

### Manage Stashes

```bash
# Show stash contents
git stash show

# Show detailed stash contents
git stash show -p

# Delete specific stash
git stash drop stash@{1}

# Delete all stashes
git stash clear
```

## Collaboration

### Fork Workflow

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/vulnbank.git
cd vulnbank

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/vulnbank.git

# Fetch upstream changes
git fetch upstream

# Merge upstream changes
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

### Pull Request Workflow

```bash
# Create feature branch
git checkout -b feature/new-vulnerability

# Make changes and commit
git add .
git commit -m "Add: New XSS vulnerability"

# Push to your fork
git push origin feature/new-vulnerability

# Go to GitHub and create Pull Request
```

## Troubleshooting

### Fix Common Issues

```bash
# Undo git init
rm -rf .git

# Fix "detached HEAD"
git checkout main

# Recover deleted branch
git reflog
git checkout -b recovered-branch abc1234

# Fix merge conflicts
# 1. Edit conflicted files
# 2. Remove conflict markers (<<<<, ====, >>>>)
git add .
git commit -m "Resolve merge conflicts"

# Abort merge
git merge --abort

# Abort rebase
git rebase --abort
```

### Clean Repository

```bash
# Remove untracked files (dry run)
git clean -n

# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd

# Remove ignored files too
git clean -fdx
```

## Advanced Operations

### Cherry Pick

```bash
# Apply specific commit to current branch
git cherry-pick abc1234

# Cherry pick multiple commits
git cherry-pick abc1234 def5678
```

### Rebase

```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Continue rebase after resolving conflicts
git rebase --continue

# Skip current commit during rebase
git rebase --skip
```

### Squash Commits

```bash
# Interactive rebase to squash
git rebase -i HEAD~3

# In editor, change 'pick' to 'squash' for commits to combine
# Save and close editor
# Edit commit message
# Save and close
```

## GitHub Specific

### GitHub CLI Commands

```bash
# Create repository
gh repo create vulnbank --public

# Clone repository
gh repo clone YOUR-USERNAME/vulnbank

# Create issue
gh issue create --title "Bug: XSS not working" --body "Description"

# List issues
gh issue list

# Create pull request
gh pr create --title "Add new vulnerability" --body "Description"

# List pull requests
gh pr list

# View repository
gh repo view
```

## Useful Aliases

Add these to your `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --oneline --graph --decorate --all
    amend = commit --amend --no-edit
    undo = reset --soft HEAD~1
```

Usage:
```bash
git st          # Instead of git status
git co main     # Instead of git checkout main
git visual      # Pretty commit graph
```

## Quick Reference

### Most Used Commands

```bash
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push                      # Push to remote
git pull                      # Pull from remote
git checkout -b branch-name   # Create and switch branch
git merge branch-name         # Merge branch
git log --oneline            # View history
```

### Emergency Commands

```bash
git stash                    # Save work temporarily
git reset --hard HEAD        # Discard all changes
git clean -fd                # Remove untracked files
git reflog                   # View all actions (recovery)
```

## Best Practices

1. **Commit Often**: Small, focused commits
2. **Write Good Messages**: Clear, descriptive commit messages
3. **Pull Before Push**: Always pull latest changes first
4. **Use Branches**: Don't work directly on main
5. **Review Before Commit**: Check `git diff` before committing
6. **Test Before Push**: Ensure code works before pushing

## Commit Message Format

```
Type: Brief description (50 chars or less)

More detailed explanation if needed (wrap at 72 chars).
Explain what and why, not how.

- Bullet points are okay
- Use present tense: "Add feature" not "Added feature"

Closes #123
```

Types: Add, Fix, Update, Remove, Refactor, Docs, Test

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Oh Shit, Git!?!](https://ohshitgit.com/)

---

**Remember**: Git is powerful but can be dangerous. Always double-check before using `--force` or `--hard` flags!
