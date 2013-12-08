// Simple JavaScript Templating
// Heavily based on: John Resig - http://ejohn.org/blog/javascript-micro-templating/

var argName = 'data';

function getFuncBody(str) {
	return argName+"="+argName+"||{};var p=[];p.push('"
	+ str
	    .replace(/[\r\t\n]/g, " ")
	    .split("<%").join("\t")
	    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	    .replace(/\t=(.*?)%>/g, "',$1,'")
	    .split("\t").join("');")
	    .split("%>").join("p.push('")
	    .split("\r").join("\\'")
	+ "');return p.join('');";
}

function mtmpl(str,data) {
    var fn = new Function(argName,getFuncBody(str));
    return data ? fn(data) : fn;
}

function precompile(str) {
	return "function("+argName+"){"+getFuncBody(str)+"}";
}

module.exports = {
	mtmpl:mtmpl,
	precompile:precompile
};