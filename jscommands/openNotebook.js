exports.command = function(notebookName, callback) {
  return this.url("http://localhost:8889/notebooks/" + notebookName); // allows the command to be chained.
};
