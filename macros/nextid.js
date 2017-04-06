/*\

title: $:/plugins/iceity/beehive/macros/nextid.js
module-type: macro
type: application/javascript

Return next id for filter

\*/
( function () {

    "use strict";

    exports.name = "nextid";

    exports.params = [
        { name: "filter" },
        { name: "field" }
    ];

    exports.run = function ( filter, field ) {
        const names = this.wiki.filterTiddlers( filter );
        const length = names.length;
        const getTiddler = this.wiki.getTiddler;
        let high = 0;
        for ( let t = 0; t < length; t++ ) {
            const value = parseInt( getTiddler( names[t] ).fields[field] );
            high = high > value ? high : value;
        }
        return high + 1;
    };

} )();
