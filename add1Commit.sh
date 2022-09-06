#!/usr/local/bin/bash

# Here I commit a message with the wrong message. How do I fix this?
echo "I am line #5." >> box.txt

git add add1commit.sh box.txt

# Here we are purposefully adding an incorrect commit message.
git commit -m "Deleted line #5."

# Go to command line and type this:
# git commit --amend -m "Added line #5."

# How do we amend git commit message of a particular commit?
