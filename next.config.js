const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_URI:
          "mongodb+srv://banksinn:b910524721@cluster0.wv1rjgl.mongodb.net/?retryWrites=true&w=majority",
        MONGODB_DB: "my-site",
      },
    }
  }
  return {
    env: {
      MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
      MONGODB_DB: process.env.NEXT_PUBLIC_MONGODB_DB,
    },
  }
}
