  
  var clipboard = new Clipboard('.btn', {
        target: function() {
            return document.getElementById('text-cont');
        }
    });

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });