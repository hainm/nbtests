exports.command = function(cellNumber, callback) {
  var self = this;

  this.execute(
     function(cellNumber) {
         var cell = Jupyter.notebook.get_cell(cellNumber);
         
         if (cell.output_area.outputs.length > 0) {
             var out = cell.output_area.outputs[0];
             return {output_type: out.output_type};
         }else{
             return {output_type: 'blank'};
         }
    },

    [cellNumber], // arguments array to be passed

    function(result) {
      if (result.value != null) {
        if (result.value.output_type){
            console.log('output_type', result.value.output_type);
            self.verify.ok(result.value.output_type != 'error', "Check that python has no error");
        }
      }
      
      
      if (typeof callback === "function") {    
        callback.call(self, result);
      }
    }
  );

  return this; // allows the command to be chained.
};
