module.exports = function(RED) {
    
    function SystemNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.system()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));    

            } else if (config.option == "2") {
                si.bios()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));    
            } else if (config.option == "3") {
                si.baseboard()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));    
            } else if (config.option == "4") {
                si.chassis()
                .then(data => {
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));    
            } else {
                si.system()
                .then(datasystem => {
                    si.bios()
                    .then(databios => {
                        si.baseboard()
                        .then(databaseboard => {
                            si.chassis()
                            .then(datachassis => {
                                msg.system = datasystem;
                                msg.bios = databios;
                                msg.baseboard = databaseboard;
                                msg.chassis = datachassis;
                                node.send(msg);
                            }).catch(error => console.error(error));    
                        }).catch(error => console.error(error));    
                    }).catch(error => console.error(error));    
                }).catch(error => console.error(error));    
            }            

        });
    }
    RED.nodes.registerType("System",SystemNode);


}