<?php

$name = htmlspecialchars($_POST['name']);
$designation = htmlspecialchars($_POST['designation']);
$email = htmlspecialchars($_POST['email']);
$department = htmlspecialchars($_POST['department']);
$phonenumber = htmlspecialchars($_POST['phonenumber']);
$optionList = htmlspecialchars($_POST['optionList']);
$message = htmlspecialchars($_POST['message']);


if(!empty($email) && !empty($message)){
	if(filter_var($email, FILTER_VALIDATE_EMAIL)){
		$receiver = "contact@tospace.in";
		$subject = "New Contact Form Submission from {$name}";
		$body =" Name : ". $name . "\n Designation : ". $designation . "\n Email : " . $email ."\n Department : ". $department ."\n PhoneNumber : ". $phonenumber ."\n Platfrom : ". $optionList ."\n Message : ". $message;
		$sender = "From: $email";
		if(mail($receiver, $subject, $body, $sender)){
			echo "Your message has been sent Succssfully...";
		}else{
		   echo "Sorry, failed to send your message!!";
		}
	  }else{
		echo "Enter a valid email address!";
	  }
	}else{
	  echo "Email and message field is required!";
}

?>
