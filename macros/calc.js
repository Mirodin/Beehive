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
        const currentTiddler = this.getVariable( "currentTiddler" );
        base = parseFloat( base ) || parseFloat( this.wiki.getTextReference( base, 0, currentTiddler ) ) || 0;
        value = parseFloat( value ) || parseFloat( this.wiki.getTextReference( value, 0, currentTiddler ) ) || 0;
        switch ( operation ){
            case "-": return base - value;
            case "*": return base * value;
            case "/": return base / value;
            default: return base + value;
        }
    };

} )();
