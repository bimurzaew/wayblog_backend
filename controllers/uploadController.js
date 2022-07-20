module.exports.uploadController = {
  upload: (req, res) => {
    res.json({
      url: `/uploads/${req.file.originalname}`,
    });
  },
};
