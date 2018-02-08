/*\

title: $:/plugins/iceity/beehive/macro/uid.js
module-type: macro
type: application/javascript

Return new UID for tiddler title

\*/
( function () {

    "use strict";

    exports.name = "uid";

    exports.params = [
        { name: "filter" },
        { name: "field" }
    ];

    exports.run = function () {
        let newID;
        do {
            newID = Math.random().toString(36).substr(2, 6);
        } while ( this.wiki.getTiddler( newID ) )
        return newID;
    };

} )();
