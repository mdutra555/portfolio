/**

 * Forever Light framework code basic helper functions

 * @author Mauro Dutra <mdutra@mdisys.pw>

 * @copyright Copyright (c) 2023, MDi Sys Professional Web Developer

 * @license This code is licensed under MIT license (see https://github.com/mdutra555/portfolio/blob/main/LICENSE )
  
 * @acknowledgement Thanks to all Dev Community contributors for their tutorials and https://stackoverflow.com/ posts 
 *   I couldn't do any of my without your gracious contributions.
 
*/

var flApp = flApp || {};

flApp.isEmpty = function(str) {
    if (typeof (str) != 'string') return true;
    return str.trim() === '';
}