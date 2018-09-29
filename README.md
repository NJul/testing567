# testing567
`Testing github repo with Collaborators.`



      I faced the same error -

      I did not have privileges to commit to selected repository. 

      I did not know that I have to

      fork selected project first

      clone repository locally

      commit my changes locally

      push changes to my github clone

      request pull request to upstream

---
## Что нужно, чтобы добавить свои правки в этот репозиторий.
### 1. Зарегистрироваться на https://github.com
### 2. Установить на свой компьютер git, https://git-scm.com/
### 3. Перейти по ссылке: https://github.com/NJul/testing567
### 4. Нажать на Fork репозитория, который будете редактировать.
### 5. Нажать на кнопку Clone or download (Clone with HTTPS) уже в своем Forke, скопировать ссылку https://github.com/NJul/testing567.git
### 6. На своем компьютере в терминале, командной строке, переходите в папку со своими проектами, domains. 
### 7. Клонируете репозиторий себе на компьютер - git clone url [folder] -, скопировав в свой терминал строку ниже и нажав Enter :
git clone https://github.com/NJul/testing567.git
### 8. Открываете папку testing567 в своем редакторе кода, IDE, у меня - Visual Studio Code. Заходите в склонированную папку в своем терминале, командной строке - cd [folder]. Создаете свою ветку для редактирования кода (git branch my_branch_your_name). Выбираете и переходите на нее (git branch my_branch_your_name). ( Можно создать и перейти одной строкой: git checkout -b [branch_name] ).

git branch my_branch_your_name

git checkout my_branch_your_name

### 9. Вносите правки в файлы, добавляете свои новые файлы. Делаете один коммит или несколько.
### 10. Дальше набираете построчно команды в своем терминале, нажимая в конце клавишу Enter.

git add .

git commit -m "какие правки на сайте вы сделали, edit README.md"

### 11. Создаете удаленную ветку. В дальнейшем когда удаленная ветка создана то просто: git push.

git push --set-upstream origin my_branch_your_name

git push origin my_branch_your_name

### 12. Переходите на Github. Создаете в интерфейсе Github pull-request. Из вашей ветки в master. Автор или вы сами вливаете (merge) / отклоняете (decline) pull-request. На этом этапе можно добавить комментарии или замечания к коду, что-то исправить. Когда пул-реквест влили, вы локально переключаетесь в master и забираете все изменения 

git checkout master

git pull

Если еще нужно что-то сделать, повторяете шаги, начиная с 8-го.

---

## перейти на одну папку выше в терминале
cd ..


## перейти на одну папку ниже в терминале
cd название-папки


## очистить терминал
clear 


## склонировать репозиторий себе на комп с созданного первым удаленного репозитория
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


## branch

git branch my_branch

git checkout my_branch

git status

git add README.md test.html

git commit -m "added nav and lorem, updated readme 3"

git push origin my_branch

git branch name_isTest-here


## GitHub Basics - Merging Pull Requests

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

## создание и переход на созданную ветку одной командой

git checkout -b test

## Delete branch

git branch my_branch -D

## Получение новых данных с удаленного сервера GitHub

git pull

## Команда показывает все ветки, которые имеются в этом проекте, звездочка обозначает ветку, которая выбрана для работы сейчас

git branch

## view the history of files

git log

## Как объединить несколько коммитов в один (squash)

Если у нас был старый принятый коммит и мы хотим все коммиты после него соединить в один, то пишем его sha_хеш .

git rebase -i sha_хеш_коммита

Заменяем слово pick на слово squash, кроме самого первого сверху коммита.
Для редактирования нажать кнопку Insert, после редактирования нажать 2 раза Esc, написать :wq
(это сохранит текущий файл).

git push -f