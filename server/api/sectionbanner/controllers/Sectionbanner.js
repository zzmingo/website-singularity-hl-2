'use strict';

/**
 * Sectionbanner.js controller
 *
 * @description: A set of functions called "actions" for managing `Sectionbanner`.
 */

module.exports = {

  /**
   * Retrieve sectionbanner records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sectionbanner.search(ctx.query);
    } else {
      return strapi.services.sectionbanner.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sectionbanner record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.sectionbanner.fetch(ctx.params);
  },

  /**
   * Count sectionbanner records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sectionbanner.count(ctx.query);
  },

  /**
   * Create a/an sectionbanner record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sectionbanner.add(ctx.request.body);
  },

  /**
   * Update a/an sectionbanner record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sectionbanner.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sectionbanner record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sectionbanner.remove(ctx.params);
  }
};
