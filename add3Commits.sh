#!/usr/local/bin/bash

# Can you create a file and add 3 lines to it?
if [ ! -f box.txt ]; then
    touch box.txt
    echo "File box.txt created."
fi

for count in {1..4}
do
    echo "Line #$count inserted." >> box.txt
    git add .
    git commit -m "Added Line #${count}."
    git push
done
