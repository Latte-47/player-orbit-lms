import { defineField, defineType } from "sanity";

export default defineType({
  name: "chapter",
  title: "Chapter",
  type: "document",
  fields: [
    defineField({
      name: "chapterNo",
      title: "Chapter No.",
      type: "number",
      validation: (rule) => [
        rule.required().integer().positive().greaterThan(0),
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "mux.video",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
