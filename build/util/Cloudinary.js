'use strict';

var _config = require('../config/config');

require('dotenv').config;

var cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'drxkp1erj',
  api_key: '218187136849528',
  api_secret: 'dF879L426Z38DnkBvSKuG_IcSCo'
});

var cloudRoute = function cloudRoute(app) {
  // app.post(`${api}/cloud/upload`, async (req, res) => {
  //   try {
  //     const image = req.body;
  //     console.log(image);
  //     const uploadedReponse = await cloudinary.uploader.upload(`${image}`, {
  //       upload_preset: "myimage",
  //     });
  //     console.log(uploadedReponse);
  //     res.json({ msg: "uploaded" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ msg: "not uploaded" });
  //   }
  // });
};
module.exports = { cloudinary: cloudinary, cloudRoute: cloudRoute };