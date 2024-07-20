# Ramalan Cuaca Indonesia

Aplikasi web untuk menampilkan ramalan cuaca di Indonesia. Aplikasi ini menggunakan API OpenWeatherMap untuk mendapatkan data cuaca dan PHPMailer untuk mengirimkan feedback melalui email.

## Prerequisites

Sebelum menjalankan aplikasi ini, pastikan Anda memiliki:

1. **XAMPP**: Untuk menjalankan server lokal.
2. **PHPMailer**: Untuk mengirim email. Unduh dari [GitHub PHPMailer](https://github.com/PHPMailer/PHPMailer).

## Instalasi

### 1. Mengatur XAMPP

1. **Unduh dan Instal XAMPP**:
   - Download dari [Apache Friends](https://www.apachefriends.org/index.html).
   - Ikuti petunjuk untuk instalasi.

2. **Jalankan XAMPP**:
   - Buka XAMPP Control Panel.
   - Mulai modul **Apache** dan **MySQL**.

### 2. Mengatur PHPMailer

1. **Unduh PHPMailer**:
   - Kunjungi [PHPMailer GitHub](https://github.com/PHPMailer/PHPMailer) dan unduh versi terbaru.
   - Ekstrak file ZIP dan simpan folder `PHPMailer` di direktori proyek Anda.

2. **Konfigurasi PHPMailer**:
   - Pastikan Anda mengganti konfigurasi email di `email.php` dengan informasi akun email Anda (lihat bagian `email.php` di bawah).

### 3. Menyiapkan Proyek

1. **Download dan Siapkan Proyek**:
   - Buat folder baru di dalam direktori `htdocs` XAMPP (misalnya `cuaca-web`).
   - Tempatkan semua file proyek (`index.html`, `script.js`, `style.css`, `email.php`, dan folder `PHPMailer`) ke dalam folder ini.

2. **Perbarui API Key**:
   - Ganti `fd1a3b69d3ed9aa2949abd75f9adcad6` di `script.js` dengan API Key OpenWeatherMap Anda yang valid.

### 4. Mendapatkan Password Aplikasi (Jika Menggunakan Gmail)

Jika Anda menggunakan Gmail untuk mengirim email, Anda perlu menggunakan password aplikasi khusus. Berikut adalah cara untuk mendapatkan password aplikasi:

1. **Aktifkan Verifikasi Dua Langkah**:
   - Masuk ke akun Google Anda.
   - Akses [halaman keamanan Google](https://myaccount.google.com/security).
   - Di bawah bagian "Login & security", pilih "Verifikasi dua langkah" dan ikuti petunjuk untuk mengaktifkan verifikasi dua langkah.

2. **Buat Password Aplikasi**:
   - Setelah verifikasi dua langkah diaktifkan, kembali ke [halaman keamanan Google](https://myaccount.google.com/security).
   - Di bagian Pencarian, cari "Login dengan sandi aplikasi", maka akan muncul halaman bantuan.
   - Pada halaman bantuan, klik "Membuat dan mengelola sandi aplikasi Anda", lalu masukkan password Gmail Anda.
   - Pilih "Other (Custom name)" dan masukkan nama aplikasi (misalnya, "Ramalan Cuaca Web").
   - Klik "Generate" dan salin password aplikasi yang dihasilkan. Gunakan password ini di file `email.php`.

### 5. Menjalankan Aplikasi

1. **Akses Aplikasi**:
   - Buka browser dan navigasikan ke `http://localhost/cuaca-web/index.html`.

2. **Gunakan Aplikasi**:
   - Masukkan nama kota di form untuk melihat ramalan cuaca.
   - Kirimkan feedback melalui form di footer, dan periksa apakah email terkirim dengan benar.

## File yang Tersedia

- **index.html**: Halaman utama aplikasi.
- **script.js**: Script JavaScript untuk interaksi dengan API dan pengiriman form.
- **style.css**: Gaya CSS untuk tampilan aplikasi.
- **email.php**: Skrip PHP untuk mengirimkan email feedback.
- **PHPMailer/**: Folder yang berisi file PHPMailer untuk mengirimkan email.

## Troubleshooting
- Jika cuaca tidak ditampilkan: Pastikan API Key Anda valid dan jaringan Anda berfungsi dengan baik.
- Jika feedback tidak terkirim: Periksa konfigurasi email di email.php dan pastikan PHPMailer terkonfigurasi dengan benar.

## Konfigurasi Email di `email.php`

Pastikan untuk mengganti baris berikut di `email.php` dengan informasi akun email Anda dan password aplikasi yang telah dibuat:

```php
$mail->Username = 'your-email@gmail.com'; // Ganti dengan email Anda
$mail->Password = 'your-app-password'; // Ganti dengan password aplikasi yang dihasilkan
$mail->addAddress('your-email@gmail.com'); // Ganti dengan email Anda
