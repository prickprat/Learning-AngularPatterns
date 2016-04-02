Learning Log:

26/3/2016   6:30pm - 8:30pm
27/3/16     5:30pm - 6:30pm
28/3/16     12:00pm - 1:30pm
29/3/16     8:45am - 9:15am
31/3/16     6:00pm - 7:00pm
1/4/16      8:00am - 8:45am


<> Explore Visual Studio Code, it looks pretty cool
<> Recreate the modular app in the examples:
<> gulping is awesome
    -- eslinting + formatter
    -- ng-annotate
    -- uglify

    --watching !!

<> exception handling in angular 
learn about decorations and delegates

catch vs then? 



Production Level Optimisations:

    jshint
    preparing Angular's templatecache for html templates
    concat task to bundle css and js, separately
    Angular dependency injection annotations using ngAnnotate
    uglify to minify and mangle javascript
    source maps
    css autoprefixer for vendor prefixes
    minify css
    optimize images
    index.html injection for scripts and links
    deploying all js, css, images, fonts, and index.html



Cache-controlled headers? and compression

    browser tells the server that it supports gzip compression 

    express 4.0 externalised the middlewares

Cross origin resource sharing:

    allows restricted resources from another domain to be loaded from a webpage

    cross-domain  ajax requests are typically disabled due to cross-site scripting security issues (e.g. ability to specify headers and call advanced requests)

    CORS - is a standard that allows browser and server can interact to determine whether to allow a cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.

    defines new HTTP headers
    usually only applied to requests that modify data => CORS does a pre-flight request on the external service

    the server response header 'access-control-allow-origin: xxx' is sent by the external webservice not the original web app server. CORS allows the external service to authorise a request coming from another domain, it does not allow control of external services

    JSONP - created to overcome cross domain restrictions
        json is wrapped in padding (usually a function call in javascript)

        use a script tag to call a resource --
        provide a callback name in query parameters
        server responds with json wrapping in function call
        browser interprets as javascript

        can only use script elements -> dynamically injected using javascript

        the use of JSONP can be said to allow browser pages to work around the same-origin policy via script element injection.

        The script runs within the scope of the including page and, as such, is still subject to cross-domain restrictions relative to the domain of the including page.

Favicons:??
    server-favicon npm package

Logging:
    morgan - package

    middleware for logging requests and responses to web server