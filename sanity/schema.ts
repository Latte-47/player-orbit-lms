import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import chapter from "./schemaTypes/chapter";
import course from "./schemaTypes/course";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, chapter, course],
};
