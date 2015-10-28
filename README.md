# New Web Prototype
## Built in React.js + Flux Architecture
**By Daniel Vega** *@danivegamx <ingdanivega@gmail.com>*
Nearshore Frontend Technical Leader @ Tata Consultancy Services

A responsive New Web's ReactJS prototype built on Flux architecture. This effort is focused on apply all the good practices and techniques to build scalable applications using "New Web's" tools, such as ReactJS, NodeJS, NPM and NPM packages. For more open source examples and initiatives, visit my [Github profile](https://www.github.com/danivegamx/).

## Instructions for development and code changes:

*All changes will be auto-compiled to the final compiled.js file.*

```
npm install
npm run watch
```

## Instructions for build production app:

*Changes will be available to compiled.js as a minified and compressed file.*

```
npm run build
```

## Testing app:

*TBD testing mode*

```
npm run test
```

## Dependencies

### react

The UI library and it's utilities.

### react-dom

Isolated module to handle *render* methods.

### reactify

A jsx transformer with ES6 support to compile executable JS code.

### browserify

Toolkit to split React's components in different files as **modules**.

### watchify

Tool for 'watch' or 'listen' all the changes on the pre-compilation phase.

### uglify-js

Tool to minify all the code and to take it to production-grade mode.

### stylus & nib

CSS pre-processing engine and mixin set to handle styles across browsers, solving compatibility issues.

### moment

Module to set timestamps into *x seconds/minutes/hours ago* format.

=====

## Additional info:

1. You can see diagrams and visual helps on the *images* folder.

2. In order to create a dynamic call to an API REST, you can add jQuery as a dev dependency to use the bundle **$.ajax({})** tool on the stores, or XMLHttpRequest method.

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
 		  ---- actions/
 		  	   ---- AppActions.js
 		  ---- components/
			   ---- App.js
			   ---- CurrentLocation.js
			   ---- Footer.js
			   ---- Header.js
			   ---- LocationItem.js
			   ---- LocationList.js
			   ---- Map.js
			   ---- Title.js
		  ---- dispatcher/
		  	   ---- AppDispatcher.js
		  ---- stores/
		  	   ---- FavoritesStore.js
		  	   ---- MapStore.js
 	 ---- thirdparty/
 		  ---- moment.min.js
---- index.html
---- package.json
---- README.md
---- TODO.md

```

## Changelog

### v1.0.0beta

Created React.js components. Included Foundation Grid system.

### v1.0.0alpha

Included stylus engine to build production CSS.

### v1.0.0 - Release

Finished the GMaps API connection and favorite locations' local storage.

### v1.1.0beta

Added Flux architecture.

### v1.1.0 - Release

Fixed listener's issue on memory using componentWillUpdate.
