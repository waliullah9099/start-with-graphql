import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, content) => {
            return db.products.find((pd) => pd.id === args.productId);
        },
        categories: () => db.categories,
        category: (parent, args, content) => {
            return db.categories.find((cat) => cat.id === args.categoryId);
        },
    },
    Product: {
        category: ({ categoryId }, args, content) => {
            //   console.log(parent, args: any, content: any);
            return db.categories.find((cat) => cat.id === categoryId);
        },
        reviews: ({ id }, args, content) => {
            return db.reviews.filter((review) => review.productId === id);
        },
    },
    Category: {
        products: ({ id }, args, content) => {
            return db.products.filter((product) => product.categoryId === id);
        },
    },
};
