/**
 *  View file for displaying content
 */


/**
 * Main view object
 *
 */
var view = {};

/**
 * Calls initial View methods
 *
 */

view.init = function() {


};


/**
 * Gets blog posts and appends them to the page.
 *
 */
view.loadBlogPosts = function() {

    var posts = model.getPosts(),
        postsMarkup = document.createDocumentFragment(),
        primaryContentEl = helpers.getPageContentEl();



};


/**
 * Creates Markup for Blog Posts
 *
 * @param object {post} Post to create markup for
 * @return object {articleEl} Final post markup
 */


