export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
    },
    {
      name: "projectInfo",
      title: "Project information",
      type: "text",
    },
    {
      name: "projectTech",
      title: "Project Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "gitHub",
      title: "GitHub Link",
      type: "url",
    },
    {
      name: "liveLink",
      title: "Link to Live Website",
      type: "url",
    },
  ],
};
