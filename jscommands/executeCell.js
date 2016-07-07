exports.command = function(cellNumber, callback) {
  var self = this;

  this.execute(
     function(cellNumber) {
         var cell = Jupyter.notebook.get_cell(cellNumber);

         if (cell) {
             cell.execute();
         }
    },

    [cellNumber], // arguments array to be passed

    function(result) {
      if (typeof callback === "function") {
        callback.call(self, result);
      }
    }
  );

  return this; // allows the command to be chained.
};
