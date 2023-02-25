/**

 * MDi Sys website functions

 * @author Mauro Dutra <mdutra@mdisys.pw>

 * @copyright Copyright (c) 2023, MDi Sys Professional Web Developer

 * @license This code is licensed under MIT license (see https://github.com/mdutra555/portfolio/blob/main/LICENSE )
  
 * @acknowledgement Thanks to all Dev Community contributors for their tutorials and https://stackoverflow.com/ posts 
 *   I couldn't do any of my without your gracious contributions.
 
*/

var flApp = flApp || {};

const myForm = document.getElementById('contact');

flApp.sendMessage = function(e) {
    e.preventDefault();
    let postData = new FormData(myForm);

    const value = Object.fromEntries(postData.entries());
    
    fetch('https://mdisys.pw/php/send_email.php', {                                        
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(value),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).then(json => {
        flApp.showSendMessageResult(json);
    }).catch((error) => {
        alert(error)
    });
            
    return false;     
}        


