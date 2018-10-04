/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
var vanillaPress = {

    init: function() {

        model.init();
     //   view.init();
        console.log(helpers.getPageContentEl() );
    }


};

vanillaPress.init();


