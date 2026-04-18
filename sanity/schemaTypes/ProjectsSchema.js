// sanity/schemaTypes/projectSchema.js

export default {
  name: "ProjectsSchema",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "E-commerce", value: "E-commerce" },
          { title: "Night Party", value: "Night Party" },
          { title: "Technology", value: "Technology" },
          { title: "Travel", value: "Travel" },
          { title: "Hospitality", value: "Hospitality" },
          { title: "Corporate", value: "Corporate" },
          { title: "Marketing", value: "Marketing" },
          { title: "Service", value: "Service" },
        ],
      },
    },

    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(250),
    },

    {
      name: "content",
      title: "Project Details",
      type: "array",
      of: [{ type: "block" }],
      description: "Full project description / case study",
    },

    {
      name: "mainImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "tags",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },

    {
      name: "projectUrl",
      title: "Live Website URL",
      type: "url",
    },

    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    },

    {
      name: "clientName",
      title: "Client Name",
      type: "string",
    },

    {
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    },

    {
      name: "themeColor",
      title: "Gradient Color",
      type: "string",
      description: "Example: from-pink-500 to-rose-500",
    },

    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },

    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.max(60),
    },

    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160),
    },

    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
};
