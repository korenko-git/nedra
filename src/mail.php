<?php
use Dotenv\Dotenv;
use PHPMailer\PHPMailer\PHPMailer;

// Load Composer's autoloader
require '../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = $_ENV['GMAIL_USER_NAME'];
$mail->Password = $_ENV['GMAIL_USER_PASSWORD'];

function secure_read($value) {return htmlspecialchars(stripslashes(trim($value)));}

// body
$name = secure_read($_POST["name"]);
$phone = secure_read($_POST["phone"]);
$formName = secure_read($_POST["formname"]);
$body = "
Форма: $formName <br>
Имя: $name <br>
Телефон: $phone";

$mail->Subject = "Новая заявка с сайта 'nedra-36.ru'";
$mail->setFrom('no-replay@nedra-36.ru', 'nedra-36.ru');		
$mail->addAddress($_ENV['ADMIN_MAIL'], $_ENV['ADMIN_NAME']);
$mail->msgHTML($body);

$mail->send();