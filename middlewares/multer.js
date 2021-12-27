/* eslint-disable consistent-return */
import multer from 'multer';

const DIR = 'public/uploads';
// set storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    // Get file extension name
    const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

    // Generate random file name
    if (req.body.surname) {
      const filename = req.body.surname + ext;
      // Set file name
      cb(null, filename);
    } else {
      const filename = req.body.title + ext;
      // Set file name
      cb(null, filename);
    }
  },
});

const store = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

export default store;
