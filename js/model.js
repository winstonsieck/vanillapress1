/**
 *  Model file for working with data
 */

/**
 * Main Model Object
 *
 */

var model = {};

model.init = function() {

    model.updateLocalStore( data );
    //console.log( model.getPage( 'about' ) );
};

/**
 * Gets posts from local store
 *
 * @return posts {array} An array of post objects
 */

model.getPosts = function() {

    var posts = model.getLocalStore().posts;
    return posts;

};

/**
 * Get a single post based on url slug
 *
 * @param slug {string} the slug for the post
 * @return post {object} Single post
 */

model.getPost = function( slug ) {

    var posts = model.getLocalStore().posts;

    for(i=0; i < posts.length; i++) {
        if (slug === posts[i].slug) {
            return posts[i];
        }
    }
//    console.log('no post for slug');
    return null;
};

/**
 * Gets pages from local store
 *
 * @return pages {array} An array of page objects
 */

model.getPages = function() {

    var pages = model.getLocalStore().pages;
    return pages;

};

/**
 * Get a single page based on url slug
 *
 * @param slug {string} the slug for the page
 * @return page {object} Single page
 */

model.getPage = function( slug ) {

    var pages = model.getLocalStore().pages;

    for(i=0; i < pages.length; i++) {
        if (slug === pages[i].slug) {
            return pages[i];
        }
    }
    console.log('no page for slug');
    return null;
};

/**
 * Gets content from local store
 *
 * @return store {object} Object or array of objects of site data
 */
model.getLocalStore = function() {

    return JSON.parse( localStorage.getItem( 'VanillaPress' ) );

};


/**
 * Saves temporary store to local storage.
 *
 * @param store {string} JSON string of data to store
 */

model.updateLocalStore = function( store ) {

    localStorage.setItem('VanillaPress', JSON.stringify( store ) );

};

/**
 * Deletes data from local storage
 *
 */
model.removeLocalStorage = function() {

    localStorage.removeItem( 'VanillaPress' );

};