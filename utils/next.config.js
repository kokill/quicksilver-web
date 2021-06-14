const production = process.env.NODE_ENV === "production";

export const STRAPI_URL = production
  ? "https://auticare-website-nextjs.vercel.app"
  : "https://auticare-strapi-backend.herokuapp.com";