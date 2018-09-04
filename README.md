# testing567
Testing github repo

## перейти на одну папку выше в терминале
cd ..

## перейти на одну папку ниже в терминале
cd название-папки

## очистить терминал
clear 

# склонировать репозиторий себе на комп с созданного первым удаленного репозитория
git clone https:...

## ls - it's going to show what's in this folder
ls


git status

git add .
git add test.html README.md

git status

### files green, not red

git commit -m "added test.html file and updated readme with how to use GitHub"

git push origin master


# branch
git branch my_branch
git checkout my_branch

git status
git add README.md test.html
git commit -m "added nav and lorem, updated readme 3"
git push origin my_branch

git branch name_isTest-here

# GitHub Basics - Merging Pull Requests

Merging via command line

If you do not want to use the merge button or an automatic merge cannot be performed, you can perform a manual merge on the command line.

HTTPS Git Patch https://github.com/NJul/testing567.git


Step 1: From your project repository, bring in the changes and test.


git fetch origin

git checkout -b my_branch origin/my_branch

git merge master


Step 2: Merge the changes and update on GitHub.


git checkout master

git merge --no-ff my_branch

git push origin master

# Delete branch
git branch my_branch -D