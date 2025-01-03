module.exports = function(RED) {
    
    function CpuNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            if (config.option == "1") {
                si.cpu()
                .then(data => {
                    msg.topic = "cpu";
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "2") {
                si.cpuFlags()
                .then(data => {
                    msg.topic = "cpuFlags";
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "3") {
                si.cpuCache()
                .then(data => {
                    msg.topic = "cpuCache";
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "4") {
                si.cpuCurrentspeed()
                .then(data => {
                    msg.topic = "cpuCurrentspeed";
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "5") {
                si.cpuTemperature()
                .then(data => {
                    msg.topic = "cpuTemperature";
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            } else if (config.option == "6") {
                si.cpu()
                .then(data => {
                    msg.topic = "cpu";
                    msg.payload = data;
                    node.send(msg);
                })
                .catch(error => console.error(error));
            }
            
        });
    };
    RED.nodes.registerType("CpuInfo",CpuNode);

}