module.exports = function(RED) {
    
    function ProcessNode(config) {
        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {

            const si = require('systeminformation');
/*
            console.log(msg.payload);
            //Se informado payload, então filtra processos desejados
            if ((msg.payload != undefined) && (msg.payload!="")) {

                var filterprocesses = msg.payload;
                var foundprocess = [];

                //Se for uma lista de string, transforma para array
                if (!Array.isArray(filterprocesses)) {
                    filterprocesses = filterprocesses.split(",");
                }

                si.processes()
                .then(dataproc => {

                    for (cont=0;cont<dataproc.list.length;cont++) {

                        for (cont2=0;cont2<filterprocesses.length;cont2++) {
                            
                            pos = dataproc.list[cont].name.toLowerCase().indexOf(filterprocesses[cont2].toLowerCase());
                            
                            if (pos > -1) {

                                var processo = {
                                    name: dataproc.list[cont].name,
                                    pcpu: dataproc.list[cont].pcpu,
                                    pmem: dataproc.list[cont].pmem,
                                    started: dataproc.list[cont].started,
                                    user: dataproc.list[cont].user,
                                    path: dataproc.list[cont].path
                                }

                                foundprocess.push(processo);
                            }
                        }


                    }
                
                    msg.payload = foundprocess;
                    node.send(msg);
                })
                .catch(error => console.error(error));

            } else {
*/
                if (config.option == "1") {
                    si.currentLoad()
                    .then(data => {
                        msg.payload = data;
                        node.send(msg);
                    })
                    .catch(error => console.error(error));
                } else if (config.option == "2") {
                    si.fullLoad()
                    .then(data => {
                        msg.payload = data;
                        node.send(msg);
                    })
                    .catch(error => console.error(error));
                } else if (config.option == "3") {
                    si.processes()
                    .then(data => {
                        msg.payload = data;
                        node.send(msg);
                    })
                    .catch(error => console.error(error));
                } else if (config.option == "4") {
                    si.services('*')
                    .then(data => {
                        msg.payload = data;
                        node.send(msg);
                    })
                    .catch(error => console.error(error));
                } else {
                }
    
            //}
            
        });
    };
    RED.nodes.registerType("ProcessInfo",ProcessNode);

}