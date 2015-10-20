<?php

	function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '')
   { 
      $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";
      $subject = "=?UTF-8?B?".base64_encode($subject)."?=";

      $headers = "From: $from_user <$from_email>\r\n". 
               "MIME-Version: 1.0" . "\r\n" . 
               "Content-type: text/html; charset=UTF-8" . "\r\n"; 

     return mail($to, $subject, $message, $headers); 
   }

     $admin_email = "tolya.korolyov@gmail.com";
     $name = $_POST['name'];
     $email = $_POST['email'];
     $phone = $_POST['phone'];
     $message = "телефон: " . $phone . "<br> email: " . $email . "<br>" . str_replace("\n", "<br>", $_POST['message']);

	$isMailed = mail_utf8($admin_email, $name, $email, "Швейное дело - обратная связь с " . $name, $message);

    $data = (object)[
                "email" => $admin_email,
                "name" => $name,
                "retEmail" => $email,
                "phone" => $phone,
                "message" => $message,
                "isMailed" => $isMailed
            ];
    header('Content-Type: application/json');
    echo json_encode($data);
?>