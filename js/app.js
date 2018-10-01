
/**
 * Main app file.  Initializes app components.
 */

const articleContainer = document.getElementById('pageContent');
let vanillaPress = {};
var parsedJSONposts;

/**
 * The main app object.
 *
 */
vanillaPress.init = function() {

    parsedJSONposts = JSON.parse(jsonData);
    console.log(parsedJSONposts[0].slug);

    vanillaPress.clearPosts();
    vanillaPress.render( parsedJSONposts );
}


/******************************************************
 * Display post titles and content on page from JSON
 * Make post titles link to #slug-name
*******************************************************/

/**
 * getTitleMarkup - Get the markup for a post title
 *
 * @param  {Object} post Individual post from the API
 * @return {Object}      Title markup with link and post title
 */
vanillaPress.getTitleMarkup = function( post ) {

    const titleEl = document.createElement( 'h3' ),
        titleLinkEl = document.createElement( 'a' ),
        title = document.createTextNode( post.title );

    titleLinkEl.appendChild( title );
    titleLinkEl.href = '#' + post.slug;
    titleEl.appendChild( titleLinkEl );

    return titleEl;

};


/**
 * getContentMarkup - Get the markup for post content
 *
 * @param  {Object} post Individual post from the API
 * @return {Object}      Content markup with content
 */
vanillaPress.getContentMarkup = function( post ) {
    const contentEl = document.createElement( 'div' ),
        content = document.createTextNode('');

    contentEl.appendChild( content );
    contentEl.innerHTML = post.content;
    return contentEl;

};


/**
 * renderPost - Displays an individual post on the page
 *
 * @param  {Object} post Individual post
 */
vanillaPress.renderPost = function( post ) {

    const articleEl = document.createElement( 'article' ),
        titleEl = vanillaPress.getTitleMarkup( post ),
        contentEl = vanillaPress.getContentMarkup( post );

    articleEl.appendChild( titleEl );
    articleEl.appendChild( contentEl );
    articleContainer.appendChild(articleEl);

};


/**
 * renderPost - Display posts on the page
 *
 * @param  {Array} posts Array of Posts in JSON
 */
vanillaPress.render = function( posts ) {
    for ( let post of posts ) {
        vanillaPress.renderPost( post );
    }
};


/**
 * clearPosts - Clear posts from page
 *
 */
vanillaPress.clearPosts = function() {
    articleContainer.innerHTML = '';
};

//Run it
vanillaPress.init();



// todo When click on post title: [1] Clear content, [2] Display post content



// todo When click on a site title, display all blog posts