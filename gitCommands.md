# Как залить в чужой репозиторий на GIthub?

```sh
1. Копируете себе локально репозиторий.
git clone url [folder]
cd [folder]
```

2. Создаете ветку [branch_name]
git checkout -b [branch_name]

3. Делайте изменения. 

4. Делаете один коммит или несколько.
git add . (если создавали новые файлы)
git commit -m "Added beautiful fixes"

5. Создаете удаленную ветку.
git push --set-upstream origin [branch_name]
В дальнейшем когда удаленная ветка создана то просто 
git push.

6. Создаете в интерфейсе github pull-request. Из вашей ветки в master.
8536993405.png

7. Автор или вы сами вливаете (merge) / отклоняете (decline) pull-request. 
На этом этапе можно добавить комментарии или замечания к коду, что-то исправить. 

8.Когда пул-реквест влили, вы локально переключаетесь в master и забираете все изменения
git checkout master
git pull

Если еще нужно что-то сделать повторяете шаги начиная со 2.



# Basic Git Commands

### Creating a repository online for the <b>1st time</b>!
```sh
# navigated into your folder you want to put on Github
$ touch README.md # create a file called README.md where you can put instructions/info about your folder like what you are reading right now!
$ git init # initialize your git repository locally
$ git add . # adds everything changed from local to staging
$ git commit -m "first commit" # commits everything in staging to be ready to be pushed to Github
$ git remote add origin https://github.com/quinnliu/GitCommands.git
$ git push -u origin master # the "-u" is so that the next time your push you don't need to type "origin master"
# put in a username & password
```

### When adding on to your repository online with changes
```sh
$ git add .
$ git add -u # when you have deleted a local file you want to remove from your repository
$ git commit -m 'what has changed'
$ git push 
# put in username & password
```

### No more username & password input for every push
```sh   
# Note that you must first generate a SSH key on your local computer and add it to your 
# Github account before using the following command. Follow the directions here:
# https://help.github.com/articles/generating-ssh-keys
$ git remote set-url origin git@github.com:yourUsername/yourReponame.git
```

### Working together from perspective of person that doesn't have the main repo
```sh
# fork repo you want to work on
$ git clone https://github.com/yourUsername/yourReponame.git
# add changes to your forked repo 
# make a pull request!
$ git pull # use this after someone else has made a change to the online repo 
           # your working on and you want to make your local repo up to date
```

### Want to remove a file frome online github repo but keep it locally
```sh
$ git rm --cached localFileName
# add localFileName to .gitignore file 
# then commit these changes
# push these changes to your repo!
```

### Commands for fixing problems
```sh
# undo multiple commits  
$ git reset --hard commitSHA###... # changes staging index and 
                                   # local folder to match online 
                                   # repository commit

# removing 3 commits from online github repo
$ git push -f origin HEAD^^^:branchNameToUndoLast3Pushs

$ git reset HEAD -- CSS/         # Если вы сделали $ git add CSS/main.css CSS/ font.css ,
                                 # а потом решили, что CSS изменения не относятся к текущей задаче,
                                 # убираем папку CSS из отслеживания, то есть все файлы из папки CSS 
                                
```

### Branch Commands 
```sh
# creating a new branch
$ git branch -a # list all branches in working folder  
$ git branch newBranchName  
$ git checkout newBranchName # switch to branch newBranchName
$ git push -u origin newBranchName # adds new branch to github repo and "-u" lets 
#                                    you know when your local branch is different 
#                                    than the remote branch

# merging new branch to old branch
$ git checkout oldBranchName
$ git merge --no-ff branchName # "--no-ff" creates a commit that there was a branch merge
#                                   so in the future when you are looking at your commit log
#                                   you know when exactly when you merged one branch into another
$ git push origin oldBranchName 
$ git branch -D branchName # deletes local branch branchName
$ git push remoteName --delete branchName # deletes remote branch branchName
```

### When you need to have git_repo_2 inside git_repo_1
```sh
# have both git_repo_1 and git_repo_2 with setup correctly from above
$ cd git_repo_1
$ git submodule add git@github.com:yourUsername/git_repo_2.git
$ git add .; git commit -m 'what has changed'; git push 

# to update your git_repo_1 when git_repo_2 independently changes
$ cd git_repo_1
$ git submodule init
$ git submodule update
```


Skip to content
Sign up Sign in
This repository  
Search
Explore
Features
Enterprise
Pricing
 Watch 7  Star 88  Fork 48 maxim-oleinik/symfony-dev-rules
 Code  Pull requests 1  Pulse  Graphs
Branch: master Find file Copy pathsymfony-dev-rules/git-cheat-sheet.txt
8673e49  on 4 Mar 2011
@maxim-oleinik maxim-oleinik Git/Cheat: добавил новые команды
1 contributor
RawBlameHistory    408 lines (299 sloc)  17.1 KB
Git
================================================================================

Ссылки
------
  * Книга "Pro Git"
        http://progit.org/book/
  * Книга "Git Community Book"
        http://book.git-scm.com/
  * Книга "Git Magic"
        http://www-cs-students.stanford.edu/~blynn/gitmagic/index.html
        перевод: http://habrahabr.ru/blogs/Git/80909/
  * Сравнение команд Git-SVN
        http://git.or.cz/course/svn.html
  * Редактирование истории в git
        http://gq.net.ru/2009/12/16/git-history-rewrite/


Установка
---------

  Win:
    http://code.google.com/p/msysgit/
    Надо везде указать UTF-8


Настройка
---------

  1. Отредактировать файл ~/.gitconfig
        [user]
            name  = Maxim Oleinik
            email = maxim.oleinik@gmail.com

        [color]
            diff   = auto
            status = auto
            branch = auto

        [alias]
            st = status
            ci = commit
            br = branch
            co = checkout
            di = diff
            plog = log --pretty=format:'%h %Cblue%cn %Creset%cr %Cgreen%s'
            # можно указать любые свои алиасы к разным командам

        [core]
            whitespace = trailing-space, space-before-tab, cr-at-eol

    Или использовать команду git config:
        git config --global user.name  "Maxim Oleinik"
        git config --global user.email "maxim.oleinik@gmail.com"

    !!! Далее все примеры будут использовать указанные алиасы.

  2. Чтобы игнорировать конфигурационные файлы личного IDE,
     которые не не должны фигурировать в .gitignore,
     надо указать все эти файлы в PROJECT_DIR/.git/info/exclude


Общее
-----

  # Утилита для просмотра дерева коммитов
  gitk --all &
    или
  gitg

  # Создать репозиторий в текущей директории
  git init

  # Клонировать существующий репозиторий
  git clone /path/to/repo
  git clone http://github.com/symfony/symfony.git

  # Игнорирование файлов
  Перечислить все в PROJECT_DIR/.gitignore

  # Полностью обновить свой репозиторий
  git fetch
  git fetch --tags            # Обновить теги, которые были "передвинуты"
  git remote prune origin     # Убрать ссылки на удаленные ветки
  git co master
  git merge origin/master
  git submodule update --init # Обновить ссылки на субмодули
  git submodule foreach 'git submodule update --init' # Обновить субмодули субмодулей


Рабочий процесс
---------------

  # показать статус - список измененных незакоммиченных файлов
  git st

  # Staged - промежуточный коммит
  git add <file>
  git add myFile*
  git add <dir1> <dir2> <file1>
  git add .       # Добавить ВСЁ в текущей директории
  git add -p      # Добавлять фрагментами дифа, просматривая каждое изменение
                  # ОЧЕНЬ рекомендую использовать постоянно
  git add -N .    # Добавить все "новые" файлы под контроль без содержимого (только путь),
                  # т.е. git покажет содержимое этих файлов в дифе

  git rm          # удалить файл или директорию
  git ls-files -d | xargs git rm # Если файлы удалили ручками без git rm,
                                 # тогда это поможет удалить их для git скопом

  git mv          # переименовать файл
                  # фактически это 2 команды add NEW + rm OLD

  # Diff
  git di --cached # просмотреть изменения, которые будут закоммичены (добавлены как git add)
  git di          # просмотреть изменения, которые не "добавлены"
  git di HEAD     # просмотреть все измения
  git di -b -w    # посмотреть диф без учета пробелов

  # Новые файлы (не добавленные через git add) diff не показывает.
  # Или можно добавить их через git add -N

  # Коммит
  git сi          # закоммитить изменения добавленные через git add
  git сi -a       # закоммитить все изменения
                  # новые файлы (не добавленные через git add) не коммитятся
  git сi <file1> <dir> - закоммитить указанные файлы (независимо от git add)

  # Отменить текущие незакоммиченные изменения в файлах
  git co <file1> <dir>         # откатить не "добавленные" измения
  git reset HEAD <file1> <dir> # отменить git add


Управление коммитами, откат изменений
-------------------------------------
см. http://gq.net.ru/2009/12/16/git-history-rewrite/

  git revert HEAD     # создаст новый зеркальный коммит
  git commit --amend  # изменить сообщение последнего коммита

  # Откатить коммит, отредактировать и закоммитить заново
  git reset --soft HEAD^      # откатить последний коммит
  ... внести измения
  git commit                  # закоммитить

  # Объединить коммиты, удалить, изменить порядок
  git rebase -i HEAD~3  # последние 3 коммита
  # откроется редактор со списком коммитов с командой напротив каждого коммита
  # там есть справка, какие команды есть, и что они делают


Ветки и Теги
------------

  # Работа с тегами
  см. git help tag
  git tag -f TAG_NAME <ref>   # Передвинуть существующую метку в новую точку


  # Ветки
  git br    # список локальных веток
  git br -r # список веток внешнего репозитория
  git br -a # список всех веток

  git br my-branch            # создать ветку my-branch с текущей позиции
  git co -b my-branch master  # создать ветку my-branch от master и переключиться на нее
  git co -b some-branch origin/some-branch  # создать ветку some-branch из origin репозитория

  git br -d my-branch        # безопасно удалить ветку (смерджена в текущую)
  git br -D my-branch        # принудительно удалить ветку

  git co my-branch           # переключиться на указанную ветку

  # Merge

      A - B - C (master)
        \
          D - E (my-branch)

      git co master
      git merge my-branch

      A - B - C - F (master)
        \       /
          D - E  (my-branch)


  # Cherry-pick - положить указанный коммит в текущую ветку

      A - B - C (master)
        \
          D (my-branch)

      git co master
      git cherry-pick D

      A - B - C - D' (master)
        \
          D (my-branch)


  # Подтянуть ветку

      A - B - C (master)
        \
          D - E (my-branch)

      git co my-branch
      git rebase master

      A - B - C (master)
              \
                D - E  (my-branch)


  # Пененести ветку (поменять родителя)

      A - B - C (master)
        \
          D - E (branch-1)
              \
                F - G (branch-2)

      git co branch-2
      git rebase --onto master branch-1 branch-2

      A - B - C (master)
       \       \
        \       F - G (branch-2)
         \
          D - E (branch-1)


Работа с удаленным репозиторием
-------------------------------

  git remote    # см. git help remote

  git fetch     # загрузить изменения из внешнего репозитория
                # в локальный репозиторий изменения не применяются

  git pull origin master     # загрузить в ТЕКУЩУЮ ветку изменения из origin/master
  # аналог git merge origin/master - и ЛУЧШЕ всего использовать этот вариант
  # во избежания разных недоразумений, поскольку сразу видно, что будет мердж в текущую ветку

  git push origin master     # отправить свои коммиты из local/master в origin/master
  git push origin my-branch  # экспортировать локальную ветку в my-branch в origin/master
  git push origin my-branch:remote-branch
                             # отправить правки из локальной ветки my-branch
                             # во внешнюю remote-branch

  git push origin :remote-branch  # удалить ветку `remote-branch` из внешнего репозитория

  # Удалить у себя все упоминания origin веток, которые кто-то уже удалил
  git remote prune origin


  # Теги
  git push --tags           # Отправить теги в удаленный репозиторий
  git fetch --tags          # Принудительно загрузить теги (если были передвинуты)
  git push origin :TAG_NAME # Удалить метку из удаленного репо


Пример командной работы над задачей в отдельной ветке
-----------------------------------------------------

  # Обновить свой репозиторий
  git fetch
  git co master
  git merge origin/master

  # Создать ветку "t314-article-form" под текущую задачу и переключиться на нее
  git co -b t314-article-form
  # ... работа и коммиты в новой ветке

  # Пока работал, master уже ушел вперед, надо обновить свою локальную копию master
  git fetch
  git co master
  git merge origin/master

  # Обратно в ветку и подтянуть ее к мастеру
  git co t314-article-form
  git rebase master  # Подтянуть ветку к новым правкам,
                     # теперь ветка со всеми коммитами будет начинаться из новой точки

  # Отправить ветку в общий (origin) репозиторий на ревью
  git push origin t314-article-form

  # После ревью слить и удалить ненужную теперь ветку
  git co master
  git merge t314-article-form
  git br -d t314-article-form        # Удалить локальную ветку
  git push origin :t314-article-form # Удалить ветку из общего репозитория

  # Все участники команды по-прежнему видят удаленную ветку. Удаляют ссылки у себя:
  git remote prune origin


Stash
-----
см. git help shash

  Пример работы над 2 задачами с изпользованием stash

  # Сохранить текущие незакоммиченные правки,
  # чтобы переключиться в другую ветку для срочной работы
  git stash save "Моя незаконченная работа"

  # ... переключаемся в другую ветку, работаем там и возвращаемся обратно

  # Восстанавливаем спрятанные правки
  git stash apply            # поднимет последнее сохранение
  git stash apply stash@{0}  # или явно указать номер
  git stas clear             # полностью очистить всю хоронушку
    или
  git stash pop    # восстановить правки и удалить запись о них

  # Просмотреть список всех сохраненных состояний
  git stash list


История
-------

  git show - выводит информацию об объектах (коммитах, метках, деревьях и пр.)
    ---------
    git show            # показать последний коммит
    git show fb47ddb2   # показать указанный коммит
    git show HEAD^      # предыдущий коммит (второй с конца)
    git show HEAD^^     # третий коммит с конца
    git show HEAD~4     # пятый коммит с конца
    -- слияния
    git show HEAD^1     # show the first parent of HEAD
    git show HEAD^2     # show the second parent of HEAD
    ----
    git show my-branch:fs/locks.c # посмотреть версию конкретного файла

  git log - вывести список коммитов по условию
    ----
    git log v2.5..        # commits since (not reachable from) v2.5
    git log test..master  # commits reachable from master but not test
    git log master..test  # ...reachable from test but not master
    git log master...test # ...reachable from either test or master, but not both
    git log origin/master..master # разница с внешним хранилищем - что надо закоммитить
    git log --since="2 weeks ago" # commits from the last 2 weeks
    git log Makefile      # commits which modify Makefile
    git log fs/           # ... which modify any file under fs/
    git log -S'foo()'     # commits which add or remove any file data
                          # matching the string 'foo()'
    ----
    git log --no-merges   # Не показывать мерджи
    git log -n 5 -p --reverse FILE  # Посмотреть последние 5 дифов указанного файла

    еще см. http://book.git-scm.com/3_reviewing_history_-_git_log.html - LOg


Субмодули
---------
Добавить в проект другой git-репозиторий ввиде субмодуля как внешнюю зависимость.
Нельзя добавить только часть репозитория как svn:externals, только весь целиком.

  см. git help submodule

  # Добавить субмодуль
  git submodule add http://github.com/maxim-oleinik/symfony-dev-rules ./doc/rules
  # Чтобы коммитить в субмодуль, надо изменить конфиг ./doc/rules/.git/config
  url = git@github.com:/maxim-oleinik/symfony-dev-rules.git

  # Обновить ссылки на субмодули
  git submodule update
  git submodule update --init

  # Выполнить указанную команду для каждого субмодуля
  git submodule foreach <command>
  git submodule foreach 'git st'

  # Удалить субмодуль
    1. Удалить из .gitmodules
    2. Удалить из .git/config
    3. Удалить файлы git rm --cached path/to/submodule
    4. Закоммитить результат

  # Обновить конфиг проекта, при переключении модуля на другой репозиторий
  git submodule sync

Субмодули в свою очередь могут иметь другие субмодули и так до бесконечности.
Это жутко неудобно. И поэтому, лучше явно прописывать все зависимости в одном месте.


Прочее
------

  # Очистить все файлы и директории, которые не стоят под контролем
  git clean -fd
  git clean -fdx  # !!! Удалит все файлы перечисленные в .gitignore

  # Лог всех манипуляций с репозиторием. Здесь можно искать потерянные коммиты
  git reflog

  # Оптимизировать и перепаковать репозиторий
  git gc

  # Работа с патчами
  git format-patch HEAD~2       # Создать набор патчей от указанной точки
  git format-patch master..test
  git apply /path/to/patch/file # Применить патч
  git send-email patch_files    # Отправить набор патчей по email