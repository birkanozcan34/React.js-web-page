<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php
require("class.phpmailer.php"); // PHPMailer dosyamizi çagiriyoruz
// Check for empty fields
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
}

$name          = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message       = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to            = 'birkanozcan34@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$mail->IsSMTP(true);  // Mailimizin SMTP ile gönderilecegini belirtiyoruz
$mail->From     = $_POST["birkanozcan34@gmail.com"];//"admin@localhost"; //Gönderen kisminda yer alacak e-mail adresi
$mail->Sender   = $_POST["birkanozcan34@gmail.com"];//"admin@localhost";//Gönderen Mail adresi
$mail->Host     = "smtp.gmail.com";//"localhost"; //SMTP server adresi
$mail->Username = "birkanozcan34@gmail.com";//"admin@localhost"; //SMTP kullanici adi
$mail->Password = "Bigo-123";//""; //SMTP mailinizin sifresi
$mail->Port     = 587/465; //Vargonen SMPT Mail Portu

$email_subject = "Website Contact Form:  $name";
$email_body    = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers       = "From: birkanozcan07@hotmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);
return true;
?>