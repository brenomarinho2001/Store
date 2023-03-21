'use strict';

/**
 * postagen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postagen.postagen');
