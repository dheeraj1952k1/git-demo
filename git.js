/*
Chapter 1 =  Clone and Status : 

Clone means duplicate : Cloning a repository on our local machine
Status : to check the status of our code

Commands: 
    * git clone <-some link -> :
       here 'some link' refer to http link of the project you want to clone

    * cd : change directory

    * clear : to clear terminal

    * ls : list all files and folders

    * Get-ChildItem -Force : to look for all files including ⭐hidden files

    * git-status : to check the status of files i.e list all modified files

If you had modified your file and it listed in check while git status :
You have to perform two step : add and commit
add means: pushing the files to one step further for commit
commit : make changes unmodified.. or save changes 

git status : it shows four status untracked : modified : stages : unmodified
untracked : new files that git doesn't yet track
modified : changed files
staged :  file is ready to be committed
unmodified : unchanged
     

Summary ... starting me file modified (changed) /// ya untraked (new file) rhegi
            fir add karo (staged)
            fir commit (unchanged) kar do

*/

/*
Chapter 2 : Add and Commit
   
    Add : adds new or changed files in your working directory to the Git staging area.
    command :  git add <-file name ->
               git add .   : to add all fine at once

    Commit : It is the record of change
    command :  git commit -m "some message"

 */

/*
Chapter 3 : Push command : i.e local se remote changes ko bhejne ke liye iska use karte hai
     
       push: upload local repo content to remote repo i.e to make changes visible on github
       command: git push origin main
*/
