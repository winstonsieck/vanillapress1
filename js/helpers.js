/**
 *  Helper file with extra helper functions
 */

var helpers = {};

/** creates a list item with a link inside for menus */
helpers.createMenuItem = function( contentObj ) {

    var menuItemEl = document.createElement( 'li' );

    menuItemEl.appendChild( helpers.createLink( contentObj ) );

    return menuItemEl;
};

/** creates link */
helpers.createLink = function( contentObj ) {

    var linkEl = document.createElement( 'a' ),
        linkTitle = document.createTextNode( contentObj.title );

    linkEl.appendChild( linkTitle );

    if( contentObj.slug === 'home' ) {
        linkEl.href = '#';
    } else {
        linkEl.href = '#' + contentObj.slug;
    }

    return linkEl;
};


/** gets the main menu element */
helpers.getMainMenuEl = function() {

    return document.querySelector( '#mainNav ul' );

};


helpers.getPageTitleEl = function() {

    return document.getElementById( 'pageTitle' );

};

helpers.getPageContentEl = function() {

    return document.getElementById( 'pageContent' );

};