/*\

title: $:/plugins/iceity/beehive/macros/calc.js
module-type: macro
type: application/javascript

Calculate simple expressions

\*/
( function () {

    "use strict";

    exports.name = "calc";

    exports.params = [
        { name: "base" },
        { name: "value" },
        { name: "operation" }
    ];

    exports.run = function ( base, value, operation ) {
        console.log(base, value);
        const curr = parseFloat( base ) || 0;
        const val = parseFloat( value ) || 0;
        switch ( operation ){
            case "-": return curr - val;
            case "*": return curr * val;
            case "/": return curr / val;
            default: return curr + val;
        }
    };

} )();
