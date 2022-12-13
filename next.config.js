const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
        MONGODB_DB: process.env.NEXT_PUBLIC_MONGODB_DB,
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
