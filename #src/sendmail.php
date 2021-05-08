<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//от кого письмо
$mail->setFrom('nik.taraskov@ukr.net' 'Никита');
//кому отправить
$mail->addAdress('nik.taraskov@gmail.com');
//тема письма
$mail->Subject = 'какое то письмо';
//тело письма
$body = '<h1>новое письмо</h1>';

if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['formEmail']))){
	$body.='<p><strong>E-mail:</strong> '.$_POST['formEmail'].'</p>';
}
if(trim(!empty($_POST['age']))){
	$body.='<p><strong>Способ доставки:</strong> '.$_POST['age'].'</p>';
}
if(trim(!empty($_POST['adress']))){
	$body.='<p><strong>Адресс доставки:</strong> '.$_POST['adress'].'</p>';
}
if(trim(!empty($_POST['formPhone']))){
	$body.='<p><strong>Телефон:</strong> '.$_POST['formPhone'].'</p>';
}


if(!$mail->send()){
	$message = 'Ошибка';
}else{
	$message = 'Данные отправленны!';
}

$response = ['message' => $message];

header('Content-type: applivation/json');
echo json_encode($response);
?>