# testing567
Testing github repo

## Что нужно, чтобы добавить свои правки в этот репозиторий.
## 1. Зарегистрироваться на https://github.com
## 2. Установить на свой компьютер git, https://git-scm.com/
## 3. Перейти по ссылке: https://github.com/NJul/testing567
## 4. Нажать на кнопку     Clone or download (Clone with HTTPS) скопировать ссылку https://github.com/NJul/testing567.git
## 5. На своем компьютере в терминале, командной строке, переходите в папку со своими проектами, domains.
## 6. Склонировать репозиторий себе на компьютер, скопировав в свой терминал строку ниже и нажав Enter :
git clone https://github.com/NJul/testing567.git
## 7. Открываете папку testing567 в своем редакторе кода, IDE. Заходите в склонированную папку в своем терминале, командной строке. Создаете свою ветку для редактирования кода (git branch my_branch_your_name). Выбираете и переходите на нее (git branch my_branch_your_name).

git branch my_branch_your_name

git checkout my_branch_your_name

## 8. Вносите правки в файлы, добавляете свои новые файлы.
## 9. Дальше набираете построчно команды в своем терминале, нажимая в конце клавишу Enter.

git add .

git commit -m "какие правки на сайте вы сделали, edit README.md"

git push origin my_branch_your_name




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

# создание и переход на созданную ветку одной командой
git checkout -b test

# Delete branch
git branch my_branch -D

# git pull
### Получение новых данных с удаленного сервера GitHub
git pull

# Команда показывает все ветки, которые имеются в этом проекте, звездочка обозначает ветку, которая выбрана для работы сейчас
git branch

# view the history of files
git log