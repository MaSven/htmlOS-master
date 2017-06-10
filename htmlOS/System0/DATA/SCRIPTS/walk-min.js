!function(a){return"object"==typeof exports&&"object"==typeof module?a(exports):"function"==typeof define&&define.amd?define(["exports"],a):(a((this.acorn||(this.acorn={})).walk={}),void 0)}(function(a){"use strict";function b(a){return"string"==typeof a?function(b){return b==a}:a?a:function(){return!0}}function c(a,b){this.node=a,this.state=b}function d(a,b,c){c(a,b)}function e(){}function g(a,b){return{vars:Object.create(null),prev:a,isCatch:b}}function h(a){for(;a.isCatch;)a=a.prev;return a}a.simple=function(b,c,d,e){function f(a,b,e){var g=e||a.type,h=c[g];d[g](a,b,f),h&&h(a,b)}d||(d=a.base),f(b,e)},a.ancestor=function(b,c,d,e){function f(a,b,e){var g=e||a.type,h=c[g];a!=b[b.length-1]&&(b=b.slice(),b.push(a)),d[g](a,b,f),h&&h(a,b)}d||(d=a.base),e||(e=[]),f(b,e)},a.recursive=function(b,c,d,e){function g(a,b,c){f[c||a.type](a,b,g)}var f=d?a.make(d,e):e;g(b,c)},a.findNodeAt=function(d,e,f,g,h,i){g=b(g);try{h||(h=a.base);var j=function(a,b,d){var i=d||a.type;if((null==e||a.start<=e)&&(null==f||a.end>=f)&&h[i](a,b,j),g(i,a)&&(null==e||a.start==e)&&(null==f||a.end==f))throw new c(a,b)};j(d,i)}catch(k){if(k instanceof c)return k;throw k}},a.findNodeAround=function(d,e,f,g,h){f=b(f);try{g||(g=a.base);var i=function(a,b,d){var h=d||a.type;if(!(a.start>e||a.end<e)&&(g[h](a,b,i),f(h,a)))throw new c(a,b)};i(d,h)}catch(j){if(j instanceof c)return j;throw j}},a.findNodeAfter=function(d,e,f,g,h){f=b(f);try{g||(g=a.base);var i=function(a,b,d){if(!(a.end<e)){var h=d||a.type;if(a.start>=e&&f(h,a))throw new c(a,b);g[h](a,b,i)}};i(d,h)}catch(j){if(j instanceof c)return j;throw j}},a.findNodeBefore=function(d,e,f,g,h){f=b(f),g||(g=a.base);var i,j=function(a,b,d){if(!(a.start>e)){var h=d||a.type;a.end<=e&&(!i||i.node.end<a.end)&&f(h,a)&&(i=new c(a,b)),g[h](a,b,j)}};return j(d,h),i},a.make=function(b,c){c||(c=a.base);var d={};for(var e in c)d[e]=c[e];for(var e in b)d[e]=b[e];return d};var f=a.base={};f.Program=f.BlockStatement=function(a,b,c){for(var d=0;d<a.body.length;++d)c(a.body[d],b,"Statement")},f.Statement=d,f.EmptyStatement=e,f.ExpressionStatement=function(a,b,c){c(a.expression,b,"Expression")},f.IfStatement=function(a,b,c){c(a.test,b,"Expression"),c(a.consequent,b,"Statement"),a.alternate&&c(a.alternate,b,"Statement")},f.LabeledStatement=function(a,b,c){c(a.body,b,"Statement")},f.BreakStatement=f.ContinueStatement=e,f.WithStatement=function(a,b,c){c(a.object,b,"Expression"),c(a.body,b,"Statement")},f.SwitchStatement=function(a,b,c){c(a.discriminant,b,"Expression");for(var d=0;d<a.cases.length;++d){var e=a.cases[d];e.test&&c(e.test,b,"Expression");for(var f=0;f<e.consequent.length;++f)c(e.consequent[f],b,"Statement")}},f.ReturnStatement=function(a,b,c){a.argument&&c(a.argument,b,"Expression")},f.ThrowStatement=function(a,b,c){c(a.argument,b,"Expression")},f.TryStatement=function(a,b,c){c(a.block,b,"Statement"),a.handler&&c(a.handler.body,b,"ScopeBody"),a.finalizer&&c(a.finalizer,b,"Statement")},f.WhileStatement=function(a,b,c){c(a.test,b,"Expression"),c(a.body,b,"Statement")},f.DoWhileStatement=f.WhileStatement,f.ForStatement=function(a,b,c){a.init&&c(a.init,b,"ForInit"),a.test&&c(a.test,b,"Expression"),a.update&&c(a.update,b,"Expression"),c(a.body,b,"Statement")},f.ForInStatement=function(a,b,c){c(a.left,b,"ForInit"),c(a.right,b,"Expression"),c(a.body,b,"Statement")},f.ForInit=function(a,b,c){"VariableDeclaration"==a.type?c(a,b):c(a,b,"Expression")},f.DebuggerStatement=e,f.FunctionDeclaration=function(a,b,c){c(a,b,"Function")},f.VariableDeclaration=function(a,b,c){for(var d=0;d<a.declarations.length;++d){var e=a.declarations[d];e.init&&c(e.init,b,"Expression")}},f.Function=function(a,b,c){c(a.body,b,"ScopeBody")},f.ScopeBody=function(a,b,c){c(a,b,"Statement")},f.Expression=d,f.ThisExpression=e,f.ArrayExpression=function(a,b,c){for(var d=0;d<a.elements.length;++d){var e=a.elements[d];e&&c(e,b,"Expression")}},f.ObjectExpression=function(a,b,c){for(var d=0;d<a.properties.length;++d)c(a.properties[d].value,b,"Expression")},f.FunctionExpression=f.FunctionDeclaration,f.SequenceExpression=function(a,b,c){for(var d=0;d<a.expressions.length;++d)c(a.expressions[d],b,"Expression")},f.UnaryExpression=f.UpdateExpression=function(a,b,c){c(a.argument,b,"Expression")},f.BinaryExpression=f.AssignmentExpression=f.LogicalExpression=function(a,b,c){c(a.left,b,"Expression"),c(a.right,b,"Expression")},f.ConditionalExpression=function(a,b,c){c(a.test,b,"Expression"),c(a.consequent,b,"Expression"),c(a.alternate,b,"Expression")},f.NewExpression=f.CallExpression=function(a,b,c){if(c(a.callee,b,"Expression"),a.arguments)for(var d=0;d<a.arguments.length;++d)c(a.arguments[d],b,"Expression")},f.MemberExpression=function(a,b,c){c(a.object,b,"Expression"),a.computed&&c(a.property,b,"Expression")},f.Identifier=f.Literal=e,a.scopeVisitor=a.make({Function:function(a,b,c){for(var d=g(b),e=0;e<a.params.length;++e)d.vars[a.params[e].name]={type:"argument",node:a.params[e]};if(a.id){var f="FunctionDeclaration"==a.type;(f?h(b):d).vars[a.id.name]={type:f?"function":"function name",node:a.id}}c(a.body,d,"ScopeBody")},TryStatement:function(a,b,c){if(c(a.block,b,"Statement"),a.handler){var d=g(b,!0);d.vars[a.handler.param.name]={type:"catch clause",node:a.handler.param},c(a.handler.body,d,"ScopeBody")}a.finalizer&&c(a.finalizer,b,"Statement")},VariableDeclaration:function(a,b,c){for(var d=h(b),e=0;e<a.declarations.length;++e){var f=a.declarations[e];d.vars[f.id.name]={type:"var",node:f.id},f.init&&c(f.init,b,"Expression")}}})});
