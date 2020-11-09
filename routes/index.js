const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/index.html", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/about-us.html", function (req, res, next) {
  res.sendFile("public/about-us.html", {
    root: "./",
  });
});

router.get("/menu.html", function (req, res, next) {
  res.sendFile("public/menu.html", {
    root: "./",
  });
});

router.get("/gallery.html", function (req, res, next) {
  res.sendFile("public/gallery.html", {
    root: "./",
  });
});

router.get("/contact-us.html", function (req, res, next) {
  res.sendFile("public/contact-us.hmtl", {
    root: "./",
  });
});

module.exports = router;
