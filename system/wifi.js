module.exports = function(RED) {
    
    function WifiNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.wifiNetworks()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else {
            }
            
        });
    };
    RED.nodes.registerType("WifiInfo",WifiNode);

}