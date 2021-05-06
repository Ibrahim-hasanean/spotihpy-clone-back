const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let fileName = String(file.fieldname) + Date.now() + ext;
    cb(null, fileName);
  },
});
const uploadImage = multer({
  storage: multer.memoryStorage(),
  // dest: multer.memoryStorage(),
  // storage: diskStorage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|mp3/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (extname) {
      return cb(null, true);
    } else {
      cb("Error:Only Images and audio!");
    }
  },
});

module.exports = uploadImage;
