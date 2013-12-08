# node-modules-mtmpl

_Simple JavaScript templating for NodeJS_

Based heavily on [John Resig's micro-templating](http://ejohn.org/blog/javascript-micro-templating/).

## Installation

    $ npm install mtmpl
    
## Usage

````javascript
var mtmpl = require("mtmpl");

// 'Hello, my name is John!'
var html = mtmpl.mtmpl("Hello, my name is <%=name%>!",{name:"John"});

// A reusable template function.
var tmplFunc = mtmpl.mtmpl("Hello, my name is <%=name%>!");

// 'Hello, my name is Bob!'
var html1 = tmplFunc({name:"Bob"});

// 'Hello, my name is Jim!'
var html2 = tmplFunc({name:"Jim"})

// A reusable template function as a string.
var precompiled = mtmpl.precompile("Hello, my name is <%=name%>!");
````

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-mtmpl.png?branch=master)](https://travis-ci.org/theakman2/node-modules-mtmpl)

    $ npm test