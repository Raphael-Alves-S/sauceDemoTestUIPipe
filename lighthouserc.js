module.exports = {
    ci: {
      collect: {
        url: ['https://www.businessinsider.com/']
      },
      assert: {
        "assertions": {
            "categories:accessibility": ["error", {"minScore": 0.8}]
          }
      },
      upload: {
        target: 'temporary-public-storage'
      },
      server: {
        // server options here
      },
      wizard: {
        // wizard options here
      },
    },
  };