#!/usr/local/bin/bash

echo "Going to reset directory to hash: ad1632f."
echo "Using git reset --mixed so all new files past hash ad1632f will still exist but be unstaged."
git reset ad1632f

echo ""

echo "Adding all the unstaged files."
git add .
echo "Commiting staged files."
git commit -m "Reset directory to hash ad1632f."
echo "Force pushing changes upstream to charelampnight's trash repo."
git push -f origin main

echo ""
echo "Enjoy messing up this trash repo."
