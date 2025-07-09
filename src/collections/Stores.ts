import type { CollectionConfig } from "payload";

export const Stores: CollectionConfig = {
  slug: "stores",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "textarea",
      required: true,
    },
    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      required: true,
      filterOptions: {
        role: {
          equals: "seller",
        },
      },
    },
    {
      name: "products",
      type: "join",
      collection: "products",
      on: "store",
      required: true,
    },
  ],
};
