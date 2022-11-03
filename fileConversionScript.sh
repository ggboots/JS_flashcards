#!/bin/bash

for file in *.pdf
do
    mv -v "$file" "${file%.pdf}.jpg"
done;

# counter that increase file by 1
# if true then
#    name="front"
# else 
#
# switch which knows if front/back and adds text to file

#1 - directory name
#use read
#input = CodingCardsAssestscopy
#cd $input

#2 - old file
oldFile=".pdf"

#3 - new file
newFile=".png"
echo $oldFile $newFile

# named new files


# references
# https://linuxhint.com/change-file-extension-multiple-files-bash/
# https://stackoverflow.com/questions/26548042/png-file-or-pdf-file-which-offers-better-quality
