import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

export const getUserCart = query({
  // Arguments: userId to identify which user's cart to fetch
  args: { userId: v.optional(v.id("users")) },
  handler: async (ctx, args) => {
    if (!args.userId) return []
    // Fetch all cart items belonging to the user
    const cartItems = await ctx.db
      .query("cart")
      .filter(q => q.eq(q.field("userId"), args.userId))
      .collect();

    // Optionally, fetch full product details for each cart item
    const detailedCart = await Promise.all(
      cartItems.map(async (item) => {
        const product = await ctx.db.get(item.productId);
        return {
          ...item,
          product,
        };
      })
    );

    return detailedCart;
  },
});
