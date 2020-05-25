//this needs to run with index.html to produce correct results

jQuery(function() {
  //.attr();
  //1. jQuery(selector).attr(attribute) - return the value of attribute
  var attribute = jQuery("p").attr("title"); // title is the attribute on index page -> attr now = value of 'title'
  console.log(attribute); //attribute jquery
  jQuery("p:nth-child(2)").attr(attribute); //this doesn't work because of the passing incorrect arguments
  jQuery("p:nth-child(2)").attr("value", "name");
  jQuery("#input").text(attribute); // add the attr value to #input
  console.log(attribute); // atrribute jquery, which is the value of 'title'

  //2.jQuery(selector).attr(attribute, value) - set the attribute and its value to object
  jQuery("p").attr("class", "class added");

  //so .val() is to set/get values of the attributes e.g. forms, buttons
  //and .text() is to set/get text of element

  //.html()

  //1.jQuery(selector).html(); // returns the content, it will include any child tags/elements availalbe
  var getHtml = jQuery("#html").html();
  var getText = jQuery("#html").text(); //get the text in the id attribute
  console.log(getHtml);
  console.log(getText);

  //see if there is difference between .html() & .append ()
  //2. jQuery(selector).html(content) // set the content
  jQuery("#html").html("<p>this is the new html paragraph</p>"); // ---> the .html() will overrides the content
  jQuery("#html").append("<p>this is the appended paragraph</p>"); // ----> the .append() just adds onto the content
  var getFlex = jQuery("<div>", { id: "html", class: "getFlex" }); //To create a new div, once can take this approach for better flexibility: source: http://stackoverflow.com/questions/10619445/the-prefered-way-of-creating-a-new-element-with-jquery
  jQuery("#html").append(getFlex);
});

//finding out what is jQuery('selector')[0];
var test1 = jQuery("#input");
var test2 = jQuery("#input")[0]; //this is same as document.getIdByName(input);
var test3 = jQuery("#input").get(0); // same as above --> to pull native DOM from Jquery object per: https://learn.jquery.com/using-jquery-core/faq/how-do-i-pull-a-native-dom-element-from-a-jquery-object/
var test4 = jQuery("#input")[1];
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test1[0].title); //returns 'testtile' as expected
console.log(test1.get(0).title); // same as above
//console.log(test2.title);

jQuery("#event-input").data("name", "data works");
console.log(jQuery("#event-input").data("name")); //data works

var getFoo = $("h3").data("isFoo");
console.log(getFoo);
