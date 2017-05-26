'use strict';
var dataProvider = require('../../data/pets/{petId}.js');
/**
 * Operations on /pets/{petId}
 */
module.exports = {
    /**
     * summary: Info for a specific pet
     * description: 
     * parameters: petId
     * produces: 
     * responses: 200, default
     */
    get: function showPetById(req, reply, next) {
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
    }
};
