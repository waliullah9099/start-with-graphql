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
        category: (parent, args, content) => {
            //   console.log(parent, args, content);
            return db.categories.find((cat) => cat.id === parent.categoryId);
        },
    },
};
