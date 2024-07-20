<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com'; // Ganti dengan email Anda
        $mail->Password = 'your-app-password'; // Ganti dengan password aplikasi 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('your-email@gmail.com'); // Ganti dengan email Anda
        $mail->isHTML(false);
        $mail->Subject = "Pesan dari $name";
        $mail->Body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

        $mail->send();
        echo "Pesan Anda telah terkirim.";
    } catch (Exception $e) {
        echo "Pesan gagal dikirim. Kesalahan: {$mail->ErrorInfo}";
    }
}
?>
