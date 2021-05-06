const router = require("express").Router();
const { addAudio, getAdudio } = require("../controller/audio");
const uploadImage = require("../middleware/multer");
router.post(
  "/audio",
  uploadImage.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addAudio
);

router.get("/audio", getAdudio);

module.exports = router;
