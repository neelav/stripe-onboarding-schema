#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]
then
    echo "Version not specified"
    exit 1
fi

RELEASE="release-$VERSION"

TMPDIR=$(mktemp -d)
cd $TMPDIR

git clone git@github.com:neelav/stripe-onboarding-schema.git
cd stripe-onboarding-schema

git checkout master
git checkout -b $RELEASE
npm install
npm run build
rm -rf src
cp -R dist/ ./
rm -rf dist

echo "`jq '.main="index.js"' package.json`" > package.json
npm --no-git-tag-version version "$VERSION"
git add -A
git commit -m "Deploying version $RELEASE"
git push origin $RELEASE