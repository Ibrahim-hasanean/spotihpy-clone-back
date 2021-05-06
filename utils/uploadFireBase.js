const { storage } = require("../config/firebaseAdmin");
const admin = require("../config/firebaseAdmin");

module.exports = async (file) => {
  let fileName = Date.now().toString() + file.originalname;
  let result = await admin.storage().bucket().file(fileName);
  await result.createWriteStream().end(file.buffer);
  let fileURL = await result.getSignedUrl({
    action: "read",
    expires: "03-09-2491",
  });

  return fileURL[0];
};
