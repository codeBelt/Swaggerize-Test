'use strict';
var dataProvider = require('../data/pets.js');
/**
 * Operations on /pets
 */
module.exports = {
    /**
     * summary: List all pets
     * description: 
     * parameters: limit
     * produces: 
     * responses: 200, default
     */
    get: function listPets(req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    },
    /**
     * summary: Create a pet
     * description: 
     * parameters: 
     * produces: 
     * responses: 201, default
     */
    post: function createPets(req, reply, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
