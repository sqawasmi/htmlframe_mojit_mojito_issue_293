/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('bar', function(Y, NAME) {

/**
 * The bar module.
 *
 * @module bar
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('barModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        redirect: function(ac) {
            ac.http.redirect('/index');
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-http-addon', 'mojito-models-addon', 'barModelFoo']});
