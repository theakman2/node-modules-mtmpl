var vm = require("vm");

var test = require("tap").test;

var mtmpl = require("../lib/index.js");

test("mtmpl",function(t){
	var str = "My name is <%=data.name%>.";
	var tmplFn = mtmpl.mtmpl(str);
	var precompiled = mtmpl.precompile(str);
	var context = {
		func:null
	};
	
	t.strictEqual(
		mtmpl.mtmpl(str,{name:"Bob"}),
		"My name is Bob.",
		"Template should evaluate properly."
	);
	
	t.strictEqual(
		tmplFn({name:"Jim"}),
		"My name is Jim.",
		"Should return template function correctly."
	);
	
	vm.runInNewContext('func = '+precompiled,context);
	
	t.strictEqual(
		context.func({name:"Johnny"}),
		"My name is Johnny.",
		"Precompilation should work."
	);
	
	t.end();
});