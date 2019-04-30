/**
 * server - returns the server currently being used by the applicatiion
 * @param {String} requestType 
 */
function server(requestType) {
    var portnr,serverref,webapp;
    switch(requestType){
        case "server":
            portnr = (document.location.port !== "") ? ":"+document.location.port  : "";
            return document.domain+portnr;

        default:
            /* If local then bypass */
            if(document.domain === "localhost") {
                return "ibi_apps"
            } else {
                portnr = (document.location.port !== "") ? ":"+document.location.port  : "";
                serverref = document.domain+portnr;
                webapp    = document.location.toString().split("/")[3] ;
                return document.location.protocol + '/'+serverref + '/'+webapp;
            }
        }
    }

/**
 * getWFurl - returns te constructed URL for WebFOCUS using run.bip 
 * @param {String} focexec 
 * @param {*} portOveride 
 * @param {*} appOverride 
 */
function getWFurl(focexec,folder,bipPath){
        var rand = Math.random();
        var servlet    =  server() + '/run.bip?BIP_REQUEST_TYPE=BIP_RUN';
        folder     = "&BIP_folder=" + bipPath + folder;
        var wf_ex      = '&BIP_item=' + focexec;
        var fullURL    = servlet + folder + wf_ex + "&IBI_random="+rand;

        return fullURL;
    }

function config(){
        return "IBFS%253A%252FEDA%252FEDASERVE%252F";   
}

export default { server, getWFurl, config};

