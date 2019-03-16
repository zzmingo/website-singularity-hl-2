'use strict';

/**
 * Strings.js controller
 *
 * @description: A set of functions called "actions" for managing `Strings`.
 */

module.exports = {

  /**
   * Retrieve strings records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.strings.search(ctx.query);
    } else {
      return strapi.services.strings.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a strings record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.strings.fetch(ctx.params);
  },

  /**
   * Count strings records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.strings.count(ctx.query);
  },

  /**
   * Create a/an strings record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.strings.add(ctx.request.body);
  },

  /**
   * Update a/an strings record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.strings.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an strings record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.strings.remove(ctx.params);
  }
};
