export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "scope", title: "Scope", type: "string" },
    { name: "summary", title: "Summary", type: "text" },
    { name: "details", title: "Details", type: "array", of: [{ type: "block" }] },
    { name: "year", title: "Year", type: "number" },
    { name: "preview", title: "Preview Link", type: "url" },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }]
    },
    { name: "features", title: "Features", type: "array", of: [{ type: "string" }] },
    { name: "stacks", title: "Stacks", type: "array", of: [{ type: "string" }] },
    { name: "category", title: "Category", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "duration", title: "Duration", type: "string" },
    { name: "teamSize", title: "Team Size", type: "string" },
    { name: "challenges", title: "Challenges", type: "text" },
    { name: "impact", title: "Impact", type: "text" }
  ]
};
