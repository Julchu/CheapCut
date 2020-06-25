// Enable git versioning in folder
git init

// Pull from repository https://github.com/julchu/slocator.git
git pull https://github.com/julchu/slocator.git

// Create local branch named branch_name
git branch <branch_name>

// Switch to local branch branch_name
git checkout <branch_name>

// Push local branch branch_name to remote (to Github)
git push -u origin <branch_name>

// Check all modified files
git status

// Add all changes to commit
git add .

// Commit all changes with log message "Adding files"
git commit -m "Adding files"

// Pushing commit to remote (to Github)
git push

// Reset user credentials
git config --global credential.helper wincred

// Initial commit
echo "# Test" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Julchu/Test.git
git push -u origin master

// If cloning existing repo
git remote add origin <URL>

// Prune (remove) local versions of remote branches that have been deleted
git remote prune origin