exports.command = function(cellNumber, callback) {
  var self = this;

  this.execute(
     function(cellNumber) {
         var cell = Jupyter.notebook.get_cell(cellNumber);
         
         if (cell.output_area.outputs.length > 0) {
             var out = cell.output_area.outputs[0];
             return {output_type: out.output_type, code: cell.input[0].innerText,
                     out: out};
         }else{
             return {output_type: 'blank', code: cell.input[0].innerText,
                     out: out};
         }
    },

    [cellNumber], // arguments array to be passed

    function(result) {
      if (result.value != null) {
        if (result.value.output_type){
            if (result.value.output_type == 'error'){
                console.log('error code', result.value.code);
                console.log('error code', result.value.out);
            }
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
