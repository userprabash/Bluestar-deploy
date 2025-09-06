// Before
// import sanityClient from "@sanity/client";
// export default sanityClient({ ... });

// After
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2025-08-26",
  useCdn: true,
});

export default sanityClient;
