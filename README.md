# New Web Prototype
## Built in React.js (ES6) + Flux Architecture
**By Daniel Vega** *@danivegamx <ingdanivega@gmail.com>*
Senior Software Engineer & Front-End Competency Lead

A responsive ReactJS app built on ES6 and Flux architecture. This effort is focused on apply all the good practices and techniques to build scalable applications using cutting-edge technologies tools, such as ReactJS, Flux and NodeJS. For more open source examples and initiatives, visit my [Github profile](https://www.github.com/danivegamx/).

## Instructions for development and code changes:

*All changes will be auto-compiled to the final bundle.js file.*

```
npm install
npm run start
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

### stylus & nib

CSS pre-processing engine and mixin set to handle styles across browsers, solving compatibility issues.

### moment

Module to set timestamps into *x seconds/minutes/hours ago* format.

=====

## Additional info:

1. In order to create a dynamic call to an API REST, you can add AJAX or HttpRequest on the stores.

2. App architecture:

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
 		  ---- bundle.js
 	 ---- src/
 		  ---- index.js
 		  ---- actions/
 		  	   ---- AppActions.js
 		  ---- components/
			   ---- App.jsx
			   ---- CurrentLocation.jsx
			   ---- Footer.jsx
			   ---- Header.jsx
			   ---- LocationItem.jsx
			   ---- LocationList.jsx
			   ---- Map.jsx
			   ---- Title.jsx
		  ---- dispatcher/
		  	   ---- AppDispatcher.js
		  ---- stores/
		  	   ---- FavoritesStore.js
		  	   ---- MapStore.js
 	 ---- thirdparty/
 		  ---- moment.min.js
---- index.html
---- package.json
---- webpack.config.js
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

### v2.0.0 - Release

Refactored to ES6 and applied redesign.
