#!/bin/sh
git submodule init
git submodule update --init --recursive
git submodule foreach -q --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master) && git pull'
echo "Finished updating submodules"