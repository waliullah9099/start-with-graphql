import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: String }, content: any) => {
      return db.products.find((pd) => pd.id === args.productId);
    },

    categories: () => db.categories,
    category: (parent: any, args: { categoryId: String }, content: any) => {
      return db.categories.find((cat) => cat.id === args.categoryId);
    },
  },

  Product: {
    category: ({ categoryId }, args: any, content: any) => {
      //   console.log(parent, args: any, content: any);
      return db.categories.find((cat) => cat.id === categoryId);
    },
    reviews: ({ id }, args: any, content: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },

  Category: {
    products: ({ id }, args: any, content: any) => {
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
