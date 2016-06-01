exports.command = function(cellNumber, callback) {
  var self = this;

  this.execute(
     function(cellNumber) {
         var cell = IPython.notebook.get_cell(cellNumber);

         if (cell) {
             console.log( cell );
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
