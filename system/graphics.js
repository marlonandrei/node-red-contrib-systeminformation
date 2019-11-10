module.exports = function(RED) {
    
    function GraphicsNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.graphics()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else {

            }
            
        });
    };
    RED.nodes.registerType("GraphicsInfo",GraphicsNode);

}