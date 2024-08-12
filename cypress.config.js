module.exports = {
  projectId: "wn5uye",
  e2e: {
    setupNodeEvents(on, config) {},
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  elementFilters: [
    {
      selector: ".copyright",
      include: false,
    },
  ],
};
