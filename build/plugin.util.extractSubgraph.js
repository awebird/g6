!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@antv/g6")):"function"==typeof define&&define.amd?define(["@antv/g6"],t):"object"==typeof exports?exports["plugin.util.extractSubgraph"]=t(require("@antv/g6")):e["plugin.util.extractSubgraph"]=t(e.G6)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=122)}({122:function(e,t,n){var r=n(3).Util,o={extract:function(e,t){var n=[];r.each(t,function(t){n="in"===e?t.getInEdges():"out"===e?t.getOutEdges():t.getEdges()});var o=[];return r.each(t,function(e){o.push(e),r.each(n,function(t){var n=t.getSource(),r=t.getTarget();n.id!==e.id&&o.push(n),r.id!==e.id&&o.push(r)})}),{reNodes:o,reEdges:n}}};r.mix(r,o)},3:function(t,n){t.exports=e}})});
//# sourceMappingURL=plugin.util.extractSubgraph.js.map