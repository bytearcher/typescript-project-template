# TypeScript Project Template

TypeScript template project with things set up you'd expect in a modern development process.

## Start new project

    git init
    touch README.md
    git add README.md
    git commit -m 'initial commit' README.md
    git pull --log --allow-unrelated-histories https://github.com/bytearcher/typescript-project-template.git
    npm install

Change project name and other fields in created `package.json` and re-write the `README.md`.

## Update latest template to existing project

    git pull --log https://github.com/bytearcher/typescript-project-template

## Clean

    npm run clean

## Build

    npm run build

## Test

    npm test

## Test-driven development

    ./tdd

## Install d.ts definitions

Encourage module authors to bundle .d.ts files with NPM packages. Packages use `typings` property in `package.json` to state the location of bundled definition files. TypeScript compiler can work with such projects automatically.

If typings are not available in the NPM package, install types with NPM from the "@types" organization.

    npm install @types/bluebird --save

Use `--save` instead of `--save-dev` to get type dependencies installed downstream when this project is used as a library. (Test related typings can go to `devDependencies`.)

## Write test

Copy test stub.

## Write source file

Copy source file stub.
