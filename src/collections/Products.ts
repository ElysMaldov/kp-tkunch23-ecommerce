import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "priceIDR",
      type: "number",
      required: true,
    },
    {
      name: "stock",
      type: "number",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "store",
      type: "relationship",
      relationTo: "stores",
      required: true,
    },
  ],
};
