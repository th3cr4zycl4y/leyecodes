export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "profileName",
      type: "string",
      title: "Name",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },

    {
      name: "heroImage",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "Info",
      title: "Background Information",
      type: "text",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "url" }],
    },
  ],
};
