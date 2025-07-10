import { Product } from "@/payload-types";
import type { CollectionConfig, FieldHook } from "payload";

// TypeScript Generics
const generateSlug: FieldHook<Product, string, Product> = ({ data }) => {
  const name = data?.name;

  if (name) {
    // Hello Wolrd, Im okay
    // hello-world-im-okay
    const slug = name.toLowerCase().split(" ").join("-");

    return slug;
  }

  return data?.id ?? (Math.random() * 2_000).toString();
};

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
      name: "slug",
      type: "text",
      required: true,
      hooks: {
        beforeChange: [generateSlug],
      },
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
