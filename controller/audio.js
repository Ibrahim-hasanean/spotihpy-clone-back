const Audio = require("../model/audio");
const uploadToFireBase = require("../utils/uploadFireBase");
module.exports = {
  addAudio: async (req, res, next) => {
    let {
      name,
      audioTime,
      artistName,
      category,
      songName,
      releasedDate,
      audioWords,
    } = req.body;
    console.log(req.files);
    // console.log(req.files.image);
    try {
      let imageURL = await uploadToFireBase(req.files?.image[0]);
      let audioURL = await uploadToFireBase(req.files?.audio[0]);

      let newAudio = await Audio.create({
        imageURL,
        audioURL,
        name,
        audioTime,
        artistName,
        category,
        releasedDate,
        audioWords,
      });
      let audoes = await Audio.find({}).sort({ createdAt: -1 });

      res.status(201).json({ message: "audio added", audoes });
    } catch (err) {
      err.status = 400;
      return next(err);
    }
  },
  getAdudio: async (req, res) => {
    let audio = await Audio.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ audio });
  },
};
