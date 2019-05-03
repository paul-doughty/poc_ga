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
                return "/ibi_apps"
            } else {
                portnr = (document.location.port !== "") ? ":"+document.location.port  : "";
                serverref = document.domain+portnr;
                webapp    = document.location.toString().split("/")[3] ;
                console.log('docloc',document.location.toString());
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
        
        var servlet    =  server() +'/run.bip?BIP_REQUEST_TYPE=BIP_RUN';
        folder     = "&BIP_folder=" + bipPath + folder;
        var wf_ex      = '&BIP_item=' + focexec;
        var fullURL    = servlet + folder + wf_ex + "&IBI_random="+rand;

        console.log('server',server()); 
        console.log('fullURL',fullURL); 
        return fullURL;
    }

/**
 * 
 */
function config(){
        return "IBFS%253A%252FEDA%252FEDASERVE%252F";   
}

/**
 * Make a DOM element draggable
 * @param {Object} elmnt 
 */
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV: 
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      var x = Array.from(document.getElementsByClassName("workaround"));
      x.forEach(function(element){
          element.style.display = "block";
      });
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.opacity=0.3;
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      var x = Array.from(document.getElementsByClassName("workaround"));
      x.forEach(function(element){
          element.style.display = "none";
      });
      elmnt.style.opacity=1;
    }
  }

export default { server, getWFurl, config, dragElement};

