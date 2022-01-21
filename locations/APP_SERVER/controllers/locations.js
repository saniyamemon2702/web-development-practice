// Controller1: for Index- homelist
const homelist = function (req, res) {
  res.render("index", { title: "Express" });
};

// Controller2: for Locations page- locationinfo
const locationInfo = function (req, res) {
  res.render("index", { title: "Express" });
};

// Controller3: for Locations page's revie part- addReview
const addReview = function (req, res) {
  res.render("index", { title: "Express" });
};

//exporting controllers-----Dont forget to export controllers.
// another way to export controller--
//module.exports.nameOfController=function (req, res) {
//   res.render("index", { title: "Express" });
// };
module.exports = { homelist, locationInfo, addReview };
