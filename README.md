# Text Format Copier (Chrome Extension)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com)
[![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A Chrome extension that converts selected text using the right-click context menu and automatically copies the transformed result to the clipboard.

## Features

### 1. Sentence case
Converts the text into a standard sentence format.
- Example: `hello world` -> `Hello world`
- Example: `this is a test. another one` -> `This is a test. Another one`

### 2. lowercase
Converts all characters to lowercase.
- Example: `TEXT FORMAT COPIER APP` -> `text format copier app`

### 3. UPPERCASE
Converts all characters to uppercase.
- Example: `text format copier app` -> `TEXT FORMAT COPIER APP`

### 4. Capitalize Each Word
Capitalizes the first letter of each word.
- Example: `text format copier app` -> `Text Format Copier App`

### 5. tOGGLE CASE
Changes uppercase to lowercase and lowercase to uppercase for each letter.
- Example: `Text Format Copier` -> `tEXT fORMAT cOPIER`

### 6. Slugify
Converts text into a URL-friendly slug.
- Example: `Text Format Copier - a great tool` -> `text-format-copier-a-great-tool`
- Removes symbols, converts spaces to hyphens, and lowercases the result.

### 7. Snakify
Converts text into snake_case format.
- Example: `Text Format Copier is a great tool` -> `text_format_copier_is_a_great_tool`
- Lowercases all letters and replaces spaces with underscores.

## How to install
1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select this project folder.
5. The extension will appear in the Chrome extension list.

## How to use
1. Open any webpage in Chrome.
2. Select the text you want to transform.
3. Right-click the selected text.
4. Choose **Ubah & Copy Text** from the context menu.
5. Select the desired case mode.
6. The converted text is copied to your clipboard automatically.
7. Paste it anywhere with `Cmd + V` on macOS or `Ctrl + V` on Windows.

## Screenshot

![Text Format Copier extension menu](./assets/screenshot-context-menu.png)

This extension appears in the browser context menu when text is selected. Users can right-click the selection, choose the conversion option, and the transformed text is copied to the clipboard immediately.

## Versioning

This project uses semantic versioning:
- `MAJOR`: breaking changes
- `MINOR`: new features or menu options
- `PATCH`: bug fixes and small improvements

Current version: `1.0.0`

## Release Tag

First public release tag:

```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```

This will create a GitHub release tag named `v1.0.0` for the first stable version.

## Privacy Policy

This extension does not collect or store user data. For details, see [privacy-policy.md](./privacy-policy.md).

## Notes
- This extension uses Manifest V3.
- It works on normal web pages using `http://`, `https://`, and `file://` URLs.
- Internal Chrome pages such as `chrome://` are not supported because Chrome restricts script execution there.

---

# Text Format Copier (Chrome Extension)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com)
[![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

Ekstensi Chrome yang dapat mengubah teks yang dipilih melalui menu klik kanan dan secara otomatis menyalin hasilnya ke clipboard.

## Fitur

### 1. Sentence case
Mengubah teks menjadi format kalimat standar.
- Contoh: `hello world` -> `Hello world`
- Contoh: `ini adalah contoh. kalimat lain` -> `Ini adalah contoh. Kalimat lain`

### 2. lowercase
Mengubah semua huruf menjadi huruf kecil.
- Contoh: `TEXT FORMAT COPIER APP` -> `text format copier app`

### 3. UPPERCASE
Mengubah semua huruf menjadi huruf besar.
- Contoh: `text format copier app` -> `TEXT FORMAT COPIER APP`

### 4. Capitalize Each Word
Mengubah huruf awal setiap kata menjadi kapital.
- Contoh: `text format copier app` -> `Text Format Copier App`

### 5. tOGGLE CASE
Mengubah huruf besar menjadi kecil dan huruf kecil menjadi besar pada setiap huruf.
- Contoh: `Text Format Copier` -> `tEXT fORMAT cOPIER`

### 6. Slugify
Mengubah teks menjadi format slug yang ramah untuk URL.
- Contoh: `Text Format Copier - a great tool` -> `text-format-copier-a-great-tool`
- Menghapus karakter khusus, mengganti spasi menjadi tanda hubung, dan membuat semua huruf kecil.

### 7. Snakify
Mengubah teks menjadi format snake_case.
- Contoh: `Text Format Copier is a great tool` -> `text_format_copier_is_a_great_tool`
- Mengubah semua huruf menjadi kecil dan mengganti spasi dengan underscore.

## Cara install
1. Buka `chrome://extensions`.
2. Aktifkan **Developer mode**.
3. Klik **Load unpacked**.
4. Pilih folder proyek ini.
5. Ekstensi akan muncul di daftar ekstensi Chrome.

## Cara pakai
1. Buka halaman web apa saja di Chrome.
2. Pilih teks yang ingin diubah.
3. Klik kanan pada teks yang dipilih.
4. Pilih submenu **Ubah & Copy Text**.
5. Pilih format yang diinginkan.
6. Teks hasil konversi otomatis tersalin ke clipboard.
7. Paste hasilnya ke tempat yang Anda inginkan dengan `Cmd + V` di macOS atau `Ctrl + V` di Windows.

## Screenshot

![Text Format Copier extension preview](./assets/screenshot-context-menu.svg)

Ekstensi ini muncul di menu klik kanan saat teks dipilih. Pengguna cukup klik kanan, pilih format konversi yang diinginkan, lalu teks hasil transformasi otomatis tersalin ke clipboard.

## Versi

Proyek ini menggunakan semantic versioning:
- `MAJOR`: perubahan yang merusak kompatibilitas
- `MINOR`: fitur baru atau opsi menu baru
- `PATCH`: perbaikan bug dan peningkatan kecil

Versi saat ini: `1.0.0`

## Tag Release

Tag rilis pertama publik:

```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```

Perintah di atas akan membuat tag GitHub bernama `v1.0.0` untuk versi stabil pertama.

## Privacy Policy

Ekstensi ini tidak mengumpulkan atau menyimpan data pengguna. Untuk detailnya, lihat [privacy-policy.md](./privacy-policy.md).

## Catatan
- Ekstensi ini menggunakan Manifest V3.
- Ekstensi bekerja pada halaman web normal seperti `http://`, `https://`, dan `file://`.
- Halaman internal Chrome seperti `chrome://` tidak didukung karena Chrome membatasi eksekusi skrip di halaman tersebut.
