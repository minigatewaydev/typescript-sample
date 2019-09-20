# TypeScript Code Sample

This sample is constructed using Visual Stuido Code 1.38.1, so the editor is required if you want to modify run the application out of the box. You may also use another IDE of your choice, but some code structure may need some modification or conversion.

__Note: This sample is constructed with TypeScript v3.6.3 that depends on NodeJS v10.16.3.__

## Project dependency
This project uses the following library:
- Axios → <code>npm i axios</code>
- TS Stopwatch → <code>npm i ts-stopwatch</code>

## Running sample in VSC
A TypeScript (.ts) code is transpiled into JavaScript (.js) file using VSCODE internal task runner, so it can be run using <code>node</code> command.

Before that:
- Download as ZIP and extract
- In VSC, File > Open Folder

To transpile code automatically, do this:
- Hit <code>ctrl + shift + B</code>
- Select <code>tsc:watch - tsconfig.json</code>

A terminal will be displayed with current TypeScript compiler watch status. This watching behavior happened in real-time.

Please ensure that the real-time compiler watch status is always happen. Otherwise, new changes in your TypeScript code will never renewed in JavaScript code.

More information: https://code.visualstudio.com/docs/typescript/typescript-compiling

After doing all above, to run the sample:
- Make sure to change the required information in <code>app.ts</code> file
- Terminal > New Terminal
- type <b><code>node app.js</code></b> (.js and <b>NOT</b> the .ts) and hit enter

