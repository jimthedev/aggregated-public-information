export default ({ env: _env }) => ({
  slugify: {
    enabled: true,
    config: {
      shouldUpdateSlug: true,
      contentTypes: {
        region: {
          field: "Slug",
          references: "Name",
        },
        subregion: {
          field: "Slug",
          references: "Name",
        },
        country: {
          field: "Slug",
          references: "Code",
        },
      },
    },
  },
});
