module.exports = function(RED) {
    
    function VboxNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.vboxInfo()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else {
            }
            
        });
    };
    RED.nodes.registerType("VboxInfo",VboxNode);

}