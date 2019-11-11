module.exports = function(RED) {
    
    function NetworkNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.networkInterfaces()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "2") {
                si.networkInterfaceDefault()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "3") {

                iface = "*";
                if (msg.payload!="") {
                    iface = msg.payload;
                }

                si.networkStats(iface)
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "4") {
                si.networkConnections()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "5") {

                if (msg.payload=="") {
                    msg.payload = "ERROR: Enter with URL website in msg.payload!";
                    node.send(msg);
                } else {
                    si.inetChecksite(msg.payload)
                    .then(data => {
                        msg.payload = data;
                        node.send(msg);
                    })
                    .catch(error => console.error(error));    
                }

            } else if (config.option == "6") {

                if (msg.payload=="") {
                    msg.payload = "ERROR: Enter with HOST in msg.payload!";
                    node.send(msg);
                } else {
                    si.inetLatency(msg.payload)
                    .then(data => {
                        msg.payload = data;
                        node.send(msg);
                    })
                    .catch(error => console.error(error));
                }
            } else {
            }
            
        });
    };
    RED.nodes.registerType("NetworkInfo",NetworkNode);

}