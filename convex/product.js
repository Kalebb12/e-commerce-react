import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {id : v.id('products')},
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})