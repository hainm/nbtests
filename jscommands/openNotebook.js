exports.command = function(notebookName, callback) {
  var url = "http://localhost:8889/notebooks/" + notebookName;
  console.log("url", url);
  return this.url(url); // allows the command to be chained.
};
