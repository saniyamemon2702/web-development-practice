"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var h2Elements;
// the event handler for the click event of each h2 element
var toggle = function () {
  var h2 = this; // clicked h2 tag
  var div = h2.nextElementSibling; // h2 tag's sibling div tag

  h2Elements = faqs.getElementsByTagName("h2");
  console.log(h2);
  for (const element of h2Elements) {
    element.removeAttribute("class");
    element.nextElementSibling.removeAttribute("class");
    //   toggle plus and minus image in h2 elements by adding or removing a class
    // if (h2.hasAttribute("class")) {
    //   h2.removeAttribute("class");
    // } else {
    //   h2.setAttribute("class", "minus");
    // }

    // // toggle div visibility by adding or removing a class
    // if (div.hasAttribute("class")) {
    //   div.removeAttribute("class");
    // } else {
    //   div.setAttribute("class", "open");
    // }
  }
  h2.setAttribute("class", "minus");
  div.setAttribute("class", "open");
};

window.onload = function () {
  // get the h2 tags
  var faqs = $("faqs");
  h2Elements = faqs.getElementsByTagName("h2");
  console.log(h2Elements);

  // attach event handler for each h2 tag
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].onclick = toggle;
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
};
