# GMaps locator SPA
## Built in React.js ## By Daniel Vega
======

## Instructions for development and code changes:

*All changes will be auto-compiled to the final compiled.js file using "watch" script*

```
npm install
npm run watch

```

## Instructions for build production app:

*Changes will be available to compiled.js as a minified file*

```
npm run build
npm start

```

## Testing app:

*TBD testing mode*

```
npm run test

```

## Dependencies

### react

The UI JSX library.

### browserify

Toolkit to split React's components in different files as **modules**.

### reactify

A jsx transformer with ES6 support to compile executable JS code.

### watchify

Tool for 'watch' or 'listen' all the changes on the pre-compilation phase.

### uglify-js

Tool to minify all the code and to take it to production-grade mode.

#### Additional info:

1. You can see diagrams and visual helps on the *images* folder.

2. In order to create a dynamic call to an API REST, you can add jQuery as a dev dependency to use the bundle **$.ajax({})** tool or use **node-jsx** to render server-side HTML.

3. App architecture:

```
/
---- css
	 ---- icomoon/
	 ---- foundation.min.css
	 ---- master.css
---- images
	 ---- Components Distribution.png
---- js
 	 ---- build/
 		  ---- compiled.js
 	 ---- src/
 		  ---- index.js
 		  ---- components
			   ---- App.js
			   ---- CurrentLocation.js
			   ---- Header.js
			   ---- LocationItem.js
			   ---- LocationList.js
			   ---- Map.js
			   ---- Title.js
 	 ---- thirdparty/
 		  ---- moment.min.js
---- index.html
---- package.json
---- README.md
---- TODO.md

```
