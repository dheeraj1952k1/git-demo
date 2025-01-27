/* Agar hum pahle dextop pe folder bana lete hai.. to kaise git se kaam karwayenge */

/*
 1. Init Command : used to create a new repo

    git init

    git remote add origin <-link->

    git remote -v (to verify remote)

    git branch   (to check branch)

    git branch-M main (to rename branch)

    git push origin main

*/

/*
** mkdir <-directory name->

**  cd <-new dir name->
**  Get-ChildItem -Force : use karenge to pta chalega ki local repo me git nhi hai i.e git initialised nhi hai

   or
   PS C:\Users\ACER\Desktop\mern\GITDEMO\localRepo> git status
   fatal: not a git repository (or any of the parent directories)
   : .git
   PS C:\Users\ACER\Desktop\mern\GITDEMO\localRepo> 

   now do

** git init : to initialise .git in local new repo
   
  PS C:\Users\ACER\Desktop\mern\GITDEMO\localRepo> git init
   Initialized empty Git repository in C:/Users/ACER/Desktop/mern/GITDEMO/localRepo/.git/
  
   now create file make changes..
   git add .
   git commit

   and then
   go to github and create a repository for localrepo push

   now 
   git remote add origin <-link of new repo-> : to make git remote a original repository

*/

/**
 *Understanding branch: Ek project me bhut variety ke log kaam karte hai jaise ki..
   Frontend team : Backend team : Bug fix team

   har ek team apne liye ek copy banati hai...usi ko hum branch kahte hai

   git branch karne se *master branch dikhege... abhi sb jagah ye main name se hai to rename karenge

   Now agar aap long time tk ek project pe kaam karna chahte hai to use karenge
   * git push -u origin main :: u means upstream : isse ye hoga ab baar baar origin main nhi likhna padega
                               git push se hi bs changes main me ho jayengi

 */

/**GIT BRANCH */

/** branch commands
 * git branch (to check branch)
 * git branch -M main (to rename branch)
 * git checkout <-branch name->  (to navigate to other branch)
 *
 * git checkout -b <-new branch name -> (to create bew branch)
 *
 * git branch -d <-branch name-> (to delete branch)
 */
