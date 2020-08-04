#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]
then
    echo "Version not specified"
    exit 1
fi


TMPDIR=$(mktemp -d)
cd $TMPDIR

git clone git@github.com:neelav/stripe-onboarding-schema.git
cd stripe-onboarding-schema

if [ "$VERSION" == "patch" ]; then
    npm --no-git-tag-version version patch
else
    npm --no-git-tag-version version "$VERSION"
fi

VERSION=`jq '.version' package.json`
RELEASE="release-$VERSION"

git checkout master
git checkout -b $RELEASE
npm install
npm run build
rm -rf src
cp -R dist/ ./
rm -rf dist

echo "`jq '.main="index.js"' package.json`" > package.json

git add -A
git commit -m "Deploying version $RELEASE"
git push origin $RELEASE

git checkout master
npm version $VERSION
git push origin master