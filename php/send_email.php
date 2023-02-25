<?php

/**

 * Send out email message from posted web form.

 * @author Mauro Dutra <mdutra@mdisys.pw>

 * @copyright Copyright (c) 2023, MDi Sys Professional Web Developer

 * @license This code is licensed under MIT license (see https://github.com/mdutra555/portfolio/blob/main/LICENSE )
  
 * @acknowledgement Thanks to all Dev Community contributors for their tutorials and https://stackoverflow.com/ posts 
 *   I couldn't do any of my without your gracious contributions.
 
*/

    header('Access-Control-Allow-Origin: mdisys.pw');
    //header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('content-type: application/json; charset=utf8;');

    $data = json_decode( file_get_contents('php://input') );

    $name = $data->fullname;
    $email = $data->email;
    $phone = $data->telephone;
    $message = $data->message;

    if(empty($name)||empty($email)) 
    {
        $resp = array('resp' => 'Name and email are required.');
        echo json_encode($resp);
        exit;
    }
    
    $email_from = 'contact@mdisys.pw';//<== update the email address
    $email_subject = "New contact request";
    $email_body = "You have received a new message from the user $name.\n\n".
                  "Email: $email\n\n".
                  "Message: $message\n";

    $to = "mdutra@mdisys.pw";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    $sent = mail($to, $email_subject, $email_body, $headers);
    
    if ($sent) {
        $resp = array('resp' => 'OK');
    } else {
        $resp = array('resp' => 'FAILED');
    }
    
    echo json_encode($resp);
?>