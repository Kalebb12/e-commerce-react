import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addToCart = mutation({
  args: { productId: v.id("products"), userId: v.id("users") ,quantity : v.number()},
  handler: async (ctx, args) => {
    return await ctx.db.insert("cart", {
      productId: args.productId,
      userId: args.userId,
      quantity: args.quantity
    });
  },
});

// export const removeFromCart = query({

// })
