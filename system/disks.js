module.exports = function(RED) {
    
    function DisksNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.diskLayout()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "2") {
                si.blockDevices()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "3") {
                si.disksIO()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "4") {
                si.fsSize()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "5") {
                si.fsOpenFiles()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "6") {
                si.fsStats()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else {

            }
            
        });
    };
    RED.nodes.registerType("DisksInfo",DisksNode);

}