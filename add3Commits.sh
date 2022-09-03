#!/usr/local/bin/bash

# Can you create a file and add 3 lines to it?
if [ ! -f box.txt ]; then
    touch box.txt
    echo "File box.txt created."
fi

for count in {12..13}
do
    echo $count >> box.txt
    git add .
    git commit -m "Added ${count}."
    git push
done