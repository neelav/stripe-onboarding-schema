#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]
then
    echo "Version not specified"
    exit 1
fi

RELEASE="release-$VERSION"

git checkout master
git checkout -b $RELEASE
npm run build
rm -rf src
ROOT=pwd
cd dist
mv -R * $ROOT
rm -rf dist

git add -A
git commit -m "Deploying version $RELEASE"
git push origin $RELEASE