/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs-test/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 197);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_tools__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__content_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ContentTools__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ContentTools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ContentTools__);



var ready = function ready() {
    var editor = ContentTools.EditorApp.get();

    editor.init('*[data-editable]', 'data-name');
    editor.createPlaceholderElement("<p>Empty Page</p>");
    editor.addEventListener('saved', function (ev) {
        var name, dom_element, action, method, payload, dataset, regions, req;

        // Check that something changed
        regions = ev.detail().regions;
        if (Object.keys(regions).length == 0) {
            return;
        }

        // Set the editor as busy while we save our changes
        this.busy(true);

        // Collect the contents of each region into a FormData instance
        payload = {};
        for (name in regions) {
            if (regions.hasOwnProperty(name)) {
                payload[name] = regions[name];
            }
        }

        // Set action path and http method
        dom_element = $("#content-editor-data");
        action = dom_element.data("action");
        method = dom_element.data("method");

        // Send the updated content to the server to be saved
        req = $.ajax({ beforeSend: function beforeSend(xhr) {
                xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
            },
            method: method, url: action, data: payload });

        req.done(function () {
            // Save was successful, notify the user with a flash
            new ContentTools.FlashUI('ok');
        });

        req.fail(function () {
            // Save failed, notify the user with a flash
            new ContentTools.FlashUI('no');
        });

        req.always(function () {
            // Make sure the editor is no longer set in a busy state
            ContentTools.EditorApp.get().busy(false);
        });
    });
};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

(function() {
  var FSM, exports;

  FSM = {};

  FSM.Machine = (function() {
    function Machine(context) {
      this.context = context;
      this._stateTransitions = {};
      this._stateTransitionsAny = {};
      this._defaultTransition = null;
      this._initialState = null;
      this._currentState = null;
    }

    Machine.prototype.addTransition = function(action, state, nextState, callback) {
      if (!nextState) {
        nextState = state;
      }
      return this._stateTransitions[[action, state]] = [nextState, callback];
    };

    Machine.prototype.addTransitions = function(actions, state, nextState, callback) {
      var action, _i, _len, _results;
      if (!nextState) {
        nextState = state;
      }
      _results = [];
      for (_i = 0, _len = actions.length; _i < _len; _i++) {
        action = actions[_i];
        _results.push(this.addTransition(action, state, nextState, callback));
      }
      return _results;
    };

    Machine.prototype.addTransitionAny = function(state, nextState, callback) {
      if (!nextState) {
        nextState = state;
      }
      return this._stateTransitionsAny[state] = [nextState, callback];
    };

    Machine.prototype.setDefaultTransition = function(state, callback) {
      return this._defaultTransition = [state, callback];
    };

    Machine.prototype.getTransition = function(action, state) {
      if (this._stateTransitions[[action, state]]) {
        return this._stateTransitions[[action, state]];
      } else if (this._stateTransitionsAny[state]) {
        return this._stateTransitionsAny[state];
      } else if (this._defaultTransition) {
        return this._defaultTransition;
      }
      throw new Error("Transition is undefined: (" + action + ", " + state + ")");
    };

    Machine.prototype.getCurrentState = function() {
      return this._currentState;
    };

    Machine.prototype.setInitialState = function(state) {
      this._initialState = state;
      if (!this._currentState) {
        return this.reset();
      }
    };

    Machine.prototype.reset = function() {
      return this._currentState = this._initialState;
    };

    Machine.prototype.process = function(action) {
      var result;
      result = this.getTransition(action, this._currentState);
      if (result[1]) {
        result[1].call(this.context || (this.context = this), action);
      }
      return this._currentState = result[0];
    };

    return Machine;

  })();

  if (typeof window !== 'undefined') {
    window.FSM = FSM;
  }

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = FSM;
  }

}).call(this);

(function() {
  var ALPHA_CHARS, ALPHA_NUMERIC_CHARS, ATTR_DELIM, ATTR_ENTITY_DOUBLE_DELIM, ATTR_ENTITY_NO_DELIM, ATTR_ENTITY_SINGLE_DELIM, ATTR_NAME, ATTR_NAME_CHARS, ATTR_NAME_FIND_VALUE, ATTR_OR_TAG_END, ATTR_VALUE_DOUBLE_DELIM, ATTR_VALUE_NO_DELIM, ATTR_VALUE_SINGLE_DELIM, CHAR_OR_ENTITY_OR_TAG, CLOSING_TAG, ENTITY, ENTITY_CHARS, HTMLString, OPENING_TAG, OPENNING_OR_CLOSING_TAG, TAG_NAME_CHARS, TAG_NAME_CLOSING, TAG_NAME_MUST_CLOSE, TAG_NAME_OPENING, TAG_OPENING_SELF_CLOSING, exports, _Parser,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  HTMLString = {};

  if (typeof window !== 'undefined') {
    window.HTMLString = HTMLString;
  }

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = HTMLString;
  }

  HTMLString.String = (function() {
    String._parser = null;

    function String(html, preserveWhitespace) {
      if (preserveWhitespace == null) {
        preserveWhitespace = false;
      }
      this._preserveWhitespace = preserveWhitespace;
      if (html) {
        if (HTMLString.String._parser === null) {
          HTMLString.String._parser = new _Parser();
        }
        this.characters = HTMLString.String._parser.parse(html, this._preserveWhitespace).characters;
      } else {
        this.characters = [];
      }
    }

    String.prototype.isWhitespace = function() {
      var c, _i, _len, _ref;
      _ref = this.characters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        if (!c.isWhitespace()) {
          return false;
        }
      }
      return true;
    };

    String.prototype.length = function() {
      return this.characters.length;
    };

    String.prototype.preserveWhitespace = function() {
      return this._preserveWhitespace;
    };

    String.prototype.capitalize = function() {
      var c, newString;
      newString = this.copy();
      if (newString.length()) {
        c = newString.characters[0]._c.toUpperCase();
        newString.characters[0]._c = c;
      }
      return newString;
    };

    String.prototype.charAt = function(index) {
      return this.characters[index].copy();
    };

    String.prototype.concat = function() {
      var c, indexChar, inheritFormat, inheritedTags, newString, string, strings, tail, _i, _j, _k, _l, _len, _len1, _len2, _ref, _ref1;
      strings = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), inheritFormat = arguments[_i++];
      if (!(typeof inheritFormat === 'undefined' || typeof inheritFormat === 'boolean')) {
        strings.push(inheritFormat);
        inheritFormat = true;
      }
      newString = this.copy();
      for (_j = 0, _len = strings.length; _j < _len; _j++) {
        string = strings[_j];
        if (string.length === 0) {
          continue;
        }
        tail = string;
        if (typeof string === 'string') {
          tail = new HTMLString.String(string, this._preserveWhitespace);
        }
        if (inheritFormat && newString.length()) {
          indexChar = newString.charAt(newString.length() - 1);
          inheritedTags = indexChar.tags();
          if (indexChar.isTag()) {
            inheritedTags.shift();
          }
          if (typeof string !== 'string') {
            tail = tail.copy();
          }
          _ref = tail.characters;
          for (_k = 0, _len1 = _ref.length; _k < _len1; _k++) {
            c = _ref[_k];
            c.addTags.apply(c, inheritedTags);
          }
        }
        _ref1 = tail.characters;
        for (_l = 0, _len2 = _ref1.length; _l < _len2; _l++) {
          c = _ref1[_l];
          newString.characters.push(c);
        }
      }
      return newString;
    };

    String.prototype.contains = function(substring) {
      var c, found, from, i, _i, _len, _ref;
      if (typeof substring === 'string') {
        return this.text().indexOf(substring) > -1;
      }
      from = 0;
      while (from <= (this.length() - substring.length())) {
        found = true;
        _ref = substring.characters;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          c = _ref[i];
          if (!c.eq(this.characters[i + from])) {
            found = false;
            break;
          }
        }
        if (found) {
          return true;
        }
        from++;
      }
      return false;
    };

    String.prototype.endsWith = function(substring) {
      var c, characters, i, _i, _len, _ref;
      if (typeof substring === 'string') {
        return substring === '' || this.text().slice(-substring.length) === substring;
      }
      characters = this.characters.slice().reverse();
      _ref = substring.characters.slice().reverse();
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        c = _ref[i];
        if (!c.eq(characters[i])) {
          return false;
        }
      }
      return true;
    };

    String.prototype.format = function() {
      var c, from, i, newString, tags, to, _i;
      from = arguments[0], to = arguments[1], tags = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      if (to < 0) {
        to = this.length() + to + 1;
      }
      if (from < 0) {
        from = this.length() + from;
      }
      newString = this.copy();
      for (i = _i = from; from <= to ? _i < to : _i > to; i = from <= to ? ++_i : --_i) {
        c = newString.characters[i];
        c.addTags.apply(c, tags);
      }
      return newString;
    };

    String.prototype.hasTags = function() {
      var c, found, strict, tags, _i, _j, _len, _ref;
      tags = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), strict = arguments[_i++];
      if (!(typeof strict === 'undefined' || typeof strict === 'boolean')) {
        tags.push(strict);
        strict = false;
      }
      found = false;
      _ref = this.characters;
      for (_j = 0, _len = _ref.length; _j < _len; _j++) {
        c = _ref[_j];
        if (c.hasTags.apply(c, tags)) {
          found = true;
        } else {
          if (strict) {
            return false;
          }
        }
      }
      return found;
    };

    String.prototype.html = function() {
      var c, closingTag, closingTags, head, html, openHeads, openTag, openTags, tag, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3;
      html = '';
      openTags = [];
      openHeads = [];
      closingTags = [];
      _ref = this.characters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        closingTags = [];
        _ref1 = openTags.slice().reverse();
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          openTag = _ref1[_j];
          closingTags.push(openTag);
          if (!c.hasTags(openTag)) {
            for (_k = 0, _len2 = closingTags.length; _k < _len2; _k++) {
              closingTag = closingTags[_k];
              html += closingTag.tail();
              openTags.pop();
              openHeads.pop();
            }
            closingTags = [];
          }
        }
        _ref2 = c._tags;
        for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
          tag = _ref2[_l];
          if (openHeads.indexOf(tag.head()) === -1) {
            if (!tag.selfClosing()) {
              head = tag.head();
              html += head;
              openTags.push(tag);
              openHeads.push(head);
            }
          }
        }
        if (c._tags.length > 0 && c._tags[0].selfClosing()) {
          html += c._tags[0].head();
        }
        html += c.c();
      }
      _ref3 = openTags.reverse();
      for (_m = 0, _len4 = _ref3.length; _m < _len4; _m++) {
        tag = _ref3[_m];
        html += tag.tail();
      }
      return html;
    };

    String.prototype.indexOf = function(substring, from) {
      var c, found, i, _i, _len, _ref;
      if (from == null) {
        from = 0;
      }
      if (from < 0) {
        from = 0;
      }
      if (typeof substring === 'string') {
        return this.text().indexOf(substring, from);
      }
      while (from <= (this.length() - substring.length())) {
        found = true;
        _ref = substring.characters;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          c = _ref[i];
          if (!c.eq(this.characters[i + from])) {
            found = false;
            break;
          }
        }
        if (found) {
          return from;
        }
        from++;
      }
      return -1;
    };

    String.prototype.insert = function(index, substring, inheritFormat) {
      var c, head, indexChar, inheritedTags, middle, newString, tail, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
      if (inheritFormat == null) {
        inheritFormat = true;
      }
      head = this.slice(0, index);
      tail = this.slice(index);
      if (index < 0) {
        index = this.length() + index;
      }
      middle = substring;
      if (typeof substring === 'string') {
        middle = new HTMLString.String(substring, this._preserveWhitespace);
      }
      if (inheritFormat && index > 0) {
        indexChar = this.charAt(index - 1);
        inheritedTags = indexChar.tags();
        if (indexChar.isTag()) {
          inheritedTags.shift();
        }
        if (typeof substring !== 'string') {
          middle = middle.copy();
        }
        _ref = middle.characters;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          c.addTags.apply(c, inheritedTags);
        }
      }
      newString = head;
      _ref1 = middle.characters;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        c = _ref1[_j];
        newString.characters.push(c);
      }
      _ref2 = tail.characters;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        c = _ref2[_k];
        newString.characters.push(c);
      }
      return newString;
    };

    String.prototype.lastIndexOf = function(substring, from) {
      var c, characters, found, i, skip, _i, _j, _len, _len1;
      if (from == null) {
        from = 0;
      }
      if (from < 0) {
        from = 0;
      }
      characters = this.characters.slice(from).reverse();
      from = 0;
      if (typeof substring === 'string') {
        if (!this.contains(substring)) {
          return -1;
        }
        substring = substring.split('').reverse();
        while (from <= (characters.length - substring.length)) {
          found = true;
          skip = 0;
          for (i = _i = 0, _len = substring.length; _i < _len; i = ++_i) {
            c = substring[i];
            if (characters[i + from].isTag()) {
              skip += 1;
            }
            if (c !== characters[skip + i + from].c()) {
              found = false;
              break;
            }
          }
          if (found) {
            return from;
          }
          from++;
        }
        return -1;
      }
      substring = substring.characters.slice().reverse();
      while (from <= (characters.length - substring.length)) {
        found = true;
        for (i = _j = 0, _len1 = substring.length; _j < _len1; i = ++_j) {
          c = substring[i];
          if (!c.eq(characters[i + from])) {
            found = false;
            break;
          }
        }
        if (found) {
          return from;
        }
        from++;
      }
      return -1;
    };

    String.prototype.optimize = function() {
      var c, closingTag, closingTags, head, lastC, len, openHeads, openTag, openTags, runLength, runLengthSort, runLengths, run_length, t, tag, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _m, _n, _o, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _results;
      openTags = [];
      openHeads = [];
      lastC = null;
      _ref = this.characters.slice().reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        c._runLengthMap = {};
        c._runLengthMapSize = 0;
        closingTags = [];
        _ref1 = openTags.slice().reverse();
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          openTag = _ref1[_j];
          closingTags.push(openTag);
          if (!c.hasTags(openTag)) {
            for (_k = 0, _len2 = closingTags.length; _k < _len2; _k++) {
              closingTag = closingTags[_k];
              openTags.pop();
              openHeads.pop();
            }
            closingTags = [];
          }
        }
        _ref2 = c._tags;
        for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
          tag = _ref2[_l];
          if (openHeads.indexOf(tag.head()) === -1) {
            if (!tag.selfClosing()) {
              openTags.push(tag);
              openHeads.push(tag.head());
            }
          }
        }
        for (_m = 0, _len4 = openTags.length; _m < _len4; _m++) {
          tag = openTags[_m];
          head = tag.head();
          if (!lastC) {
            c._runLengthMap[head] = [tag, 1];
            continue;
          }
          if (!c._runLengthMap[head]) {
            c._runLengthMap[head] = [tag, 0];
          }
          run_length = 0;
          if (lastC._runLengthMap[head]) {
            run_length = lastC._runLengthMap[head][1];
          }
          c._runLengthMap[head][1] = run_length + 1;
        }
        lastC = c;
      }
      runLengthSort = function(a, b) {
        return b[1] - a[1];
      };
      _ref3 = this.characters;
      _results = [];
      for (_n = 0, _len5 = _ref3.length; _n < _len5; _n++) {
        c = _ref3[_n];
        len = c._tags.length;
        if ((len > 0 && c._tags[0].selfClosing() && len < 3) || len < 2) {
          continue;
        }
        runLengths = [];
        _ref4 = c._runLengthMap;
        for (tag in _ref4) {
          runLength = _ref4[tag];
          runLengths.push(runLength);
        }
        runLengths.sort(runLengthSort);
        _ref5 = c._tags.slice();
        for (_o = 0, _len6 = _ref5.length; _o < _len6; _o++) {
          tag = _ref5[_o];
          if (!tag.selfClosing()) {
            c.removeTags(tag);
          }
        }
        _results.push(c.addTags.apply(c, (function() {
          var _len7, _p, _results1;
          _results1 = [];
          for (_p = 0, _len7 = runLengths.length; _p < _len7; _p++) {
            t = runLengths[_p];
            _results1.push(t[0]);
          }
          return _results1;
        })()));
      }
      return _results;
    };

    String.prototype.slice = function(from, to) {
      var c, newString;
      newString = new HTMLString.String('', this._preserveWhitespace);
      newString.characters = (function() {
        var _i, _len, _ref, _results;
        _ref = this.characters.slice(from, to);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c.copy());
        }
        return _results;
      }).call(this);
      return newString;
    };

    String.prototype.split = function(separator, limit) {
      var count, end, i, index, indexes, lastIndex, start, substrings, _i, _ref;
      if (separator == null) {
        separator = '';
      }
      if (limit == null) {
        limit = 0;
      }
      lastIndex = 0;
      count = 0;
      indexes = [0];
      while (true) {
        if (limit > 0 && count > limit) {
          break;
        }
        index = this.indexOf(separator, lastIndex);
        if (index === -1) {
          break;
        }
        indexes.push(index);
        lastIndex = index + 1;
      }
      indexes.push(this.length());
      substrings = [];
      for (i = _i = 0, _ref = indexes.length - 2; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        start = indexes[i];
        if (i > 0) {
          start += 1;
        }
        end = indexes[i + 1];
        substrings.push(this.slice(start, end));
      }
      return substrings;
    };

    String.prototype.startsWith = function(substring) {
      var c, i, _i, _len, _ref;
      if (typeof substring === 'string') {
        return this.text().slice(0, substring.length) === substring;
      }
      _ref = substring.characters;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        c = _ref[i];
        if (!c.eq(this.characters[i])) {
          return false;
        }
      }
      return true;
    };

    String.prototype.substr = function(from, length) {
      if (length <= 0) {
        return new HTMLString.String('', this._preserveWhitespace);
      }
      if (from < 0) {
        from = this.length() + from;
      }
      if (length === void 0) {
        length = this.length() - from;
      }
      return this.slice(from, from + length);
    };

    String.prototype.substring = function(from, to) {
      if (to === void 0) {
        to = this.length();
      }
      return this.slice(from, to);
    };

    String.prototype.text = function() {
      var c, text, _i, _len, _ref;
      text = '';
      _ref = this.characters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        if (c.isTag()) {
          if (c.isTag('br')) {
            text += '\n';
          }
          continue;
        }
        if (c.c() === '&nbsp;') {
          text += c.c();
          continue;
        }
        text += c.c();
      }
      return this.constructor.decode(text);
    };

    String.prototype.toLowerCase = function() {
      var c, newString, _i, _len, _ref;
      newString = this.copy();
      _ref = newString.characters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        if (c._c.length === 1) {
          c._c = c._c.toLowerCase();
        }
      }
      return newString;
    };

    String.prototype.toUpperCase = function() {
      var c, newString, _i, _len, _ref;
      newString = this.copy();
      _ref = newString.characters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        if (c._c.length === 1) {
          c._c = c._c.toUpperCase();
        }
      }
      return newString;
    };

    String.prototype.trim = function() {
      var c, from, newString, to, _i, _j, _len, _len1, _ref, _ref1;
      _ref = this.characters;
      for (from = _i = 0, _len = _ref.length; _i < _len; from = ++_i) {
        c = _ref[from];
        if (!c.isWhitespace()) {
          break;
        }
      }
      _ref1 = this.characters.slice().reverse();
      for (to = _j = 0, _len1 = _ref1.length; _j < _len1; to = ++_j) {
        c = _ref1[to];
        if (!c.isWhitespace()) {
          break;
        }
      }
      to = this.length() - to - 1;
      newString = new HTMLString.String('', this._preserveWhitespace);
      newString.characters = (function() {
        var _k, _len2, _ref2, _results;
        _ref2 = this.characters.slice(from, +to + 1 || 9e9);
        _results = [];
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          c = _ref2[_k];
          _results.push(c.copy());
        }
        return _results;
      }).call(this);
      return newString;
    };

    String.prototype.trimLeft = function() {
      var c, from, newString, to, _i, _len, _ref;
      to = this.length() - 1;
      _ref = this.characters;
      for (from = _i = 0, _len = _ref.length; _i < _len; from = ++_i) {
        c = _ref[from];
        if (!c.isWhitespace()) {
          break;
        }
      }
      newString = new HTMLString.String('', this._preserveWhitespace);
      newString.characters = (function() {
        var _j, _len1, _ref1, _results;
        _ref1 = this.characters.slice(from, +to + 1 || 9e9);
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          c = _ref1[_j];
          _results.push(c.copy());
        }
        return _results;
      }).call(this);
      return newString;
    };

    String.prototype.trimRight = function() {
      var c, from, newString, to, _i, _len, _ref;
      from = 0;
      _ref = this.characters.slice().reverse();
      for (to = _i = 0, _len = _ref.length; _i < _len; to = ++_i) {
        c = _ref[to];
        if (!c.isWhitespace()) {
          break;
        }
      }
      to = this.length() - to - 1;
      newString = new HTMLString.String('', this._preserveWhitespace);
      newString.characters = (function() {
        var _j, _len1, _ref1, _results;
        _ref1 = this.characters.slice(from, +to + 1 || 9e9);
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          c = _ref1[_j];
          _results.push(c.copy());
        }
        return _results;
      }).call(this);
      return newString;
    };

    String.prototype.unformat = function() {
      var c, from, i, newString, tags, to, _i;
      from = arguments[0], to = arguments[1], tags = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      if (to < 0) {
        to = this.length() + to + 1;
      }
      if (from < 0) {
        from = this.length() + from;
      }
      newString = this.copy();
      for (i = _i = from; from <= to ? _i < to : _i > to; i = from <= to ? ++_i : --_i) {
        c = newString.characters[i];
        c.removeTags.apply(c, tags);
      }
      return newString;
    };

    String.prototype.copy = function() {
      var c, stringCopy;
      stringCopy = new HTMLString.String('', this._preserveWhitespace);
      stringCopy.characters = (function() {
        var _i, _len, _ref, _results;
        _ref = this.characters;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c.copy());
        }
        return _results;
      }).call(this);
      return stringCopy;
    };

    String.decode = function(string) {
      var textarea;
      textarea = document.createElement('textarea');
      textarea.innerHTML = string;
      return textarea.textContent;
    };

    String.encode = function(string) {
      var textarea;
      textarea = document.createElement('textarea');
      textarea.textContent = string;
      return textarea.innerHTML;
    };

    String.join = function(separator, strings) {
      var joined, s, _i, _len;
      joined = strings.shift();
      for (_i = 0, _len = strings.length; _i < _len; _i++) {
        s = strings[_i];
        joined = joined.concat(separator, s);
      }
      return joined;
    };

    return String;

  })();

  ALPHA_CHARS = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz-_$'.split('');

  ALPHA_NUMERIC_CHARS = ALPHA_CHARS.concat('1234567890'.split(''));

  ATTR_NAME_CHARS = ALPHA_NUMERIC_CHARS.concat([':']);

  ENTITY_CHARS = ALPHA_NUMERIC_CHARS.concat(['#']);

  TAG_NAME_CHARS = ALPHA_NUMERIC_CHARS.concat([':']);

  CHAR_OR_ENTITY_OR_TAG = 1;

  ENTITY = 2;

  OPENNING_OR_CLOSING_TAG = 3;

  OPENING_TAG = 4;

  CLOSING_TAG = 5;

  TAG_NAME_OPENING = 6;

  TAG_NAME_CLOSING = 7;

  TAG_OPENING_SELF_CLOSING = 8;

  TAG_NAME_MUST_CLOSE = 9;

  ATTR_OR_TAG_END = 10;

  ATTR_NAME = 11;

  ATTR_NAME_FIND_VALUE = 12;

  ATTR_DELIM = 13;

  ATTR_VALUE_SINGLE_DELIM = 14;

  ATTR_VALUE_DOUBLE_DELIM = 15;

  ATTR_VALUE_NO_DELIM = 16;

  ATTR_ENTITY_NO_DELIM = 17;

  ATTR_ENTITY_SINGLE_DELIM = 18;

  ATTR_ENTITY_DOUBLE_DELIM = 19;

  _Parser = (function() {
    function _Parser() {
      this.fsm = new FSM.Machine(this);
      this.fsm.setInitialState(CHAR_OR_ENTITY_OR_TAG);
      this.fsm.addTransitionAny(CHAR_OR_ENTITY_OR_TAG, null, function(c) {
        return this._pushChar(c);
      });
      this.fsm.addTransition('<', CHAR_OR_ENTITY_OR_TAG, OPENNING_OR_CLOSING_TAG);
      this.fsm.addTransition('&', CHAR_OR_ENTITY_OR_TAG, ENTITY);
      this.fsm.addTransitions(ENTITY_CHARS, ENTITY, null, function(c) {
        return this.entity += c;
      });
      this.fsm.addTransition(';', ENTITY, CHAR_OR_ENTITY_OR_TAG, function() {
        this._pushChar("&" + this.entity + ";");
        return this.entity = '';
      });
      this.fsm.addTransitions([' ', '\n'], OPENNING_OR_CLOSING_TAG);
      this.fsm.addTransitions(ALPHA_CHARS, OPENNING_OR_CLOSING_TAG, OPENING_TAG, function() {
        return this._back();
      });
      this.fsm.addTransition('/', OPENNING_OR_CLOSING_TAG, CLOSING_TAG);
      this.fsm.addTransitions([' ', '\n'], OPENING_TAG);
      this.fsm.addTransitions(ALPHA_CHARS, OPENING_TAG, TAG_NAME_OPENING, function() {
        return this._back();
      });
      this.fsm.addTransitions([' ', '\n'], CLOSING_TAG);
      this.fsm.addTransitions(ALPHA_CHARS, CLOSING_TAG, TAG_NAME_CLOSING, function() {
        return this._back();
      });
      this.fsm.addTransitions(TAG_NAME_CHARS, TAG_NAME_OPENING, null, function(c) {
        return this.tagName += c;
      });
      this.fsm.addTransitions([' ', '\n'], TAG_NAME_OPENING, ATTR_OR_TAG_END);
      this.fsm.addTransition('/', TAG_NAME_OPENING, TAG_OPENING_SELF_CLOSING, function() {
        return this.selfClosing = true;
      });
      this.fsm.addTransition('>', TAG_NAME_OPENING, CHAR_OR_ENTITY_OR_TAG, function() {
        return this._pushTag();
      });
      this.fsm.addTransitions([' ', '\n'], TAG_OPENING_SELF_CLOSING);
      this.fsm.addTransition('>', TAG_OPENING_SELF_CLOSING, CHAR_OR_ENTITY_OR_TAG, function() {
        return this._pushTag();
      });
      this.fsm.addTransitions([' ', '\n'], ATTR_OR_TAG_END);
      this.fsm.addTransition('/', ATTR_OR_TAG_END, TAG_OPENING_SELF_CLOSING, function() {
        return this.selfClosing = true;
      });
      this.fsm.addTransition('>', ATTR_OR_TAG_END, CHAR_OR_ENTITY_OR_TAG, function() {
        return this._pushTag();
      });
      this.fsm.addTransitions(ALPHA_CHARS, ATTR_OR_TAG_END, ATTR_NAME, function() {
        return this._back();
      });
      this.fsm.addTransitions(TAG_NAME_CHARS, TAG_NAME_CLOSING, null, function(c) {
        return this.tagName += c;
      });
      this.fsm.addTransitions([' ', '\n'], TAG_NAME_CLOSING, TAG_NAME_MUST_CLOSE);
      this.fsm.addTransition('>', TAG_NAME_CLOSING, CHAR_OR_ENTITY_OR_TAG, function() {
        return this._popTag();
      });
      this.fsm.addTransitions([' ', '\n'], TAG_NAME_MUST_CLOSE);
      this.fsm.addTransition('>', TAG_NAME_MUST_CLOSE, CHAR_OR_ENTITY_OR_TAG, function() {
        return this._popTag();
      });
      this.fsm.addTransitions(ATTR_NAME_CHARS, ATTR_NAME, null, function(c) {
        return this.attributeName += c;
      });
      this.fsm.addTransitions([' ', '\n'], ATTR_NAME, ATTR_NAME_FIND_VALUE);
      this.fsm.addTransition('=', ATTR_NAME, ATTR_DELIM);
      this.fsm.addTransitions([' ', '\n'], ATTR_NAME_FIND_VALUE);
      this.fsm.addTransition('=', ATTR_NAME_FIND_VALUE, ATTR_DELIM);
      this.fsm.addTransitions('>', ATTR_NAME, ATTR_OR_TAG_END, function() {
        this._pushAttribute();
        return this._back();
      });
      this.fsm.addTransitionAny(ATTR_NAME_FIND_VALUE, ATTR_OR_TAG_END, function() {
        this._pushAttribute();
        return this._back();
      });
      this.fsm.addTransitions([' ', '\n'], ATTR_DELIM);
      this.fsm.addTransition('\'', ATTR_DELIM, ATTR_VALUE_SINGLE_DELIM);
      this.fsm.addTransition('"', ATTR_DELIM, ATTR_VALUE_DOUBLE_DELIM);
      this.fsm.addTransitions(ALPHA_NUMERIC_CHARS.concat(['&'], ATTR_DELIM, ATTR_VALUE_NO_DELIM, function() {
        return this._back();
      }));
      this.fsm.addTransition(' ', ATTR_VALUE_NO_DELIM, ATTR_OR_TAG_END, function() {
        return this._pushAttribute();
      });
      this.fsm.addTransitions(['/', '>'], ATTR_VALUE_NO_DELIM, ATTR_OR_TAG_END, function() {
        this._back();
        return this._pushAttribute();
      });
      this.fsm.addTransition('&', ATTR_VALUE_NO_DELIM, ATTR_ENTITY_NO_DELIM);
      this.fsm.addTransitionAny(ATTR_VALUE_NO_DELIM, null, function(c) {
        return this.attributeValue += c;
      });
      this.fsm.addTransition('\'', ATTR_VALUE_SINGLE_DELIM, ATTR_OR_TAG_END, function() {
        return this._pushAttribute();
      });
      this.fsm.addTransition('&', ATTR_VALUE_SINGLE_DELIM, ATTR_ENTITY_SINGLE_DELIM);
      this.fsm.addTransitionAny(ATTR_VALUE_SINGLE_DELIM, null, function(c) {
        return this.attributeValue += c;
      });
      this.fsm.addTransition('"', ATTR_VALUE_DOUBLE_DELIM, ATTR_OR_TAG_END, function() {
        return this._pushAttribute();
      });
      this.fsm.addTransition('&', ATTR_VALUE_DOUBLE_DELIM, ATTR_ENTITY_DOUBLE_DELIM);
      this.fsm.addTransitionAny(ATTR_VALUE_DOUBLE_DELIM, null, function(c) {
        return this.attributeValue += c;
      });
      this.fsm.addTransitions(ENTITY_CHARS, ATTR_ENTITY_NO_DELIM, null, function(c) {
        return this.entity += c;
      });
      this.fsm.addTransitions(ENTITY_CHARS, ATTR_ENTITY_SINGLE_DELIM, function(c) {
        return this.entity += c;
      });
      this.fsm.addTransitions(ENTITY_CHARS, ATTR_ENTITY_DOUBLE_DELIM, null, function(c) {
        return this.entity += c;
      });
      this.fsm.addTransition(';', ATTR_ENTITY_NO_DELIM, ATTR_VALUE_NO_DELIM, function() {
        this.attributeValue += "&" + this.entity + ";";
        return this.entity = '';
      });
      this.fsm.addTransition(';', ATTR_ENTITY_SINGLE_DELIM, ATTR_VALUE_SINGLE_DELIM, function() {
        this.attributeValue += "&" + this.entity + ";";
        return this.entity = '';
      });
      this.fsm.addTransition(';', ATTR_ENTITY_DOUBLE_DELIM, ATTR_VALUE_DOUBLE_DELIM, function() {
        this.attributeValue += "&" + this.entity + ";";
        return this.entity = '';
      });
    }

    _Parser.prototype._back = function() {
      return this.head--;
    };

    _Parser.prototype._pushAttribute = function() {
      this.attributes[this.attributeName] = this.attributeValue;
      this.attributeName = '';
      return this.attributeValue = '';
    };

    _Parser.prototype._pushChar = function(c) {
      var character, lastCharacter;
      character = new HTMLString.Character(c, this.tags);
      if (this._preserveWhitespace) {
        this.string.characters.push(character);
        return;
      }
      if (this.string.length() && !character.isTag() && !character.isEntity() && character.isWhitespace()) {
        lastCharacter = this.string.characters[this.string.length() - 1];
        if (lastCharacter.isWhitespace() && !lastCharacter.isTag() && !lastCharacter.isEntity()) {
          return;
        }
      }
      return this.string.characters.push(character);
    };

    _Parser.prototype._pushTag = function() {
      var tag, _ref;
      tag = new HTMLString.Tag(this.tagName, this.attributes);
      this.tags.push(tag);
      if (tag.selfClosing()) {
        this._pushChar('');
        this.tags.pop();
        if (!this.selfClosed && (_ref = this.tagName, __indexOf.call(HTMLString.Tag.SELF_CLOSING, _ref) >= 0)) {
          this.fsm.reset();
        }
      }
      this.tagName = '';
      this.selfClosed = false;
      return this.attributes = {};
    };

    _Parser.prototype._popTag = function() {
      var character, tag;
      while (true) {
        tag = this.tags.pop();
        if (this.string.length()) {
          character = this.string.characters[this.string.length() - 1];
          if (!character.isTag() && !character.isEntity() && character.isWhitespace()) {
            character.removeTags(tag);
          }
        }
        if (tag.name() === this.tagName.toLowerCase()) {
          break;
        }
      }
      return this.tagName = '';
    };

    _Parser.prototype.parse = function(html, preserveWhitespace) {
      var character, error;
      this._preserveWhitespace = preserveWhitespace;
      this.reset();
      html = this.preprocess(html);
      this.fsm.parser = this;
      while (this.head < html.length) {
        character = html[this.head];
        try {
          this.fsm.process(character);
        } catch (_error) {
          error = _error;
          throw new Error("Error at char " + this.head + " >> " + error);
        }
        this.head++;
      }
      return this.string;
    };

    _Parser.prototype.preprocess = function(html) {
      html = html.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      html = html.replace(/<!--[\s\S]*?-->/g, '');
      if (!this._preserveWhitespace) {
        html = html.replace(/\s+/g, ' ');
      }
      return html;
    };

    _Parser.prototype.reset = function() {
      this.fsm.reset();
      this.head = 0;
      this.string = new HTMLString.String();
      this.entity = '';
      this.tags = [];
      this.tagName = '';
      this.selfClosing = false;
      this.attributes = {};
      this.attributeName = '';
      return this.attributeValue = '';
    };

    return _Parser;

  })();

  HTMLString.Tag = (function() {
    function Tag(name, attributes) {
      var k, v;
      this._name = name.toLowerCase();
      this._selfClosing = HTMLString.Tag.SELF_CLOSING[this._name] === true;
      this._head = null;
      this._attributes = {};
      for (k in attributes) {
        v = attributes[k];
        this._attributes[k] = v;
      }
    }

    Tag.SELF_CLOSING = {
      'area': true,
      'base': true,
      'br': true,
      'hr': true,
      'img': true,
      'input': true,
      'link meta': true,
      'wbr': true
    };

    Tag.prototype.head = function() {
      var components, k, v, _ref;
      if (!this._head) {
        components = [];
        _ref = this._attributes;
        for (k in _ref) {
          v = _ref[k];
          if (v) {
            components.push("" + k + "=\"" + v + "\"");
          } else {
            components.push("" + k);
          }
        }
        components.sort();
        components.unshift(this._name);
        this._head = "<" + (components.join(' ')) + ">";
      }
      return this._head;
    };

    Tag.prototype.name = function() {
      return this._name;
    };

    Tag.prototype.selfClosing = function() {
      return this._selfClosing;
    };

    Tag.prototype.tail = function() {
      if (this._selfClosing) {
        return '';
      }
      return "</" + this._name + ">";
    };

    Tag.prototype.attr = function(name, value) {
      if (value === void 0) {
        return this._attributes[name];
      }
      this._attributes[name] = value;
      return this._head = null;
    };

    Tag.prototype.removeAttr = function(name) {
      if (this._attributes[name] === void 0) {
        return;
      }
      delete this._attributes[name];
      return this._head = null;
    };

    Tag.prototype.copy = function() {
      return new HTMLString.Tag(this._name, this._attributes);
    };

    return Tag;

  })();

  HTMLString.Character = (function() {
    function Character(c, tags) {
      this._c = c;
      if (c.length > 1) {
        this._c = c.toLowerCase();
      }
      this._tags = [];
      this.addTags.apply(this, tags);
    }

    Character.prototype.c = function() {
      return this._c;
    };

    Character.prototype.isEntity = function() {
      return this._c.length > 1;
    };

    Character.prototype.isTag = function(tagName) {
      if (this._tags.length === 0 || !this._tags[0].selfClosing()) {
        return false;
      }
      if (tagName && this._tags[0].name() !== tagName) {
        return false;
      }
      return true;
    };

    Character.prototype.isWhitespace = function() {
      var _ref;
      return ((_ref = this._c) === ' ' || _ref === '\n' || _ref === '&nbsp;') || this.isTag('br');
    };

    Character.prototype.tags = function() {
      var t;
      return (function() {
        var _i, _len, _ref, _results;
        _ref = this._tags;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          t = _ref[_i];
          _results.push(t.copy());
        }
        return _results;
      }).call(this);
    };

    Character.prototype.addTags = function() {
      var tag, tags, _i, _len, _results;
      tags = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = tags.length; _i < _len; _i++) {
        tag = tags[_i];
        if (Array.isArray(tag)) {
          continue;
        }
        if (tag.selfClosing()) {
          if (!this.isTag()) {
            this._tags.unshift(tag.copy());
          }
          continue;
        }
        _results.push(this._tags.push(tag.copy()));
      }
      return _results;
    };

    Character.prototype.eq = function(c) {
      var tag, tags, _i, _j, _len, _len1, _ref, _ref1;
      if (this.c() !== c.c()) {
        return false;
      }
      if (this._tags.length !== c._tags.length) {
        return false;
      }
      tags = {};
      _ref = this._tags;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tag = _ref[_i];
        tags[tag.head()] = true;
      }
      _ref1 = c._tags;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        tag = _ref1[_j];
        if (!tags[tag.head()]) {
          return false;
        }
      }
      return true;
    };

    Character.prototype.hasTags = function() {
      var tag, tagHeads, tagNames, tags, _i, _j, _len, _len1, _ref;
      tags = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      tagNames = {};
      tagHeads = {};
      _ref = this._tags;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tag = _ref[_i];
        tagNames[tag.name()] = true;
        tagHeads[tag.head()] = true;
      }
      for (_j = 0, _len1 = tags.length; _j < _len1; _j++) {
        tag = tags[_j];
        if (typeof tag === 'string') {
          if (tagNames[tag] === void 0) {
            return false;
          }
        } else {
          if (tagHeads[tag.head()] === void 0) {
            return false;
          }
        }
      }
      return true;
    };

    Character.prototype.removeTags = function() {
      var heads, names, newTags, tag, tags, _i, _len;
      tags = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (tags.length === 0) {
        this._tags = [];
        return;
      }
      names = {};
      heads = {};
      for (_i = 0, _len = tags.length; _i < _len; _i++) {
        tag = tags[_i];
        if (typeof tag === 'string') {
          names[tag] = tag;
        } else {
          heads[tag.head()] = tag;
        }
      }
      newTags = [];
      return this._tags = this._tags.filter(function(tag) {
        if (!heads[tag.head()] && !names[tag.name()]) {
          return tag;
        }
      });
    };

    Character.prototype.copy = function() {
      var t;
      return new HTMLString.Character(this._c, (function() {
        var _i, _len, _ref, _results;
        _ref = this._tags;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          t = _ref[_i];
          _results.push(t.copy());
        }
        return _results;
      }).call(this));
    };

    return Character;

  })();

}).call(this);

(function() {
  var ContentSelect, SELF_CLOSING_NODE_NAMES, exports, _containedBy, _getChildNodeAndOffset, _getNodeRange, _getOffsetOfChildNode,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  ContentSelect = {};

  ContentSelect.Range = (function() {
    function Range(from, to) {
      this.set(from, to);
    }

    Range.prototype.isCollapsed = function() {
      return this._from === this._to;
    };

    Range.prototype.span = function() {
      return this._to - this._from;
    };

    Range.prototype.collapse = function() {
      return this._to = this._from;
    };

    Range.prototype.eq = function(range) {
      return this.get()[0] === range.get()[0] && this.get()[1] === range.get()[1];
    };

    Range.prototype.get = function() {
      return [this._from, this._to];
    };

    Range.prototype.select = function(element) {
      var docRange, endNode, endNodeLen, endOffset, startNode, startNodeLen, startOffset, _ref, _ref1;
      ContentSelect.Range.unselectAll();
      docRange = document.createRange();
      _ref = _getChildNodeAndOffset(element, this._from), startNode = _ref[0], startOffset = _ref[1];
      _ref1 = _getChildNodeAndOffset(element, this._to), endNode = _ref1[0], endOffset = _ref1[1];
      startNodeLen = startNode.length || 0;
      endNodeLen = endNode.length || 0;
      docRange.setStart(startNode, Math.min(startOffset, startNodeLen));
      docRange.setEnd(endNode, Math.min(endOffset, endNodeLen));
      return window.getSelection().addRange(docRange);
    };

    Range.prototype.set = function(from, to) {
      from = Math.max(0, from);
      to = Math.max(0, to);
      this._from = Math.min(from, to);
      return this._to = Math.max(from, to);
    };

    Range.prepareElement = function(element) {
      var i, node, selfClosingNodes, _i, _len, _results;
      selfClosingNodes = element.querySelectorAll(SELF_CLOSING_NODE_NAMES.join(', '));
      _results = [];
      for (i = _i = 0, _len = selfClosingNodes.length; _i < _len; i = ++_i) {
        node = selfClosingNodes[i];
        node.parentNode.insertBefore(document.createTextNode(''), node);
        if (i < selfClosingNodes.length - 1) {
          _results.push(node.parentNode.insertBefore(document.createTextNode(''), node.nextSibling));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Range.query = function(element) {
      var docRange, endNode, endOffset, range, startNode, startOffset, _ref;
      range = new ContentSelect.Range(0, 0);
      try {
        docRange = window.getSelection().getRangeAt(0);
      } catch (_error) {
        return range;
      }
      if (element.firstChild === null && element.lastChild === null) {
        return range;
      }
      if (!_containedBy(docRange.startContainer, element)) {
        return range;
      }
      if (!_containedBy(docRange.endContainer, element)) {
        return range;
      }
      _ref = _getNodeRange(element, docRange), startNode = _ref[0], startOffset = _ref[1], endNode = _ref[2], endOffset = _ref[3];
      range.set(_getOffsetOfChildNode(element, startNode) + startOffset, _getOffsetOfChildNode(element, endNode) + endOffset);
      return range;
    };

    Range.rect = function() {
      var docRange, marker, rect;
      try {
        docRange = window.getSelection().getRangeAt(0);
      } catch (_error) {
        return null;
      }
      if (docRange.collapsed) {
        marker = document.createElement('span');
        docRange.insertNode(marker);
        rect = marker.getBoundingClientRect();
        marker.parentNode.removeChild(marker);
        return rect;
      } else {
        return docRange.getBoundingClientRect();
      }
    };

    Range.unselectAll = function() {
      if (window.getSelection()) {
        return window.getSelection().removeAllRanges();
      }
    };

    return Range;

  })();

  SELF_CLOSING_NODE_NAMES = ['br', 'img', 'input'];

  _containedBy = function(nodeA, nodeB) {
    while (nodeA) {
      if (nodeA === nodeB) {
        return true;
      }
      nodeA = nodeA.parentNode;
    }
    return false;
  };

  _getChildNodeAndOffset = function(parentNode, parentOffset) {
    var childNode, childOffset, childStack, n, _ref;
    if (parentNode.childNodes.length === 0) {
      return [parentNode, parentOffset];
    }
    childNode = null;
    childOffset = parentOffset;
    childStack = (function() {
      var _i, _len, _ref, _results;
      _ref = parentNode.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        _results.push(n);
      }
      return _results;
    })();
    while (childStack.length > 0) {
      childNode = childStack.shift();
      switch (childNode.nodeType) {
        case Node.TEXT_NODE:
          if (childNode.textContent.length >= childOffset) {
            return [childNode, childOffset];
          }
          childOffset -= childNode.textContent.length;
          break;
        case Node.ELEMENT_NODE:
          if (_ref = childNode.nodeName.toLowerCase(), __indexOf.call(SELF_CLOSING_NODE_NAMES, _ref) >= 0) {
            if (childOffset === 0) {
              return [childNode, 0];
            } else {
              childOffset = Math.max(0, childOffset - 1);
            }
          } else {
            if (childNode.childNodes) {
              Array.prototype.unshift.apply(childStack, (function() {
                var _i, _len, _ref1, _results;
                _ref1 = childNode.childNodes;
                _results = [];
                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                  n = _ref1[_i];
                  _results.push(n);
                }
                return _results;
              })());
            }
          }
      }
    }
    return [childNode, childOffset];
  };

  _getOffsetOfChildNode = function(parentNode, childNode) {
    var childStack, n, offset, otherChildNode, _ref, _ref1;
    if (parentNode.childNodes.length === 0) {
      return 0;
    }
    offset = 0;
    childStack = (function() {
      var _i, _len, _ref, _results;
      _ref = parentNode.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        _results.push(n);
      }
      return _results;
    })();
    while (childStack.length > 0) {
      otherChildNode = childStack.shift();
      if (otherChildNode === childNode) {
        if (_ref = otherChildNode.nodeName.toLowerCase(), __indexOf.call(SELF_CLOSING_NODE_NAMES, _ref) >= 0) {
          return offset + 1;
        }
        return offset;
      }
      switch (otherChildNode.nodeType) {
        case Node.TEXT_NODE:
          offset += otherChildNode.textContent.length;
          break;
        case Node.ELEMENT_NODE:
          if (_ref1 = otherChildNode.nodeName.toLowerCase(), __indexOf.call(SELF_CLOSING_NODE_NAMES, _ref1) >= 0) {
            offset += 1;
          } else {
            if (otherChildNode.childNodes) {
              Array.prototype.unshift.apply(childStack, (function() {
                var _i, _len, _ref2, _results;
                _ref2 = otherChildNode.childNodes;
                _results = [];
                for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
                  n = _ref2[_i];
                  _results.push(n);
                }
                return _results;
              })());
            }
          }
      }
    }
    return offset;
  };

  _getNodeRange = function(element, docRange) {
    var childNode, childNodes, endNode, endOffset, endRange, i, startNode, startOffset, startRange, _i, _j, _len, _len1, _ref;
    childNodes = element.childNodes;
    startRange = docRange.cloneRange();
    startRange.collapse(true);
    endRange = docRange.cloneRange();
    endRange.collapse(false);
    startNode = startRange.startContainer;
    startOffset = startRange.startOffset;
    endNode = endRange.endContainer;
    endOffset = endRange.endOffset;
    if (!startRange.comparePoint) {
      return [startNode, startOffset, endNode, endOffset];
    }
    if (startNode === element) {
      startNode = childNodes[childNodes.length - 1];
      startOffset = startNode.textContent.length;
      for (i = _i = 0, _len = childNodes.length; _i < _len; i = ++_i) {
        childNode = childNodes[i];
        if (startRange.comparePoint(childNode, 0) !== 1) {
          continue;
        }
        if (i === 0) {
          startNode = childNode;
          startOffset = 0;
        } else {
          startNode = childNodes[i - 1];
          startOffset = childNode.textContent.length;
        }
        if (_ref = startNode.nodeName.toLowerCase, __indexOf.call(SELF_CLOSING_NODE_NAMES, _ref) >= 0) {
          startOffset = 1;
        }
        break;
      }
    }
    if (docRange.collapsed) {
      return [startNode, startOffset, startNode, startOffset];
    }
    if (endNode === element) {
      endNode = childNodes[childNodes.length - 1];
      endOffset = endNode.textContent.length;
      for (i = _j = 0, _len1 = childNodes.length; _j < _len1; i = ++_j) {
        childNode = childNodes[i];
        if (endRange.comparePoint(childNode, 0) !== 1) {
          continue;
        }
        if (i === 0) {
          endNode = childNode;
        } else {
          endNode = childNodes[i - 1];
        }
        endOffset = childNode.textContent.length + 1;
      }
    }
    return [startNode, startOffset, endNode, endOffset];
  };

  if (typeof window !== 'undefined') {
    window.ContentSelect = ContentSelect;
  }

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = ContentSelect;
  }

}).call(this);

(function() {
  var ContentEdit, exports, _Root, _TagNames, _mergers,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ContentEdit = {
    ALIGNMENT_CLASS_NAMES: {
      'left': 'align-left',
      'right': 'align-right'
    },
    DEFAULT_MAX_ELEMENT_WIDTH: 800,
    DEFAULT_MIN_ELEMENT_WIDTH: 80,
    DRAG_HOLD_DURATION: 500,
    DROP_EDGE_SIZE: 50,
    HELPER_CHAR_LIMIT: 250,
    INDENT: '    ',
    LANGUAGE: 'en',
    LINE_ENDINGS: '\n',
    PREFER_LINE_BREAKS: false,
    RESIZE_CORNER_SIZE: 15,
    TRIM_WHITESPACE: true,
    _translations: {},
    _: function(s) {
      var lang;
      lang = ContentEdit.LANGUAGE;
      if (ContentEdit._translations[lang] && ContentEdit._translations[lang][s]) {
        return ContentEdit._translations[lang][s];
      }
      return s;
    },
    addTranslations: function(language, translations) {
      return ContentEdit._translations[language] = translations;
    },
    addCSSClass: function(domElement, className) {
      var c, classAttr, classNames;
      if (domElement.classList) {
        domElement.classList.add(className);
        return;
      }
      classAttr = domElement.getAttribute('class');
      if (classAttr) {
        classNames = (function() {
          var _i, _len, _ref, _results;
          _ref = classAttr.split(' ');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            _results.push(c);
          }
          return _results;
        })();
        if (classNames.indexOf(className) === -1) {
          return domElement.setAttribute('class', "" + classAttr + " " + className);
        }
      } else {
        return domElement.setAttribute('class', className);
      }
    },
    attributesToString: function(attributes) {
      var attributeStrings, name, names, value, _i, _len;
      if (!attributes) {
        return '';
      }
      names = (function() {
        var _results;
        _results = [];
        for (name in attributes) {
          _results.push(name);
        }
        return _results;
      })();
      names.sort();
      attributeStrings = [];
      for (_i = 0, _len = names.length; _i < _len; _i++) {
        name = names[_i];
        value = attributes[name];
        if (value === '') {
          attributeStrings.push(name);
        } else {
          value = HTMLString.String.encode(value);
          value = value.replace(/"/g, '&quot;');
          attributeStrings.push("" + name + "=\"" + value + "\"");
        }
      }
      return attributeStrings.join(' ');
    },
    removeCSSClass: function(domElement, className) {
      var c, classAttr, classNameIndex, classNames;
      if (domElement.classList) {
        domElement.classList.remove(className);
        if (domElement.classList.length === 0) {
          domElement.removeAttribute('class');
        }
        return;
      }
      classAttr = domElement.getAttribute('class');
      if (classAttr) {
        classNames = (function() {
          var _i, _len, _ref, _results;
          _ref = classAttr.split(' ');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            _results.push(c);
          }
          return _results;
        })();
        classNameIndex = classNames.indexOf(className);
        if (classNameIndex > -1) {
          classNames.splice(classNameIndex, 1);
          if (classNames.length) {
            return domElement.setAttribute('class', classNames.join(' '));
          } else {
            return domElement.removeAttribute('class');
          }
        }
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.ContentEdit = ContentEdit;
  }

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = ContentEdit;
  }

  _TagNames = (function() {
    function _TagNames() {
      this._tagNames = {};
    }

    _TagNames.prototype.register = function() {
      var cls, tagName, tagNames, _i, _len, _results;
      cls = arguments[0], tagNames = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _results = [];
      for (_i = 0, _len = tagNames.length; _i < _len; _i++) {
        tagName = tagNames[_i];
        _results.push(this._tagNames[tagName.toLowerCase()] = cls);
      }
      return _results;
    };

    _TagNames.prototype.match = function(tagName) {
      tagName = tagName.toLowerCase();
      if (this._tagNames[tagName]) {
        return this._tagNames[tagName];
      }
      return ContentEdit.Static;
    };

    return _TagNames;

  })();

  ContentEdit.TagNames = (function() {
    var instance;

    function TagNames() {}

    instance = null;

    TagNames.get = function() {
      return instance != null ? instance : instance = new _TagNames();
    };

    return TagNames;

  })();

  ContentEdit.Node = (function() {
    function Node() {
      this._bindings = {};
      this._parent = null;
      this._modified = null;
    }

    Node.prototype.lastModified = function() {
      return this._modified;
    };

    Node.prototype.parent = function() {
      return this._parent;
    };

    Node.prototype.parents = function() {
      var parent, parents;
      parents = [];
      parent = this._parent;
      while (parent) {
        parents.push(parent);
        parent = parent._parent;
      }
      return parents;
    };

    Node.prototype.type = function() {
      return 'Node';
    };

    Node.prototype.html = function(indent) {
      if (indent == null) {
        indent = '';
      }
      throw new Error('`html` not implemented');
    };

    Node.prototype.bind = function(eventName, callback) {
      if (this._bindings[eventName] === void 0) {
        this._bindings[eventName] = [];
      }
      this._bindings[eventName].push(callback);
      return callback;
    };

    Node.prototype.trigger = function() {
      var args, callback, eventName, _i, _len, _ref, _results;
      eventName = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (!this._bindings[eventName]) {
        return;
      }
      _ref = this._bindings[eventName];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        if (!callback) {
          continue;
        }
        _results.push(callback.call.apply(callback, [this].concat(__slice.call(args))));
      }
      return _results;
    };

    Node.prototype.unbind = function(eventName, callback) {
      var i, suspect, _i, _len, _ref, _results;
      if (!eventName) {
        this._bindings = {};
        return;
      }
      if (!callback) {
        this._bindings[eventName] = void 0;
        return;
      }
      if (!this._bindings[eventName]) {
        return;
      }
      _ref = this._bindings[eventName];
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        suspect = _ref[i];
        if (suspect === callback) {
          _results.push(this._bindings[eventName].splice(i, 1));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Node.prototype.commit = function() {
      this._modified = null;
      return ContentEdit.Root.get().trigger('commit', this);
    };

    Node.prototype.taint = function() {
      var now, parent, root, _i, _len, _ref;
      now = Date.now();
      this._modified = now;
      _ref = this.parents();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        parent = _ref[_i];
        parent._modified = now;
      }
      root = ContentEdit.Root.get();
      root._modified = now;
      return root.trigger('taint', this);
    };

    Node.prototype.closest = function(testFunc) {
      var parent;
      parent = this.parent();
      while (parent && !testFunc(parent)) {
        if (parent.parent) {
          parent = parent.parent();
        } else {
          parent = null;
        }
      }
      return parent;
    };

    Node.prototype.next = function() {
      var children, index, node, _i, _len, _ref;
      if (this.children && this.children.length > 0) {
        return this.children[0];
      }
      _ref = [this].concat(this.parents());
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if (!node.parent()) {
          return null;
        }
        children = node.parent().children;
        index = children.indexOf(node);
        if (index < children.length - 1) {
          return children[index + 1];
        }
      }
    };

    Node.prototype.nextContent = function() {
      return this.nextWithTest(function(node) {
        return node.content !== void 0;
      });
    };

    Node.prototype.nextSibling = function() {
      var index;
      index = this.parent().children.indexOf(this);
      if (index === this.parent().children.length - 1) {
        return null;
      }
      return this.parent().children[index + 1];
    };

    Node.prototype.nextWithTest = function(testFunc) {
      var node;
      node = this;
      while (node) {
        node = node.next();
        if (node && testFunc(node)) {
          return node;
        }
      }
    };

    Node.prototype.previous = function() {
      var children, node;
      if (!this.parent()) {
        return null;
      }
      children = this.parent().children;
      if (children[0] === this) {
        return this.parent();
      }
      node = children[children.indexOf(this) - 1];
      while (node.children && node.children.length) {
        node = node.children[node.children.length - 1];
      }
      return node;
    };

    Node.prototype.previousContent = function() {
      var node;
      return node = this.previousWithTest(function(node) {
        return node.content !== void 0;
      });
    };

    Node.prototype.previousSibling = function() {
      var index;
      index = this.parent().children.indexOf(this);
      if (index === 0) {
        return null;
      }
      return this.parent().children[index - 1];
    };

    Node.prototype.previousWithTest = function(testFunc) {
      var node;
      node = this;
      while (node) {
        node = node.previous();
        if (node && testFunc(node)) {
          return node;
        }
      }
    };

    Node.extend = function(cls) {
      var key, value, _ref;
      _ref = cls.prototype;
      for (key in _ref) {
        value = _ref[key];
        if (key === 'constructor') {
          continue;
        }
        this.prototype[key] = value;
      }
      for (key in cls) {
        value = cls[key];
        if (__indexOf.call('__super__', key) >= 0) {
          continue;
        }
        this.prototype[key] = value;
      }
      return this;
    };

    Node.fromDOMElement = function(domElement) {
      throw new Error('`fromDOMElement` not implemented');
    };

    return Node;

  })();

  ContentEdit.NodeCollection = (function(_super) {
    __extends(NodeCollection, _super);

    function NodeCollection() {
      NodeCollection.__super__.constructor.call(this);
      this.children = [];
    }

    NodeCollection.prototype.descendants = function() {
      var descendants, node, nodeStack;
      descendants = [];
      nodeStack = this.children.slice();
      while (nodeStack.length > 0) {
        node = nodeStack.shift();
        descendants.push(node);
        if (node.children && node.children.length > 0) {
          nodeStack = node.children.slice().concat(nodeStack);
        }
      }
      return descendants;
    };

    NodeCollection.prototype.isMounted = function() {
      return false;
    };

    NodeCollection.prototype.type = function() {
      return 'NodeCollection';
    };

    NodeCollection.prototype.attach = function(node, index) {
      if (node.parent()) {
        node.parent().detach(node);
      }
      node._parent = this;
      if (index !== void 0) {
        this.children.splice(index, 0, node);
      } else {
        this.children.push(node);
      }
      if (node.mount && this.isMounted()) {
        node.mount();
      }
      this.taint();
      return ContentEdit.Root.get().trigger('attach', this, node);
    };

    NodeCollection.prototype.commit = function() {
      var descendant, _i, _len, _ref;
      _ref = this.descendants();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        descendant = _ref[_i];
        descendant._modified = null;
      }
      this._modified = null;
      return ContentEdit.Root.get().trigger('commit', this);
    };

    NodeCollection.prototype.detach = function(node) {
      var nodeIndex;
      nodeIndex = this.children.indexOf(node);
      if (nodeIndex === -1) {
        return;
      }
      if (node.unmount && this.isMounted() && node.isMounted()) {
        node.unmount();
      }
      this.children.splice(nodeIndex, 1);
      node._parent = null;
      this.taint();
      return ContentEdit.Root.get().trigger('detach', this, node);
    };

    return NodeCollection;

  })(ContentEdit.Node);

  ContentEdit.Element = (function(_super) {
    __extends(Element, _super);

    function Element(tagName, attributes) {
      Element.__super__.constructor.call(this);
      this._tagName = tagName.toLowerCase();
      this._attributes = attributes ? attributes : {};
      this._domElement = null;
      this._behaviours = {
        drag: true,
        drop: true,
        merge: true,
        remove: true,
        resize: true,
        spawn: true
      };
    }

    Element.prototype.attributes = function() {
      var attributes, name, value, _ref;
      attributes = {};
      _ref = this._attributes;
      for (name in _ref) {
        value = _ref[name];
        attributes[name] = value;
      }
      return attributes;
    };

    Element.prototype.cssTypeName = function() {
      return 'element';
    };

    Element.prototype.domElement = function() {
      return this._domElement;
    };

    Element.prototype.isFixed = function() {
      return this.parent() && this.parent().type() === 'Fixture';
    };

    Element.prototype.isFocused = function() {
      return ContentEdit.Root.get().focused() === this;
    };

    Element.prototype.isMounted = function() {
      return this._domElement !== null;
    };

    Element.prototype.type = function() {
      return 'Element';
    };

    Element.prototype.typeName = function() {
      return 'Element';
    };

    Element.prototype.addCSSClass = function(className) {
      var modified;
      modified = false;
      if (!this.hasCSSClass(className)) {
        modified = true;
        if (this.attr('class')) {
          this.attr('class', "" + (this.attr('class')) + " " + className);
        } else {
          this.attr('class', className);
        }
      }
      this._addCSSClass(className);
      if (modified) {
        return this.taint();
      }
    };

    Element.prototype.attr = function(name, value) {
      name = name.toLowerCase();
      if (value === void 0) {
        return this._attributes[name];
      }
      this._attributes[name] = value;
      if (this.isMounted() && name.toLowerCase() !== 'class') {
        this._domElement.setAttribute(name, value);
      }
      return this.taint();
    };

    Element.prototype.blur = function() {
      var root;
      root = ContentEdit.Root.get();
      if (this.isFocused()) {
        this._removeCSSClass('ce-element--focused');
        root._focused = null;
        return root.trigger('blur', this);
      }
    };

    Element.prototype.can = function(behaviour, allowed) {
      if (allowed === void 0) {
        return (!this.isFixed()) && this._behaviours[behaviour];
      }
      return this._behaviours[behaviour] = allowed;
    };

    Element.prototype.createDraggingDOMElement = function() {
      var helper;
      if (!this.isMounted()) {
        return;
      }
      helper = document.createElement('div');
      helper.setAttribute('class', "ce-drag-helper ce-drag-helper--type-" + (this.cssTypeName()));
      helper.setAttribute('data-ce-type', ContentEdit._(this.typeName()));
      return helper;
    };

    Element.prototype.drag = function(x, y) {
      var root;
      if (!(this.isMounted() && this.can('drag'))) {
        return;
      }
      root = ContentEdit.Root.get();
      root.startDragging(this, x, y);
      return root.trigger('drag', this);
    };

    Element.prototype.drop = function(element, placement) {
      var root;
      if (!this.can('drop')) {
        return;
      }
      root = ContentEdit.Root.get();
      if (element) {
        element._removeCSSClass('ce-element--drop');
        element._removeCSSClass("ce-element--drop-" + placement[0]);
        element._removeCSSClass("ce-element--drop-" + placement[1]);
        if (this.constructor.droppers[element.type()]) {
          this.constructor.droppers[element.type()](this, element, placement);
          root.trigger('drop', this, element, placement);
          return;
        } else if (element.constructor.droppers[this.type()]) {
          element.constructor.droppers[this.type()](this, element, placement);
          root.trigger('drop', this, element, placement);
          return;
        }
      }
      return root.trigger('drop', this, null, null);
    };

    Element.prototype.focus = function(supressDOMFocus) {
      var root;
      root = ContentEdit.Root.get();
      if (this.isFocused()) {
        return;
      }
      if (root.focused()) {
        root.focused().blur();
      }
      this._addCSSClass('ce-element--focused');
      root._focused = this;
      if (this.isMounted() && !supressDOMFocus) {
        this.domElement().focus();
      }
      return root.trigger('focus', this);
    };

    Element.prototype.hasCSSClass = function(className) {
      var c, classNames;
      if (this.attr('class')) {
        classNames = (function() {
          var _i, _len, _ref, _results;
          _ref = this.attr('class').split(' ');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            _results.push(c);
          }
          return _results;
        }).call(this);
        if (classNames.indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    };

    Element.prototype.merge = function(element) {
      if (!(this.can('merge') && this.can('remove'))) {
        return false;
      }
      if (this.constructor.mergers[element.type()]) {
        return this.constructor.mergers[element.type()](element, this);
      } else if (element.constructor.mergers[this.type()]) {
        return element.constructor.mergers[this.type()](element, this);
      }
    };

    Element.prototype.mount = function() {
      var sibling;
      if (!this._domElement) {
        this._domElement = document.createElement(this.tagName());
      }
      sibling = this.nextSibling();
      if (sibling) {
        this.parent().domElement().insertBefore(this._domElement, sibling.domElement());
      } else {
        if (this.isFixed()) {
          this.parent().domElement().parentNode.replaceChild(this._domElement, this.parent().domElement());
          this.parent()._domElement = this._domElement;
        } else {
          this.parent().domElement().appendChild(this._domElement);
        }
      }
      this._addDOMEventListeners();
      this._addCSSClass('ce-element');
      this._addCSSClass("ce-element--type-" + (this.cssTypeName()));
      if (this.isFocused()) {
        this._addCSSClass('ce-element--focused');
      }
      return ContentEdit.Root.get().trigger('mount', this);
    };

    Element.prototype.removeAttr = function(name) {
      name = name.toLowerCase();
      if (!this._attributes[name]) {
        return;
      }
      delete this._attributes[name];
      if (this.isMounted() && name.toLowerCase() !== 'class') {
        this._domElement.removeAttribute(name);
      }
      return this.taint();
    };

    Element.prototype.removeCSSClass = function(className) {
      var c, classNameIndex, classNames;
      if (!this.hasCSSClass(className)) {
        return;
      }
      classNames = (function() {
        var _i, _len, _ref, _results;
        _ref = this.attr('class').split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      }).call(this);
      classNameIndex = classNames.indexOf(className);
      if (classNameIndex > -1) {
        classNames.splice(classNameIndex, 1);
      }
      if (classNames.length) {
        this.attr('class', classNames.join(' '));
      } else {
        this.removeAttr('class');
      }
      this._removeCSSClass(className);
      return this.taint();
    };

    Element.prototype.tagName = function(name) {
      if (name === void 0) {
        return this._tagName;
      }
      this._tagName = name.toLowerCase();
      if (this.isMounted()) {
        this.unmount();
        this.mount();
      }
      return this.taint();
    };

    Element.prototype.unmount = function() {
      this._removeDOMEventListeners();
      if (this.isFixed()) {
        this._removeCSSClass('ce-element');
        this._removeCSSClass("ce-element--type-" + (this.cssTypeName()));
        this._removeCSSClass('ce-element--focused');
        return;
      }
      if (this._domElement.parentNode) {
        this._domElement.parentNode.removeChild(this._domElement);
      }
      this._domElement = null;
      return ContentEdit.Root.get().trigger('unmount', this);
    };

    Element.prototype._addDOMEventListeners = function() {
      var eventHandler, eventName, _ref, _results;
      this._domEventHandlers = {
        'dragstart': (function(_this) {
          return function(ev) {
            return ev.preventDefault();
          };
        })(this),
        'focus': (function(_this) {
          return function(ev) {
            return ev.preventDefault();
          };
        })(this),
        'keydown': (function(_this) {
          return function(ev) {
            return _this._onKeyDown(ev);
          };
        })(this),
        'keyup': (function(_this) {
          return function(ev) {
            return _this._onKeyUp(ev);
          };
        })(this),
        'mousedown': (function(_this) {
          return function(ev) {
            if (ev.button === 0) {
              return _this._onMouseDown(ev);
            }
          };
        })(this),
        'mousemove': (function(_this) {
          return function(ev) {
            return _this._onMouseMove(ev);
          };
        })(this),
        'mouseover': (function(_this) {
          return function(ev) {
            return _this._onMouseOver(ev);
          };
        })(this),
        'mouseout': (function(_this) {
          return function(ev) {
            return _this._onMouseOut(ev);
          };
        })(this),
        'mouseup': (function(_this) {
          return function(ev) {
            if (ev.button === 0) {
              return _this._onMouseUp(ev);
            }
          };
        })(this),
        'dragover': (function(_this) {
          return function(ev) {
            return ev.preventDefault();
          };
        })(this),
        'drop': (function(_this) {
          return function(ev) {
            return _this._onNativeDrop(ev);
          };
        })(this),
        'paste': (function(_this) {
          return function(ev) {
            return _this._onPaste(ev);
          };
        })(this)
      };
      _ref = this._domEventHandlers;
      _results = [];
      for (eventName in _ref) {
        eventHandler = _ref[eventName];
        _results.push(this._domElement.addEventListener(eventName, eventHandler));
      }
      return _results;
    };

    Element.prototype._onKeyDown = function(ev) {};

    Element.prototype._onKeyUp = function(ev) {};

    Element.prototype._onMouseDown = function(ev) {
      if (this.focus) {
        return this.focus(true);
      }
    };

    Element.prototype._onMouseMove = function(ev) {
      return this._onOver(ev);
    };

    Element.prototype._onMouseOver = function(ev) {
      return this._onOver(ev);
    };

    Element.prototype._onMouseOut = function(ev) {
      var dragging, root;
      this._removeCSSClass('ce-element--over');
      root = ContentEdit.Root.get();
      dragging = root.dragging();
      if (dragging) {
        this._removeCSSClass('ce-element--drop');
        this._removeCSSClass('ce-element--drop-above');
        this._removeCSSClass('ce-element--drop-below');
        this._removeCSSClass('ce-element--drop-center');
        this._removeCSSClass('ce-element--drop-left');
        this._removeCSSClass('ce-element--drop-right');
        return root._dropTarget = null;
      }
    };

    Element.prototype._onMouseUp = function(ev) {
      return this._ieMouseDownEchoed = false;
    };

    Element.prototype._onNativeDrop = function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      return ContentEdit.Root.get().trigger('native-drop', this, ev);
    };

    Element.prototype._onPaste = function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      return ContentEdit.Root.get().trigger('paste', this, ev);
    };

    Element.prototype._onOver = function(ev) {
      var dragging, root;
      this._addCSSClass('ce-element--over');
      root = ContentEdit.Root.get();
      dragging = root.dragging();
      if (!dragging) {
        return;
      }
      if (dragging === this) {
        return;
      }
      if (root._dropTarget) {
        return;
      }
      if (!this.can('drop')) {
        return;
      }
      if (!(this.constructor.droppers[dragging.type()] || dragging.constructor.droppers[this.type()])) {
        return;
      }
      this._addCSSClass('ce-element--drop');
      return root._dropTarget = this;
    };

    Element.prototype._removeDOMEventListeners = function() {
      var eventHandler, eventName, _ref, _results;
      _ref = this._domEventHandlers;
      _results = [];
      for (eventName in _ref) {
        eventHandler = _ref[eventName];
        _results.push(this._domElement.removeEventListener(eventName, eventHandler));
      }
      return _results;
    };

    Element.prototype._addCSSClass = function(className) {
      if (!this.isMounted()) {
        return;
      }
      return ContentEdit.addCSSClass(this._domElement, className);
    };

    Element.prototype._attributesToString = function() {
      if (!(Object.getOwnPropertyNames(this._attributes).length > 0)) {
        return '';
      }
      return ' ' + ContentEdit.attributesToString(this._attributes);
    };

    Element.prototype._removeCSSClass = function(className) {
      if (!this.isMounted()) {
        return;
      }
      return ContentEdit.removeCSSClass(this._domElement, className);
    };

    Element.droppers = {};

    Element.mergers = {};

    Element.placements = ['above', 'below'];

    Element.getDOMElementAttributes = function(domElement) {
      var attribute, attributes, _i, _len, _ref;
      if (!domElement.hasAttributes()) {
        return {};
      }
      attributes = {};
      _ref = domElement.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attribute = _ref[_i];
        attributes[attribute.name.toLowerCase()] = attribute.value;
      }
      return attributes;
    };

    Element._dropVert = function(element, target, placement) {
      var insertIndex;
      element.parent().detach(element);
      insertIndex = target.parent().children.indexOf(target);
      if (placement[0] === 'below') {
        insertIndex += 1;
      }
      return target.parent().attach(element, insertIndex);
    };

    Element._dropBoth = function(element, target, placement) {
      var aClassNames, alignLeft, alignRight, className, insertIndex, _i, _len, _ref;
      element.parent().detach(element);
      insertIndex = target.parent().children.indexOf(target);
      if (placement[0] === 'below' && placement[1] === 'center') {
        insertIndex += 1;
      }
      alignLeft = ContentEdit.ALIGNMENT_CLASS_NAMES['left'];
      alignRight = ContentEdit.ALIGNMENT_CLASS_NAMES['right'];
      if (element.a) {
        element._removeCSSClass(alignLeft);
        element._removeCSSClass(alignRight);
        if (element.a['class']) {
          aClassNames = [];
          _ref = element.a['class'].split(' ');
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            className = _ref[_i];
            if (className === alignLeft || className === alignRight) {
              continue;
            }
            aClassNames.push(className);
          }
          if (aClassNames.length) {
            element.a['class'] = aClassNames.join(' ');
          } else {
            delete element.a['class'];
          }
        }
      } else {
        element.removeCSSClass(alignLeft);
        element.removeCSSClass(alignRight);
      }
      if (placement[1] === 'left') {
        if (element.a) {
          if (element.a['class']) {
            element.a['class'] += ' ' + alignLeft;
          } else {
            element.a['class'] = alignLeft;
          }
          element._addCSSClass(alignLeft);
        } else {
          element.addCSSClass(alignLeft);
        }
      }
      if (placement[1] === 'right') {
        if (element.a) {
          if (element.a['class']) {
            element.a['class'] += ' ' + alignRight;
          } else {
            element.a['class'] = alignRight;
          }
          element._addCSSClass(alignRight);
        } else {
          element.addCSSClass(alignRight);
        }
      }
      return target.parent().attach(element, insertIndex);
    };

    return Element;

  })(ContentEdit.Node);

  ContentEdit.ElementCollection = (function(_super) {
    __extends(ElementCollection, _super);

    ElementCollection.extend(ContentEdit.NodeCollection);

    function ElementCollection(tagName, attributes) {
      ElementCollection.__super__.constructor.call(this, tagName, attributes);
      ContentEdit.NodeCollection.prototype.constructor.call(this);
    }

    ElementCollection.prototype.cssTypeName = function() {
      return 'element-collection';
    };

    ElementCollection.prototype.isMounted = function() {
      return this._domElement !== null;
    };

    ElementCollection.prototype.type = function() {
      return 'ElementCollection';
    };

    ElementCollection.prototype.createDraggingDOMElement = function() {
      var helper, text;
      if (!this.isMounted()) {
        return;
      }
      helper = ElementCollection.__super__.createDraggingDOMElement.call(this);
      text = this._domElement.textContent;
      if (text.length > ContentEdit.HELPER_CHAR_LIMIT) {
        text = text.substr(0, ContentEdit.HELPER_CHAR_LIMIT);
      }
      helper.innerHTML = text;
      return helper;
    };

    ElementCollection.prototype.detach = function(element) {
      ContentEdit.NodeCollection.prototype.detach.call(this, element);
      if (this.children.length === 0 && this.parent()) {
        return this.parent().detach(this);
      }
    };

    ElementCollection.prototype.html = function(indent) {
      var attributes, c, children, le;
      if (indent == null) {
        indent = '';
      }
      children = (function() {
        var _i, _len, _ref, _results;
        _ref = this.children;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c.html(indent + ContentEdit.INDENT));
        }
        return _results;
      }).call(this);
      le = ContentEdit.LINE_ENDINGS;
      if (this.isFixed()) {
        return children.join(le);
      } else {
        attributes = this._attributesToString();
        return ("" + indent + "<" + (this.tagName()) + attributes + ">" + le) + ("" + (children.join(le)) + le) + ("" + indent + "</" + (this.tagName()) + ">");
      }
    };

    ElementCollection.prototype.mount = function() {
      var child, name, value, _i, _len, _ref, _ref1, _results;
      this._domElement = document.createElement(this._tagName);
      _ref = this._attributes;
      for (name in _ref) {
        value = _ref[name];
        this._domElement.setAttribute(name, value);
      }
      ElementCollection.__super__.mount.call(this);
      _ref1 = this.children;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        child = _ref1[_i];
        _results.push(child.mount());
      }
      return _results;
    };

    ElementCollection.prototype.unmount = function() {
      var child, _i, _len, _ref;
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        child.unmount();
      }
      return ElementCollection.__super__.unmount.call(this);
    };

    ElementCollection.prototype.blur = void 0;

    ElementCollection.prototype.focus = void 0;

    return ElementCollection;

  })(ContentEdit.Element);

  ContentEdit.ResizableElement = (function(_super) {
    __extends(ResizableElement, _super);

    function ResizableElement(tagName, attributes) {
      ResizableElement.__super__.constructor.call(this, tagName, attributes);
      this._domSizeInfoElement = null;
      this._aspectRatio = 1;
    }

    ResizableElement.prototype.aspectRatio = function() {
      return this._aspectRatio;
    };

    ResizableElement.prototype.maxSize = function() {
      var maxWidth;
      maxWidth = parseInt(this.attr('data-ce-max-width') || 0);
      if (!maxWidth) {
        maxWidth = ContentEdit.DEFAULT_MAX_ELEMENT_WIDTH;
      }
      maxWidth = Math.max(maxWidth, this.size()[0]);
      return [maxWidth, maxWidth * this.aspectRatio()];
    };

    ResizableElement.prototype.minSize = function() {
      var minWidth;
      minWidth = parseInt(this.attr('data-ce-min-width') || 0);
      if (!minWidth) {
        minWidth = ContentEdit.DEFAULT_MIN_ELEMENT_WIDTH;
      }
      minWidth = Math.min(minWidth, this.size()[0]);
      return [minWidth, minWidth * this.aspectRatio()];
    };

    ResizableElement.prototype.type = function() {
      return 'ResizableElement';
    };

    ResizableElement.prototype.mount = function() {
      ResizableElement.__super__.mount.call(this);
      return this._domElement.setAttribute('data-ce-size', this._getSizeInfo());
    };

    ResizableElement.prototype.resize = function(corner, x, y) {
      if (!(this.isMounted() && this.can('resize'))) {
        return;
      }
      return ContentEdit.Root.get().startResizing(this, corner, x, y, true);
    };

    ResizableElement.prototype.size = function(newSize) {
      var height, maxSize, minSize, width;
      if (!newSize) {
        width = parseInt(this.attr('width') || 1);
        height = parseInt(this.attr('height') || 1);
        return [width, height];
      }
      newSize[0] = parseInt(newSize[0]);
      newSize[1] = parseInt(newSize[1]);
      minSize = this.minSize();
      newSize[0] = Math.max(newSize[0], minSize[0]);
      newSize[1] = Math.max(newSize[1], minSize[1]);
      maxSize = this.maxSize();
      newSize[0] = Math.min(newSize[0], maxSize[0]);
      newSize[1] = Math.min(newSize[1], maxSize[1]);
      this.attr('width', parseInt(newSize[0]));
      this.attr('height', parseInt(newSize[1]));
      if (this.isMounted()) {
        this._domElement.style.width = "" + newSize[0] + "px";
        this._domElement.style.height = "" + newSize[1] + "px";
        return this._domElement.setAttribute('data-ce-size', this._getSizeInfo());
      }
    };

    ResizableElement.prototype._onMouseDown = function(ev) {
      var corner;
      ResizableElement.__super__._onMouseDown.call(this, ev);
      corner = this._getResizeCorner(ev.clientX, ev.clientY);
      if (corner) {
        return this.resize(corner, ev.clientX, ev.clientY);
      } else {
        clearTimeout(this._dragTimeout);
        return this._dragTimeout = setTimeout((function(_this) {
          return function() {
            return _this.drag(ev.pageX, ev.pageY);
          };
        })(this), 150);
      }
    };

    ResizableElement.prototype._onMouseMove = function(ev) {
      var corner;
      ResizableElement.__super__._onMouseMove.call(this);
      if (!this.can('resize')) {
        return;
      }
      this._removeCSSClass('ce-element--resize-top-left');
      this._removeCSSClass('ce-element--resize-top-right');
      this._removeCSSClass('ce-element--resize-bottom-left');
      this._removeCSSClass('ce-element--resize-bottom-right');
      corner = this._getResizeCorner(ev.clientX, ev.clientY);
      if (corner) {
        return this._addCSSClass("ce-element--resize-" + corner[0] + "-" + corner[1]);
      }
    };

    ResizableElement.prototype._onMouseOut = function(ev) {
      ResizableElement.__super__._onMouseOut.call(this);
      this._removeCSSClass('ce-element--resize-top-left');
      this._removeCSSClass('ce-element--resize-top-right');
      this._removeCSSClass('ce-element--resize-bottom-left');
      return this._removeCSSClass('ce-element--resize-bottom-right');
    };

    ResizableElement.prototype._onMouseUp = function(ev) {
      ResizableElement.__super__._onMouseUp.call(this);
      if (this._dragTimeout) {
        return clearTimeout(this._dragTimeout);
      }
    };

    ResizableElement.prototype._getResizeCorner = function(x, y) {
      var corner, cornerSize, rect, size, _ref;
      rect = this._domElement.getBoundingClientRect();
      _ref = [x - rect.left, y - rect.top], x = _ref[0], y = _ref[1];
      size = this.size();
      cornerSize = ContentEdit.RESIZE_CORNER_SIZE;
      cornerSize = Math.min(cornerSize, Math.max(parseInt(size[0] / 4), 1));
      cornerSize = Math.min(cornerSize, Math.max(parseInt(size[1] / 4), 1));
      corner = null;
      if (x < cornerSize) {
        if (y < cornerSize) {
          corner = ['top', 'left'];
        } else if (y > rect.height - cornerSize) {
          corner = ['bottom', 'left'];
        }
      } else if (x > rect.width - cornerSize) {
        if (y < cornerSize) {
          corner = ['top', 'right'];
        } else if (y > rect.height - cornerSize) {
          corner = ['bottom', 'right'];
        }
      }
      return corner;
    };

    ResizableElement.prototype._getSizeInfo = function() {
      var size;
      size = this.size();
      return "w " + size[0] + " × h " + size[1];
    };

    return ResizableElement;

  })(ContentEdit.Element);

  ContentEdit.Region = (function(_super) {
    __extends(Region, _super);

    function Region(domElement) {
      Region.__super__.constructor.call(this);
      this._domElement = domElement;
      this.setContent(domElement);
    }

    Region.prototype.domElement = function() {
      return this._domElement;
    };

    Region.prototype.isMounted = function() {
      return true;
    };

    Region.prototype.type = function() {
      return 'Region';
    };

    Region.prototype.html = function(indent) {
      var c, le;
      if (indent == null) {
        indent = '';
      }
      le = ContentEdit.LINE_ENDINGS;
      return ((function() {
        var _i, _len, _ref, _results;
        _ref = this.children;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c.html(indent));
        }
        return _results;
      }).call(this)).join(le).trim();
    };

    Region.prototype.setContent = function(domElementOrHTML) {
      var c, child, childNode, childNodes, cls, domElement, element, tagNames, wrapper, _i, _j, _len, _len1, _ref;
      domElement = domElementOrHTML;
      if (domElementOrHTML.childNodes === void 0) {
        wrapper = document.createElement('div');
        wrapper.innerHTML = domElementOrHTML;
        domElement = wrapper;
      }
      _ref = this.children.slice();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        this.detach(child);
      }
      tagNames = ContentEdit.TagNames.get();
      childNodes = (function() {
        var _j, _len1, _ref1, _results;
        _ref1 = domElement.childNodes;
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          c = _ref1[_j];
          _results.push(c);
        }
        return _results;
      })();
      for (_j = 0, _len1 = childNodes.length; _j < _len1; _j++) {
        childNode = childNodes[_j];
        if (childNode.nodeType !== 1) {
          continue;
        }
        if (childNode.getAttribute('data-ce-tag')) {
          cls = tagNames.match(childNode.getAttribute('data-ce-tag'));
        } else {
          cls = tagNames.match(childNode.tagName);
        }
        element = cls.fromDOMElement(childNode);
        domElement.removeChild(childNode);
        if (element) {
          this.attach(element);
        }
      }
      return ContentEdit.Root.get().trigger('ready', this);
    };

    return Region;

  })(ContentEdit.NodeCollection);

  ContentEdit.Fixture = (function(_super) {
    __extends(Fixture, _super);

    function Fixture(domElement) {
      var cls, element, tagNames;
      Fixture.__super__.constructor.call(this);
      this._domElement = domElement;
      tagNames = ContentEdit.TagNames.get();
      if (this._domElement.getAttribute("data-ce-tag")) {
        cls = tagNames.match(this._domElement.getAttribute("data-ce-tag"));
      } else {
        cls = tagNames.match(this._domElement.tagName);
      }
      element = cls.fromDOMElement(this._domElement);
      this.children = [element];
      element._parent = this;
      element.mount();
      ContentEdit.Root.get().trigger('ready', this);
    }

    Fixture.prototype.domElement = function() {
      return this._domElement;
    };

    Fixture.prototype.isMounted = function() {
      return true;
    };

    Fixture.prototype.type = function() {
      return 'Fixture';
    };

    Fixture.prototype.html = function(indent) {
      var c, le;
      if (indent == null) {
        indent = '';
      }
      le = ContentEdit.LINE_ENDINGS;
      return ((function() {
        var _i, _len, _ref, _results;
        _ref = this.children;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c.html(indent));
        }
        return _results;
      }).call(this)).join(le).trim();
    };

    return Fixture;

  })(ContentEdit.NodeCollection);

  _Root = (function(_super) {
    __extends(_Root, _super);

    function _Root() {
      this._onStopResizing = __bind(this._onStopResizing, this);
      this._onResize = __bind(this._onResize, this);
      this._onStopDragging = __bind(this._onStopDragging, this);
      this._onDrag = __bind(this._onDrag, this);
      _Root.__super__.constructor.call(this);
      this._focused = null;
      this._dragging = null;
      this._dropTarget = null;
      this._draggingDOMElement = null;
      this._resizing = null;
      this._resizingInit = null;
    }

    _Root.prototype.dragging = function() {
      return this._dragging;
    };

    _Root.prototype.dropTarget = function() {
      return this._dropTarget;
    };

    _Root.prototype.focused = function() {
      return this._focused;
    };

    _Root.prototype.resizing = function() {
      return this._resizing;
    };

    _Root.prototype.type = function() {
      return 'Root';
    };

    _Root.prototype.cancelDragging = function() {
      if (!this._dragging) {
        return;
      }
      document.body.removeChild(this._draggingDOMElement);
      document.removeEventListener('mousemove', this._onDrag);
      document.removeEventListener('mouseup', this._onStopDragging);
      this._dragging._removeCSSClass('ce-element--dragging');
      this._dragging = null;
      this._dropTarget = null;
      return ContentEdit.removeCSSClass(document.body, 'ce--dragging');
    };

    _Root.prototype.startDragging = function(element, x, y) {
      if (this._dragging) {
        return;
      }
      this._dragging = element;
      this._dragging._addCSSClass('ce-element--dragging');
      this._draggingDOMElement = this._dragging.createDraggingDOMElement();
      document.body.appendChild(this._draggingDOMElement);
      this._draggingDOMElement.style.left = "" + x + "px";
      this._draggingDOMElement.style.top = "" + y + "px";
      document.addEventListener('mousemove', this._onDrag);
      document.addEventListener('mouseup', this._onStopDragging);
      return ContentEdit.addCSSClass(document.body, 'ce--dragging');
    };

    _Root.prototype._getDropPlacement = function(x, y) {
      var horz, rect, vert, _ref;
      if (!this._dropTarget) {
        return null;
      }
      rect = this._dropTarget.domElement().getBoundingClientRect();
      _ref = [x - rect.left, y - rect.top], x = _ref[0], y = _ref[1];
      horz = 'center';
      if (x < ContentEdit.DROP_EDGE_SIZE) {
        horz = 'left';
      } else if (x > rect.width - ContentEdit.DROP_EDGE_SIZE) {
        horz = 'right';
      }
      vert = 'above';
      if (y > rect.height / 2) {
        vert = 'below';
      }
      return [vert, horz];
    };

    _Root.prototype._onDrag = function(ev) {
      var placement, _ref, _ref1;
      ContentSelect.Range.unselectAll();
      this._draggingDOMElement.style.left = "" + ev.pageX + "px";
      this._draggingDOMElement.style.top = "" + ev.pageY + "px";
      if (this._dropTarget) {
        placement = this._getDropPlacement(ev.clientX, ev.clientY);
        this._dropTarget._removeCSSClass('ce-element--drop-above');
        this._dropTarget._removeCSSClass('ce-element--drop-below');
        this._dropTarget._removeCSSClass('ce-element--drop-center');
        this._dropTarget._removeCSSClass('ce-element--drop-left');
        this._dropTarget._removeCSSClass('ce-element--drop-right');
        if (_ref = placement[0], __indexOf.call(this._dragging.constructor.placements, _ref) >= 0) {
          this._dropTarget._addCSSClass("ce-element--drop-" + placement[0]);
        }
        if (_ref1 = placement[1], __indexOf.call(this._dragging.constructor.placements, _ref1) >= 0) {
          return this._dropTarget._addCSSClass("ce-element--drop-" + placement[1]);
        }
      }
    };

    _Root.prototype._onStopDragging = function(ev) {
      var placement;
      placement = this._getDropPlacement(ev.clientX, ev.clientY);
      this._dragging.drop(this._dropTarget, placement);
      return this.cancelDragging();
    };

    _Root.prototype.startResizing = function(element, corner, x, y, fixed) {
      var measureDom, parentDom;
      if (this._resizing) {
        return;
      }
      this._resizing = element;
      this._resizingInit = {
        corner: corner,
        fixed: fixed,
        origin: [x, y],
        size: element.size()
      };
      this._resizing._addCSSClass('ce-element--resizing');
      parentDom = this._resizing.parent().domElement();
      measureDom = document.createElement('div');
      measureDom.setAttribute('class', 'ce-measure');
      parentDom.appendChild(measureDom);
      this._resizingParentWidth = measureDom.getBoundingClientRect().width;
      parentDom.removeChild(measureDom);
      document.addEventListener('mousemove', this._onResize);
      document.addEventListener('mouseup', this._onStopResizing);
      return ContentEdit.addCSSClass(document.body, 'ce--resizing');
    };

    _Root.prototype._onResize = function(ev) {
      var height, width, x, y;
      ContentSelect.Range.unselectAll();
      x = this._resizingInit.origin[0] - ev.clientX;
      if (this._resizingInit.corner[1] === 'right') {
        x = -x;
      }
      width = this._resizingInit.size[0] + x;
      width = Math.min(width, this._resizingParentWidth);
      if (this._resizingInit.fixed) {
        height = width * this._resizing.aspectRatio();
      } else {
        y = this._resizingInit.origin[1] - ev.clientY;
        if (this._resizingInit.corner[0] === 'bottom') {
          y = -y;
        }
        height = this._resizingInit.size[1] + y;
      }
      return this._resizing.size([width, height]);
    };

    _Root.prototype._onStopResizing = function(ev) {
      document.removeEventListener('mousemove', this._onResize);
      document.removeEventListener('mouseup', this._onStopResizing);
      this._resizing._removeCSSClass('ce-element--resizing');
      this._resizing = null;
      this._resizingInit = null;
      this._resizingParentWidth = null;
      return ContentEdit.removeCSSClass(document.body, 'ce--resizing');
    };

    return _Root;

  })(ContentEdit.Node);

  ContentEdit.Root = (function() {
    var instance;

    function Root() {}

    instance = null;

    Root.get = function() {
      return instance != null ? instance : instance = new _Root();
    };

    return Root;

  })();

  ContentEdit.Static = (function(_super) {
    __extends(Static, _super);

    function Static(tagName, attributes, content) {
      Static.__super__.constructor.call(this, tagName, attributes);
      this._content = content;
    }

    Static.prototype.cssTypeName = function() {
      return 'static';
    };

    Static.prototype.type = function() {
      return 'Static';
    };

    Static.prototype.typeName = function() {
      return 'Static';
    };

    Static.prototype.createDraggingDOMElement = function() {
      var helper, text;
      if (!this.isMounted()) {
        return;
      }
      helper = Static.__super__.createDraggingDOMElement.call(this);
      text = this._domElement.textContent;
      if (text.length > ContentEdit.HELPER_CHAR_LIMIT) {
        text = text.substr(0, ContentEdit.HELPER_CHAR_LIMIT);
      }
      helper.innerHTML = text;
      return helper;
    };

    Static.prototype.html = function(indent) {
      if (indent == null) {
        indent = '';
      }
      if (HTMLString.Tag.SELF_CLOSING[this._tagName]) {
        return "" + indent + "<" + this._tagName + (this._attributesToString()) + ">";
      }
      return ("" + indent + "<" + this._tagName + (this._attributesToString()) + ">") + ("" + this._content) + ("" + indent + "</" + this._tagName + ">");
    };

    Static.prototype.mount = function() {
      var name, value, _ref;
      this._domElement = document.createElement(this._tagName);
      _ref = this._attributes;
      for (name in _ref) {
        value = _ref[name];
        this._domElement.setAttribute(name, value);
      }
      this._domElement.innerHTML = this._content;
      return Static.__super__.mount.call(this);
    };

    Static.prototype.blur = void 0;

    Static.prototype.focus = void 0;

    Static.prototype._onMouseDown = function(ev) {
      Static.__super__._onMouseDown.call(this, ev);
      if (this.attr('data-ce-moveable') !== void 0) {
        clearTimeout(this._dragTimeout);
        return this._dragTimeout = setTimeout((function(_this) {
          return function() {
            return _this.drag(ev.pageX, ev.pageY);
          };
        })(this), 150);
      }
    };

    Static.prototype._onMouseOver = function(ev) {
      Static.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    Static.prototype._onMouseUp = function(ev) {
      Static.__super__._onMouseUp.call(this, ev);
      if (this._dragTimeout) {
        return clearTimeout(this._dragTimeout);
      }
    };

    Static.droppers = {
      'Static': ContentEdit.Element._dropVert
    };

    Static.fromDOMElement = function(domElement) {
      return new this(domElement.tagName, this.getDOMElementAttributes(domElement), domElement.innerHTML);
    };

    return Static;

  })(ContentEdit.Element);

  ContentEdit.TagNames.get().register(ContentEdit.Static, 'static');

  ContentEdit.Text = (function(_super) {
    __extends(Text, _super);

    function Text(tagName, attributes, content) {
      Text.__super__.constructor.call(this, tagName, attributes);
      if (content instanceof HTMLString.String) {
        this.content = content;
      } else {
        if (ContentEdit.TRIM_WHITESPACE) {
          this.content = new HTMLString.String(content).trim();
        } else {
          this.content = new HTMLString.String(content, true);
        }
      }
    }

    Text.prototype.cssTypeName = function() {
      return 'text';
    };

    Text.prototype.type = function() {
      return 'Text';
    };

    Text.prototype.typeName = function() {
      return 'Text';
    };

    Text.prototype.blur = function() {
      if (this.isMounted()) {
        this._syncContent();
      }
      if (this.content.isWhitespace() && this.can('remove')) {
        if (this.parent()) {
          this.parent().detach(this);
        }
      } else if (this.isMounted()) {
        if (!document.documentMode && !/Edge/.test(navigator.userAgent)) {
          this._domElement.blur();
        }
        this._domElement.removeAttribute('contenteditable');
      }
      return Text.__super__.blur.call(this);
    };

    Text.prototype.createDraggingDOMElement = function() {
      var helper, text;
      if (!this.isMounted()) {
        return;
      }
      helper = Text.__super__.createDraggingDOMElement.call(this);
      text = HTMLString.String.encode(this._domElement.textContent);
      if (text.length > ContentEdit.HELPER_CHAR_LIMIT) {
        text = text.substr(0, ContentEdit.HELPER_CHAR_LIMIT);
      }
      helper.innerHTML = text;
      return helper;
    };

    Text.prototype.drag = function(x, y) {
      this.storeState();
      this._domElement.removeAttribute('contenteditable');
      return Text.__super__.drag.call(this, x, y);
    };

    Text.prototype.drop = function(element, placement) {
      Text.__super__.drop.call(this, element, placement);
      return this.restoreState();
    };

    Text.prototype.focus = function(supressDOMFocus) {
      if (this.isMounted()) {
        this._domElement.setAttribute('contenteditable', '');
      }
      return Text.__super__.focus.call(this, supressDOMFocus);
    };

    Text.prototype.html = function(indent) {
      var attributes, content, le;
      if (indent == null) {
        indent = '';
      }
      if (!this._lastCached || this._lastCached < this._modified) {
        if (ContentEdit.TRIM_WHITESPACE) {
          content = this.content.copy().trim();
        } else {
          content = this.content.copy();
        }
        content.optimize();
        this._lastCached = Date.now();
        this._cached = content.html();
      }
      le = ContentEdit.LINE_ENDINGS;
      attributes = this._attributesToString();
      return ("" + indent + "<" + this._tagName + attributes + ">" + le) + ("" + indent + ContentEdit.INDENT + this._cached + le) + ("" + indent + "</" + this._tagName + ">");
    };

    Text.prototype.mount = function() {
      var name, value, _ref;
      this._domElement = document.createElement(this._tagName);
      _ref = this._attributes;
      for (name in _ref) {
        value = _ref[name];
        this._domElement.setAttribute(name, value);
      }
      this.updateInnerHTML();
      return Text.__super__.mount.call(this);
    };

    Text.prototype.restoreState = function() {
      if (!this._savedSelection) {
        return;
      }
      if (!(this.isMounted() && this.isFocused())) {
        this._savedSelection = void 0;
        return;
      }
      this._domElement.setAttribute('contenteditable', '');
      this._addCSSClass('ce-element--focused');
      if (document.activeElement !== this.domElement()) {
        this.domElement().focus();
      }
      this._savedSelection.select(this._domElement);
      return this._savedSelection = void 0;
    };

    Text.prototype.selection = function(selection) {
      if (selection === void 0) {
        if (this.isMounted()) {
          return ContentSelect.Range.query(this._domElement);
        } else {
          return new ContentSelect.Range(0, 0);
        }
      }
      return selection.select(this._domElement);
    };

    Text.prototype.storeState = function() {
      if (!(this.isMounted() && this.isFocused())) {
        return;
      }
      return this._savedSelection = ContentSelect.Range.query(this._domElement);
    };

    Text.prototype.unmount = function() {
      this._domElement.removeAttribute('contenteditable');
      return Text.__super__.unmount.call(this);
    };

    Text.prototype.updateInnerHTML = function() {
      this._domElement.innerHTML = this.content.html();
      ContentSelect.Range.prepareElement(this._domElement);
      return this._flagIfEmpty();
    };

    Text.prototype._onKeyDown = function(ev) {
      switch (ev.keyCode) {
        case 40:
          return this._keyDown(ev);
        case 37:
          return this._keyLeft(ev);
        case 39:
          return this._keyRight(ev);
        case 38:
          return this._keyUp(ev);
        case 9:
          return this._keyTab(ev);
        case 8:
          return this._keyBack(ev);
        case 46:
          return this._keyDelete(ev);
        case 13:
          return this._keyReturn(ev);
      }
    };

    Text.prototype._onKeyUp = function(ev) {
      Text.__super__._onKeyUp.call(this, ev);
      return this._syncContent();
    };

    Text.prototype._onMouseDown = function(ev) {
      Text.__super__._onMouseDown.call(this, ev);
      clearTimeout(this._dragTimeout);
      this._dragTimeout = setTimeout((function(_this) {
        return function() {
          return _this.drag(ev.pageX, ev.pageY);
        };
      })(this), ContentEdit.DRAG_HOLD_DURATION);
      if (this.content.length() === 0 && ContentEdit.Root.get().focused() === this) {
        ev.preventDefault();
        if (document.activeElement !== this._domElement) {
          this._domElement.focus();
        }
        return new ContentSelect.Range(0, 0).select(this._domElement);
      }
    };

    Text.prototype._onMouseMove = function(ev) {
      if (this._dragTimeout) {
        clearTimeout(this._dragTimeout);
      }
      return Text.__super__._onMouseMove.call(this, ev);
    };

    Text.prototype._onMouseOut = function(ev) {
      if (this._dragTimeout) {
        clearTimeout(this._dragTimeout);
      }
      return Text.__super__._onMouseOut.call(this, ev);
    };

    Text.prototype._onMouseUp = function(ev) {
      if (this._dragTimeout) {
        clearTimeout(this._dragTimeout);
      }
      return Text.__super__._onMouseUp.call(this, ev);
    };

    Text.prototype._keyBack = function(ev) {
      var previous, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(selection.get()[0] === 0 && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      previous = this.previousContent();
      this._syncContent();
      if (previous) {
        return previous.merge(this);
      }
    };

    Text.prototype._keyDelete = function(ev) {
      var next, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(this._atEnd(selection) && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      next = this.nextContent();
      if (next) {
        return this.merge(next);
      }
    };

    Text.prototype._keyDown = function(ev) {
      return this._keyRight(ev);
    };

    Text.prototype._keyLeft = function(ev) {
      var previous, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(selection.get()[0] === 0 && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      previous = this.previousContent();
      if (previous) {
        previous.focus();
        selection = new ContentSelect.Range(previous.content.length(), previous.content.length());
        return selection.select(previous.domElement());
      } else {
        return ContentEdit.Root.get().trigger('previous-region', this.closest(function(node) {
          return node.type() === 'Fixture' || node.type() === 'Region';
        }));
      }
    };

    Text.prototype._keyReturn = function(ev) {
      var element, insertAt, lineBreakStr, selection, tail, tip;
      ev.preventDefault();
      if (this.content.isWhitespace() && !ev.shiftKey ^ ContentEdit.PREFER_LINE_BREAKS) {
        return;
      }
      selection = ContentSelect.Range.query(this._domElement);
      tip = this.content.substring(0, selection.get()[0]);
      tail = this.content.substring(selection.get()[1]);
      if (ev.shiftKey ^ ContentEdit.PREFER_LINE_BREAKS) {
        insertAt = selection.get()[0];
        lineBreakStr = '<br>';
        if (this.content.length() === insertAt) {
          if (this.content.length() === 0 || !this.content.characters[insertAt - 1].isTag('br')) {
            lineBreakStr = '<br><br>';
          }
        }
        this.content = this.content.insert(insertAt, new HTMLString.String(lineBreakStr, true), true);
        this.updateInnerHTML();
        insertAt += 1;
        selection = new ContentSelect.Range(insertAt, insertAt);
        selection.select(this.domElement());
        this.taint();
        return;
      }
      if (!this.can('spawn')) {
        return;
      }
      this.content = tip.trim();
      this.updateInnerHTML();
      element = new this.constructor('p', {}, tail.trim());
      this.parent().attach(element, this.parent().children.indexOf(this) + 1);
      if (tip.length()) {
        element.focus();
        selection = new ContentSelect.Range(0, 0);
        selection.select(element.domElement());
      } else {
        selection = new ContentSelect.Range(0, tip.length());
        selection.select(this._domElement);
      }
      return this.taint();
    };

    Text.prototype._keyRight = function(ev) {
      var next, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(this._atEnd(selection) && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      next = this.nextContent();
      if (next) {
        next.focus();
        selection = new ContentSelect.Range(0, 0);
        return selection.select(next.domElement());
      } else {
        return ContentEdit.Root.get().trigger('next-region', this.closest(function(node) {
          return node.type() === 'Fixture' || node.type() === 'Region';
        }));
      }
    };

    Text.prototype._keyTab = function(ev) {
      ev.preventDefault();
      if (this.isFixed()) {
        if (ev.shiftKey) {
          return ContentEdit.Root.get().trigger('previous-region', this.closest(function(node) {
            return node.type() === 'Fixture' || node.type() === 'Region';
          }));
        } else {
          return ContentEdit.Root.get().trigger('next-region', this.closest(function(node) {
            return node.type() === 'Fixture' || node.type() === 'Region';
          }));
        }
      }
    };

    Text.prototype._keyUp = function(ev) {
      return this._keyLeft(ev);
    };

    Text.prototype._atEnd = function(selection) {
      return selection.get()[0] >= this.content.length();
    };

    Text.prototype._flagIfEmpty = function() {
      if (this.content.length() === 0) {
        return this._addCSSClass('ce-element--empty');
      } else {
        return this._removeCSSClass('ce-element--empty');
      }
    };

    Text.prototype._syncContent = function(ev) {
      var newSnapshot, snapshot;
      snapshot = this.content.html();
      this.content = new HTMLString.String(this._domElement.innerHTML, this.content.preserveWhitespace());
      newSnapshot = this.content.html();
      if (snapshot !== newSnapshot) {
        this.taint();
      }
      return this._flagIfEmpty();
    };

    Text.droppers = {
      'Static': ContentEdit.Element._dropVert,
      'Text': ContentEdit.Element._dropVert
    };

    Text.mergers = {
      'Text': function(element, target) {
        var offset;
        offset = target.content.length();
        if (element.content.length()) {
          target.content = target.content.concat(element.content);
        }
        if (target.isMounted()) {
          target.updateInnerHTML();
        }
        target.focus();
        new ContentSelect.Range(offset, offset).select(target._domElement);
        if (element.parent()) {
          element.parent().detach(element);
        }
        return target.taint();
      }
    };

    Text.fromDOMElement = function(domElement) {
      return new this(domElement.tagName, this.getDOMElementAttributes(domElement), domElement.innerHTML.replace(/^\s+|\s+$/g, ''));
    };

    return Text;

  })(ContentEdit.Element);

  ContentEdit.TagNames.get().register(ContentEdit.Text, 'address', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p');

  ContentEdit.PreText = (function(_super) {
    __extends(PreText, _super);

    PreText.TAB_INDENT = '    ';

    function PreText(tagName, attributes, content) {
      if (content instanceof HTMLString.String) {
        this.content = content;
      } else {
        this.content = new HTMLString.String(content, true);
      }
      ContentEdit.Element.call(this, tagName, attributes);
    }

    PreText.prototype.cssTypeName = function() {
      return 'pre-text';
    };

    PreText.prototype.type = function() {
      return 'PreText';
    };

    PreText.prototype.typeName = function() {
      return 'Preformatted';
    };

    PreText.prototype.blur = function() {
      if (this.isMounted()) {
        this._domElement.innerHTML = this.content.html();
      }
      return PreText.__super__.blur.call(this);
    };

    PreText.prototype.html = function(indent) {
      var content;
      if (indent == null) {
        indent = '';
      }
      if (!this._lastCached || this._lastCached < this._modified) {
        content = this.content.copy();
        content.optimize();
        this._lastCached = Date.now();
        this._cached = content.html();
      }
      return ("" + indent + "<" + this._tagName + (this._attributesToString()) + ">") + ("" + this._cached + "</" + this._tagName + ">");
    };

    PreText.prototype.updateInnerHTML = function() {
      var html;
      html = this.content.html();
      this._domElement.innerHTML = html;
      this._ensureEndZWS();
      ContentSelect.Range.prepareElement(this._domElement);
      return this._flagIfEmpty();
    };

    PreText.prototype._keyBack = function(ev) {
      var selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (selection.get()[0] <= this.content.length()) {
        return PreText.__super__._keyBack.call(this, ev);
      }
      selection.set(this.content.length(), this.content.length());
      return selection.select(this._domElement);
    };

    PreText.prototype._keyReturn = function(ev) {
      var cursor, selection, tail, tip;
      ev.preventDefault();
      selection = ContentSelect.Range.query(this._domElement);
      cursor = selection.get()[0] + 1;
      if (selection.get()[0] === 0 && selection.isCollapsed()) {
        this.content = new HTMLString.String('\n', true).concat(this.content);
      } else if (this._atEnd(selection) && selection.isCollapsed()) {
        this.content = this.content.concat(new HTMLString.String('\n', true));
      } else if (selection.get()[0] === 0 && selection.get()[1] === this.content.length()) {
        this.content = new HTMLString.String('\n', true);
        cursor = 0;
      } else {
        tip = this.content.substring(0, selection.get()[0]);
        tail = this.content.substring(selection.get()[1]);
        this.content = tip.concat(new HTMLString.String('\n', true), tail);
      }
      this.updateInnerHTML();
      selection.set(cursor, cursor);
      selection.select(this._domElement);
      return this.taint();
    };

    PreText.prototype._keyTab = function(ev) {
      var blockLength, c, charIndex, endLine, firstLineShift, i, indentHTML, indentLength, indentText, j, line, lineLength, lines, selection, selectionLength, selectionOffset, startLine, tail, tip, _i, _j, _k, _l, _len, _len1, _ref;
      ev.preventDefault();
      blockLength = this.content.length();
      indentText = ContentEdit.PreText.TAB_INDENT;
      indentLength = indentText.length;
      lines = this.content.split('\n');
      selection = this.selection().get();
      selection[0] = Math.min(selection[0], blockLength);
      selection[1] = Math.min(selection[1], blockLength);
      charIndex = 0;
      startLine = -1;
      endLine = -1;
      for (i = _i = 0, _len = lines.length; _i < _len; i = ++_i) {
        line = lines[i];
        lineLength = line.length() + 1;
        if (selection[0] < charIndex + lineLength) {
          if (startLine === -1) {
            startLine = i;
          }
        }
        if (selection[1] < charIndex + lineLength) {
          if (endLine === -1) {
            endLine = i;
          }
        }
        if (startLine > -1 && endLine > -1) {
          break;
        }
        charIndex += lineLength;
      }
      if (startLine === endLine) {
        indentLength -= (selection[0] - charIndex) % indentLength;
        indentHTML = new HTMLString.String(Array(indentLength + 1).join(' '), true);
        tip = lines[startLine].substring(0, selection[0] - charIndex);
        tail = lines[startLine].substring(selection[1] - charIndex);
        lines[startLine] = tip.concat(indentHTML, tail);
        selectionOffset = indentLength;
      } else {
        if (ev.shiftKey) {
          firstLineShift = 0;
          for (i = _j = startLine; startLine <= endLine ? _j <= endLine : _j >= endLine; i = startLine <= endLine ? ++_j : --_j) {
            _ref = lines[i].characters.slice();
            for (j = _k = 0, _len1 = _ref.length; _k < _len1; j = ++_k) {
              c = _ref[j];
              if (j > (indentLength - 1)) {
                break;
              }
              if (!c.isWhitespace()) {
                break;
              }
              lines[i].characters.shift();
            }
            if (i === startLine) {
              firstLineShift = j;
            }
          }
          selectionOffset = Math.max(-indentLength, -firstLineShift);
        } else {
          indentHTML = new HTMLString.String(indentText, true);
          for (i = _l = startLine; startLine <= endLine ? _l <= endLine : _l >= endLine; i = startLine <= endLine ? ++_l : --_l) {
            lines[i] = indentHTML.concat(lines[i]);
          }
          selectionOffset = indentLength;
        }
      }
      this.content = HTMLString.String.join(new HTMLString.String('\n', true), lines);
      this.updateInnerHTML();
      selectionLength = this.content.length() - blockLength;
      return new ContentSelect.Range(selection[0] + selectionOffset, selection[1] + selectionLength).select(this._domElement);
    };

    PreText.prototype._syncContent = function(ev) {
      var newSnapshot, snapshot;
      this._ensureEndZWS();
      snapshot = this.content.html();
      this.content = new HTMLString.String(this._domElement.innerHTML.replace(/\u200B$/g, ''), this.content.preserveWhitespace());
      newSnapshot = this.content.html();
      if (snapshot !== newSnapshot) {
        this.taint();
      }
      return this._flagIfEmpty();
    };

    PreText.prototype._ensureEndZWS = function() {
      var html, _addZWS;
      if (!this._domElement.lastChild) {
        return;
      }
      html = this._domElement.innerHTML;
      if (html[html.length - 1] === '\u200B') {
        if (html.indexOf('\u200B') < html.length - 1) {
          return;
        }
      }
      _addZWS = (function(_this) {
        return function() {
          if (html.indexOf('\u200B') > -1) {
            _this._domElement.innerHTML = html.replace(/\u200B/g, '');
          }
          return _this._domElement.lastChild.textContent += '\u200B';
        };
      })(this);
      if (this._savedSelection) {
        return _addZWS();
      } else {
        this.storeState();
        _addZWS();
        return this.restoreState();
      }
    };

    PreText.droppers = {
      'PreText': ContentEdit.Element._dropVert,
      'Static': ContentEdit.Element._dropVert,
      'Text': ContentEdit.Element._dropVert
    };

    PreText.mergers = {};

    PreText.fromDOMElement = function(domElement) {
      return new this(domElement.tagName, this.getDOMElementAttributes(domElement), domElement.innerHTML);
    };

    return PreText;

  })(ContentEdit.Text);

  ContentEdit.TagNames.get().register(ContentEdit.PreText, 'pre');

  ContentEdit.Image = (function(_super) {
    __extends(Image, _super);

    function Image(attributes, a) {
      var size;
      Image.__super__.constructor.call(this, 'img', attributes);
      this.a = a ? a : null;
      size = this.size();
      this._aspectRatio = size[1] / size[0];
    }

    Image.prototype.cssTypeName = function() {
      return 'image';
    };

    Image.prototype.type = function() {
      return 'Image';
    };

    Image.prototype.typeName = function() {
      return 'Image';
    };

    Image.prototype.createDraggingDOMElement = function() {
      var helper;
      if (!this.isMounted()) {
        return;
      }
      helper = Image.__super__.createDraggingDOMElement.call(this);
      helper.style.backgroundImage = "url('" + this._attributes['src'] + "')";
      return helper;
    };

    Image.prototype.html = function(indent) {
      var attributes, img, le;
      if (indent == null) {
        indent = '';
      }
      img = "" + indent + "<img" + (this._attributesToString()) + ">";
      if (this.a) {
        le = ContentEdit.LINE_ENDINGS;
        attributes = ContentEdit.attributesToString(this.a);
        attributes = "" + attributes + " data-ce-tag=\"img\"";
        return ("" + indent + "<a " + attributes + ">" + le) + ("" + ContentEdit.INDENT + img + le) + ("" + indent + "</a>");
      } else {
        return img;
      }
    };

    Image.prototype.mount = function() {
      var classes, style;
      this._domElement = document.createElement('div');
      classes = '';
      if (this.a && this.a['class']) {
        classes += ' ' + this.a['class'];
      }
      if (this._attributes['class']) {
        classes += ' ' + this._attributes['class'];
      }
      this._domElement.setAttribute('class', classes);
      style = this._attributes['style'] ? this._attributes['style'] : '';
      style += "background-image:url('" + this._attributes['src'] + "');";
      if (this._attributes['width']) {
        style += "width:" + this._attributes['width'] + "px;";
      }
      if (this._attributes['height']) {
        style += "height:" + this._attributes['height'] + "px;";
      }
      this._domElement.setAttribute('style', style);
      return Image.__super__.mount.call(this);
    };

    Image.prototype.unmount = function() {
      var domElement, wrapper;
      if (this.isFixed()) {
        wrapper = document.createElement('div');
        wrapper.innerHTML = this.html();
        domElement = wrapper.querySelector('a, img');
        this._domElement.parentNode.replaceChild(domElement, this._domElement);
        this._domElement = domElement;
      }
      return Image.__super__.unmount.call(this);
    };

    Image.droppers = {
      'Image': ContentEdit.Element._dropBoth,
      'PreText': ContentEdit.Element._dropBoth,
      'Static': ContentEdit.Element._dropBoth,
      'Text': ContentEdit.Element._dropBoth
    };

    Image.placements = ['above', 'below', 'left', 'right', 'center'];

    Image.fromDOMElement = function(domElement) {
      var a, attributes, c, childNode, childNodes, height, width, _i, _len;
      a = null;
      if (domElement.tagName.toLowerCase() === 'a') {
        a = this.getDOMElementAttributes(domElement);
        childNodes = (function() {
          var _i, _len, _ref, _results;
          _ref = domElement.childNodes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            _results.push(c);
          }
          return _results;
        })();
        for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
          childNode = childNodes[_i];
          if (childNode.nodeType === 1 && childNode.tagName.toLowerCase() === 'img') {
            domElement = childNode;
            break;
          }
        }
        if (domElement.tagName.toLowerCase() === 'a') {
          domElement = document.createElement('img');
        }
      }
      attributes = this.getDOMElementAttributes(domElement);
      width = attributes['width'];
      height = attributes['height'];
      if (attributes['width'] === void 0) {
        if (attributes['height'] === void 0) {
          width = domElement.naturalWidth;
        } else {
          width = domElement.clientWidth;
        }
      }
      if (attributes['height'] === void 0) {
        if (attributes['width'] === void 0) {
          height = domElement.naturalHeight;
        } else {
          height = domElement.clientHeight;
        }
      }
      attributes['width'] = width;
      attributes['height'] = height;
      return new this(attributes, a);
    };

    return Image;

  })(ContentEdit.ResizableElement);

  ContentEdit.TagNames.get().register(ContentEdit.Image, 'img');

  ContentEdit.ImageFixture = (function(_super) {
    __extends(ImageFixture, _super);

    function ImageFixture(tagName, attributes, src) {
      ImageFixture.__super__.constructor.call(this, tagName, attributes);
      this._src = src;
    }

    ImageFixture.prototype.cssTypeName = function() {
      return 'image-fixture';
    };

    ImageFixture.prototype.type = function() {
      return 'ImageFixture';
    };

    ImageFixture.prototype.typeName = function() {
      return 'ImageFixture';
    };

    ImageFixture.prototype.html = function(indent) {
      var alt, attributes, img, le;
      if (indent == null) {
        indent = '';
      }
      le = ContentEdit.LINE_ENDINGS;
      attributes = this._attributesToString();
      alt = '';
      if (this._attributes['alt'] !== void 0) {
        alt = "alt=\"" + this._attributes['alt'] + "\"";
      }
      img = "" + indent + "<img src=\"" + (this.src()) + "\"" + alt + ">";
      return ("" + indent + "<" + (this.tagName()) + " " + attributes + ">" + le) + ("" + ContentEdit.INDENT + img + le) + ("" + indent + "</" + (this.tagName()) + ">");
    };

    ImageFixture.prototype.mount = function() {
      var classes, name, style, value, _ref;
      this._domElement = document.createElement(this.tagName());
      _ref = this._attributes;
      for (name in _ref) {
        value = _ref[name];
        if (name === 'alt' || name === 'style') {
          continue;
        }
        this._domElement.setAttribute(name, value);
      }
      classes = '';
      if (this.a && this.a['class']) {
        classes += ' ' + this.a['class'];
      }
      if (this._attributes['class']) {
        classes += ' ' + this._attributes['class'];
      }
      this._domElement.setAttribute('class', classes);
      style = this._attributes['style'] ? this._attributes['style'] : '';
      style = style.replace(/background-image:.+?(;|$)/i, '');
      style = [style.trim(), "background-image:url('" + (this.src()) + "');"].join(' ');
      this._domElement.setAttribute('style', style.trim());
      return ImageFixture.__super__.mount.call(this);
    };

    ImageFixture.prototype.src = function(src) {
      if (src === void 0) {
        return this._src;
      }
      this._src = src.toLowerCase();
      if (this.isMounted()) {
        this.unmount();
        this.mount();
      }
      return this.taint();
    };

    ImageFixture.prototype.unmount = function() {
      var domElement, wrapper;
      if (this.isFixed()) {
        wrapper = document.createElement('div');
        wrapper.innerHTML = this.html();
        domElement = wrapper.firstElementChild;
        this._domElement.parentNode.replaceChild(domElement, this._domElement);
        this._domElement = domElement;
        return this.parent()._domElement = this._domElement;
      } else {
        return ImageFixture.__super__.unmount.call(this);
      }
    };

    ImageFixture.prototype._attributesToString = function() {
      var attributes, k, style, v, _ref;
      if (this._attributes['style']) {
        style = this._attributes['style'] ? this._attributes['style'] : '';
        style = style.replace(/background-image:.+?(;|$)/i, '');
        style = [style.trim(), "background-image:url('" + (this.src()) + "');"].join(' ');
        this._attributes['style'] = style.trim();
      } else {
        this._attributes['style'] = "background-image:url('" + (this.src()) + "');";
      }
      attributes = {};
      _ref = this._attributes;
      for (k in _ref) {
        v = _ref[k];
        if (k === 'alt') {
          continue;
        }
        attributes[k] = v;
      }
      return ' ' + ContentEdit.attributesToString(attributes);
    };

    ImageFixture.droppers = {
      'ImageFixture': ContentEdit.Element._dropVert,
      'Image': ContentEdit.Element._dropVert,
      'PreText': ContentEdit.Element._dropVert,
      'Text': ContentEdit.Element._dropVert
    };

    ImageFixture.fromDOMElement = function(domElement) {
      var alt, attributes, c, childNode, childNodes, src, tagName, _i, _len;
      tagName = domElement.tagName;
      attributes = this.getDOMElementAttributes(domElement);
      src = '';
      alt = '';
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = domElement.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      })();
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        childNode = childNodes[_i];
        if (childNode.nodeType === 1 && childNode.tagName.toLowerCase() === 'img') {
          src = childNode.getAttribute('src') || '';
          alt = childNode.getAttribute('alt') || '';
          break;
        }
      }
      attributes = this.getDOMElementAttributes(domElement);
      attributes['alt'] = alt;
      return new this(domElement.tagName, attributes, src);
    };

    return ImageFixture;

  })(ContentEdit.Element);

  ContentEdit.TagNames.get().register(ContentEdit.ImageFixture, 'img-fixture');

  ContentEdit.Video = (function(_super) {
    __extends(Video, _super);

    function Video(tagName, attributes, sources) {
      var size;
      if (sources == null) {
        sources = [];
      }
      Video.__super__.constructor.call(this, tagName, attributes);
      this.sources = sources;
      size = this.size();
      this._aspectRatio = size[1] / size[0];
    }

    Video.prototype.cssTypeName = function() {
      return 'video';
    };

    Video.prototype.type = function() {
      return 'Video';
    };

    Video.prototype.typeName = function() {
      return 'Video';
    };

    Video.prototype._title = function() {
      var src;
      src = '';
      if (this.attr('src')) {
        src = this.attr('src');
      } else {
        if (this.sources.length) {
          src = this.sources[0]['src'];
        }
      }
      if (!src) {
        src = 'No video source set';
      }
      if (src.length > 80) {
        src = src.substr(0, 80) + '...';
      }
      return src;
    };

    Video.prototype.createDraggingDOMElement = function() {
      var helper;
      if (!this.isMounted()) {
        return;
      }
      helper = Video.__super__.createDraggingDOMElement.call(this);
      helper.innerHTML = this._title();
      return helper;
    };

    Video.prototype.html = function(indent) {
      var attributes, le, source, sourceStrings, _i, _len, _ref;
      if (indent == null) {
        indent = '';
      }
      le = ContentEdit.LINE_ENDINGS;
      if (this.tagName() === 'video') {
        sourceStrings = [];
        _ref = this.sources;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          source = _ref[_i];
          attributes = ContentEdit.attributesToString(source);
          sourceStrings.push("" + indent + ContentEdit.INDENT + "<source " + attributes + ">");
        }
        return ("" + indent + "<video" + (this._attributesToString()) + ">" + le) + sourceStrings.join(le) + ("" + le + indent + "</video>");
      } else {
        return ("" + indent + "<" + this._tagName + (this._attributesToString()) + ">") + ("</" + this._tagName + ">");
      }
    };

    Video.prototype.mount = function() {
      var style;
      this._domElement = document.createElement('div');
      if (this.a && this.a['class']) {
        this._domElement.setAttribute('class', this.a['class']);
      } else if (this._attributes['class']) {
        this._domElement.setAttribute('class', this._attributes['class']);
      }
      style = this._attributes['style'] ? this._attributes['style'] : '';
      if (this._attributes['width']) {
        style += "width:" + this._attributes['width'] + "px;";
      }
      if (this._attributes['height']) {
        style += "height:" + this._attributes['height'] + "px;";
      }
      this._domElement.setAttribute('style', style);
      this._domElement.setAttribute('data-ce-title', this._title());
      return Video.__super__.mount.call(this);
    };

    Video.prototype.unmount = function() {
      var domElement, wrapper;
      if (this.isFixed()) {
        wrapper = document.createElement('div');
        wrapper.innerHTML = this.html();
        domElement = wrapper.querySelector('iframe');
        this._domElement.parentNode.replaceChild(domElement, this._domElement);
        this._domElement = domElement;
      }
      return Video.__super__.unmount.call(this);
    };

    Video.droppers = {
      'Image': ContentEdit.Element._dropBoth,
      'PreText': ContentEdit.Element._dropBoth,
      'Static': ContentEdit.Element._dropBoth,
      'Text': ContentEdit.Element._dropBoth,
      'Video': ContentEdit.Element._dropBoth
    };

    Video.placements = ['above', 'below', 'left', 'right', 'center'];

    Video.fromDOMElement = function(domElement) {
      var c, childNode, childNodes, sources, _i, _len;
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = domElement.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      })();
      sources = [];
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        childNode = childNodes[_i];
        if (childNode.nodeType === 1 && childNode.tagName.toLowerCase() === 'source') {
          sources.push(this.getDOMElementAttributes(childNode));
        }
      }
      return new this(domElement.tagName, this.getDOMElementAttributes(domElement), sources);
    };

    return Video;

  })(ContentEdit.ResizableElement);

  ContentEdit.TagNames.get().register(ContentEdit.Video, 'iframe', 'video');

  ContentEdit.List = (function(_super) {
    __extends(List, _super);

    function List(tagName, attributes) {
      List.__super__.constructor.call(this, tagName, attributes);
    }

    List.prototype.cssTypeName = function() {
      return 'list';
    };

    List.prototype.type = function() {
      return 'List';
    };

    List.prototype.typeName = function() {
      return 'List';
    };

    List.prototype._onMouseOver = function(ev) {
      if (this.parent().type() === 'ListItem') {
        return;
      }
      List.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    List.droppers = {
      'Image': ContentEdit.Element._dropBoth,
      'ImageFixture': ContentEdit.Element._dropVert,
      'List': ContentEdit.Element._dropVert,
      'PreText': ContentEdit.Element._dropVert,
      'Static': ContentEdit.Element._dropVert,
      'Text': ContentEdit.Element._dropVert,
      'Video': ContentEdit.Element._dropBoth
    };

    List.fromDOMElement = function(domElement) {
      var c, childNode, childNodes, list, _i, _len;
      list = new this(domElement.tagName, this.getDOMElementAttributes(domElement));
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = domElement.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      })();
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        childNode = childNodes[_i];
        if (childNode.nodeType !== 1) {
          continue;
        }
        if (childNode.tagName.toLowerCase() !== 'li') {
          continue;
        }
        list.attach(ContentEdit.ListItem.fromDOMElement(childNode));
      }
      if (list.children.length === 0) {
        return null;
      }
      return list;
    };

    return List;

  })(ContentEdit.ElementCollection);

  ContentEdit.TagNames.get().register(ContentEdit.List, 'ol', 'ul');

  ContentEdit.ListItem = (function(_super) {
    __extends(ListItem, _super);

    function ListItem(attributes) {
      ListItem.__super__.constructor.call(this, 'li', attributes);
      this._behaviours['indent'] = true;
    }

    ListItem.prototype.cssTypeName = function() {
      return 'list-item';
    };

    ListItem.prototype.list = function() {
      if (this.children.length === 2) {
        return this.children[1];
      }
      return null;
    };

    ListItem.prototype.listItemText = function() {
      if (this.children.length > 0) {
        return this.children[0];
      }
      return null;
    };

    ListItem.prototype.type = function() {
      return 'ListItem';
    };

    ListItem.prototype.html = function(indent) {
      var lines;
      if (indent == null) {
        indent = '';
      }
      lines = ["" + indent + "<li" + (this._attributesToString()) + ">"];
      if (this.listItemText()) {
        lines.push(this.listItemText().html(indent + ContentEdit.INDENT));
      }
      if (this.list()) {
        lines.push(this.list().html(indent + ContentEdit.INDENT));
      }
      lines.push("" + indent + "</li>");
      return lines.join(ContentEdit.LINE_ENDINGS);
    };

    ListItem.prototype.indent = function() {
      var sibling;
      if (!this.can('indent')) {
        return;
      }
      if (this.parent().children.indexOf(this) === 0) {
        return;
      }
      sibling = this.previousSibling();
      if (!sibling.list()) {
        sibling.attach(new ContentEdit.List(sibling.parent().tagName()));
      }
      this.listItemText().storeState();
      this.parent().detach(this);
      sibling.list().attach(this);
      return this.listItemText().restoreState();
    };

    ListItem.prototype.remove = function() {
      var child, i, index, _i, _len, _ref;
      if (!this.parent()) {
        return;
      }
      index = this.parent().children.indexOf(this);
      if (this.list()) {
        _ref = this.list().children.slice();
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          child = _ref[i];
          child.parent().detach(child);
          this.parent().attach(child, i + index);
        }
      }
      return this.parent().detach(this);
    };

    ListItem.prototype.unindent = function() {
      var child, grandParent, i, itemIndex, list, parent, parentIndex, selection, sibling, siblings, text, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1;
      if (!this.can('indent')) {
        return;
      }
      parent = this.parent();
      grandParent = parent.parent();
      siblings = parent.children.slice(parent.children.indexOf(this) + 1, parent.children.length);
      if (grandParent.type() === 'ListItem') {
        this.listItemText().storeState();
        parent.detach(this);
        grandParent.parent().attach(this, grandParent.parent().children.indexOf(grandParent) + 1);
        if (siblings.length && !this.list()) {
          this.attach(new ContentEdit.List(parent.tagName()));
        }
        for (_i = 0, _len = siblings.length; _i < _len; _i++) {
          sibling = siblings[_i];
          sibling.parent().detach(sibling);
          this.list().attach(sibling);
        }
        return this.listItemText().restoreState();
      } else {
        text = new ContentEdit.Text('p', this.attr('class') ? {
          'class': this.attr('class')
        } : {}, this.listItemText().content);
        selection = null;
        if (this.listItemText().isFocused()) {
          selection = ContentSelect.Range.query(this.listItemText().domElement());
        }
        parentIndex = grandParent.children.indexOf(parent);
        itemIndex = parent.children.indexOf(this);
        if (itemIndex === 0) {
          list = null;
          if (parent.children.length === 1) {
            if (this.list()) {
              list = new ContentEdit.List(parent.tagName());
            }
            grandParent.detach(parent);
          } else {
            parent.detach(this);
          }
          grandParent.attach(text, parentIndex);
          if (list) {
            grandParent.attach(list, parentIndex + 1);
          }
          if (this.list()) {
            _ref = this.list().children.slice();
            for (i = _j = 0, _len1 = _ref.length; _j < _len1; i = ++_j) {
              child = _ref[i];
              child.parent().detach(child);
              if (list) {
                list.attach(child);
              } else {
                parent.attach(child, i);
              }
            }
          }
        } else if (itemIndex === parent.children.length - 1) {
          parent.detach(this);
          grandParent.attach(text, parentIndex + 1);
          if (this.list()) {
            grandParent.attach(this.list(), parentIndex + 2);
          }
        } else {
          parent.detach(this);
          grandParent.attach(text, parentIndex + 1);
          list = new ContentEdit.List(parent.tagName());
          grandParent.attach(list, parentIndex + 2);
          if (this.list()) {
            _ref1 = this.list().children.slice();
            for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
              child = _ref1[_k];
              child.parent().detach(child);
              list.attach(child);
            }
          }
          for (_l = 0, _len3 = siblings.length; _l < _len3; _l++) {
            sibling = siblings[_l];
            sibling.parent().detach(sibling);
            list.attach(sibling);
          }
        }
        if (selection) {
          text.focus();
          return selection.select(text.domElement());
        }
      }
    };

    ListItem.prototype._onMouseOver = function(ev) {
      ListItem.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    ListItem.prototype._addDOMEventListeners = function() {};

    ListItem.prototype._removeDOMEventListners = function() {};

    ListItem.fromDOMElement = function(domElement) {
      var childNode, content, listDOMElement, listElement, listItem, listItemText, _i, _len, _ref, _ref1;
      listItem = new this(this.getDOMElementAttributes(domElement));
      content = '';
      listDOMElement = null;
      _ref = domElement.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        childNode = _ref[_i];
        if (childNode.nodeType === 1) {
          if ((_ref1 = childNode.tagName.toLowerCase()) === 'ul' || _ref1 === 'ol' || _ref1 === 'li') {
            if (!listDOMElement) {
              listDOMElement = childNode;
            }
          } else {
            content += childNode.outerHTML;
          }
        } else {
          content += HTMLString.String.encode(childNode.textContent);
        }
      }
      content = content.replace(/^\s+|\s+$/g, '');
      listItemText = new ContentEdit.ListItemText(content);
      listItem.attach(listItemText);
      if (listDOMElement) {
        listElement = ContentEdit.List.fromDOMElement(listDOMElement);
        listItem.attach(listElement);
      }
      return listItem;
    };

    return ListItem;

  })(ContentEdit.ElementCollection);

  ContentEdit.ListItemText = (function(_super) {
    __extends(ListItemText, _super);

    function ListItemText(content) {
      ListItemText.__super__.constructor.call(this, 'div', {}, content);
    }

    ListItemText.prototype.cssTypeName = function() {
      return 'list-item-text';
    };

    ListItemText.prototype.type = function() {
      return 'ListItemText';
    };

    ListItemText.prototype.typeName = function() {
      return 'List item';
    };

    ListItemText.prototype.blur = function() {
      if (this.content.isWhitespace() && this.can('remove')) {
        this.parent().remove();
      } else if (this.isMounted()) {
        this._domElement.blur();
        this._domElement.removeAttribute('contenteditable');
      }
      return ContentEdit.Element.prototype.blur.call(this);
    };

    ListItemText.prototype.can = function(behaviour, allowed) {
      if (allowed) {
        throw new Error('Cannot set behaviour for ListItemText');
      }
      return this.parent().can(behaviour);
    };

    ListItemText.prototype.html = function(indent) {
      var content;
      if (indent == null) {
        indent = '';
      }
      if (!this._lastCached || this._lastCached < this._modified) {
        if (ContentEdit.TRIM_WHITESPACE) {
          content = this.content.copy().trim();
        } else {
          content = this.content.copy();
        }
        content.optimize();
        this._lastCached = Date.now();
        this._cached = content.html();
      }
      return "" + indent + this._cached;
    };

    ListItemText.prototype._onMouseDown = function(ev) {
      var initDrag;
      ContentEdit.Element.prototype._onMouseDown.call(this, ev);
      initDrag = (function(_this) {
        return function() {
          var listRoot;
          if (ContentEdit.Root.get().dragging() === _this) {
            ContentEdit.Root.get().cancelDragging();
            listRoot = _this.closest(function(node) {
              return node.parent().type() === 'Region';
            });
            return listRoot.drag(ev.pageX, ev.pageY);
          } else {
            _this.drag(ev.pageX, ev.pageY);
            return _this._dragTimeout = setTimeout(initDrag, ContentEdit.DRAG_HOLD_DURATION * 2);
          }
        };
      })(this);
      clearTimeout(this._dragTimeout);
      return this._dragTimeout = setTimeout(initDrag, ContentEdit.DRAG_HOLD_DURATION);
    };

    ListItemText.prototype._onMouseMove = function(ev) {
      if (this._dragTimeout) {
        clearTimeout(this._dragTimeout);
      }
      return ContentEdit.Element.prototype._onMouseMove.call(this, ev);
    };

    ListItemText.prototype._onMouseUp = function(ev) {
      if (this._dragTimeout) {
        clearTimeout(this._dragTimeout);
      }
      return ContentEdit.Element.prototype._onMouseUp.call(this, ev);
    };

    ListItemText.prototype._keyTab = function(ev) {
      ev.preventDefault();
      if (ev.shiftKey) {
        return this.parent().unindent();
      } else {
        return this.parent().indent();
      }
    };

    ListItemText.prototype._keyReturn = function(ev) {
      var grandParent, list, listItem, selection, tail, tip;
      ev.preventDefault();
      if (this.content.isWhitespace()) {
        this.parent().unindent();
        return;
      }
      if (!this.can('spawn')) {
        return;
      }
      ContentSelect.Range.query(this._domElement);
      selection = ContentSelect.Range.query(this._domElement);
      tip = this.content.substring(0, selection.get()[0]);
      tail = this.content.substring(selection.get()[1]);
      if (tip.length() + tail.length() === 0) {
        this.parent().unindent();
        return;
      }
      this.content = tip.trim();
      this.updateInnerHTML();
      grandParent = this.parent().parent();
      listItem = new ContentEdit.ListItem(this.attr('class') ? {
        'class': this.attr('class')
      } : {});
      grandParent.attach(listItem, grandParent.children.indexOf(this.parent()) + 1);
      listItem.attach(new ContentEdit.ListItemText(tail.trim()));
      list = this.parent().list();
      if (list) {
        this.parent().detach(list);
        listItem.attach(list);
      }
      if (tip.length()) {
        listItem.listItemText().focus();
        selection = new ContentSelect.Range(0, 0);
        selection.select(listItem.listItemText().domElement());
      } else {
        selection = new ContentSelect.Range(0, tip.length());
        selection.select(this._domElement);
      }
      return this.taint();
    };

    ListItemText.droppers = {
      'ListItemText': function(element, target, placement) {
        var elementParent, insertIndex, listItem, targetParent;
        elementParent = element.parent();
        targetParent = target.parent();
        elementParent.remove();
        elementParent.detach(element);
        listItem = new ContentEdit.ListItem(elementParent._attributes);
        listItem.attach(element);
        if (targetParent.list() && placement[0] === 'below') {
          targetParent.list().attach(listItem, 0);
          return;
        }
        insertIndex = targetParent.parent().children.indexOf(targetParent);
        if (placement[0] === 'below') {
          insertIndex += 1;
        }
        return targetParent.parent().attach(listItem, insertIndex);
      },
      'Text': function(element, target, placement) {
        var cssClass, insertIndex, listItem, targetParent, text;
        if (element.type() === 'Text') {
          targetParent = target.parent();
          element.parent().detach(element);
          cssClass = element.attr('class');
          listItem = new ContentEdit.ListItem(cssClass ? {
            'class': cssClass
          } : {});
          listItem.attach(new ContentEdit.ListItemText(element.content));
          if (targetParent.list() && placement[0] === 'below') {
            targetParent.list().attach(listItem, 0);
            return;
          }
          insertIndex = targetParent.parent().children.indexOf(targetParent);
          if (placement[0] === 'below') {
            insertIndex += 1;
          }
          targetParent.parent().attach(listItem, insertIndex);
          listItem.listItemText().focus();
          if (element._savedSelection) {
            return element._savedSelection.select(listItem.listItemText().domElement());
          }
        } else {
          cssClass = element.attr('class');
          text = new ContentEdit.Text('p', cssClass ? {
            'class': cssClass
          } : {}, element.content);
          element.parent().remove();
          insertIndex = target.parent().children.indexOf(target);
          if (placement[0] === 'below') {
            insertIndex += 1;
          }
          target.parent().attach(text, insertIndex);
          text.focus();
          if (element._savedSelection) {
            return element._savedSelection.select(text.domElement());
          }
        }
      }
    };

    ListItemText.mergers = {
      'ListItemText': function(element, target) {
        var offset;
        offset = target.content.length();
        if (element.content.length()) {
          target.content = target.content.concat(element.content);
        }
        if (target.isMounted()) {
          target._domElement.innerHTML = target.content.html();
        }
        target.focus();
        new ContentSelect.Range(offset, offset).select(target._domElement);
        if (element.type() === 'Text') {
          if (element.parent()) {
            element.parent().detach(element);
          }
        } else {
          element.parent().remove();
        }
        return target.taint();
      }
    };

    return ListItemText;

  })(ContentEdit.Text);

  _mergers = ContentEdit.ListItemText.mergers;

  _mergers['Text'] = _mergers['ListItemText'];

  ContentEdit.Table = (function(_super) {
    __extends(Table, _super);

    function Table(attributes) {
      Table.__super__.constructor.call(this, 'table', attributes);
    }

    Table.prototype.cssTypeName = function() {
      return 'table';
    };

    Table.prototype.typeName = function() {
      return 'Table';
    };

    Table.prototype.type = function() {
      return 'Table';
    };

    Table.prototype.firstSection = function() {
      var section;
      if (section = this.thead()) {
        return section;
      } else if (section = this.tbody()) {
        return section;
      } else if (section = this.tfoot()) {
        return section;
      }
      return null;
    };

    Table.prototype.lastSection = function() {
      var section;
      if (section = this.tfoot()) {
        return section;
      } else if (section = this.tbody()) {
        return section;
      } else if (section = this.thead()) {
        return section;
      }
      return null;
    };

    Table.prototype.tbody = function() {
      return this._getChild('tbody');
    };

    Table.prototype.tfoot = function() {
      return this._getChild('tfoot');
    };

    Table.prototype.thead = function() {
      return this._getChild('thead');
    };

    Table.prototype._onMouseOver = function(ev) {
      Table.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    Table.prototype._getChild = function(tagName) {
      var child, _i, _len, _ref;
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        if (child.tagName() === tagName) {
          return child;
        }
      }
      return null;
    };

    Table.droppers = {
      'Image': ContentEdit.Element._dropBoth,
      'ImageFixture': ContentEdit.Element._dropVert,
      'List': ContentEdit.Element._dropVert,
      'PreText': ContentEdit.Element._dropVert,
      'Static': ContentEdit.Element._dropVert,
      'Table': ContentEdit.Element._dropVert,
      'Text': ContentEdit.Element._dropVert,
      'Video': ContentEdit.Element._dropBoth
    };

    Table.fromDOMElement = function(domElement) {
      var c, childNode, childNodes, orphanRows, row, section, table, tagName, _i, _j, _len, _len1;
      table = new this(this.getDOMElementAttributes(domElement));
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = domElement.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      })();
      orphanRows = [];
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        childNode = childNodes[_i];
        if (childNode.nodeType !== 1) {
          continue;
        }
        tagName = childNode.tagName.toLowerCase();
        if (table._getChild(tagName)) {
          continue;
        }
        switch (tagName) {
          case 'tbody':
          case 'tfoot':
          case 'thead':
            section = ContentEdit.TableSection.fromDOMElement(childNode);
            table.attach(section);
            break;
          case 'tr':
            orphanRows.push(ContentEdit.TableRow.fromDOMElement(childNode));
        }
      }
      if (orphanRows.length > 0) {
        if (!table._getChild('tbody')) {
          table.attach(new ContentEdit.TableSection('tbody'));
        }
        for (_j = 0, _len1 = orphanRows.length; _j < _len1; _j++) {
          row = orphanRows[_j];
          table.tbody().attach(row);
        }
      }
      if (table.children.length === 0) {
        return null;
      }
      return table;
    };

    return Table;

  })(ContentEdit.ElementCollection);

  ContentEdit.TagNames.get().register(ContentEdit.Table, 'table');

  ContentEdit.TableSection = (function(_super) {
    __extends(TableSection, _super);

    function TableSection(tagName, attributes) {
      TableSection.__super__.constructor.call(this, tagName, attributes);
    }

    TableSection.prototype.cssTypeName = function() {
      return 'table-section';
    };

    TableSection.prototype.type = function() {
      return 'TableSection';
    };

    TableSection.prototype._onMouseOver = function(ev) {
      TableSection.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    TableSection.fromDOMElement = function(domElement) {
      var c, childNode, childNodes, section, _i, _len;
      section = new this(domElement.tagName, this.getDOMElementAttributes(domElement));
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = domElement.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      })();
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        childNode = childNodes[_i];
        if (childNode.nodeType !== 1) {
          continue;
        }
        if (childNode.tagName.toLowerCase() !== 'tr') {
          continue;
        }
        section.attach(ContentEdit.TableRow.fromDOMElement(childNode));
      }
      return section;
    };

    return TableSection;

  })(ContentEdit.ElementCollection);

  ContentEdit.TableRow = (function(_super) {
    __extends(TableRow, _super);

    function TableRow(attributes) {
      TableRow.__super__.constructor.call(this, 'tr', attributes);
    }

    TableRow.prototype.cssTypeName = function() {
      return 'table-row';
    };

    TableRow.prototype.isEmpty = function() {
      var cell, text, _i, _len, _ref;
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        text = cell.tableCellText();
        if (text && text.content.length() > 0) {
          return false;
        }
      }
      return true;
    };

    TableRow.prototype.type = function() {
      return 'TableRow';
    };

    TableRow.prototype.typeName = function() {
      return 'Table row';
    };

    TableRow.prototype._onMouseOver = function(ev) {
      TableRow.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    TableRow.droppers = {
      'TableRow': ContentEdit.Element._dropVert
    };

    TableRow.fromDOMElement = function(domElement) {
      var c, childNode, childNodes, row, tagName, _i, _len;
      row = new this(this.getDOMElementAttributes(domElement));
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = domElement.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(c);
        }
        return _results;
      })();
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        childNode = childNodes[_i];
        if (childNode.nodeType !== 1) {
          continue;
        }
        tagName = childNode.tagName.toLowerCase();
        if (!(tagName === 'td' || tagName === 'th')) {
          continue;
        }
        row.attach(ContentEdit.TableCell.fromDOMElement(childNode));
      }
      return row;
    };

    return TableRow;

  })(ContentEdit.ElementCollection);

  ContentEdit.TableCell = (function(_super) {
    __extends(TableCell, _super);

    function TableCell(tagName, attributes) {
      TableCell.__super__.constructor.call(this, tagName, attributes);
    }

    TableCell.prototype.cssTypeName = function() {
      return 'table-cell';
    };

    TableCell.prototype.tableCellText = function() {
      if (this.children.length > 0) {
        return this.children[0];
      }
      return null;
    };

    TableCell.prototype.type = function() {
      return 'TableCell';
    };

    TableCell.prototype.html = function(indent) {
      var lines;
      if (indent == null) {
        indent = '';
      }
      lines = ["" + indent + "<" + (this.tagName()) + (this._attributesToString()) + ">"];
      if (this.tableCellText()) {
        lines.push(this.tableCellText().html(indent + ContentEdit.INDENT));
      }
      lines.push("" + indent + "</" + (this.tagName()) + ">");
      return lines.join(ContentEdit.LINE_ENDINGS);
    };

    TableCell.prototype._onMouseOver = function(ev) {
      TableCell.__super__._onMouseOver.call(this, ev);
      return this._removeCSSClass('ce-element--over');
    };

    TableCell.prototype._addDOMEventListeners = function() {};

    TableCell.prototype._removeDOMEventListners = function() {};

    TableCell.fromDOMElement = function(domElement) {
      var tableCell, tableCellText;
      tableCell = new this(domElement.tagName, this.getDOMElementAttributes(domElement));
      tableCellText = new ContentEdit.TableCellText(domElement.innerHTML.replace(/^\s+|\s+$/g, ''));
      tableCell.attach(tableCellText);
      return tableCell;
    };

    return TableCell;

  })(ContentEdit.ElementCollection);

  ContentEdit.TableCellText = (function(_super) {
    __extends(TableCellText, _super);

    function TableCellText(content) {
      TableCellText.__super__.constructor.call(this, 'div', {}, content);
    }

    TableCellText.prototype.cssTypeName = function() {
      return 'table-cell-text';
    };

    TableCellText.prototype.type = function() {
      return 'TableCellText';
    };

    TableCellText.prototype._isInFirstRow = function() {
      var cell, row, section, table;
      cell = this.parent();
      row = cell.parent();
      section = row.parent();
      table = section.parent();
      if (section !== table.firstSection()) {
        return false;
      }
      return row === section.children[0];
    };

    TableCellText.prototype._isInLastRow = function() {
      var cell, row, section, table;
      cell = this.parent();
      row = cell.parent();
      section = row.parent();
      table = section.parent();
      if (section !== table.lastSection()) {
        return false;
      }
      return row === section.children[section.children.length - 1];
    };

    TableCellText.prototype._isLastInSection = function() {
      var cell, row, section;
      cell = this.parent();
      row = cell.parent();
      section = row.parent();
      if (row !== section.children[section.children.length - 1]) {
        return false;
      }
      return cell === row.children[row.children.length - 1];
    };

    TableCellText.prototype.blur = function() {
      if (this.isMounted()) {
        this._domElement.blur();
        this._domElement.removeAttribute('contenteditable');
      }
      return ContentEdit.Element.prototype.blur.call(this);
    };

    TableCellText.prototype.can = function(behaviour, allowed) {
      if (allowed) {
        throw new Error('Cannot set behaviour for ListItemText');
      }
      return this.parent().can(behaviour);
    };

    TableCellText.prototype.html = function(indent) {
      var content;
      if (indent == null) {
        indent = '';
      }
      if (!this._lastCached || this._lastCached < this._modified) {
        if (ContentEdit.TRIM_WHITESPACE) {
          content = this.content.copy().trim();
        } else {
          content = this.content.copy();
        }
        content.optimize();
        this._lastCached = Date.now();
        this._cached = content.html();
      }
      return "" + indent + this._cached;
    };

    TableCellText.prototype._onMouseDown = function(ev) {
      var initDrag;
      ContentEdit.Element.prototype._onMouseDown.call(this, ev);
      initDrag = (function(_this) {
        return function() {
          var cell, table;
          cell = _this.parent();
          if (ContentEdit.Root.get().dragging() === cell.parent()) {
            ContentEdit.Root.get().cancelDragging();
            table = cell.parent().parent().parent();
            return table.drag(ev.pageX, ev.pageY);
          } else {
            cell.parent().drag(ev.pageX, ev.pageY);
            return _this._dragTimeout = setTimeout(initDrag, ContentEdit.DRAG_HOLD_DURATION * 2);
          }
        };
      })(this);
      clearTimeout(this._dragTimeout);
      return this._dragTimeout = setTimeout(initDrag, ContentEdit.DRAG_HOLD_DURATION);
    };

    TableCellText.prototype._keyBack = function(ev) {
      var cell, previous, row, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(selection.get()[0] === 0 && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      cell = this.parent();
      row = cell.parent();
      if (!(row.isEmpty() && row.can('remove'))) {
        return;
      }
      if (this.content.length() === 0 && row.children.indexOf(cell) === 0) {
        previous = this.previousContent();
        if (previous) {
          previous.focus();
          selection = new ContentSelect.Range(previous.content.length(), previous.content.length());
          selection.select(previous.domElement());
        }
        return row.parent().detach(row);
      }
    };

    TableCellText.prototype._keyDelete = function(ev) {
      var lastChild, nextElement, row, selection;
      row = this.parent().parent();
      if (!(row.isEmpty() && row.can('remove'))) {
        return;
      }
      ev.preventDefault();
      lastChild = row.children[row.children.length - 1];
      nextElement = lastChild.tableCellText().nextContent();
      if (nextElement) {
        nextElement.focus();
        selection = new ContentSelect.Range(0, 0);
        selection.select(nextElement.domElement());
      }
      return row.parent().detach(row);
    };

    TableCellText.prototype._keyDown = function(ev) {
      var cell, cellIndex, lastCell, next, nextRow, row, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(this._atEnd(selection) && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      cell = this.parent();
      if (this._isInLastRow()) {
        row = cell.parent();
        lastCell = row.children[row.children.length - 1].tableCellText();
        next = lastCell.nextContent();
        if (next) {
          return next.focus();
        } else {
          return ContentEdit.Root.get().trigger('next-region', this.closest(function(node) {
            return node.type() === 'Fixture' || node.type() === 'Region';
          }));
        }
      } else {
        nextRow = cell.parent().nextWithTest(function(node) {
          return node.type() === 'TableRow';
        });
        cellIndex = cell.parent().children.indexOf(cell);
        cellIndex = Math.min(cellIndex, nextRow.children.length);
        return nextRow.children[cellIndex].tableCellText().focus();
      }
    };

    TableCellText.prototype._keyReturn = function(ev) {
      ev.preventDefault();
      return this._keyTab({
        'shiftKey': false,
        'preventDefault': function() {}
      });
    };

    TableCellText.prototype._keyTab = function(ev) {
      var cell, child, grandParent, newCell, newCellText, row, section, _i, _len, _ref;
      ev.preventDefault();
      cell = this.parent();
      if (ev.shiftKey) {
        if (this._isInFirstRow() && cell.parent().children[0] === cell) {
          return;
        }
        return this.previousContent().focus();
      } else {
        if (!this.can('spawn')) {
          return;
        }
        grandParent = cell.parent().parent();
        if (grandParent.tagName() === 'tbody' && this._isLastInSection()) {
          row = new ContentEdit.TableRow();
          _ref = cell.parent().children;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            newCell = new ContentEdit.TableCell(child.tagName(), child._attributes);
            newCellText = new ContentEdit.TableCellText('');
            newCell.attach(newCellText);
            row.attach(newCell);
          }
          section = this.closest(function(node) {
            return node.type() === 'TableSection';
          });
          section.attach(row);
          return row.children[0].tableCellText().focus();
        } else {
          return this.nextContent().focus();
        }
      }
    };

    TableCellText.prototype._keyUp = function(ev) {
      var cell, cellIndex, previous, previousRow, row, selection;
      selection = ContentSelect.Range.query(this._domElement);
      if (!(selection.get()[0] === 0 && selection.isCollapsed())) {
        return;
      }
      ev.preventDefault();
      cell = this.parent();
      if (this._isInFirstRow()) {
        row = cell.parent();
        previous = row.children[0].previousContent();
        if (previous) {
          return previous.focus();
        } else {
          return ContentEdit.Root.get().trigger('previous-region', this.closest(function(node) {
            return node.type() === 'Fixture' || node.type() === 'Region';
          }));
        }
      } else {
        previousRow = cell.parent().previousWithTest(function(node) {
          return node.type() === 'TableRow';
        });
        cellIndex = cell.parent().children.indexOf(cell);
        cellIndex = Math.min(cellIndex, previousRow.children.length);
        return previousRow.children[cellIndex].tableCellText().focus();
      }
    };

    TableCellText.droppers = {};

    TableCellText.mergers = {};

    return TableCellText;

  })(ContentEdit.Text);

}).call(this);

(function() {
  var AttributeUI, ContentTools, CropMarksUI, StyleUI, exports, _EditorApp,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  ContentTools = {
    Tools: {},
    CANCEL_MESSAGE: 'Your changes have not been saved, do you really want to lose them?'.trim(),
    DEFAULT_TOOLS: [['bold', 'italic', 'link', 'align-left', 'align-center', 'align-right'], ['heading', 'subheading', 'paragraph', 'unordered-list', 'ordered-list', 'table', 'indent', 'unindent', 'line-break'], ['image', 'video', 'preformatted'], ['undo', 'redo', 'remove']],
    DEFAULT_VIDEO_HEIGHT: 300,
    DEFAULT_VIDEO_WIDTH: 400,
    HIGHLIGHT_HOLD_DURATION: 2000,
    INSPECTOR_IGNORED_ELEMENTS: ['Fixture', 'ListItemText', 'Region', 'TableCellText'],
    IMAGE_UPLOADER: null,
    MIN_CROP: 10,
    RESTRICTED_ATTRIBUTES: {
      '*': ['style'],
      'img': ['height', 'src', 'width', 'data-ce-max-width', 'data-ce-min-width'],
      'iframe': ['height', 'width']
    },
    getEmbedVideoURL: function(url) {
      var domains, id, k, kv, m, netloc, paramStr, params, paramsStr, parser, path, v, _i, _len, _ref;
      domains = {
        'www.youtube.com': 'youtube',
        'youtu.be': 'youtube',
        'vimeo.com': 'vimeo',
        'player.vimeo.com': 'vimeo'
      };
      parser = document.createElement('a');
      parser.href = url;
      netloc = parser.hostname.toLowerCase();
      path = parser.pathname;
      if (path !== null && path.substr(0, 1) !== "/") {
        path = "/" + path;
      }
      params = {};
      paramsStr = parser.search.slice(1);
      _ref = paramsStr.split('&');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        kv = _ref[_i];
        kv = kv.split("=");
        if (kv[0]) {
          params[kv[0]] = kv[1];
        }
      }
      switch (domains[netloc]) {
        case 'youtube':
          if (path.toLowerCase() === '/watch') {
            if (!params['v']) {
              return null;
            }
            id = params['v'];
            delete params['v'];
          } else {
            m = path.match(/\/([A-Za-z0-9_-]+)$/i);
            if (!m) {
              return null;
            }
            id = m[1];
          }
          url = "https://www.youtube.com/embed/" + id;
          paramStr = ((function() {
            var _results;
            _results = [];
            for (k in params) {
              v = params[k];
              _results.push("" + k + "=" + v);
            }
            return _results;
          })()).join('&');
          if (paramStr) {
            url += "?" + paramStr;
          }
          return url;
        case 'vimeo':
          m = path.match(/\/(\w+\/\w+\/){0,1}(\d+)/i);
          if (!m) {
            return null;
          }
          url = "https://player.vimeo.com/video/" + m[2];
          paramStr = ((function() {
            var _results;
            _results = [];
            for (k in params) {
              v = params[k];
              _results.push("" + k + "=" + v);
            }
            return _results;
          })()).join('&');
          if (paramStr) {
            url += "?" + paramStr;
          }
          return url;
      }
      return null;
    },
    getRestrictedAtributes: function(tagName) {
      var restricted;
      restricted = [];
      if (ContentTools.RESTRICTED_ATTRIBUTES[tagName]) {
        restricted = restricted.concat(ContentTools.RESTRICTED_ATTRIBUTES[tagName]);
      }
      if (ContentTools.RESTRICTED_ATTRIBUTES['*']) {
        restricted = restricted.concat(ContentTools.RESTRICTED_ATTRIBUTES['*']);
      }
      return restricted;
    },
    getScrollPosition: function() {
      var isCSS1Compat, supportsPageOffset;
      supportsPageOffset = window.pageXOffset !== void 0;
      isCSS1Compat = (document.compatMode || 4) === 4;
      if (supportsPageOffset) {
        return [window.pageXOffset, window.pageYOffset];
      } else if (isCSS1Compat) {
        return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
      } else {
        return [document.body.scrollLeft, document.body.scrollTop];
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.ContentTools = ContentTools;
  }

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = ContentTools;
  }

  ContentTools.ComponentUI = (function() {
    function ComponentUI() {
      this._bindings = {};
      this._parent = null;
      this._children = [];
      this._domElement = null;
    }

    ComponentUI.prototype.children = function() {
      return this._children.slice();
    };

    ComponentUI.prototype.domElement = function() {
      return this._domElement;
    };

    ComponentUI.prototype.isMounted = function() {
      return this._domElement !== null;
    };

    ComponentUI.prototype.parent = function() {
      return this._parent;
    };

    ComponentUI.prototype.attach = function(component, index) {
      if (component.parent()) {
        component.parent().detach(component);
      }
      component._parent = this;
      if (index !== void 0) {
        return this._children.splice(index, 0, component);
      } else {
        return this._children.push(component);
      }
    };

    ComponentUI.prototype.addCSSClass = function(className) {
      if (!this.isMounted()) {
        return;
      }
      return ContentEdit.addCSSClass(this._domElement, className);
    };

    ComponentUI.prototype.detach = function(component) {
      var componentIndex;
      componentIndex = this._children.indexOf(component);
      if (componentIndex === -1) {
        return;
      }
      return this._children.splice(componentIndex, 1);
    };

    ComponentUI.prototype.mount = function() {};

    ComponentUI.prototype.removeCSSClass = function(className) {
      if (!this.isMounted()) {
        return;
      }
      return ContentEdit.removeCSSClass(this._domElement, className);
    };

    ComponentUI.prototype.unmount = function() {
      if (!this.isMounted()) {
        return;
      }
      this._removeDOMEventListeners();
      if (this._domElement.parentNode) {
        this._domElement.parentNode.removeChild(this._domElement);
      }
      return this._domElement = null;
    };

    ComponentUI.prototype.addEventListener = function(eventName, callback) {
      if (this._bindings[eventName] === void 0) {
        this._bindings[eventName] = [];
      }
      this._bindings[eventName].push(callback);
    };

    ComponentUI.prototype.createEvent = function(eventName, detail) {
      return new ContentTools.Event(eventName, detail);
    };

    ComponentUI.prototype.dispatchEvent = function(ev) {
      var callback, _i, _len, _ref;
      if (!this._bindings[ev.name()]) {
        return !ev.defaultPrevented();
      }
      _ref = this._bindings[ev.name()];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        if (ev.propagationStopped()) {
          break;
        }
        if (!callback) {
          continue;
        }
        callback.call(this, ev);
      }
      return !ev.defaultPrevented();
    };

    ComponentUI.prototype.removeEventListener = function(eventName, callback) {
      var i, suspect, _i, _len, _ref, _results;
      if (!eventName) {
        this._bindings = {};
        return;
      }
      if (!callback) {
        this._bindings[eventName] = void 0;
        return;
      }
      if (!this._bindings[eventName]) {
        return;
      }
      _ref = this._bindings[eventName];
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        suspect = _ref[i];
        if (suspect === callback) {
          _results.push(this._bindings[eventName].splice(i, 1));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    ComponentUI.prototype._addDOMEventListeners = function() {};

    ComponentUI.prototype._removeDOMEventListeners = function() {};

    ComponentUI.createDiv = function(classNames, attributes, content) {
      var domElement, name, value;
      domElement = document.createElement('div');
      if (classNames && classNames.length > 0) {
        domElement.setAttribute('class', classNames.join(' '));
      }
      if (attributes) {
        for (name in attributes) {
          value = attributes[name];
          domElement.setAttribute(name, value);
        }
      }
      if (content) {
        domElement.innerHTML = content;
      }
      return domElement;
    };

    return ComponentUI;

  })();

  ContentTools.WidgetUI = (function(_super) {
    __extends(WidgetUI, _super);

    function WidgetUI() {
      return WidgetUI.__super__.constructor.apply(this, arguments);
    }

    WidgetUI.prototype.attach = function(component, index) {
      WidgetUI.__super__.attach.call(this, component, index);
      if (!this.isMounted()) {
        return component.mount();
      }
    };

    WidgetUI.prototype.detach = function(component) {
      WidgetUI.__super__.detach.call(this, component);
      if (this.isMounted()) {
        return component.unmount();
      }
    };

    WidgetUI.prototype.detatch = function(component) {
      console.log('Please call detach, detatch will be removed in release 1.4.x');
      return this.detach(component);
    };

    WidgetUI.prototype.show = function() {
      var fadeIn;
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout);
        this._hideTimeout = null;
        this.unmount();
      }
      if (!this.isMounted()) {
        this.mount();
      }
      fadeIn = (function(_this) {
        return function() {
          _this.addCSSClass('ct-widget--active');
          return _this._showTimeout = null;
        };
      })(this);
      return this._showTimeout = setTimeout(fadeIn, 100);
    };

    WidgetUI.prototype.hide = function() {
      var monitorForHidden;
      if (this._showTimeout) {
        clearTimeout(this._showTimeout);
        this._showTimeout = null;
      }
      this.removeCSSClass('ct-widget--active');
      monitorForHidden = (function(_this) {
        return function() {
          _this._hideTimeout = null;
          if (!window.getComputedStyle) {
            _this.unmount();
            return;
          }
          if (parseFloat(window.getComputedStyle(_this._domElement).opacity) < 0.01) {
            return _this.unmount();
          } else {
            return _this._hideTimeout = setTimeout(monitorForHidden, 250);
          }
        };
      })(this);
      if (this.isMounted()) {
        return this._hideTimeout = setTimeout(monitorForHidden, 250);
      }
    };

    return WidgetUI;

  })(ContentTools.ComponentUI);

  ContentTools.AnchoredComponentUI = (function(_super) {
    __extends(AnchoredComponentUI, _super);

    function AnchoredComponentUI() {
      return AnchoredComponentUI.__super__.constructor.apply(this, arguments);
    }

    AnchoredComponentUI.prototype.mount = function(domParent, before) {
      if (before == null) {
        before = null;
      }
      domParent.insertBefore(this._domElement, before);
      return this._addDOMEventListeners();
    };

    return AnchoredComponentUI;

  })(ContentTools.ComponentUI);

  ContentTools.Event = (function() {
    function Event(name, detail) {
      this._name = name;
      this._detail = detail;
      this._timeStamp = Date.now();
      this._defaultPrevented = false;
      this._propagationStopped = false;
    }

    Event.prototype.defaultPrevented = function() {
      return this._defaultPrevented;
    };

    Event.prototype.detail = function() {
      return this._detail;
    };

    Event.prototype.name = function() {
      return this._name;
    };

    Event.prototype.propagationStopped = function() {
      return this._propagationStopped;
    };

    Event.prototype.timeStamp = function() {
      return this._timeStamp;
    };

    Event.prototype.preventDefault = function() {
      return this._defaultPrevented = true;
    };

    Event.prototype.stopImmediatePropagation = function() {
      return this._propagationStopped = true;
    };

    return Event;

  })();

  ContentTools.FlashUI = (function(_super) {
    __extends(FlashUI, _super);

    function FlashUI(modifier) {
      FlashUI.__super__.constructor.call(this);
      this.mount(modifier);
    }

    FlashUI.prototype.mount = function(modifier) {
      var monitorForHidden;
      this._domElement = this.constructor.createDiv(['ct-flash', 'ct-flash--active', "ct-flash--" + modifier, 'ct-widget', 'ct-widget--active']);
      FlashUI.__super__.mount.call(this, ContentTools.EditorApp.get().domElement());
      monitorForHidden = (function(_this) {
        return function() {
          if (!window.getComputedStyle) {
            _this.unmount();
            return;
          }
          if (parseFloat(window.getComputedStyle(_this._domElement).opacity) < 0.01) {
            return _this.unmount();
          } else {
            return setTimeout(monitorForHidden, 250);
          }
        };
      })(this);
      return setTimeout(monitorForHidden, 250);
    };

    return FlashUI;

  })(ContentTools.AnchoredComponentUI);

  ContentTools.IgnitionUI = (function(_super) {
    __extends(IgnitionUI, _super);

    function IgnitionUI() {
      IgnitionUI.__super__.constructor.call(this);
      this._revertToState = 'ready';
      this._state = 'ready';
    }

    IgnitionUI.prototype.busy = function(busy) {
      if (this.dispatchEvent(this.createEvent('busy', {
        busy: busy
      }))) {
        if (busy === (this._state === 'busy')) {
          return;
        }
        if (busy) {
          this._revertToState = this._state;
          return this.state('busy');
        } else {
          return this.state(this._revertToState);
        }
      }
    };

    IgnitionUI.prototype.cancel = function() {
      if (this.dispatchEvent(this.createEvent('cancel'))) {
        return this.state('ready');
      }
    };

    IgnitionUI.prototype.confirm = function() {
      if (this.dispatchEvent(this.createEvent('confirm'))) {
        return this.state('ready');
      }
    };

    IgnitionUI.prototype.edit = function() {
      if (this.dispatchEvent(this.createEvent('edit'))) {
        return this.state('editing');
      }
    };

    IgnitionUI.prototype.mount = function() {
      IgnitionUI.__super__.mount.call(this);
      this._domElement = this.constructor.createDiv(['ct-widget', 'ct-ignition', 'ct-ignition--ready']);
      this.parent().domElement().appendChild(this._domElement);
      this._domEdit = this.constructor.createDiv(['ct-ignition__button', 'ct-ignition__button--edit']);
      this._domElement.appendChild(this._domEdit);
      this._domConfirm = this.constructor.createDiv(['ct-ignition__button', 'ct-ignition__button--confirm']);
      this._domElement.appendChild(this._domConfirm);
      this._domCancel = this.constructor.createDiv(['ct-ignition__button', 'ct-ignition__button--cancel']);
      this._domElement.appendChild(this._domCancel);
      this._domBusy = this.constructor.createDiv(['ct-ignition__button', 'ct-ignition__button--busy']);
      this._domElement.appendChild(this._domBusy);
      return this._addDOMEventListeners();
    };

    IgnitionUI.prototype.state = function(state) {
      if (state === void 0) {
        return this._state;
      }
      if (this._state === state) {
        return;
      }
      if (!this.dispatchEvent(this.createEvent('statechange', {
        state: state
      }))) {
        return;
      }
      this._state = state;
      this.removeCSSClass('ct-ignition--busy');
      this.removeCSSClass('ct-ignition--editing');
      this.removeCSSClass('ct-ignition--ready');
      if (this._state === 'busy') {
        return this.addCSSClass('ct-ignition--busy');
      } else if (this._state === 'editing') {
        return this.addCSSClass('ct-ignition--editing');
      } else if (this._state === 'ready') {
        return this.addCSSClass('ct-ignition--ready');
      }
    };

    IgnitionUI.prototype.unmount = function() {
      IgnitionUI.__super__.unmount.call(this);
      this._domEdit = null;
      this._domConfirm = null;
      return this._domCancel = null;
    };

    IgnitionUI.prototype._addDOMEventListeners = function() {
      this._domEdit.addEventListener('click', (function(_this) {
        return function(ev) {
          ev.preventDefault();
          return _this.edit();
        };
      })(this));
      this._domConfirm.addEventListener('click', (function(_this) {
        return function(ev) {
          ev.preventDefault();
          return _this.confirm();
        };
      })(this));
      return this._domCancel.addEventListener('click', (function(_this) {
        return function(ev) {
          ev.preventDefault();
          return _this.cancel();
        };
      })(this));
    };

    return IgnitionUI;

  })(ContentTools.WidgetUI);

  ContentTools.InspectorUI = (function(_super) {
    __extends(InspectorUI, _super);

    function InspectorUI() {
      InspectorUI.__super__.constructor.call(this);
      this._tagUIs = [];
    }

    InspectorUI.prototype.mount = function() {
      this._domElement = this.constructor.createDiv(['ct-widget', 'ct-inspector']);
      this.parent().domElement().appendChild(this._domElement);
      this._domTags = this.constructor.createDiv(['ct-inspector__tags', 'ct-tags']);
      this._domElement.appendChild(this._domTags);
      this._domCounter = this.constructor.createDiv(['ct-inspector__counter']);
      this._domElement.appendChild(this._domCounter);
      this.updateCounter();
      this._addDOMEventListeners();
      this._handleFocusChange = (function(_this) {
        return function() {
          return _this.updateTags();
        };
      })(this);
      ContentEdit.Root.get().bind('blur', this._handleFocusChange);
      ContentEdit.Root.get().bind('focus', this._handleFocusChange);
      return ContentEdit.Root.get().bind('mount', this._handleFocusChange);
    };

    InspectorUI.prototype.unmount = function() {
      InspectorUI.__super__.unmount.call(this);
      this._domTags = null;
      ContentEdit.Root.get().unbind('blur', this._handleFocusChange);
      ContentEdit.Root.get().unbind('focus', this._handleFocusChange);
      return ContentEdit.Root.get().unbind('mount', this._handleFocusChange);
    };

    InspectorUI.prototype.updateCounter = function() {
      var column, completeText, element, line, lines, region, sub, word_count, _i, _len, _ref;
      if (!this.isMounted()) {
        return;
      }
      completeText = '';
      _ref = ContentTools.EditorApp.get().orderedRegions();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        region = _ref[_i];
        if (!region) {
          continue;
        }
        completeText += region.domElement().textContent;
      }
      completeText = completeText.trim();
      completeText = completeText.replace(/<\/?[a-z][^>]*>/gi, '');
      completeText = completeText.replace(/[\u200B]+/, '');
      completeText = completeText.replace(/['";:,.?¿\-!¡]+/g, '');
      word_count = (completeText.match(/\S+/g) || []).length;
      word_count = word_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      element = ContentEdit.Root.get().focused();
      if (!(element && element.type() === 'PreText' && element.selection().isCollapsed())) {
        this._domCounter.textContent = word_count;
        return;
      }
      line = 0;
      column = 1;
      sub = element.content.substring(0, element.selection().get()[0]);
      lines = sub.text().split('\n');
      line = lines.length;
      column = lines[lines.length - 1].length + 1;
      line = line.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      column = column.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return this._domCounter.textContent = "" + word_count + " / " + line + ":" + column;
    };

    InspectorUI.prototype.updateTags = function() {
      var element, elements, tag, _i, _j, _len, _len1, _ref, _results;
      element = ContentEdit.Root.get().focused();
      _ref = this._tagUIs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tag = _ref[_i];
        tag.unmount();
      }
      this._tagUIs = [];
      if (!element) {
        return;
      }
      elements = element.parents();
      elements.reverse();
      elements.push(element);
      _results = [];
      for (_j = 0, _len1 = elements.length; _j < _len1; _j++) {
        element = elements[_j];
        if (ContentTools.INSPECTOR_IGNORED_ELEMENTS.indexOf(element.type()) !== -1) {
          continue;
        }
        tag = new ContentTools.TagUI(element);
        this._tagUIs.push(tag);
        _results.push(tag.mount(this._domTags));
      }
      return _results;
    };

    InspectorUI.prototype._addDOMEventListeners = function() {
      return this._updateCounterInterval = setInterval((function(_this) {
        return function() {
          return _this.updateCounter();
        };
      })(this), 250);
    };

    InspectorUI.prototype._removeDOMEventListeners = function() {
      return clearInterval(this._updateCounterInterval);
    };

    return InspectorUI;

  })(ContentTools.WidgetUI);

  ContentTools.TagUI = (function(_super) {
    __extends(TagUI, _super);

    function TagUI(element) {
      this.element = element;
      this._onMouseDown = __bind(this._onMouseDown, this);
      TagUI.__super__.constructor.call(this);
    }

    TagUI.prototype.mount = function(domParent, before) {
      if (before == null) {
        before = null;
      }
      this._domElement = this.constructor.createDiv(['ct-tag']);
      this._domElement.textContent = this.element.tagName();
      return TagUI.__super__.mount.call(this, domParent, before);
    };

    TagUI.prototype._addDOMEventListeners = function() {
      return this._domElement.addEventListener('mousedown', this._onMouseDown);
    };

    TagUI.prototype._onMouseDown = function(ev) {
      var app, dialog, modal;
      ev.preventDefault();
      if (this.element.storeState) {
        this.element.storeState();
      }
      app = ContentTools.EditorApp.get();
      modal = new ContentTools.ModalUI();
      dialog = new ContentTools.PropertiesDialog(this.element);
      dialog.addEventListener('cancel', (function(_this) {
        return function() {
          modal.hide();
          dialog.hide();
          if (_this.element.restoreState) {
            return _this.element.restoreState();
          }
        };
      })(this));
      dialog.addEventListener('save', (function(_this) {
        return function(ev) {
          var applied, attributes, className, classNames, cssClass, detail, element, innerHTML, name, styles, value, _i, _j, _len, _len1, _ref, _ref1;
          detail = ev.detail();
          attributes = detail.changedAttributes;
          styles = detail.changedStyles;
          innerHTML = detail.innerHTML;
          for (name in attributes) {
            value = attributes[name];
            if (name === 'class') {
              if (value === null) {
                value = '';
              }
              classNames = {};
              _ref = value.split(' ');
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                className = _ref[_i];
                className = className.trim();
                if (!className) {
                  continue;
                }
                classNames[className] = true;
                if (!_this.element.hasCSSClass(className)) {
                  _this.element.addCSSClass(className);
                }
              }
              _ref1 = _this.element.attr('class').split(' ');
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                className = _ref1[_j];
                className = className.trim();
                if (classNames[className] === void 0) {
                  _this.element.removeCSSClass(className);
                }
              }
            } else {
              if (value === null) {
                _this.element.removeAttr(name);
              } else {
                _this.element.attr(name, value);
              }
            }
          }
          for (cssClass in styles) {
            applied = styles[cssClass];
            if (applied) {
              _this.element.addCSSClass(cssClass);
            } else {
              _this.element.removeCSSClass(cssClass);
            }
          }
          if (innerHTML !== null) {
            if (innerHTML !== dialog.getElementInnerHTML()) {
              element = _this.element;
              if (!element.content) {
                element = element.children[0];
              }
              element.content = new HTMLString.String(innerHTML, element.content.preserveWhitespace());
              element.updateInnerHTML();
              element.taint();
              element.selection(new ContentSelect.Range(0, 0));
              element.storeState();
            }
          }
          modal.hide();
          dialog.hide();
          if (_this.element.restoreState) {
            return _this.element.restoreState();
          }
        };
      })(this));
      app.attach(modal);
      app.attach(dialog);
      modal.show();
      return dialog.show();
    };

    return TagUI;

  })(ContentTools.AnchoredComponentUI);

  ContentTools.ModalUI = (function(_super) {
    __extends(ModalUI, _super);

    function ModalUI(transparent, allowScrolling) {
      ModalUI.__super__.constructor.call(this);
      this._transparent = transparent;
      this._allowScrolling = allowScrolling;
    }

    ModalUI.prototype.mount = function() {
      this._domElement = this.constructor.createDiv(['ct-widget', 'ct-modal']);
      this.parent().domElement().appendChild(this._domElement);
      if (this._transparent) {
        this.addCSSClass('ct-modal--transparent');
      }
      if (!this._allowScrolling) {
        ContentEdit.addCSSClass(document.body, 'ct--no-scroll');
      }
      return this._addDOMEventListeners();
    };

    ModalUI.prototype.unmount = function() {
      if (!this._allowScrolling) {
        ContentEdit.removeCSSClass(document.body, 'ct--no-scroll');
      }
      return ModalUI.__super__.unmount.call(this);
    };

    ModalUI.prototype._addDOMEventListeners = function() {
      return this._domElement.addEventListener('click', (function(_this) {
        return function(ev) {
          return _this.dispatchEvent(_this.createEvent('click'));
        };
      })(this));
    };

    return ModalUI;

  })(ContentTools.WidgetUI);

  ContentTools.ToolboxUI = (function(_super) {
    __extends(ToolboxUI, _super);

    function ToolboxUI(tools) {
      this._onStopDragging = __bind(this._onStopDragging, this);
      this._onStartDragging = __bind(this._onStartDragging, this);
      this._onDrag = __bind(this._onDrag, this);
      ToolboxUI.__super__.constructor.call(this);
      this._tools = tools;
      this._dragging = false;
      this._draggingOffset = null;
      this._domGrip = null;
      this._toolUIs = {};
    }

    ToolboxUI.prototype.isDragging = function() {
      return this._dragging;
    };

    ToolboxUI.prototype.hide = function() {
      this._removeDOMEventListeners();
      return ToolboxUI.__super__.hide.call(this);
    };

    ToolboxUI.prototype.mount = function() {
      var coord, position, restore;
      this._domElement = this.constructor.createDiv(['ct-widget', 'ct-toolbox']);
      this.parent().domElement().appendChild(this._domElement);
      this._domGrip = this.constructor.createDiv(['ct-toolbox__grip', 'ct-grip']);
      this._domElement.appendChild(this._domGrip);
      this._domGrip.appendChild(this.constructor.createDiv(['ct-grip__bump']));
      this._domGrip.appendChild(this.constructor.createDiv(['ct-grip__bump']));
      this._domGrip.appendChild(this.constructor.createDiv(['ct-grip__bump']));
      this._domToolGroups = this.constructor.createDiv(['ct-tool-groups']);
      this._domElement.appendChild(this._domToolGroups);
      this.tools(this._tools);
      restore = window.localStorage.getItem('ct-toolbox-position');
      if (restore && /^\d+,\d+$/.test(restore)) {
        position = (function() {
          var _i, _len, _ref, _results;
          _ref = restore.split(',');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            coord = _ref[_i];
            _results.push(parseInt(coord));
          }
          return _results;
        })();
        this._domElement.style.left = "" + position[0] + "px";
        this._domElement.style.top = "" + position[1] + "px";
        this._contain();
      }
      return this._addDOMEventListeners();
    };

    ToolboxUI.prototype.tools = function(tools) {
      var domToolGroup, i, tool, toolGroup, toolName, toolUI, _i, _len, _ref, _ref1, _results;
      if (tools === void 0) {
        return this._tools;
      }
      this._tools = tools;
      if (!this.isMounted()) {
        return;
      }
      _ref = this._toolUIs;
      for (toolName in _ref) {
        toolUI = _ref[toolName];
        toolUI.unmount();
      }
      this._toolUIs = {};
      while (this._domToolGroups.lastChild) {
        this._domToolGroups.removeChild(this._domToolGroups.lastChild);
      }
      _ref1 = this._tools;
      _results = [];
      for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
        toolGroup = _ref1[i];
        domToolGroup = this.constructor.createDiv(['ct-tool-group']);
        this._domToolGroups.appendChild(domToolGroup);
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (_j = 0, _len1 = toolGroup.length; _j < _len1; _j++) {
            toolName = toolGroup[_j];
            tool = ContentTools.ToolShelf.fetch(toolName);
            this._toolUIs[toolName] = new ContentTools.ToolUI(tool);
            this._toolUIs[toolName].mount(domToolGroup);
            this._toolUIs[toolName].disabled(true);
            _results1.push(this._toolUIs[toolName].addEventListener('applied', (function(_this) {
              return function() {
                return _this.updateTools();
              };
            })(this)));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    ToolboxUI.prototype.updateTools = function() {
      var element, name, selection, toolUI, _ref, _results;
      element = ContentEdit.Root.get().focused();
      selection = null;
      if (element && element.selection) {
        selection = element.selection();
      }
      _ref = this._toolUIs;
      _results = [];
      for (name in _ref) {
        toolUI = _ref[name];
        _results.push(toolUI.update(element, selection));
      }
      return _results;
    };

    ToolboxUI.prototype.unmount = function() {
      ToolboxUI.__super__.unmount.call(this);
      return this._domGrip = null;
    };

    ToolboxUI.prototype._addDOMEventListeners = function() {
      this._domGrip.addEventListener('mousedown', this._onStartDragging);
      this._handleResize = (function(_this) {
        return function(ev) {
          var containResize;
          if (_this._resizeTimeout) {
            clearTimeout(_this._resizeTimeout);
          }
          containResize = function() {
            return _this._contain();
          };
          return _this._resizeTimeout = setTimeout(containResize, 250);
        };
      })(this);
      window.addEventListener('resize', this._handleResize);
      this._updateTools = (function(_this) {
        return function() {
          var app, element, name, selection, toolUI, update, _ref, _results;
          app = ContentTools.EditorApp.get();
          update = false;
          element = ContentEdit.Root.get().focused();
          selection = null;
          if (element === _this._lastUpdateElement) {
            if (element && element.selection) {
              selection = element.selection();
              if (_this._lastUpdateSelection) {
                if (!selection.eq(_this._lastUpdateSelection)) {
                  update = true;
                }
              } else {
                update = true;
              }
            }
          } else {
            update = true;
          }
          if (app.history) {
            if (_this._lastUpdateHistoryLength !== app.history.length()) {
              update = true;
            }
            _this._lastUpdateHistoryLength = app.history.length();
            if (_this._lastUpdateHistoryIndex !== app.history.index()) {
              update = true;
            }
            _this._lastUpdateHistoryIndex = app.history.index();
          }
          _this._lastUpdateElement = element;
          _this._lastUpdateSelection = selection;
          if (update) {
            _ref = _this._toolUIs;
            _results = [];
            for (name in _ref) {
              toolUI = _ref[name];
              _results.push(toolUI.update(element, selection));
            }
            return _results;
          }
        };
      })(this);
      this._updateToolsInterval = setInterval(this._updateTools, 100);
      this._handleKeyDown = (function(_this) {
        return function(ev) {
          var Paragraph, element, os, redo, undo, version;
          element = ContentEdit.Root.get().focused();
          if (element && !element.content) {
            if (ev.keyCode === 46) {
              ev.preventDefault();
              return ContentTools.Tools.Remove.apply(element, null, function() {});
            }
            if (ev.keyCode === 13) {
              ev.preventDefault();
              Paragraph = ContentTools.Tools.Paragraph;
              return Paragraph.apply(element, null, function() {});
            }
          }
          version = navigator.appVersion;
          os = 'linux';
          if (version.indexOf('Mac') !== -1) {
            os = 'mac';
          } else if (version.indexOf('Win') !== -1) {
            os = 'windows';
          }
          redo = false;
          undo = false;
          switch (os) {
            case 'linux' && !ev.altKey:
              if (ev.keyCode === 90 && ev.ctrlKey) {
                redo = ev.shiftKey;
                undo = !redo;
              }
              break;
            case 'mac' && !(ev.altKey || ev.ctrlKey):
              if (ev.keyCode === 90 && ev.metaKey) {
                redo = ev.shiftKey;
                undo = !redo;
              }
              break;
            case 'windows' && !ev.altKey || ev.shiftKey:
              if (ev.keyCode === 89 && ev.ctrlKey) {
                redo = true;
              }
              if (ev.keyCode === 90 && ev.ctrlKey) {
                undo = true;
              }
          }
          if (undo && ContentTools.Tools.Undo.canApply(null, null)) {
            ContentTools.Tools.Undo.apply(null, null, function() {});
          }
          if (redo && ContentTools.Tools.Redo.canApply(null, null)) {
            return ContentTools.Tools.Redo.apply(null, null, function() {});
          }
        };
      })(this);
      return window.addEventListener('keydown', this._handleKeyDown);
    };

    ToolboxUI.prototype._contain = function() {
      var rect;
      if (!this.isMounted()) {
        return;
      }
      rect = this._domElement.getBoundingClientRect();
      if (rect.left + rect.width > window.innerWidth) {
        this._domElement.style.left = "" + (window.innerWidth - rect.width) + "px";
      }
      if (rect.top + rect.height > window.innerHeight) {
        this._domElement.style.top = "" + (window.innerHeight - rect.height) + "px";
      }
      if (rect.left < 0) {
        this._domElement.style.left = '0px';
      }
      if (rect.top < 0) {
        this._domElement.style.top = '0px';
      }
      rect = this._domElement.getBoundingClientRect();
      return window.localStorage.setItem('ct-toolbox-position', "" + rect.left + "," + rect.top);
    };

    ToolboxUI.prototype._removeDOMEventListeners = function() {
      if (this.isMounted()) {
        this._domGrip.removeEventListener('mousedown', this._onStartDragging);
      }
      window.removeEventListener('keydown', this._handleKeyDown);
      window.removeEventListener('resize', this._handleResize);
      return clearInterval(this._updateToolsInterval);
    };

    ToolboxUI.prototype._onDrag = function(ev) {
      ContentSelect.Range.unselectAll();
      this._domElement.style.left = "" + (ev.clientX - this._draggingOffset.x) + "px";
      return this._domElement.style.top = "" + (ev.clientY - this._draggingOffset.y) + "px";
    };

    ToolboxUI.prototype._onStartDragging = function(ev) {
      var rect;
      ev.preventDefault();
      if (this.isDragging()) {
        return;
      }
      this._dragging = true;
      this.addCSSClass('ct-toolbox--dragging');
      rect = this._domElement.getBoundingClientRect();
      this._draggingOffset = {
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top
      };
      document.addEventListener('mousemove', this._onDrag);
      document.addEventListener('mouseup', this._onStopDragging);
      return ContentEdit.addCSSClass(document.body, 'ce--dragging');
    };

    ToolboxUI.prototype._onStopDragging = function(ev) {
      if (!this.isDragging()) {
        return;
      }
      this._contain();
      document.removeEventListener('mousemove', this._onDrag);
      document.removeEventListener('mouseup', this._onStopDragging);
      this._draggingOffset = null;
      this._dragging = false;
      this.removeCSSClass('ct-toolbox--dragging');
      return ContentEdit.removeCSSClass(document.body, 'ce--dragging');
    };

    return ToolboxUI;

  })(ContentTools.WidgetUI);

  ContentTools.ToolUI = (function(_super) {
    __extends(ToolUI, _super);

    function ToolUI(tool) {
      this._onMouseUp = __bind(this._onMouseUp, this);
      this._onMouseLeave = __bind(this._onMouseLeave, this);
      this._onMouseDown = __bind(this._onMouseDown, this);
      this._addDOMEventListeners = __bind(this._addDOMEventListeners, this);
      ToolUI.__super__.constructor.call(this);
      this.tool = tool;
      this._mouseDown = false;
      this._disabled = false;
    }

    ToolUI.prototype.apply = function(element, selection) {
      var callback, detail;
      if (!this.tool.canApply(element, selection)) {
        return;
      }
      detail = {
        'element': element,
        'selection': selection
      };
      callback = (function(_this) {
        return function(applied) {
          if (applied) {
            return _this.dispatchEvent(_this.createEvent('applied', detail));
          }
        };
      })(this);
      if (this.dispatchEvent(this.createEvent('apply', detail))) {
        return this.tool.apply(element, selection, callback);
      }
    };

    ToolUI.prototype.disabled = function(disabledState) {
      if (disabledState === void 0) {
        return this._disabled;
      }
      if (this._disabled === disabledState) {
        return;
      }
      this._disabled = disabledState;
      if (disabledState) {
        this._mouseDown = false;
        this.addCSSClass('ct-tool--disabled');
        return this.removeCSSClass('ct-tool--applied');
      } else {
        return this.removeCSSClass('ct-tool--disabled');
      }
    };

    ToolUI.prototype.mount = function(domParent, before) {
      if (before == null) {
        before = null;
      }
      this._domElement = this.constructor.createDiv(['ct-tool', "ct-tool--" + this.tool.icon]);
      this._domElement.setAttribute('data-ct-tooltip', ContentEdit._(this.tool.label));
      return ToolUI.__super__.mount.call(this, domParent, before);
    };

    ToolUI.prototype.update = function(element, selection) {
      if (this.tool.requiresElement) {
        if (!(element && element.isMounted())) {
          this.disabled(true);
          return;
        }
      }
      if (this.tool.canApply(element, selection)) {
        this.disabled(false);
      } else {
        this.disabled(true);
        return;
      }
      if (this.tool.isApplied(element, selection)) {
        return this.addCSSClass('ct-tool--applied');
      } else {
        return this.removeCSSClass('ct-tool--applied');
      }
    };

    ToolUI.prototype._addDOMEventListeners = function() {
      this._domElement.addEventListener('mousedown', this._onMouseDown);
      this._domElement.addEventListener('mouseleave', this._onMouseLeave);
      return this._domElement.addEventListener('mouseup', this._onMouseUp);
    };

    ToolUI.prototype._onMouseDown = function(ev) {
      ev.preventDefault();
      if (this.disabled()) {
        return;
      }
      this._mouseDown = true;
      return this.addCSSClass('ct-tool--down');
    };

    ToolUI.prototype._onMouseLeave = function(ev) {
      this._mouseDown = false;
      return this.removeCSSClass('ct-tool--down');
    };

    ToolUI.prototype._onMouseUp = function(ev) {
      var element, selection;
      if (this._mouseDown) {
        element = ContentEdit.Root.get().focused();
        if (this.tool.requiresElement) {
          if (!(element && element.isMounted())) {
            return;
          }
        }
        selection = null;
        if (element && element.selection) {
          selection = element.selection();
        }
        this.apply(element, selection);
      }
      this._mouseDown = false;
      return this.removeCSSClass('ct-tool--down');
    };

    return ToolUI;

  })(ContentTools.AnchoredComponentUI);

  ContentTools.AnchoredDialogUI = (function(_super) {
    __extends(AnchoredDialogUI, _super);

    function AnchoredDialogUI() {
      AnchoredDialogUI.__super__.constructor.call(this);
      this._position = [0, 0];
    }

    AnchoredDialogUI.prototype.mount = function() {
      this._domElement = this.constructor.createDiv(['ct-widget', 'ct-anchored-dialog']);
      this.parent().domElement().appendChild(this._domElement);
      this._contain();
      this._domElement.style.top = "" + this._position[1] + "px";
      return this._domElement.style.left = "" + this._position[0] + "px";
    };

    AnchoredDialogUI.prototype.position = function(newPosition) {
      if (newPosition === void 0) {
        return this._position.slice();
      }
      this._position = newPosition.slice();
      if (this.isMounted()) {
        this._contain();
        this._domElement.style.top = "" + this._position[1] + "px";
        return this._domElement.style.left = "" + this._position[0] + "px";
      }
    };

    AnchoredDialogUI.prototype._contain = function() {
      var halfWidth, pageWidth, rect;
      if (!this.isMounted()) {
        return;
      }
      rect = this._domElement.getBoundingClientRect();
      halfWidth = rect.width / 2 + 5;
      pageWidth = document.documentElement.clientWidth || document.body.clientWidth;
      if ((this._position[0] + halfWidth) > pageWidth) {
        this._position[0] = pageWidth - halfWidth;
      }
      if (this._position[0] < halfWidth) {
        this._position[0] = halfWidth;
      }
      if (this._position[1] + rect.top < 5) {
        return this._position[1] = Math.abs(rect.top) + 5;
      }
    };

    return AnchoredDialogUI;

  })(ContentTools.WidgetUI);

  ContentTools.DialogUI = (function(_super) {
    __extends(DialogUI, _super);

    function DialogUI(caption) {
      if (caption == null) {
        caption = '';
      }
      DialogUI.__super__.constructor.call(this);
      this._busy = false;
      this._caption = caption;
    }

    DialogUI.prototype.busy = function(busy) {
      if (busy === void 0) {
        return this._busy;
      }
      if (this._busy === busy) {
        return;
      }
      this._busy = busy;
      if (!this.isMounted()) {
        return;
      }
      if (this._busy) {
        return ContentEdit.addCSSClass(this._domElement, 'ct-dialog--busy');
      } else {
        return ContentEdit.removeCSSClass(this._domElement, 'ct-dialog--busy');
      }
    };

    DialogUI.prototype.caption = function(caption) {
      if (caption === void 0) {
        return this._caption;
      }
      this._caption = caption;
      return this._domCaption.textContent = ContentEdit._(caption);
    };

    DialogUI.prototype.mount = function() {
      var dialogCSSClasses, domBody, domHeader;
      if (document.activeElement) {
        document.activeElement.blur();
        window.getSelection().removeAllRanges();
      }
      dialogCSSClasses = ['ct-widget', 'ct-dialog'];
      if (this._busy) {
        dialogCSSClasses.push('ct-dialog--busy');
      }
      this._domElement = this.constructor.createDiv(dialogCSSClasses);
      this.parent().domElement().appendChild(this._domElement);
      domHeader = this.constructor.createDiv(['ct-dialog__header']);
      this._domElement.appendChild(domHeader);
      this._domCaption = this.constructor.createDiv(['ct-dialog__caption']);
      domHeader.appendChild(this._domCaption);
      this.caption(this._caption);
      this._domClose = this.constructor.createDiv(['ct-dialog__close']);
      domHeader.appendChild(this._domClose);
      domBody = this.constructor.createDiv(['ct-dialog__body']);
      this._domElement.appendChild(domBody);
      this._domView = this.constructor.createDiv(['ct-dialog__view']);
      domBody.appendChild(this._domView);
      this._domControls = this.constructor.createDiv(['ct-dialog__controls']);
      domBody.appendChild(this._domControls);
      this._domBusy = this.constructor.createDiv(['ct-dialog__busy']);
      return this._domElement.appendChild(this._domBusy);
    };

    DialogUI.prototype.unmount = function() {
      DialogUI.__super__.unmount.call(this);
      this._domBusy = null;
      this._domCaption = null;
      this._domClose = null;
      this._domControls = null;
      return this._domView = null;
    };

    DialogUI.prototype._addDOMEventListeners = function() {
      this._handleEscape = (function(_this) {
        return function(ev) {
          if (_this._busy) {
            return;
          }
          if (ev.keyCode === 27) {
            return _this.dispatchEvent(_this.createEvent('cancel'));
          }
        };
      })(this);
      document.addEventListener('keyup', this._handleEscape);
      return this._domClose.addEventListener('click', (function(_this) {
        return function(ev) {
          ev.preventDefault();
          if (_this._busy) {
            return;
          }
          return _this.dispatchEvent(_this.createEvent('cancel'));
        };
      })(this));
    };

    DialogUI.prototype._removeDOMEventListeners = function() {
      return document.removeEventListener('keyup', this._handleEscape);
    };

    return DialogUI;

  })(ContentTools.WidgetUI);

  ContentTools.ImageDialog = (function(_super) {
    __extends(ImageDialog, _super);

    function ImageDialog() {
      ImageDialog.__super__.constructor.call(this, 'Insert image');
      this._cropMarks = null;
      this._imageURL = null;
      this._imageSize = null;
      this._progress = 0;
      this._state = 'empty';
      if (ContentTools.IMAGE_UPLOADER) {
        ContentTools.IMAGE_UPLOADER(this);
      }
    }

    ImageDialog.prototype.cropRegion = function() {
      if (this._cropMarks) {
        return this._cropMarks.region();
      }
      return [0, 0, 1, 1];
    };

    ImageDialog.prototype.addCropMarks = function() {
      if (this._cropMarks) {
        return;
      }
      this._cropMarks = new CropMarksUI(this._imageSize);
      this._cropMarks.mount(this._domView);
      return ContentEdit.addCSSClass(this._domCrop, 'ct-control--active');
    };

    ImageDialog.prototype.clear = function() {
      if (this._domImage) {
        this._domImage.parentNode.removeChild(this._domImage);
        this._domImage = null;
      }
      this._imageURL = null;
      this._imageSize = null;
      return this.state('empty');
    };

    ImageDialog.prototype.mount = function() {
      var domActions, domProgressBar, domTools;
      ImageDialog.__super__.mount.call(this);
      ContentEdit.addCSSClass(this._domElement, 'ct-image-dialog');
      ContentEdit.addCSSClass(this._domElement, 'ct-image-dialog--empty');
      ContentEdit.addCSSClass(this._domView, 'ct-image-dialog__view');
      domTools = this.constructor.createDiv(['ct-control-group', 'ct-control-group--left']);
      this._domControls.appendChild(domTools);
      this._domRotateCCW = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--rotate-ccw']);
      this._domRotateCCW.setAttribute('data-ct-tooltip', ContentEdit._('Rotate') + ' -90°');
      domTools.appendChild(this._domRotateCCW);
      this._domRotateCW = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--rotate-cw']);
      this._domRotateCW.setAttribute('data-ct-tooltip', ContentEdit._('Rotate') + ' 90°');
      domTools.appendChild(this._domRotateCW);
      this._domCrop = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--crop']);
      this._domCrop.setAttribute('data-ct-tooltip', ContentEdit._('Crop marks'));
      domTools.appendChild(this._domCrop);
      domProgressBar = this.constructor.createDiv(['ct-progress-bar']);
      domTools.appendChild(domProgressBar);
      this._domProgress = this.constructor.createDiv(['ct-progress-bar__progress']);
      domProgressBar.appendChild(this._domProgress);
      domActions = this.constructor.createDiv(['ct-control-group', 'ct-control-group--right']);
      this._domControls.appendChild(domActions);
      this._domUpload = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--upload']);
      this._domUpload.textContent = ContentEdit._('Upload');
      domActions.appendChild(this._domUpload);
      this._domInput = document.createElement('input');
      this._domInput.setAttribute('class', 'ct-image-dialog__file-upload');
      this._domInput.setAttribute('name', 'file');
      this._domInput.setAttribute('type', 'file');
      this._domInput.setAttribute('accept', 'image/*');
      this._domUpload.appendChild(this._domInput);
      this._domInsert = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--insert']);
      this._domInsert.textContent = ContentEdit._('Insert');
      domActions.appendChild(this._domInsert);
      this._domCancelUpload = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--cancel']);
      this._domCancelUpload.textContent = ContentEdit._('Cancel');
      domActions.appendChild(this._domCancelUpload);
      this._domClear = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--clear']);
      this._domClear.textContent = ContentEdit._('Clear');
      domActions.appendChild(this._domClear);
      this._addDOMEventListeners();
      return this.dispatchEvent(this.createEvent('imageuploader.mount'));
    };

    ImageDialog.prototype.populate = function(imageURL, imageSize) {
      this._imageURL = imageURL;
      this._imageSize = imageSize;
      if (!this._domImage) {
        this._domImage = this.constructor.createDiv(['ct-image-dialog__image']);
        this._domView.appendChild(this._domImage);
      }
      this._domImage.style['background-image'] = "url(" + imageURL + ")";
      return this.state('populated');
    };

    ImageDialog.prototype.progress = function(progress) {
      if (progress === void 0) {
        return this._progress;
      }
      this._progress = progress;
      if (!this.isMounted()) {
        return;
      }
      return this._domProgress.style.width = "" + this._progress + "%";
    };

    ImageDialog.prototype.removeCropMarks = function() {
      if (!this._cropMarks) {
        return;
      }
      this._cropMarks.unmount();
      this._cropMarks = null;
      return ContentEdit.removeCSSClass(this._domCrop, 'ct-control--active');
    };

    ImageDialog.prototype.save = function(imageURL, imageSize, imageAttrs) {
      return this.dispatchEvent(this.createEvent('save', {
        'imageURL': imageURL,
        'imageSize': imageSize,
        'imageAttrs': imageAttrs
      }));
    };

    ImageDialog.prototype.state = function(state) {
      var prevState;
      if (state === void 0) {
        return this._state;
      }
      if (this._state === state) {
        return;
      }
      prevState = this._state;
      this._state = state;
      if (!this.isMounted()) {
        return;
      }
      ContentEdit.addCSSClass(this._domElement, "ct-image-dialog--" + this._state);
      return ContentEdit.removeCSSClass(this._domElement, "ct-image-dialog--" + prevState);
    };

    ImageDialog.prototype.unmount = function() {
      ImageDialog.__super__.unmount.call(this);
      this._domCancelUpload = null;
      this._domClear = null;
      this._domCrop = null;
      this._domInput = null;
      this._domInsert = null;
      this._domProgress = null;
      this._domRotateCCW = null;
      this._domRotateCW = null;
      this._domUpload = null;
      return this.dispatchEvent(this.createEvent('imageuploader.unmount'));
    };

    ImageDialog.prototype._addDOMEventListeners = function() {
      ImageDialog.__super__._addDOMEventListeners.call(this);
      this._domInput.addEventListener('change', (function(_this) {
        return function(ev) {
          var file;
          file = ev.target.files[0];
          if (!file) {
            return;
          }
          ev.target.value = '';
          if (ev.target.value) {
            ev.target.type = 'text';
            ev.target.type = 'file';
          }
          return _this.dispatchEvent(_this.createEvent('imageuploader.fileready', {
            file: file
          }));
        };
      })(this));
      this._domCancelUpload.addEventListener('click', (function(_this) {
        return function(ev) {
          return _this.dispatchEvent(_this.createEvent('imageuploader.cancelupload'));
        };
      })(this));
      this._domClear.addEventListener('click', (function(_this) {
        return function(ev) {
          _this.removeCropMarks();
          return _this.dispatchEvent(_this.createEvent('imageuploader.clear'));
        };
      })(this));
      this._domRotateCCW.addEventListener('click', (function(_this) {
        return function(ev) {
          _this.removeCropMarks();
          return _this.dispatchEvent(_this.createEvent('imageuploader.rotateccw'));
        };
      })(this));
      this._domRotateCW.addEventListener('click', (function(_this) {
        return function(ev) {
          _this.removeCropMarks();
          return _this.dispatchEvent(_this.createEvent('imageuploader.rotatecw'));
        };
      })(this));
      this._domCrop.addEventListener('click', (function(_this) {
        return function(ev) {
          if (_this._cropMarks) {
            return _this.removeCropMarks();
          } else {
            return _this.addCropMarks();
          }
        };
      })(this));
      return this._domInsert.addEventListener('click', (function(_this) {
        return function(ev) {
          return _this.dispatchEvent(_this.createEvent('imageuploader.save'));
        };
      })(this));
    };

    return ImageDialog;

  })(ContentTools.DialogUI);

  CropMarksUI = (function(_super) {
    __extends(CropMarksUI, _super);

    function CropMarksUI(imageSize) {
      CropMarksUI.__super__.constructor.call(this);
      this._bounds = null;
      this._dragging = null;
      this._draggingOrigin = null;
      this._imageSize = imageSize;
    }

    CropMarksUI.prototype.mount = function(domParent, before) {
      if (before == null) {
        before = null;
      }
      this._domElement = this.constructor.createDiv(['ct-crop-marks']);
      this._domClipper = this.constructor.createDiv(['ct-crop-marks__clipper']);
      this._domElement.appendChild(this._domClipper);
      this._domRulers = [this.constructor.createDiv(['ct-crop-marks__ruler', 'ct-crop-marks__ruler--top-left']), this.constructor.createDiv(['ct-crop-marks__ruler', 'ct-crop-marks__ruler--bottom-right'])];
      this._domClipper.appendChild(this._domRulers[0]);
      this._domClipper.appendChild(this._domRulers[1]);
      this._domHandles = [this.constructor.createDiv(['ct-crop-marks__handle', 'ct-crop-marks__handle--top-left']), this.constructor.createDiv(['ct-crop-marks__handle', 'ct-crop-marks__handle--bottom-right'])];
      this._domElement.appendChild(this._domHandles[0]);
      this._domElement.appendChild(this._domHandles[1]);
      CropMarksUI.__super__.mount.call(this, domParent, before);
      return this._fit(domParent);
    };

    CropMarksUI.prototype.region = function() {
      return [parseFloat(this._domHandles[0].style.top) / this._bounds[1], parseFloat(this._domHandles[0].style.left) / this._bounds[0], parseFloat(this._domHandles[1].style.top) / this._bounds[1], parseFloat(this._domHandles[1].style.left) / this._bounds[0]];
    };

    CropMarksUI.prototype.unmount = function() {
      CropMarksUI.__super__.unmount.call(this);
      this._domClipper = null;
      this._domHandles = null;
      return this._domRulers = null;
    };

    CropMarksUI.prototype._addDOMEventListeners = function() {
      CropMarksUI.__super__._addDOMEventListeners.call(this);
      this._domHandles[0].addEventListener('mousedown', (function(_this) {
        return function(ev) {
          if (ev.button === 0) {
            return _this._startDrag(0, ev.clientY, ev.clientX);
          }
        };
      })(this));
      return this._domHandles[1].addEventListener('mousedown', (function(_this) {
        return function(ev) {
          if (ev.button === 0) {
            return _this._startDrag(1, ev.clientY, ev.clientX);
          }
        };
      })(this));
    };

    CropMarksUI.prototype._drag = function(top, left) {
      var height, minCrop, offsetLeft, offsetTop, width;
      if (this._dragging === null) {
        return;
      }
      ContentSelect.Range.unselectAll();
      offsetTop = top - this._draggingOrigin[1];
      offsetLeft = left - this._draggingOrigin[0];
      height = this._bounds[1];
      left = 0;
      top = 0;
      width = this._bounds[0];
      minCrop = Math.min(Math.min(ContentTools.MIN_CROP, height), width);
      if (this._dragging === 0) {
        height = parseInt(this._domHandles[1].style.top) - minCrop;
        width = parseInt(this._domHandles[1].style.left) - minCrop;
      } else {
        left = parseInt(this._domHandles[0].style.left) + minCrop;
        top = parseInt(this._domHandles[0].style.top) + minCrop;
      }
      offsetTop = Math.min(Math.max(top, offsetTop), height);
      offsetLeft = Math.min(Math.max(left, offsetLeft), width);
      this._domHandles[this._dragging].style.top = "" + offsetTop + "px";
      this._domHandles[this._dragging].style.left = "" + offsetLeft + "px";
      this._domRulers[this._dragging].style.top = "" + offsetTop + "px";
      return this._domRulers[this._dragging].style.left = "" + offsetLeft + "px";
    };

    CropMarksUI.prototype._fit = function(domParent) {
      var height, heightScale, left, ratio, rect, top, width, widthScale;
      rect = domParent.getBoundingClientRect();
      widthScale = rect.width / this._imageSize[0];
      heightScale = rect.height / this._imageSize[1];
      ratio = Math.min(widthScale, heightScale);
      width = ratio * this._imageSize[0];
      height = ratio * this._imageSize[1];
      left = (rect.width - width) / 2;
      top = (rect.height - height) / 2;
      this._domElement.style.width = "" + width + "px";
      this._domElement.style.height = "" + height + "px";
      this._domElement.style.top = "" + top + "px";
      this._domElement.style.left = "" + left + "px";
      this._domHandles[0].style.top = '0px';
      this._domHandles[0].style.left = '0px';
      this._domHandles[1].style.top = "" + height + "px";
      this._domHandles[1].style.left = "" + width + "px";
      this._domRulers[0].style.top = '0px';
      this._domRulers[0].style.left = '0px';
      this._domRulers[1].style.top = "" + height + "px";
      this._domRulers[1].style.left = "" + width + "px";
      return this._bounds = [width, height];
    };

    CropMarksUI.prototype._startDrag = function(handleIndex, top, left) {
      var domHandle;
      domHandle = this._domHandles[handleIndex];
      this._dragging = handleIndex;
      this._draggingOrigin = [left - parseInt(domHandle.style.left), top - parseInt(domHandle.style.top)];
      this._onMouseMove = (function(_this) {
        return function(ev) {
          return _this._drag(ev.clientY, ev.clientX);
        };
      })(this);
      document.addEventListener('mousemove', this._onMouseMove);
      this._onMouseUp = (function(_this) {
        return function(ev) {
          return _this._stopDrag();
        };
      })(this);
      return document.addEventListener('mouseup', this._onMouseUp);
    };

    CropMarksUI.prototype._stopDrag = function() {
      document.removeEventListener('mousemove', this._onMouseMove);
      document.removeEventListener('mouseup', this._onMouseUp);
      this._dragging = null;
      return this._draggingOrigin = null;
    };

    return CropMarksUI;

  })(ContentTools.AnchoredComponentUI);

  ContentTools.LinkDialog = (function(_super) {
    var NEW_WINDOW_TARGET;

    __extends(LinkDialog, _super);

    NEW_WINDOW_TARGET = '_blank';

    function LinkDialog(href, target) {
      if (href == null) {
        href = '';
      }
      if (target == null) {
        target = '';
      }
      LinkDialog.__super__.constructor.call(this);
      this._href = href;
      this._target = target;
    }

    LinkDialog.prototype.mount = function() {
      LinkDialog.__super__.mount.call(this);
      this._domInput = document.createElement('input');
      this._domInput.setAttribute('class', 'ct-anchored-dialog__input');
      this._domInput.setAttribute('name', 'href');
      this._domInput.setAttribute('placeholder', ContentEdit._('Enter a link') + '...');
      this._domInput.setAttribute('type', 'text');
      this._domInput.setAttribute('value', this._href);
      this._domElement.appendChild(this._domInput);
      this._domTargetButton = this.constructor.createDiv(['ct-anchored-dialog__target-button']);
      this._domElement.appendChild(this._domTargetButton);
      if (this._target === NEW_WINDOW_TARGET) {
        ContentEdit.addCSSClass(this._domTargetButton, 'ct-anchored-dialog__target-button--active');
      }
      this._domButton = this.constructor.createDiv(['ct-anchored-dialog__button']);
      this._domElement.appendChild(this._domButton);
      return this._addDOMEventListeners();
    };

    LinkDialog.prototype.save = function() {
      var detail;
      if (!this.isMounted()) {
        this.dispatchEvent(this.createEvent('save'));
        return;
      }
      detail = {
        href: this._domInput.value.trim()
      };
      if (this._target) {
        detail.target = this._target;
      }
      return this.dispatchEvent(this.createEvent('save', detail));
    };

    LinkDialog.prototype.show = function() {
      LinkDialog.__super__.show.call(this);
      this._domInput.focus();
      if (this._href) {
        return this._domInput.select();
      }
    };

    LinkDialog.prototype.unmount = function() {
      if (this.isMounted()) {
        this._domInput.blur();
      }
      LinkDialog.__super__.unmount.call(this);
      this._domButton = null;
      return this._domInput = null;
    };

    LinkDialog.prototype._addDOMEventListeners = function() {
      this._domInput.addEventListener('keypress', (function(_this) {
        return function(ev) {
          if (ev.keyCode === 13) {
            return _this.save();
          }
        };
      })(this));
      this._domTargetButton.addEventListener('click', (function(_this) {
        return function(ev) {
          ev.preventDefault();
          if (_this._target === NEW_WINDOW_TARGET) {
            _this._target = '';
            return ContentEdit.removeCSSClass(_this._domTargetButton, 'ct-anchored-dialog__target-button--active');
          } else {
            _this._target = NEW_WINDOW_TARGET;
            return ContentEdit.addCSSClass(_this._domTargetButton, 'ct-anchored-dialog__target-button--active');
          }
        };
      })(this));
      return this._domButton.addEventListener('click', (function(_this) {
        return function(ev) {
          ev.preventDefault();
          return _this.save();
        };
      })(this));
    };

    return LinkDialog;

  })(ContentTools.AnchoredDialogUI);

  ContentTools.PropertiesDialog = (function(_super) {
    __extends(PropertiesDialog, _super);

    function PropertiesDialog(element) {
      var _ref;
      this.element = element;
      PropertiesDialog.__super__.constructor.call(this, 'Properties');
      this._attributeUIs = [];
      this._focusedAttributeUI = null;
      this._styleUIs = [];
      this._supportsCoding = this.element.content;
      if ((_ref = this.element.type()) === 'ListItem' || _ref === 'TableCell') {
        this._supportsCoding = true;
      }
    }

    PropertiesDialog.prototype.caption = function(caption) {
      if (caption === void 0) {
        return this._caption;
      }
      this._caption = caption;
      return this._domCaption.textContent = ContentEdit._(caption) + (": " + (this.element.tagName()));
    };

    PropertiesDialog.prototype.changedAttributes = function() {
      var attributeUI, attributes, changedAttributes, name, restricted, value, _i, _len, _ref, _ref1;
      attributes = {};
      changedAttributes = {};
      _ref = this._attributeUIs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attributeUI = _ref[_i];
        name = attributeUI.name();
        value = attributeUI.value();
        if (name === '') {
          continue;
        }
        attributes[name.toLowerCase()] = true;
        if (this.element.attr(name) !== value) {
          changedAttributes[name] = value;
        }
      }
      restricted = ContentTools.getRestrictedAtributes(this.element.tagName());
      _ref1 = this.element.attributes();
      for (name in _ref1) {
        value = _ref1[name];
        if (restricted && restricted.indexOf(name.toLowerCase()) !== -1) {
          continue;
        }
        if (attributes[name] === void 0) {
          changedAttributes[name] = null;
        }
      }
      return changedAttributes;
    };

    PropertiesDialog.prototype.changedStyles = function() {
      var cssClass, styleUI, styles, _i, _len, _ref;
      styles = {};
      _ref = this._styleUIs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        styleUI = _ref[_i];
        cssClass = styleUI.style.cssClass();
        if (this.element.hasCSSClass(cssClass) !== styleUI.applied()) {
          styles[cssClass] = styleUI.applied();
        }
      }
      return styles;
    };

    PropertiesDialog.prototype.getElementInnerHTML = function() {
      if (!this._supportsCoding) {
        return null;
      }
      if (this.element.content) {
        return this.element.content.html();
      }
      return this.element.children[0].content.html();
    };

    PropertiesDialog.prototype.mount = function() {
      var attributeNames, attributes, domActions, domTabs, lastTab, name, restricted, style, styleUI, value, _i, _j, _len, _len1, _ref;
      PropertiesDialog.__super__.mount.call(this);
      ContentEdit.addCSSClass(this._domElement, 'ct-properties-dialog');
      ContentEdit.addCSSClass(this._domView, 'ct-properties-dialog__view');
      this._domStyles = this.constructor.createDiv(['ct-properties-dialog__styles']);
      this._domStyles.setAttribute('data-ct-empty', ContentEdit._('No styles available for this tag'));
      this._domView.appendChild(this._domStyles);
      _ref = ContentTools.StylePalette.styles(this.element);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        style = _ref[_i];
        styleUI = new StyleUI(style, this.element.hasCSSClass(style.cssClass()));
        this._styleUIs.push(styleUI);
        styleUI.mount(this._domStyles);
      }
      this._domAttributes = this.constructor.createDiv(['ct-properties-dialog__attributes']);
      this._domView.appendChild(this._domAttributes);
      restricted = ContentTools.getRestrictedAtributes(this.element.tagName());
      attributes = this.element.attributes();
      attributeNames = [];
      for (name in attributes) {
        value = attributes[name];
        if (restricted && restricted.indexOf(name.toLowerCase()) !== -1) {
          continue;
        }
        attributeNames.push(name);
      }
      attributeNames.sort();
      for (_j = 0, _len1 = attributeNames.length; _j < _len1; _j++) {
        name = attributeNames[_j];
        value = attributes[name];
        this._addAttributeUI(name, value);
      }
      this._addAttributeUI('', '');
      this._domCode = this.constructor.createDiv(['ct-properties-dialog__code']);
      this._domView.appendChild(this._domCode);
      this._domInnerHTML = document.createElement('textarea');
      this._domInnerHTML.setAttribute('class', 'ct-properties-dialog__inner-html');
      this._domInnerHTML.setAttribute('name', 'code');
      this._domInnerHTML.value = this.getElementInnerHTML();
      this._domCode.appendChild(this._domInnerHTML);
      domTabs = this.constructor.createDiv(['ct-control-group', 'ct-control-group--left']);
      this._domControls.appendChild(domTabs);
      this._domStylesTab = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--styles']);
      this._domStylesTab.setAttribute('data-ct-tooltip', ContentEdit._('Styles'));
      domTabs.appendChild(this._domStylesTab);
      this._domAttributesTab = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--attributes']);
      this._domAttributesTab.setAttribute('data-ct-tooltip', ContentEdit._('Attributes'));
      domTabs.appendChild(this._domAttributesTab);
      this._domCodeTab = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--code']);
      this._domCodeTab.setAttribute('data-ct-tooltip', ContentEdit._('Code'));
      domTabs.appendChild(this._domCodeTab);
      if (!this._supportsCoding) {
        ContentEdit.addCSSClass(this._domCodeTab, 'ct-control--muted');
      }
      this._domRemoveAttribute = this.constructor.createDiv(['ct-control', 'ct-control--icon', 'ct-control--remove', 'ct-control--muted']);
      this._domRemoveAttribute.setAttribute('data-ct-tooltip', ContentEdit._('Remove'));
      domTabs.appendChild(this._domRemoveAttribute);
      domActions = this.constructor.createDiv(['ct-control-group', 'ct-control-group--right']);
      this._domControls.appendChild(domActions);
      this._domApply = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--apply']);
      this._domApply.textContent = ContentEdit._('Apply');
      domActions.appendChild(this._domApply);
      lastTab = window.localStorage.getItem('ct-properties-dialog-tab');
      if (lastTab === 'attributes') {
        ContentEdit.addCSSClass(this._domElement, 'ct-properties-dialog--attributes');
        ContentEdit.addCSSClass(this._domAttributesTab, 'ct-control--active');
      } else if (lastTab === 'code' && this._supportsCoding) {
        ContentEdit.addCSSClass(this._domElement, 'ct-properties-dialog--code');
        ContentEdit.addCSSClass(this._domCodeTab, 'ct-control--active');
      } else {
        ContentEdit.addCSSClass(this._domElement, 'ct-properties-dialog--styles');
        ContentEdit.addCSSClass(this._domStylesTab, 'ct-control--active');
      }
      return this._addDOMEventListeners();
    };

    PropertiesDialog.prototype.save = function() {
      var detail, innerHTML;
      innerHTML = null;
      if (this._supportsCoding) {
        innerHTML = this._domInnerHTML.value;
      }
      detail = {
        changedAttributes: this.changedAttributes(),
        changedStyles: this.changedStyles(),
        innerHTML: innerHTML
      };
      return this.dispatchEvent(this.createEvent('save', detail));
    };

    PropertiesDialog.prototype._addAttributeUI = function(name, value) {
      var attributeUI, dialog;
      dialog = this;
      attributeUI = new AttributeUI(name, value);
      this._attributeUIs.push(attributeUI);
      attributeUI.addEventListener('blur', function(ev) {
        var index, lastAttributeUI, length;
        dialog._focusedAttributeUI = null;
        ContentEdit.addCSSClass(dialog._domRemoveAttribute, 'ct-control--muted');
        index = dialog._attributeUIs.indexOf(this);
        length = dialog._attributeUIs.length;
        if (this.name() === '' && index < (length - 1)) {
          this.unmount();
          dialog._attributeUIs.splice(index, 1);
        }
        lastAttributeUI = dialog._attributeUIs[length - 1];
        if (lastAttributeUI) {
          if (lastAttributeUI.name() && lastAttributeUI.value()) {
            return dialog._addAttributeUI('', '');
          }
        }
      });
      attributeUI.addEventListener('focus', function(ev) {
        dialog._focusedAttributeUI = this;
        return ContentEdit.removeCSSClass(dialog._domRemoveAttribute, 'ct-control--muted');
      });
      attributeUI.addEventListener('namechange', function(ev) {
        var element, otherAttributeUI, restricted, valid, _i, _len, _ref;
        element = dialog.element;
        name = this.name().toLowerCase();
        restricted = ContentTools.getRestrictedAtributes(element.tagName());
        valid = true;
        if (restricted && restricted.indexOf(name) !== -1) {
          valid = false;
        }
        _ref = dialog._attributeUIs;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          otherAttributeUI = _ref[_i];
          if (name === '') {
            continue;
          }
          if (otherAttributeUI === this) {
            continue;
          }
          if (otherAttributeUI.name().toLowerCase() !== name) {
            continue;
          }
          valid = false;
        }
        this.valid(valid);
        if (valid) {
          return ContentEdit.removeCSSClass(dialog._domApply, 'ct-control--muted');
        } else {
          return ContentEdit.addCSSClass(dialog._domApply, 'ct-control--muted');
        }
      });
      attributeUI.mount(this._domAttributes);
      return attributeUI;
    };

    PropertiesDialog.prototype._addDOMEventListeners = function() {
      var selectTab, validateCode;
      PropertiesDialog.__super__._addDOMEventListeners.call(this);
      selectTab = (function(_this) {
        return function(selected) {
          var selectedCap, tab, tabCap, tabs, _i, _len;
          tabs = ['attributes', 'code', 'styles'];
          for (_i = 0, _len = tabs.length; _i < _len; _i++) {
            tab = tabs[_i];
            if (tab === selected) {
              continue;
            }
            tabCap = tab.charAt(0).toUpperCase() + tab.slice(1);
            ContentEdit.removeCSSClass(_this._domElement, "ct-properties-dialog--" + tab);
            ContentEdit.removeCSSClass(_this["_dom" + tabCap + "Tab"], 'ct-control--active');
          }
          selectedCap = selected.charAt(0).toUpperCase() + selected.slice(1);
          ContentEdit.addCSSClass(_this._domElement, "ct-properties-dialog--" + selected);
          ContentEdit.addCSSClass(_this["_dom" + selectedCap + "Tab"], 'ct-control--active');
          return window.localStorage.setItem('ct-properties-dialog-tab', selected);
        };
      })(this);
      this._domStylesTab.addEventListener('mousedown', (function(_this) {
        return function() {
          return selectTab('styles');
        };
      })(this));
      this._domAttributesTab.addEventListener('mousedown', (function(_this) {
        return function() {
          return selectTab('attributes');
        };
      })(this));
      if (this._supportsCoding) {
        this._domCodeTab.addEventListener('mousedown', (function(_this) {
          return function() {
            return selectTab('code');
          };
        })(this));
      }
      this._domRemoveAttribute.addEventListener('mousedown', (function(_this) {
        return function(ev) {
          var index, last;
          ev.preventDefault();
          if (_this._focusedAttributeUI) {
            index = _this._attributeUIs.indexOf(_this._focusedAttributeUI);
            last = index === (_this._attributeUIs.length - 1);
            _this._focusedAttributeUI.unmount();
            _this._attributeUIs.splice(index, 1);
            if (last) {
              return _this._addAttributeUI('', '');
            }
          }
        };
      })(this));
      validateCode = (function(_this) {
        return function(ev) {
          var content;
          try {
            content = new HTMLString.String(_this._domInnerHTML.value);
            ContentEdit.removeCSSClass(_this._domInnerHTML, 'ct-properties-dialog__inner-html--invalid');
            return ContentEdit.removeCSSClass(_this._domApply, 'ct-control--muted');
          } catch (_error) {
            ContentEdit.addCSSClass(_this._domInnerHTML, 'ct-properties-dialog__inner-html--invalid');
            return ContentEdit.addCSSClass(_this._domApply, 'ct-control--muted');
          }
        };
      })(this);
      this._domInnerHTML.addEventListener('input', validateCode);
      this._domInnerHTML.addEventListener('propertychange', validateCode);
      return this._domApply.addEventListener('click', (function(_this) {
        return function(ev) {
          var cssClass;
          ev.preventDefault();
          cssClass = _this._domApply.getAttribute('class');
          if (cssClass.indexOf('ct-control--muted') === -1) {
            return _this.save();
          }
        };
      })(this));
    };

    return PropertiesDialog;

  })(ContentTools.DialogUI);

  StyleUI = (function(_super) {
    __extends(StyleUI, _super);

    function StyleUI(style, applied) {
      this.style = style;
      StyleUI.__super__.constructor.call(this);
      this._applied = applied;
    }

    StyleUI.prototype.applied = function(applied) {
      if (applied === void 0) {
        return this._applied;
      }
      if (this._applied === applied) {
        return;
      }
      this._applied = applied;
      if (this._applied) {
        return ContentEdit.addCSSClass(this._domElement, 'ct-section--applied');
      } else {
        return ContentEdit.removeCSSClass(this._domElement, 'ct-section--applied');
      }
    };

    StyleUI.prototype.mount = function(domParent, before) {
      var label;
      if (before == null) {
        before = null;
      }
      this._domElement = this.constructor.createDiv(['ct-section']);
      if (this._applied) {
        ContentEdit.addCSSClass(this._domElement, 'ct-section--applied');
      }
      label = this.constructor.createDiv(['ct-section__label']);
      label.textContent = this.style.name();
      this._domElement.appendChild(label);
      this._domElement.appendChild(this.constructor.createDiv(['ct-section__switch']));
      return StyleUI.__super__.mount.call(this, domParent, before);
    };

    StyleUI.prototype._addDOMEventListeners = function() {
      var toggleSection;
      toggleSection = (function(_this) {
        return function(ev) {
          ev.preventDefault();
          if (_this.applied()) {
            return _this.applied(false);
          } else {
            return _this.applied(true);
          }
        };
      })(this);
      return this._domElement.addEventListener('click', toggleSection);
    };

    return StyleUI;

  })(ContentTools.AnchoredComponentUI);

  AttributeUI = (function(_super) {
    __extends(AttributeUI, _super);

    function AttributeUI(name, value) {
      AttributeUI.__super__.constructor.call(this);
      this._initialName = name;
      this._initialValue = value;
    }

    AttributeUI.prototype.name = function() {
      return this._domName.value.trim();
    };

    AttributeUI.prototype.value = function() {
      return this._domValue.value.trim();
    };

    AttributeUI.prototype.mount = function(domParent, before) {
      if (before == null) {
        before = null;
      }
      this._domElement = this.constructor.createDiv(['ct-attribute']);
      this._domName = document.createElement('input');
      this._domName.setAttribute('class', 'ct-attribute__name');
      this._domName.setAttribute('name', 'name');
      this._domName.setAttribute('placeholder', ContentEdit._('Name'));
      this._domName.setAttribute('type', 'text');
      this._domName.setAttribute('value', this._initialName);
      this._domElement.appendChild(this._domName);
      this._domValue = document.createElement('input');
      this._domValue.setAttribute('class', 'ct-attribute__value');
      this._domValue.setAttribute('name', 'value');
      this._domValue.setAttribute('placeholder', ContentEdit._('Value'));
      this._domValue.setAttribute('type', 'text');
      this._domValue.setAttribute('value', this._initialValue);
      this._domElement.appendChild(this._domValue);
      return AttributeUI.__super__.mount.call(this, domParent, before);
    };

    AttributeUI.prototype.valid = function(valid) {
      if (valid) {
        return ContentEdit.removeCSSClass(this._domName, 'ct-attribute__name--invalid');
      } else {
        return ContentEdit.addCSSClass(this._domName, 'ct-attribute__name--invalid');
      }
    };

    AttributeUI.prototype._addDOMEventListeners = function() {
      this._domName.addEventListener('blur', (function(_this) {
        return function() {
          var name, nextDomAttribute, nextNameDom;
          name = _this.name();
          nextDomAttribute = _this._domElement.nextSibling;
          _this.dispatchEvent(_this.createEvent('blur'));
          if (name === '' && nextDomAttribute) {
            nextNameDom = nextDomAttribute.querySelector('.ct-attribute__name');
            return nextNameDom.focus();
          }
        };
      })(this));
      this._domName.addEventListener('focus', (function(_this) {
        return function() {
          return _this.dispatchEvent(_this.createEvent('focus'));
        };
      })(this));
      this._domName.addEventListener('input', (function(_this) {
        return function() {
          return _this.dispatchEvent(_this.createEvent('namechange'));
        };
      })(this));
      this._domName.addEventListener('keydown', (function(_this) {
        return function(ev) {
          if (ev.keyCode === 13) {
            return _this._domValue.focus();
          }
        };
      })(this));
      this._domValue.addEventListener('blur', (function(_this) {
        return function() {
          return _this.dispatchEvent(_this.createEvent('blur'));
        };
      })(this));
      this._domValue.addEventListener('focus', (function(_this) {
        return function() {
          return _this.dispatchEvent(_this.createEvent('focus'));
        };
      })(this));
      return this._domValue.addEventListener('keydown', (function(_this) {
        return function(ev) {
          var nextDomAttribute, nextNameDom;
          if (ev.keyCode !== 13 && (ev.keyCode !== 9 || ev.shiftKey)) {
            return;
          }
          ev.preventDefault();
          nextDomAttribute = _this._domElement.nextSibling;
          if (!nextDomAttribute) {
            _this._domValue.blur();
            nextDomAttribute = _this._domElement.nextSibling;
          }
          if (nextDomAttribute) {
            nextNameDom = nextDomAttribute.querySelector('.ct-attribute__name');
            return nextNameDom.focus();
          }
        };
      })(this));
    };

    return AttributeUI;

  })(ContentTools.AnchoredComponentUI);

  ContentTools.TableDialog = (function(_super) {
    __extends(TableDialog, _super);

    function TableDialog(table) {
      this.table = table;
      if (this.table) {
        TableDialog.__super__.constructor.call(this, 'Update table');
      } else {
        TableDialog.__super__.constructor.call(this, 'Insert table');
      }
    }

    TableDialog.prototype.mount = function() {
      var cfg, domBodyLabel, domControlGroup, domFootLabel, domHeadLabel, footCSSClasses, headCSSClasses;
      TableDialog.__super__.mount.call(this);
      cfg = {
        columns: 3,
        foot: false,
        head: true
      };
      if (this.table) {
        cfg = {
          columns: this.table.firstSection().children[0].children.length,
          foot: this.table.tfoot(),
          head: this.table.thead()
        };
      }
      ContentEdit.addCSSClass(this._domElement, 'ct-table-dialog');
      ContentEdit.addCSSClass(this._domView, 'ct-table-dialog__view');
      headCSSClasses = ['ct-section'];
      if (cfg.head) {
        headCSSClasses.push('ct-section--applied');
      }
      this._domHeadSection = this.constructor.createDiv(headCSSClasses);
      this._domView.appendChild(this._domHeadSection);
      domHeadLabel = this.constructor.createDiv(['ct-section__label']);
      domHeadLabel.textContent = ContentEdit._('Table head');
      this._domHeadSection.appendChild(domHeadLabel);
      this._domHeadSwitch = this.constructor.createDiv(['ct-section__switch']);
      this._domHeadSection.appendChild(this._domHeadSwitch);
      this._domBodySection = this.constructor.createDiv(['ct-section', 'ct-section--applied', 'ct-section--contains-input']);
      this._domView.appendChild(this._domBodySection);
      domBodyLabel = this.constructor.createDiv(['ct-section__label']);
      domBodyLabel.textContent = ContentEdit._('Table body (columns)');
      this._domBodySection.appendChild(domBodyLabel);
      this._domBodyInput = document.createElement('input');
      this._domBodyInput.setAttribute('class', 'ct-section__input');
      this._domBodyInput.setAttribute('maxlength', '2');
      this._domBodyInput.setAttribute('name', 'columns');
      this._domBodyInput.setAttribute('type', 'text');
      this._domBodyInput.setAttribute('value', cfg.columns);
      this._domBodySection.appendChild(this._domBodyInput);
      footCSSClasses = ['ct-section'];
      if (cfg.foot) {
        footCSSClasses.push('ct-section--applied');
      }
      this._domFootSection = this.constructor.createDiv(footCSSClasses);
      this._domView.appendChild(this._domFootSection);
      domFootLabel = this.constructor.createDiv(['ct-section__label']);
      domFootLabel.textContent = ContentEdit._('Table foot');
      this._domFootSection.appendChild(domFootLabel);
      this._domFootSwitch = this.constructor.createDiv(['ct-section__switch']);
      this._domFootSection.appendChild(this._domFootSwitch);
      domControlGroup = this.constructor.createDiv(['ct-control-group', 'ct-control-group--right']);
      this._domControls.appendChild(domControlGroup);
      this._domApply = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--apply']);
      this._domApply.textContent = 'Apply';
      domControlGroup.appendChild(this._domApply);
      return this._addDOMEventListeners();
    };

    TableDialog.prototype.save = function() {
      var detail, footCSSClass, headCSSClass;
      footCSSClass = this._domFootSection.getAttribute('class');
      headCSSClass = this._domHeadSection.getAttribute('class');
      detail = {
        columns: parseInt(this._domBodyInput.value),
        foot: footCSSClass.indexOf('ct-section--applied') > -1,
        head: headCSSClass.indexOf('ct-section--applied') > -1
      };
      return this.dispatchEvent(this.createEvent('save', detail));
    };

    TableDialog.prototype.unmount = function() {
      TableDialog.__super__.unmount.call(this);
      this._domBodyInput = null;
      this._domBodySection = null;
      this._domApply = null;
      this._domHeadSection = null;
      this._domHeadSwitch = null;
      this._domFootSection = null;
      return this._domFootSwitch = null;
    };

    TableDialog.prototype._addDOMEventListeners = function() {
      var toggleSection;
      TableDialog.__super__._addDOMEventListeners.call(this);
      toggleSection = function(ev) {
        ev.preventDefault();
        if (this.getAttribute('class').indexOf('ct-section--applied') > -1) {
          return ContentEdit.removeCSSClass(this, 'ct-section--applied');
        } else {
          return ContentEdit.addCSSClass(this, 'ct-section--applied');
        }
      };
      this._domHeadSection.addEventListener('click', toggleSection);
      this._domFootSection.addEventListener('click', toggleSection);
      this._domBodySection.addEventListener('click', (function(_this) {
        return function(ev) {
          return _this._domBodyInput.focus();
        };
      })(this));
      this._domBodyInput.addEventListener('input', (function(_this) {
        return function(ev) {
          var valid;
          valid = /^[1-9]\d{0,1}$/.test(ev.target.value);
          if (valid) {
            ContentEdit.removeCSSClass(_this._domBodyInput, 'ct-section__input--invalid');
            return ContentEdit.removeCSSClass(_this._domApply, 'ct-control--muted');
          } else {
            ContentEdit.addCSSClass(_this._domBodyInput, 'ct-section__input--invalid');
            return ContentEdit.addCSSClass(_this._domApply, 'ct-control--muted');
          }
        };
      })(this));
      return this._domApply.addEventListener('click', (function(_this) {
        return function(ev) {
          var cssClass;
          ev.preventDefault();
          cssClass = _this._domApply.getAttribute('class');
          if (cssClass.indexOf('ct-control--muted') === -1) {
            return _this.save();
          }
        };
      })(this));
    };

    return TableDialog;

  })(ContentTools.DialogUI);

  ContentTools.VideoDialog = (function(_super) {
    __extends(VideoDialog, _super);

    function VideoDialog() {
      VideoDialog.__super__.constructor.call(this, 'Insert video');
    }

    VideoDialog.prototype.clearPreview = function() {
      if (this._domPreview) {
        this._domPreview.parentNode.removeChild(this._domPreview);
        return this._domPreview = void 0;
      }
    };

    VideoDialog.prototype.mount = function() {
      var domControlGroup;
      VideoDialog.__super__.mount.call(this);
      ContentEdit.addCSSClass(this._domElement, 'ct-video-dialog');
      ContentEdit.addCSSClass(this._domView, 'ct-video-dialog__preview');
      domControlGroup = this.constructor.createDiv(['ct-control-group']);
      this._domControls.appendChild(domControlGroup);
      this._domInput = document.createElement('input');
      this._domInput.setAttribute('class', 'ct-video-dialog__input');
      this._domInput.setAttribute('name', 'url');
      this._domInput.setAttribute('placeholder', ContentEdit._('Paste YouTube or Vimeo URL') + '...');
      this._domInput.setAttribute('type', 'text');
      domControlGroup.appendChild(this._domInput);
      this._domButton = this.constructor.createDiv(['ct-control', 'ct-control--text', 'ct-control--insert', 'ct-control--muted']);
      this._domButton.textContent = ContentEdit._('Insert');
      domControlGroup.appendChild(this._domButton);
      return this._addDOMEventListeners();
    };

    VideoDialog.prototype.preview = function(url) {
      this.clearPreview();
      this._domPreview = document.createElement('iframe');
      this._domPreview.setAttribute('frameborder', '0');
      this._domPreview.setAttribute('height', '100%');
      this._domPreview.setAttribute('src', url);
      this._domPreview.setAttribute('width', '100%');
      return this._domView.appendChild(this._domPreview);
    };

    VideoDialog.prototype.save = function() {
      var embedURL, videoURL;
      videoURL = this._domInput.value.trim();
      embedURL = ContentTools.getEmbedVideoURL(videoURL);
      if (embedURL) {
        return this.dispatchEvent(this.createEvent('save', {
          'url': embedURL
        }));
      } else {
        return this.dispatchEvent(this.createEvent('save', {
          'url': videoURL
        }));
      }
    };

    VideoDialog.prototype.show = function() {
      VideoDialog.__super__.show.call(this);
      return this._domInput.focus();
    };

    VideoDialog.prototype.unmount = function() {
      if (this.isMounted()) {
        this._domInput.blur();
      }
      VideoDialog.__super__.unmount.call(this);
      this._domButton = null;
      this._domInput = null;
      return this._domPreview = null;
    };

    VideoDialog.prototype._addDOMEventListeners = function() {
      VideoDialog.__super__._addDOMEventListeners.call(this);
      this._domInput.addEventListener('input', (function(_this) {
        return function(ev) {
          var updatePreview;
          if (ev.target.value) {
            ContentEdit.removeCSSClass(_this._domButton, 'ct-control--muted');
          } else {
            ContentEdit.addCSSClass(_this._domButton, 'ct-control--muted');
          }
          if (_this._updatePreviewTimeout) {
            clearTimeout(_this._updatePreviewTimeout);
          }
          updatePreview = function() {
            var embedURL, videoURL;
            videoURL = _this._domInput.value.trim();
            embedURL = ContentTools.getEmbedVideoURL(videoURL);
            if (embedURL) {
              return _this.preview(embedURL);
            } else {
              return _this.clearPreview();
            }
          };
          return _this._updatePreviewTimeout = setTimeout(updatePreview, 500);
        };
      })(this));
      this._domInput.addEventListener('keypress', (function(_this) {
        return function(ev) {
          if (ev.keyCode === 13) {
            return _this.save();
          }
        };
      })(this));
      return this._domButton.addEventListener('click', (function(_this) {
        return function(ev) {
          var cssClass;
          ev.preventDefault();
          cssClass = _this._domButton.getAttribute('class');
          if (cssClass.indexOf('ct-control--muted') === -1) {
            return _this.save();
          }
        };
      })(this));
    };

    return VideoDialog;

  })(ContentTools.DialogUI);

  _EditorApp = (function(_super) {
    __extends(_EditorApp, _super);

    function _EditorApp() {
      _EditorApp.__super__.constructor.call(this);
      this.history = null;
      this._state = 'dormant';
      this._busy = false;
      this._namingProp = null;
      this._fixtureTest = function(domElement) {
        return domElement.hasAttribute('data-fixture');
      };
      this._regionQuery = null;
      this._domRegions = null;
      this._regions = {};
      this._orderedRegions = [];
      this._rootLastModified = null;
      this._regionsLastModified = {};
      this._ignition = null;
      this._inspector = null;
      this._toolbox = null;
      this._emptyRegionsAllowed = false;
    }

    _EditorApp.prototype.ctrlDown = function() {
      return this._ctrlDown;
    };

    _EditorApp.prototype.domRegions = function() {
      return this._domRegions;
    };

    _EditorApp.prototype.getState = function() {
      return this._state;
    };

    _EditorApp.prototype.ignition = function() {
      return this._ignition;
    };

    _EditorApp.prototype.inspector = function() {
      return this._inspector;
    };

    _EditorApp.prototype.isDormant = function() {
      return this._state === 'dormant';
    };

    _EditorApp.prototype.isReady = function() {
      return this._state === 'ready';
    };

    _EditorApp.prototype.isEditing = function() {
      return this._state === 'editing';
    };

    _EditorApp.prototype.orderedRegions = function() {
      var name;
      return (function() {
        var _i, _len, _ref, _results;
        _ref = this._orderedRegions;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          _results.push(this._regions[name]);
        }
        return _results;
      }).call(this);
    };

    _EditorApp.prototype.regions = function() {
      return this._regions;
    };

    _EditorApp.prototype.shiftDown = function() {
      return this._shiftDown;
    };

    _EditorApp.prototype.toolbox = function() {
      return this._toolbox;
    };

    _EditorApp.prototype.busy = function(busy) {
      if (busy === void 0) {
        this._busy = busy;
      }
      this._busy = busy;
      if (this._ignition) {
        return this._ignition.busy(busy);
      }
    };

    _EditorApp.prototype.createPlaceholderElement = function(region) {
      return new ContentEdit.Text('p', {}, '');
    };

    _EditorApp.prototype.init = function(queryOrDOMElements, namingProp, fixtureTest, withIgnition) {
      if (namingProp == null) {
        namingProp = 'id';
      }
      if (fixtureTest == null) {
        fixtureTest = null;
      }
      if (withIgnition == null) {
        withIgnition = true;
      }
      this._namingProp = namingProp;
      if (fixtureTest) {
        this._fixtureTest = fixtureTest;
      }
      this.mount();
      if (withIgnition) {
        this._ignition = new ContentTools.IgnitionUI();
        this.attach(this._ignition);
        this._ignition.addEventListener('edit', (function(_this) {
          return function(ev) {
            ev.preventDefault();
            _this.start();
            return _this._ignition.state('editing');
          };
        })(this));
        this._ignition.addEventListener('confirm', (function(_this) {
          return function(ev) {
            ev.preventDefault();
            if (_this._ignition.state() !== 'editing') {
              return;
            }
            _this._ignition.state('ready');
            return _this.stop(true);
          };
        })(this));
        this._ignition.addEventListener('cancel', (function(_this) {
          return function(ev) {
            ev.preventDefault();
            if (_this._ignition.state() !== 'editing') {
              return;
            }
            _this.stop(false);
            if (_this.isEditing()) {
              return _this._ignition.state('editing');
            } else {
              return _this._ignition.state('ready');
            }
          };
        })(this));
      }
      this._toolbox = new ContentTools.ToolboxUI(ContentTools.DEFAULT_TOOLS);
      this.attach(this._toolbox);
      this._inspector = new ContentTools.InspectorUI();
      this.attach(this._inspector);
      this._state = 'ready';
      this._handleDetach = (function(_this) {
        return function(element) {
          return _this._preventEmptyRegions();
        };
      })(this);
      this._handleClipboardPaste = (function(_this) {
        return function(element, ev) {
          var clipboardData;
          clipboardData = null;
          if (ev.clipboardData) {
            clipboardData = ev.clipboardData.getData('text/plain');
          }
          if (window.clipboardData) {
            clipboardData = window.clipboardData.getData('TEXT');
          }
          return _this.paste(element, clipboardData);
        };
      })(this);
      this._handleNextRegionTransition = (function(_this) {
        return function(region) {
          var child, element, index, regions, _i, _len, _ref;
          regions = _this.orderedRegions();
          index = regions.indexOf(region);
          if (index >= (regions.length - 1)) {
            return;
          }
          region = regions[index + 1];
          element = null;
          _ref = region.descendants();
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            if (child.content !== void 0) {
              element = child;
              break;
            }
          }
          if (element) {
            element.focus();
            element.selection(new ContentSelect.Range(0, 0));
            return;
          }
          return ContentEdit.Root.get().trigger('next-region', region);
        };
      })(this);
      this._handlePreviousRegionTransition = (function(_this) {
        return function(region) {
          var child, descendants, element, index, length, regions, _i, _len;
          regions = _this.orderedRegions();
          index = regions.indexOf(region);
          if (index <= 0) {
            return;
          }
          region = regions[index - 1];
          element = null;
          descendants = region.descendants();
          descendants.reverse();
          for (_i = 0, _len = descendants.length; _i < _len; _i++) {
            child = descendants[_i];
            if (child.content !== void 0) {
              element = child;
              break;
            }
          }
          if (element) {
            length = element.content.length();
            element.focus();
            element.selection(new ContentSelect.Range(length, length));
            return;
          }
          return ContentEdit.Root.get().trigger('previous-region', region);
        };
      })(this);
      ContentEdit.Root.get().bind('detach', this._handleDetach);
      ContentEdit.Root.get().bind('paste', this._handleClipboardPaste);
      ContentEdit.Root.get().bind('next-region', this._handleNextRegionTransition);
      ContentEdit.Root.get().bind('previous-region', this._handlePreviousRegionTransition);
      return this.syncRegions(queryOrDOMElements);
    };

    _EditorApp.prototype.destroy = function() {
      ContentEdit.Root.get().unbind('detach', this._handleDetach);
      ContentEdit.Root.get().unbind('paste', this._handleClipboardPaste);
      ContentEdit.Root.get().unbind('next-region', this._handleNextRegionTransition);
      ContentEdit.Root.get().unbind('previous-region', this._handlePreviousRegionTransition);
      this.removeEventListener();
      this.unmount();
      return this._children = [];
    };

    _EditorApp.prototype.highlightRegions = function(highlight) {
      var domRegion, _i, _len, _ref, _results;
      _ref = this._domRegions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        domRegion = _ref[_i];
        if (highlight) {
          _results.push(ContentEdit.addCSSClass(domRegion, 'ct--highlight'));
        } else {
          _results.push(ContentEdit.removeCSSClass(domRegion, 'ct--highlight'));
        }
      }
      return _results;
    };

    _EditorApp.prototype.mount = function() {
      this._domElement = this.constructor.createDiv(['ct-app']);
      document.body.insertBefore(this._domElement, null);
      return this._addDOMEventListeners();
    };

    _EditorApp.prototype.paste = function(element, clipboardData) {
      var character, content, cursor, encodeHTML, i, insertAt, insertIn, insertNode, item, itemText, lastItem, line, lineLength, lines, replaced, selection, spawn, tags, tail, tip, type, _i, _len;
      content = clipboardData;
      lines = content.split('\n');
      lines = lines.filter(function(line) {
        return line.trim() !== '';
      });
      if (!lines) {
        return;
      }
      encodeHTML = HTMLString.String.encode;
      spawn = true;
      type = element.type();
      if (lines.length === 1) {
        spawn = false;
      }
      if (type === 'PreText') {
        spawn = false;
      }
      if (!element.can('spawn')) {
        spawn = false;
      }
      if (spawn) {
        if (type === 'ListItemText') {
          insertNode = element.parent();
          insertIn = element.parent().parent();
          insertAt = insertIn.children.indexOf(insertNode) + 1;
        } else {
          insertNode = element;
          if (insertNode.parent().type() !== 'Region') {
            insertNode = element.closest(function(node) {
              return node.parent().type() === 'Region';
            });
          }
          insertIn = insertNode.parent();
          insertAt = insertIn.children.indexOf(insertNode) + 1;
        }
        for (i = _i = 0, _len = lines.length; _i < _len; i = ++_i) {
          line = lines[i];
          line = encodeHTML(line);
          if (type === 'ListItemText') {
            item = new ContentEdit.ListItem();
            itemText = new ContentEdit.ListItemText(line);
            item.attach(itemText);
            lastItem = itemText;
          } else {
            item = new ContentEdit.Text('p', {}, line);
            lastItem = item;
          }
          insertIn.attach(item, insertAt + i);
        }
        lineLength = lastItem.content.length();
        lastItem.focus();
        return lastItem.selection(new ContentSelect.Range(lineLength, lineLength));
      } else {
        content = encodeHTML(content);
        content = new HTMLString.String(content, type === 'PreText');
        selection = element.selection();
        cursor = selection.get()[0] + content.length();
        tip = element.content.substring(0, selection.get()[0]);
        tail = element.content.substring(selection.get()[1]);
        replaced = element.content.substring(selection.get()[0], selection.get()[1]);
        if (replaced.length()) {
          character = replaced.characters[0];
          tags = character.tags();
          if (character.isTag()) {
            tags.shift();
          }
          if (tags.length >= 1) {
            content = content.format.apply(content, [0, content.length()].concat(__slice.call(tags)));
          }
        }
        element.content = tip.concat(content);
        element.content = element.content.concat(tail, false);
        element.updateInnerHTML();
        element.taint();
        selection.set(cursor, cursor);
        return element.selection(selection);
      }
    };

    _EditorApp.prototype.unmount = function() {
      var child, _i, _len, _ref;
      if (!this.isMounted()) {
        return;
      }
      _ref = this._children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        child.unmount();
      }
      this._domElement.parentNode.removeChild(this._domElement);
      this._domElement = null;
      this._removeDOMEventListeners();
      this._ignition = null;
      this._inspector = null;
      return this._toolbox = null;
    };

    _EditorApp.prototype.revert = function() {
      var confirmMessage;
      if (!this.dispatchEvent(this.createEvent('revert'))) {
        return;
      }
      if (ContentTools.CANCEL_MESSAGE) {
        confirmMessage = ContentEdit._(ContentTools.CANCEL_MESSAGE);
        if (ContentEdit.Root.get().lastModified() > this._rootLastModified && !window.confirm(confirmMessage)) {
          return false;
        }
      }
      this.revertToSnapshot(this.history.goTo(0), false);
      return true;
    };

    _EditorApp.prototype.revertToSnapshot = function(snapshot, restoreEditable) {
      var child, name, region, wrapper, _i, _len, _ref, _ref1, _ref2;
      if (restoreEditable == null) {
        restoreEditable = true;
      }
      _ref = this._regions;
      for (name in _ref) {
        region = _ref[name];
        _ref1 = region.children;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          child = _ref1[_i];
          child.unmount();
        }
        if (region.children.length === 1 && region.children[0].isFixed()) {
          wrapper = this.constructor.createDiv();
          wrapper.innerHTML = snapshot.regions[name];
          region.domElement().parentNode.replaceChild(wrapper.firstElementChild, region.domElement());
        } else {
          region.domElement().innerHTML = snapshot.regions[name];
        }
      }
      if (restoreEditable) {
        if (ContentEdit.Root.get().focused()) {
          ContentEdit.Root.get().focused().blur();
        }
        this._regions = {};
        this.syncRegions(null, true);
        ContentEdit.Root.get()._modified = snapshot.rootModified;
        _ref2 = this._regions;
        for (name in _ref2) {
          region = _ref2[name];
          if (snapshot.regionModifieds[name]) {
            region._modified = snapshot.regionModifieds[name];
          }
        }
        this.history.replaceRegions(this._regions);
        this.history.restoreSelection(snapshot);
        return this._inspector.updateTags();
      }
    };

    _EditorApp.prototype.save = function(passive) {
      var child, html, modifiedRegions, name, region, root, wrapper, _i, _len, _ref, _ref1;
      if (!this.dispatchEvent(this.createEvent('save', {
        passive: passive
      }))) {
        return;
      }
      root = ContentEdit.Root.get();
      if (root.lastModified() === this._rootLastModified && passive) {
        this.dispatchEvent(this.createEvent('saved', {
          regions: {},
          passive: passive
        }));
        return;
      }
      modifiedRegions = {};
      _ref = this._regions;
      for (name in _ref) {
        region = _ref[name];
        html = region.html();
        if (region.children.length === 1) {
          child = region.children[0];
          if (child.content && !child.content.html()) {
            html = '';
          }
        }
        if (!passive) {
          _ref1 = region.children;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            child = _ref1[_i];
            child.unmount();
          }
          if (region.children.length === 1 && region.children[0].isFixed()) {
            wrapper = this.constructor.createDiv();
            wrapper.innerHTML = html;
            region.domElement().parentNode.replaceChild(wrapper.firstElementChild, region.domElement());
          } else {
            region.domElement().innerHTML = html;
          }
        }
        if (region.lastModified() === this._regionsLastModified[name]) {
          continue;
        }
        modifiedRegions[name] = html;
        this._regionsLastModified[name] = region.lastModified();
      }
      return this.dispatchEvent(this.createEvent('saved', {
        regions: modifiedRegions,
        passive: passive
      }));
    };

    _EditorApp.prototype.setRegionOrder = function(regionNames) {
      return this._orderedRegions = regionNames.slice();
    };

    _EditorApp.prototype.start = function() {
      if (!this.dispatchEvent(this.createEvent('start'))) {
        return;
      }
      this.busy(true);
      this.syncRegions();
      this._initRegions();
      this._preventEmptyRegions();
      this._rootLastModified = ContentEdit.Root.get().lastModified();
      this.history = new ContentTools.History(this._regions);
      this.history.watch();
      this._state = 'editing';
      this._toolbox.show();
      this._inspector.show();
      return this.busy(false);
    };

    _EditorApp.prototype.stop = function(save) {
      var focused;
      if (!this.dispatchEvent(this.createEvent('stop', {
        save: save
      }))) {
        return;
      }
      focused = ContentEdit.Root.get().focused();
      if (focused && focused.isMounted() && focused._syncContent !== void 0) {
        focused._syncContent();
      }
      if (save) {
        this.save();
      } else {
        if (!this.revert()) {
          return;
        }
      }
      this.history.stopWatching();
      this.history = null;
      this._toolbox.hide();
      this._inspector.hide();
      this._regions = {};
      this._state = 'ready';
      if (ContentEdit.Root.get().focused()) {
        this._allowEmptyRegions((function(_this) {
          return function() {
            return ContentEdit.Root.get().focused().blur();
          };
        })(this));
      }
    };

    _EditorApp.prototype.syncRegions = function(regionQuery, restoring) {
      if (regionQuery) {
        this._regionQuery = regionQuery;
      }
      this._domRegions = [];
      if (this._regionQuery) {
        if (typeof this._regionQuery === 'string' || this._regionQuery instanceof String) {
          this._domRegions = document.querySelectorAll(this._regionQuery);
        } else {
          this._domRegions = this._regionQuery;
        }
      }
      if (this._state === 'editing') {
        this._initRegions(restoring);
        this._preventEmptyRegions();
      }
      if (this._ignition) {
        if (this._domRegions.length) {
          return this._ignition.show();
        } else {
          return this._ignition.hide();
        }
      }
    };

    _EditorApp.prototype._addDOMEventListeners = function() {
      this._handleHighlightOn = (function(_this) {
        return function(ev) {
          var _ref;
          if ((_ref = ev.keyCode) === 17 || _ref === 224 || _ref === 91 || _ref === 93) {
            _this._ctrlDown = true;
          }
          if (ev.keyCode === 16 && !_this._ctrlDown) {
            if (_this._highlightTimeout) {
              return;
            }
            _this._shiftDown = true;
            _this._highlightTimeout = setTimeout(function() {
              return _this.highlightRegions(true);
            }, ContentTools.HIGHLIGHT_HOLD_DURATION);
            return;
          }
          clearTimeout(_this._highlightTimeout);
          return _this.highlightRegions(false);
        };
      })(this);
      this._handleHighlightOff = (function(_this) {
        return function(ev) {
          var _ref;
          if ((_ref = ev.keyCode) === 17 || _ref === 224) {
            _this._ctrlDown = false;
            return;
          }
          if (ev.keyCode === 16) {
            _this._shiftDown = false;
            if (_this._highlightTimeout) {
              clearTimeout(_this._highlightTimeout);
              _this._highlightTimeout = null;
            }
            return _this.highlightRegions(false);
          }
        };
      })(this);
      this._handleVisibility = (function(_this) {
        return function(ev) {
          if (!document.hasFocus()) {
            clearTimeout(_this._highlightTimeout);
            return _this.highlightRegions(false);
          }
        };
      })(this);
      document.addEventListener('keydown', this._handleHighlightOn);
      document.addEventListener('keyup', this._handleHighlightOff);
      document.addEventListener('visibilitychange', this._handleVisibility);
      this._handleBeforeUnload = (function(_this) {
        return function(ev) {
          var cancelMessage;
          if (_this._state === 'editing' && ContentTools.CANCEL_MESSAGE) {
            cancelMessage = ContentEdit._(ContentTools.CANCEL_MESSAGE);
            (ev || window.event).returnValue = cancelMessage;
            return cancelMessage;
          }
        };
      })(this);
      window.addEventListener('beforeunload', this._handleBeforeUnload);
      this._handleUnload = (function(_this) {
        return function(ev) {
          return _this.destroy();
        };
      })(this);
      return window.addEventListener('unload', this._handleUnload);
    };

    _EditorApp.prototype._allowEmptyRegions = function(callback) {
      this._emptyRegionsAllowed = true;
      callback();
      return this._emptyRegionsAllowed = false;
    };

    _EditorApp.prototype._preventEmptyRegions = function() {
      var child, hasEditableChildren, lastModified, name, placeholder, region, _i, _len, _ref, _ref1, _results;
      if (this._emptyRegionsAllowed) {
        return;
      }
      _ref = this._regions;
      _results = [];
      for (name in _ref) {
        region = _ref[name];
        lastModified = region.lastModified();
        hasEditableChildren = false;
        _ref1 = region.children;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          child = _ref1[_i];
          if (child.type() !== 'Static') {
            hasEditableChildren = true;
            break;
          }
        }
        if (hasEditableChildren) {
          continue;
        }
        placeholder = this.createPlaceholderElement(region);
        region.attach(placeholder);
        _results.push(region._modified = lastModified);
      }
      return _results;
    };

    _EditorApp.prototype._removeDOMEventListeners = function() {
      document.removeEventListener('keydown', this._handleHighlightOn);
      document.removeEventListener('keyup', this._handleHighlightOff);
      window.removeEventListener('beforeunload', this._handleBeforeUnload);
      return window.removeEventListener('unload', this._handleUnload);
    };

    _EditorApp.prototype._initRegions = function(restoring) {
      var domRegion, found, i, index, name, region, _i, _len, _ref, _ref1, _results;
      if (restoring == null) {
        restoring = false;
      }
      found = {};
      this._orderedRegions = [];
      _ref = this._domRegions;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        domRegion = _ref[i];
        name = domRegion.getAttribute(this._namingProp);
        if (!name) {
          name = i;
        }
        found[name] = true;
        this._orderedRegions.push(name);
        if (this._regions[name] && this._regions[name].domElement() === domRegion) {
          continue;
        }
        if (this._fixtureTest(domRegion)) {
          this._regions[name] = new ContentEdit.Fixture(domRegion);
        } else {
          this._regions[name] = new ContentEdit.Region(domRegion);
        }
        if (!restoring) {
          this._regionsLastModified[name] = this._regions[name].lastModified();
        }
      }
      _ref1 = this._regions;
      _results = [];
      for (name in _ref1) {
        region = _ref1[name];
        if (found[name]) {
          continue;
        }
        delete this._regions[name];
        delete this._regionsLastModified[name];
        index = this._orderedRegions.indexOf(name);
        if (index > -1) {
          _results.push(this._orderedRegions.splice(index, 1));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return _EditorApp;

  })(ContentTools.ComponentUI);

  ContentTools.EditorApp = (function() {
    var instance;

    function EditorApp() {}

    instance = null;

    EditorApp.get = function() {
      var cls;
      cls = ContentTools.EditorApp.getCls();
      return instance != null ? instance : instance = new cls();
    };

    EditorApp.getCls = function() {
      return _EditorApp;
    };

    return EditorApp;

  })();

  ContentTools.History = (function() {
    function History(regions) {
      this._lastSnapshotTaken = null;
      this._regions = {};
      this.replaceRegions(regions);
      this._snapshotIndex = -1;
      this._snapshots = [];
      this._store();
    }

    History.prototype.canRedo = function() {
      return this._snapshotIndex < this._snapshots.length - 1;
    };

    History.prototype.canUndo = function() {
      return this._snapshotIndex > 0;
    };

    History.prototype.index = function() {
      return this._snapshotIndex;
    };

    History.prototype.length = function() {
      return this._snapshots.length;
    };

    History.prototype.snapshot = function() {
      return this._snapshots[this._snapshotIndex];
    };

    History.prototype.goTo = function(index) {
      this._snapshotIndex = Math.min(this._snapshots.length - 1, Math.max(0, index));
      return this.snapshot();
    };

    History.prototype.redo = function() {
      return this.goTo(this._snapshotIndex + 1);
    };

    History.prototype.replaceRegions = function(regions) {
      var k, v, _results;
      this._regions = {};
      _results = [];
      for (k in regions) {
        v = regions[k];
        _results.push(this._regions[k] = v);
      }
      return _results;
    };

    History.prototype.restoreSelection = function(snapshot) {
      var element, region;
      if (!snapshot.selected) {
        return;
      }
      region = this._regions[snapshot.selected.region];
      element = region.descendants()[snapshot.selected.element];
      element.focus();
      if (element.selection && snapshot.selected.selection) {
        return element.selection(snapshot.selected.selection);
      }
    };

    History.prototype.stopWatching = function() {
      if (this._watchInterval) {
        clearInterval(this._watchInterval);
      }
      if (this._delayedStoreTimeout) {
        return clearTimeout(this._delayedStoreTimeout);
      }
    };

    History.prototype.undo = function() {
      return this.goTo(this._snapshotIndex - 1);
    };

    History.prototype.watch = function() {
      var watch;
      this._lastSnapshotTaken = Date.now();
      watch = (function(_this) {
        return function() {
          var delayedStore, lastModified;
          lastModified = ContentEdit.Root.get().lastModified();
          if (lastModified === null) {
            return;
          }
          if (lastModified > _this._lastSnapshotTaken) {
            if (_this._delayedStoreRequested === lastModified) {
              return;
            }
            if (_this._delayedStoreTimeout) {
              clearTimeout(_this._delayedStoreTimeout);
            }
            delayedStore = function() {
              _this._lastSnapshotTaken = lastModified;
              return _this._store();
            };
            _this._delayedStoreRequested = lastModified;
            return _this._delayedStoreTimeout = setTimeout(delayedStore, 500);
          }
        };
      })(this);
      return this._watchInterval = setInterval(watch, 50);
    };

    History.prototype._store = function() {
      var element, name, other_region, region, snapshot, _ref, _ref1;
      snapshot = {
        regions: {},
        regionModifieds: {},
        rootModified: ContentEdit.Root.get().lastModified(),
        selected: null
      };
      _ref = this._regions;
      for (name in _ref) {
        region = _ref[name];
        snapshot.regions[name] = region.html();
        snapshot.regionModifieds[name] = region.lastModified();
      }
      element = ContentEdit.Root.get().focused();
      if (element) {
        snapshot.selected = {};
        region = element.closest(function(node) {
          return node.type() === 'Region' || node.type() === 'Fixture';
        });
        if (!region) {
          return;
        }
        _ref1 = this._regions;
        for (name in _ref1) {
          other_region = _ref1[name];
          if (region === other_region) {
            snapshot.selected.region = name;
            break;
          }
        }
        snapshot.selected.element = region.descendants().indexOf(element);
        if (element.selection) {
          snapshot.selected.selection = element.selection();
        }
      }
      if (this._snapshotIndex < (this._snapshots.length - 1)) {
        this._snapshots = this._snapshots.slice(0, this._snapshotIndex + 1);
      }
      this._snapshotIndex++;
      return this._snapshots.splice(this._snapshotIndex, 0, snapshot);
    };

    return History;

  })();

  ContentTools.StylePalette = (function() {
    function StylePalette() {}

    StylePalette._styles = [];

    StylePalette.add = function(styles) {
      return this._styles = this._styles.concat(styles);
    };

    StylePalette.styles = function(element) {
      var tagName;
      if (element === void 0) {
        return this._styles.slice();
      }
      tagName = element.tagName();
      return this._styles.filter(function(style) {
        if (!style._applicableTo) {
          return true;
        }
        return style._applicableTo.indexOf(tagName) !== -1;
      });
    };

    return StylePalette;

  })();

  ContentTools.Style = (function() {
    function Style(name, cssClass, applicableTo) {
      this._name = name;
      this._cssClass = cssClass;
      if (applicableTo) {
        this._applicableTo = applicableTo;
      } else {
        this._applicableTo = null;
      }
    }

    Style.prototype.applicableTo = function() {
      return this._applicableTo;
    };

    Style.prototype.cssClass = function() {
      return this._cssClass;
    };

    Style.prototype.name = function() {
      return this._name;
    };

    return Style;

  })();

  ContentTools.ToolShelf = (function() {
    function ToolShelf() {}

    ToolShelf._tools = {};

    ToolShelf.stow = function(cls, name) {
      return this._tools[name] = cls;
    };

    ToolShelf.fetch = function(name) {
      if (!this._tools[name]) {
        throw new Error("`" + name + "` has not been stowed on the tool shelf");
      }
      return this._tools[name];
    };

    return ToolShelf;

  })();

  ContentTools.Tool = (function() {
    function Tool() {}

    Tool.label = 'Tool';

    Tool.icon = 'tool';

    Tool.requiresElement = true;

    Tool.canApply = function(element, selection) {
      return false;
    };

    Tool.isApplied = function(element, selection) {
      return false;
    };

    Tool.apply = function(element, selection, callback) {
      throw new Error('Not implemented');
    };

    Tool.editor = function() {
      return ContentTools.EditorApp.get();
    };

    Tool.dispatchEditorEvent = function(name, detail) {
      return this.editor().dispatchEvent(this.editor().createEvent(name, detail));
    };

    Tool._insertAt = function(element) {
      var insertIndex, insertNode;
      insertNode = element;
      if (insertNode.parent().type() !== 'Region') {
        insertNode = element.closest(function(node) {
          return node.parent().type() === 'Region';
        });
      }
      insertIndex = insertNode.parent().children.indexOf(insertNode) + 1;
      return [insertNode, insertIndex];
    };

    return Tool;

  })();

  ContentTools.Tools.Bold = (function(_super) {
    __extends(Bold, _super);

    function Bold() {
      return Bold.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Bold, 'bold');

    Bold.label = 'Bold';

    Bold.icon = 'bold';

    Bold.tagName = 'b';

    Bold.canApply = function(element, selection) {
      if (!element.content) {
        return false;
      }
      return selection && !selection.isCollapsed();
    };

    Bold.isApplied = function(element, selection) {
      var from, to, _ref;
      if (element.content === void 0 || !element.content.length()) {
        return false;
      }
      _ref = selection.get(), from = _ref[0], to = _ref[1];
      if (from === to) {
        to += 1;
      }
      return element.content.slice(from, to).hasTags(this.tagName, true);
    };

    Bold.apply = function(element, selection, callback) {
      var from, to, toolDetail, _ref;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      element.storeState();
      _ref = selection.get(), from = _ref[0], to = _ref[1];
      if (this.isApplied(element, selection)) {
        element.content = element.content.unformat(from, to, new HTMLString.Tag(this.tagName));
      } else {
        element.content = element.content.format(from, to, new HTMLString.Tag(this.tagName));
      }
      element.content.optimize();
      element.updateInnerHTML();
      element.taint();
      element.restoreState();
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Bold;

  })(ContentTools.Tool);

  ContentTools.Tools.Italic = (function(_super) {
    __extends(Italic, _super);

    function Italic() {
      return Italic.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Italic, 'italic');

    Italic.label = 'Italic';

    Italic.icon = 'italic';

    Italic.tagName = 'i';

    return Italic;

  })(ContentTools.Tools.Bold);

  ContentTools.Tools.Link = (function(_super) {
    __extends(Link, _super);

    function Link() {
      return Link.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Link, 'link');

    Link.label = 'Link';

    Link.icon = 'link';

    Link.tagName = 'a';

    Link.getAttr = function(attrName, element, selection) {
      var c, from, selectedContent, tag, to, _i, _j, _len, _len1, _ref, _ref1, _ref2;
      if (element.type() === 'Image') {
        if (element.a) {
          return element.a[attrName];
        }
      } else if (element.isFixed() && element.tagName() === 'a') {
        return element.attr(attrName);
      } else {
        _ref = selection.get(), from = _ref[0], to = _ref[1];
        selectedContent = element.content.slice(from, to);
        _ref1 = selectedContent.characters;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          c = _ref1[_i];
          if (!c.hasTags('a')) {
            continue;
          }
          _ref2 = c.tags();
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            tag = _ref2[_j];
            if (tag.name() === 'a') {
              return tag.attr(attrName);
            }
          }
        }
      }
      return '';
    };

    Link.canApply = function(element, selection) {
      var character;
      if (element.type() === 'Image') {
        return true;
      } else if (element.isFixed() && element.tagName() === 'a') {
        return true;
      } else {
        if (!element.content) {
          return false;
        }
        if (!selection) {
          return false;
        }
        if (selection.isCollapsed()) {
          character = element.content.characters[selection.get()[0]];
          if (!character || !character.hasTags('a')) {
            return false;
          }
        }
        return true;
      }
    };

    Link.isApplied = function(element, selection) {
      if (element.type() === 'Image') {
        return element.a;
      } else if (element.isFixed() && element.tagName() === 'a') {
        return true;
      } else {
        return Link.__super__.constructor.isApplied.call(this, element, selection);
      }
    };

    Link.apply = function(element, selection, callback) {
      var allowScrolling, app, applied, characters, dialog, domElement, ends, from, measureSpan, modal, rect, scrollX, scrollY, selectTag, starts, to, toolDetail, transparent, _ref, _ref1;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      applied = false;
      if (element.type() === 'Image') {
        rect = element.domElement().getBoundingClientRect();
      } else if (element.isFixed() && element.tagName() === 'a') {
        rect = element.domElement().getBoundingClientRect();
      } else {
        if (selection.isCollapsed()) {
          characters = element.content.characters;
          starts = selection.get(0)[0];
          ends = starts;
          while (starts > 0 && characters[starts - 1].hasTags('a')) {
            starts -= 1;
          }
          while (ends < characters.length && characters[ends].hasTags('a')) {
            ends += 1;
          }
          selection = new ContentSelect.Range(starts, ends);
          selection.select(element.domElement());
        }
        element.storeState();
        selectTag = new HTMLString.Tag('span', {
          'class': 'ct--puesdo-select'
        });
        _ref = selection.get(), from = _ref[0], to = _ref[1];
        element.content = element.content.format(from, to, selectTag);
        element.updateInnerHTML();
        domElement = element.domElement();
        measureSpan = domElement.getElementsByClassName('ct--puesdo-select');
        rect = measureSpan[0].getBoundingClientRect();
      }
      app = ContentTools.EditorApp.get();
      modal = new ContentTools.ModalUI(transparent = true, allowScrolling = true);
      modal.addEventListener('click', function() {
        this.unmount();
        dialog.hide();
        if (element.content) {
          element.content = element.content.unformat(from, to, selectTag);
          element.updateInnerHTML();
          element.restoreState();
        }
        callback(applied);
        if (applied) {
          return ContentTools.Tools.Link.dispatchEditorEvent('tool-applied', toolDetail);
        }
      });
      dialog = new ContentTools.LinkDialog(this.getAttr('href', element, selection), this.getAttr('target', element, selection));
      _ref1 = ContentTools.getScrollPosition(), scrollX = _ref1[0], scrollY = _ref1[1];
      dialog.position([rect.left + (rect.width / 2) + scrollX, rect.top + (rect.height / 2) + scrollY]);
      dialog.addEventListener('save', function(ev) {
        var a, alignmentClassNames, className, detail, linkClasses, _i, _j, _len, _len1;
        detail = ev.detail();
        applied = true;
        if (element.type() === 'Image') {
          alignmentClassNames = ['align-center', 'align-left', 'align-right'];
          if (detail.href) {
            element.a = {
              href: detail.href
            };
            if (element.a) {
              element.a["class"] = element.a['class'];
            }
            if (detail.target) {
              element.a.target = detail.target;
            }
            for (_i = 0, _len = alignmentClassNames.length; _i < _len; _i++) {
              className = alignmentClassNames[_i];
              if (element.hasCSSClass(className)) {
                element.removeCSSClass(className);
                element.a['class'] = className;
                break;
              }
            }
          } else {
            linkClasses = [];
            if (element.a['class']) {
              linkClasses = element.a['class'].split(' ');
            }
            for (_j = 0, _len1 = alignmentClassNames.length; _j < _len1; _j++) {
              className = alignmentClassNames[_j];
              if (linkClasses.indexOf(className) > -1) {
                element.addCSSClass(className);
                break;
              }
            }
            element.a = null;
          }
          element.unmount();
          element.mount();
        } else if (element.isFixed() && element.tagName() === 'a') {
          element.attr('href', detail.href);
        } else {
          element.content = element.content.unformat(from, to, 'a');
          if (detail.href) {
            a = new HTMLString.Tag('a', detail);
            element.content = element.content.format(from, to, a);
            element.content.optimize();
          }
          element.updateInnerHTML();
        }
        element.taint();
        return modal.dispatchEvent(modal.createEvent('click'));
      });
      app.attach(modal);
      app.attach(dialog);
      modal.show();
      return dialog.show();
    };

    return Link;

  })(ContentTools.Tools.Bold);

  ContentTools.Tools.Heading = (function(_super) {
    __extends(Heading, _super);

    function Heading() {
      return Heading.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Heading, 'heading');

    Heading.label = 'Heading';

    Heading.icon = 'heading';

    Heading.tagName = 'h1';

    Heading.canApply = function(element, selection) {
      if (element.isFixed()) {
        return false;
      }
      return element.content !== void 0 && ['Text', 'PreText'].indexOf(element.type()) !== -1;
    };

    Heading.isApplied = function(element, selection) {
      if (!element.content) {
        return false;
      }
      if (['Text', 'PreText'].indexOf(element.type()) === -1) {
        return false;
      }
      return element.tagName() === this.tagName;
    };

    Heading.apply = function(element, selection, callback) {
      var content, insertAt, parent, textElement, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      element.storeState();
      if (element.type() === 'PreText') {
        content = element.content.html().replace(/&nbsp;/g, ' ');
        textElement = new ContentEdit.Text(this.tagName, {}, content);
        parent = element.parent();
        insertAt = parent.children.indexOf(element);
        parent.detach(element);
        parent.attach(textElement, insertAt);
        element.blur();
        textElement.focus();
        textElement.selection(selection);
      } else {
        element.removeAttr('class');
        if (element.tagName() === this.tagName) {
          element.tagName('p');
        } else {
          element.tagName(this.tagName);
        }
        element.restoreState();
      }
      this.dispatchEditorEvent('tool-applied', toolDetail);
      return callback(true);
    };

    return Heading;

  })(ContentTools.Tool);

  ContentTools.Tools.Subheading = (function(_super) {
    __extends(Subheading, _super);

    function Subheading() {
      return Subheading.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Subheading, 'subheading');

    Subheading.label = 'Subheading';

    Subheading.icon = 'subheading';

    Subheading.tagName = 'h2';

    return Subheading;

  })(ContentTools.Tools.Heading);

  ContentTools.Tools.Paragraph = (function(_super) {
    __extends(Paragraph, _super);

    function Paragraph() {
      return Paragraph.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Paragraph, 'paragraph');

    Paragraph.label = 'Paragraph';

    Paragraph.icon = 'paragraph';

    Paragraph.tagName = 'p';

    Paragraph.canApply = function(element, selection) {
      if (element.isFixed()) {
        return false;
      }
      return element !== void 0;
    };

    Paragraph.apply = function(element, selection, callback) {
      var forceAdd, paragraph, region, toolDetail;
      forceAdd = this.editor().ctrlDown();
      if (ContentTools.Tools.Heading.canApply(element) && !forceAdd) {
        return Paragraph.__super__.constructor.apply.call(this, element, selection, callback);
      } else {
        toolDetail = {
          'tool': this,
          'element': element,
          'selection': selection
        };
        if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
          return;
        }
        if (element.parent().type() !== 'Region') {
          element = element.closest(function(node) {
            return node.parent().type() === 'Region';
          });
        }
        region = element.parent();
        paragraph = new ContentEdit.Text('p');
        region.attach(paragraph, region.children.indexOf(element) + 1);
        paragraph.focus();
        callback(true);
        return this.dispatchEditorEvent('tool-applied', toolDetail);
      }
    };

    return Paragraph;

  })(ContentTools.Tools.Heading);

  ContentTools.Tools.Preformatted = (function(_super) {
    __extends(Preformatted, _super);

    function Preformatted() {
      return Preformatted.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Preformatted, 'preformatted');

    Preformatted.label = 'Preformatted';

    Preformatted.icon = 'preformatted';

    Preformatted.tagName = 'pre';

    Preformatted.apply = function(element, selection, callback) {
      var insertAt, parent, preText, text, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      if (element.type() === 'PreText') {
        ContentTools.Tools.Paragraph.apply(element, selection, callback);
        return;
      }
      text = element.content.text();
      preText = new ContentEdit.PreText('pre', {}, HTMLString.String.encode(text));
      parent = element.parent();
      insertAt = parent.children.indexOf(element);
      parent.detach(element);
      parent.attach(preText, insertAt);
      element.blur();
      preText.focus();
      preText.selection(selection);
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Preformatted;

  })(ContentTools.Tools.Heading);

  ContentTools.Tools.AlignLeft = (function(_super) {
    __extends(AlignLeft, _super);

    function AlignLeft() {
      return AlignLeft.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(AlignLeft, 'align-left');

    AlignLeft.label = 'Align left';

    AlignLeft.icon = 'align-left';

    AlignLeft.className = 'text-left';

    AlignLeft.canApply = function(element, selection) {
      return element.content !== void 0;
    };

    AlignLeft.isApplied = function(element, selection) {
      var _ref;
      if (!this.canApply(element)) {
        return false;
      }
      if ((_ref = element.type()) === 'ListItemText' || _ref === 'TableCellText') {
        element = element.parent();
      }
      return element.hasCSSClass(this.className);
    };

    AlignLeft.apply = function(element, selection, callback) {
      var alignmentClassNames, className, toolDetail, _i, _len, _ref;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      if ((_ref = element.type()) === 'ListItemText' || _ref === 'TableCellText') {
        element = element.parent();
      }
      alignmentClassNames = [ContentTools.Tools.AlignLeft.className, ContentTools.Tools.AlignCenter.className, ContentTools.Tools.AlignRight.className];
      for (_i = 0, _len = alignmentClassNames.length; _i < _len; _i++) {
        className = alignmentClassNames[_i];
        if (element.hasCSSClass(className)) {
          element.removeCSSClass(className);
          if (className === this.className) {
            return callback(true);
          }
        }
      }
      element.addCSSClass(this.className);
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return AlignLeft;

  })(ContentTools.Tool);

  ContentTools.Tools.AlignCenter = (function(_super) {
    __extends(AlignCenter, _super);

    function AlignCenter() {
      return AlignCenter.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(AlignCenter, 'align-center');

    AlignCenter.label = 'Align center';

    AlignCenter.icon = 'align-center';

    AlignCenter.className = 'text-center';

    return AlignCenter;

  })(ContentTools.Tools.AlignLeft);

  ContentTools.Tools.AlignRight = (function(_super) {
    __extends(AlignRight, _super);

    function AlignRight() {
      return AlignRight.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(AlignRight, 'align-right');

    AlignRight.label = 'Align right';

    AlignRight.icon = 'align-right';

    AlignRight.className = 'text-right';

    return AlignRight;

  })(ContentTools.Tools.AlignLeft);

  ContentTools.Tools.UnorderedList = (function(_super) {
    __extends(UnorderedList, _super);

    function UnorderedList() {
      return UnorderedList.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(UnorderedList, 'unordered-list');

    UnorderedList.label = 'Bullet list';

    UnorderedList.icon = 'unordered-list';

    UnorderedList.listTag = 'ul';

    UnorderedList.canApply = function(element, selection) {
      var _ref;
      if (element.isFixed()) {
        return false;
      }
      return element.content !== void 0 && ((_ref = element.parent().type()) === 'Region' || _ref === 'ListItem');
    };

    UnorderedList.apply = function(element, selection, callback) {
      var insertAt, list, listItem, listItemText, parent, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      if (element.parent().type() === 'ListItem') {
        element.storeState();
        list = element.closest(function(node) {
          return node.type() === 'List';
        });
        list.tagName(this.listTag);
        element.restoreState();
      } else {
        listItemText = new ContentEdit.ListItemText(element.content.copy());
        listItem = new ContentEdit.ListItem();
        listItem.attach(listItemText);
        list = new ContentEdit.List(this.listTag, {});
        list.attach(listItem);
        parent = element.parent();
        insertAt = parent.children.indexOf(element);
        parent.detach(element);
        parent.attach(list, insertAt);
        listItemText.focus();
        listItemText.selection(selection);
      }
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return UnorderedList;

  })(ContentTools.Tool);

  ContentTools.Tools.OrderedList = (function(_super) {
    __extends(OrderedList, _super);

    function OrderedList() {
      return OrderedList.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(OrderedList, 'ordered-list');

    OrderedList.label = 'Numbers list';

    OrderedList.icon = 'ordered-list';

    OrderedList.listTag = 'ol';

    return OrderedList;

  })(ContentTools.Tools.UnorderedList);

  ContentTools.Tools.Table = (function(_super) {
    __extends(Table, _super);

    function Table() {
      return Table.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Table, 'table');

    Table.label = 'Table';

    Table.icon = 'table';

    Table.canApply = function(element, selection) {
      if (element.isFixed()) {
        return false;
      }
      return element !== void 0;
    };

    Table.apply = function(element, selection, callback) {
      var app, dialog, modal, table, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      if (element.storeState) {
        element.storeState();
      }
      app = ContentTools.EditorApp.get();
      modal = new ContentTools.ModalUI();
      table = element.closest(function(node) {
        return node && node.type() === 'Table';
      });
      dialog = new ContentTools.TableDialog(table);
      dialog.addEventListener('cancel', (function(_this) {
        return function() {
          modal.hide();
          dialog.hide();
          if (element.restoreState) {
            element.restoreState();
          }
          return callback(false);
        };
      })(this));
      dialog.addEventListener('save', (function(_this) {
        return function(ev) {
          var index, keepFocus, node, tableCfg, _ref;
          tableCfg = ev.detail();
          keepFocus = true;
          if (table) {
            _this._updateTable(tableCfg, table);
            keepFocus = element.closest(function(node) {
              return node && node.type() === 'Table';
            });
          } else {
            table = _this._createTable(tableCfg);
            _ref = _this._insertAt(element), node = _ref[0], index = _ref[1];
            node.parent().attach(table, index);
            keepFocus = false;
          }
          if (keepFocus) {
            element.restoreState();
          } else {
            table.firstSection().children[0].children[0].children[0].focus();
          }
          modal.hide();
          dialog.hide();
          callback(true);
          return _this.dispatchEditorEvent('tool-applied', toolDetail);
        };
      })(this));
      app.attach(modal);
      app.attach(dialog);
      modal.show();
      return dialog.show();
    };

    Table._adjustColumns = function(section, columns) {
      var cell, cellTag, cellText, currentColumns, diff, i, row, _i, _len, _ref, _results;
      _ref = section.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        cellTag = row.children[0].tagName();
        currentColumns = row.children.length;
        diff = columns - currentColumns;
        if (diff < 0) {
          _results.push((function() {
            var _j, _results1;
            _results1 = [];
            for (i = _j = diff; diff <= 0 ? _j < 0 : _j > 0; i = diff <= 0 ? ++_j : --_j) {
              cell = row.children[row.children.length - 1];
              _results1.push(row.detach(cell));
            }
            return _results1;
          })());
        } else if (diff > 0) {
          _results.push((function() {
            var _j, _results1;
            _results1 = [];
            for (i = _j = 0; 0 <= diff ? _j < diff : _j > diff; i = 0 <= diff ? ++_j : --_j) {
              cell = new ContentEdit.TableCell(cellTag);
              row.attach(cell);
              cellText = new ContentEdit.TableCellText('');
              _results1.push(cell.attach(cellText));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Table._createTable = function(tableCfg) {
      var body, foot, head, table;
      table = new ContentEdit.Table();
      if (tableCfg.head) {
        head = this._createTableSection('thead', 'th', tableCfg.columns);
        table.attach(head);
      }
      body = this._createTableSection('tbody', 'td', tableCfg.columns);
      table.attach(body);
      if (tableCfg.foot) {
        foot = this._createTableSection('tfoot', 'td', tableCfg.columns);
        table.attach(foot);
      }
      return table;
    };

    Table._createTableSection = function(sectionTag, cellTag, columns) {
      var cell, cellText, i, row, section, _i;
      section = new ContentEdit.TableSection(sectionTag);
      row = new ContentEdit.TableRow();
      section.attach(row);
      for (i = _i = 0; 0 <= columns ? _i < columns : _i > columns; i = 0 <= columns ? ++_i : --_i) {
        cell = new ContentEdit.TableCell(cellTag);
        row.attach(cell);
        cellText = new ContentEdit.TableCellText('');
        cell.attach(cellText);
      }
      return section;
    };

    Table._updateTable = function(tableCfg, table) {
      var columns, foot, head, section, _i, _len, _ref;
      if (!tableCfg.head && table.thead()) {
        table.detach(table.thead());
      }
      if (!tableCfg.foot && table.tfoot()) {
        table.detach(table.tfoot());
      }
      columns = table.firstSection().children[0].children.length;
      if (tableCfg.columns !== columns) {
        _ref = table.children;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          section = _ref[_i];
          this._adjustColumns(section, tableCfg.columns);
        }
      }
      if (tableCfg.head && !table.thead()) {
        head = this._createTableSection('thead', 'th', tableCfg.columns);
        table.attach(head);
      }
      if (tableCfg.foot && !table.tfoot()) {
        foot = this._createTableSection('tfoot', 'td', tableCfg.columns);
        return table.attach(foot);
      }
    };

    return Table;

  })(ContentTools.Tool);

  ContentTools.Tools.Indent = (function(_super) {
    __extends(Indent, _super);

    function Indent() {
      return Indent.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Indent, 'indent');

    Indent.label = 'Indent';

    Indent.icon = 'indent';

    Indent.canApply = function(element, selection) {
      return element.parent().type() === 'ListItem' && element.parent().parent().children.indexOf(element.parent()) > 0;
    };

    Indent.apply = function(element, selection, callback) {
      var toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      element.parent().indent();
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Indent;

  })(ContentTools.Tool);

  ContentTools.Tools.Unindent = (function(_super) {
    __extends(Unindent, _super);

    function Unindent() {
      return Unindent.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Unindent, 'unindent');

    Unindent.label = 'Unindent';

    Unindent.icon = 'unindent';

    Unindent.canApply = function(element, selection) {
      return element.parent().type() === 'ListItem';
    };

    Unindent.apply = function(element, selection, callback) {
      var toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      element.parent().unindent();
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Unindent;

  })(ContentTools.Tool);

  ContentTools.Tools.LineBreak = (function(_super) {
    __extends(LineBreak, _super);

    function LineBreak() {
      return LineBreak.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(LineBreak, 'line-break');

    LineBreak.label = 'Line break';

    LineBreak.icon = 'line-break';

    LineBreak.canApply = function(element, selection) {
      return element.content;
    };

    LineBreak.apply = function(element, selection, callback) {
      var br, cursor, tail, tip, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      cursor = selection.get()[0] + 1;
      tip = element.content.substring(0, selection.get()[0]);
      tail = element.content.substring(selection.get()[1]);
      br = new HTMLString.String('<br>', element.content.preserveWhitespace());
      element.content = tip.concat(br, tail);
      element.updateInnerHTML();
      element.taint();
      selection.set(cursor, cursor);
      element.selection(selection);
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return LineBreak;

  })(ContentTools.Tool);

  ContentTools.Tools.Image = (function(_super) {
    __extends(Image, _super);

    function Image() {
      return Image.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Image, 'image');

    Image.label = 'Image';

    Image.icon = 'image';

    Image.canApply = function(element, selection) {
      if (element.isFixed()) {
        if (element.type() !== 'ImageFixture') {
          return false;
        }
      }
      return true;
    };

    Image.apply = function(element, selection, callback) {
      var app, dialog, modal, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      if (element.storeState) {
        element.storeState();
      }
      app = ContentTools.EditorApp.get();
      modal = new ContentTools.ModalUI();
      dialog = new ContentTools.ImageDialog();
      dialog.addEventListener('cancel', (function(_this) {
        return function() {
          modal.hide();
          dialog.hide();
          if (element.restoreState) {
            element.restoreState();
          }
          return callback(false);
        };
      })(this));
      dialog.addEventListener('save', (function(_this) {
        return function(ev) {
          var detail, image, imageAttrs, imageSize, imageURL, index, node, _ref;
          detail = ev.detail();
          imageURL = detail.imageURL;
          imageSize = detail.imageSize;
          imageAttrs = detail.imageAttrs;
          if (!imageAttrs) {
            imageAttrs = {};
          }
          imageAttrs.height = imageSize[1];
          imageAttrs.src = imageURL;
          imageAttrs.width = imageSize[0];
          if (element.type() === 'ImageFixture') {
            element.src(imageURL);
          } else {
            image = new ContentEdit.Image(imageAttrs);
            _ref = _this._insertAt(element), node = _ref[0], index = _ref[1];
            node.parent().attach(image, index);
            image.focus();
          }
          modal.hide();
          dialog.hide();
          callback(true);
          return _this.dispatchEditorEvent('tool-applied', toolDetail);
        };
      })(this));
      app.attach(modal);
      app.attach(dialog);
      modal.show();
      return dialog.show();
    };

    return Image;

  })(ContentTools.Tool);

  ContentTools.Tools.Video = (function(_super) {
    __extends(Video, _super);

    function Video() {
      return Video.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Video, 'video');

    Video.label = 'Video';

    Video.icon = 'video';

    Video.canApply = function(element, selection) {
      return !element.isFixed();
    };

    Video.apply = function(element, selection, callback) {
      var app, dialog, modal, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      if (element.storeState) {
        element.storeState();
      }
      app = ContentTools.EditorApp.get();
      modal = new ContentTools.ModalUI();
      dialog = new ContentTools.VideoDialog();
      dialog.addEventListener('cancel', (function(_this) {
        return function() {
          modal.hide();
          dialog.hide();
          if (element.restoreState) {
            element.restoreState();
          }
          return callback(false);
        };
      })(this));
      dialog.addEventListener('save', (function(_this) {
        return function(ev) {
          var applied, index, node, url, video, _ref;
          url = ev.detail().url;
          if (url) {
            video = new ContentEdit.Video('iframe', {
              'frameborder': 0,
              'height': ContentTools.DEFAULT_VIDEO_HEIGHT,
              'src': url,
              'width': ContentTools.DEFAULT_VIDEO_WIDTH
            });
            _ref = _this._insertAt(element), node = _ref[0], index = _ref[1];
            node.parent().attach(video, index);
            video.focus();
          } else {
            if (element.restoreState) {
              element.restoreState();
            }
          }
          modal.hide();
          dialog.hide();
          applied = url !== '';
          callback(applied);
          if (applied) {
            return _this.dispatchEditorEvent('tool-applied', toolDetail);
          }
        };
      })(this));
      app.attach(modal);
      app.attach(dialog);
      modal.show();
      return dialog.show();
    };

    return Video;

  })(ContentTools.Tool);

  ContentTools.Tools.Undo = (function(_super) {
    __extends(Undo, _super);

    function Undo() {
      return Undo.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Undo, 'undo');

    Undo.label = 'Undo';

    Undo.icon = 'undo';

    Undo.requiresElement = false;

    Undo.canApply = function(element, selection) {
      var app;
      app = ContentTools.EditorApp.get();
      return app.history && app.history.canUndo();
    };

    Undo.apply = function(element, selection, callback) {
      var app, snapshot, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      app = this.editor();
      app.history.stopWatching();
      snapshot = app.history.undo();
      app.revertToSnapshot(snapshot);
      app.history.watch();
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Undo;

  })(ContentTools.Tool);

  ContentTools.Tools.Redo = (function(_super) {
    __extends(Redo, _super);

    function Redo() {
      return Redo.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Redo, 'redo');

    Redo.label = 'Redo';

    Redo.icon = 'redo';

    Redo.requiresElement = false;

    Redo.canApply = function(element, selection) {
      var app;
      app = ContentTools.EditorApp.get();
      return app.history && app.history.canRedo();
    };

    Redo.apply = function(element, selection, callback) {
      var app, snapshot, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      app = ContentTools.EditorApp.get();
      app.history.stopWatching();
      snapshot = app.history.redo();
      app.revertToSnapshot(snapshot);
      app.history.watch();
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Redo;

  })(ContentTools.Tool);

  ContentTools.Tools.Remove = (function(_super) {
    __extends(Remove, _super);

    function Remove() {
      return Remove.__super__.constructor.apply(this, arguments);
    }

    ContentTools.ToolShelf.stow(Remove, 'remove');

    Remove.label = 'Remove';

    Remove.icon = 'remove';

    Remove.canApply = function(element, selection) {
      return !element.isFixed();
    };

    Remove.apply = function(element, selection, callback) {
      var app, list, row, table, toolDetail;
      toolDetail = {
        'tool': this,
        'element': element,
        'selection': selection
      };
      if (!this.dispatchEditorEvent('tool-apply', toolDetail)) {
        return;
      }
      app = this.editor();
      element.blur();
      if (element.nextContent()) {
        element.nextContent().focus();
      } else if (element.previousContent()) {
        element.previousContent().focus();
      }
      if (!element.isMounted()) {
        callback(true);
        this.dispatchEditorEvent('tool-applied', toolDetail);
        return;
      }
      switch (element.type()) {
        case 'ListItemText':
          if (app.ctrlDown()) {
            list = element.closest(function(node) {
              return node.parent().type() === 'Region';
            });
            list.parent().detach(list);
          } else {
            element.parent().parent().detach(element.parent());
          }
          break;
        case 'TableCellText':
          if (app.ctrlDown()) {
            table = element.closest(function(node) {
              return node.type() === 'Table';
            });
            table.parent().detach(table);
          } else {
            row = element.parent().parent();
            row.parent().detach(row);
          }
          break;
        default:
          element.parent().detach(element);
          break;
      }
      callback(true);
      return this.dispatchEditorEvent('tool-applied', toolDetail);
    };

    return Remove;

  })(ContentTools.Tool);

}).call(this);


/***/ })

/******/ });