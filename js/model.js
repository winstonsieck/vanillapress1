/**
 *  Model file for working with data
 */

/**
 * Main Model Object
 *
 */

var model = {};

model.init = function() {

    model.updateLocalStore( jsonData );

};

/**
 * Gets posts from local store
 *
 * @return posts {array} An array of post objects
 */

model.getPosts = function() {

    var posts = model.getLocalStore();
    return posts;

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

    localStorage.setItem('VanillaPress', store);

};

/**
 * Deletes data from local storage
 *
 */
model.removeLocalStorage = function() {

    localStorage.removeItem( 'VanillaPress' );

};