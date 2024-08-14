# Broke-Buddy

### Github Commands ->

- git init: to initialize a new git repository in a local folder of your pc
- git branch: to see all the branches
- git branch -m <name>: to rename the main branch
- git status: to check the status of the github repo
- git config --global user.name <Name>: set author-name
- git config -- global user.email <Email>: set author email
- git config --list: to check whether the author name and email exist or not(must be there before committing if not then add it).
- git log: to see the history of the commits.
- git log --graph: to see the history of the commits in tree form(in case some commits have multiple parents)

### Git Terminologies -> 

- Blob: means files
- Tree: means folder
- Commit: represent pointers to specific trees (folder) / snapshot of the particular copy of a folder
- Annotated Tag:

- Working Folder: where your files are stored locally
- Stage area: intermediate step between commits
- Git repository: where the committed version of the files is stored as objects

![image](https://github.com/user-attachments/assets/21e2d141-9fd2-4e36-8f0d-9fb69cd4b1ac)

Command to add and commit:
- git add -> to add the file to the stage area
- git commit -m "Commit message" -> to add the file to the git repository
- git commit -a -m "Commit message" -> to do both stages and commit at the same time
- git branch < New Branch > : to create a new branch (the current branch will not change)
- git checkout < branch/Sha1 > -> to switch to the branch or the commit
- git merge < branch-name > -> merge the Branch into the main

### File tracking statuses
- Untracked
- Unmodified
- Modified
- Staged





