import { defineStorage } from "@aws-amplify/backend";

/*== STEP 2 ===============================================================
  Define your storage resource here. For more information, see:
  https://docs.amplify.aws/cli/storage/resources/
=========================================================================*/
export const storage = defineStorage({
  name: "amplifyBucketTrackerImages",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});