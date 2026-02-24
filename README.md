# 💰 MoneyTracker(temporary name) App
 aplikasi mobile berbasis React Native (Expo), membantu pengguna mencatat pemasukan dan pengeluaran harian.

---

## 🚀 Tech Stack
#Frontend
- React Native
- Expo
- Android Studio Panda
  
#Storage Database
- AsyncStorage (Local, no backend)
AsyncStorage is used for local data persistence to keep the project simple and focused on core application logic without introducing backend complexity.
Future development may include integration with MySQL through a REST API backend for multi-user and cloud-based storage.


#Navigation
- React Navigation (Stack+Bottom Tab)

#State Management
-useState + useContext

#Tools
- Node.js(environment)
- Git
- Github


---

## 📱 Fitur Saat Ini

- Login Screen (UI Preview)
- Dashboard Screen (Basic Layout)
- Navigation Setup
- Emulator & Expo Running

---

## 🛠 Installation & Setup

1. Clone repository

   git clone https://github.com/SammAlvncnt/MoneyTracker.git

2. Masuk ke folder project

   cd MoneyTracker

3. Install dependencies

   npm install

4. Jalankan project

   npx expo start

5. Tekan `a` untuk buka di Android Emulator

---

## 📂 Project Structure (Basic)

MoneyTracker/
│── App.js
│── package.json
│── assets/
│── screens/
│── components/

---

## 🔄 Development Workflow

Setiap ada perubahan:

git add .
git commit -m "update fitur"
git push

---

## 📌 Next Development Plan

- Implement Authentication Logic
- Add Transaction CRUD
- Integrate Local Storage / Database
- Improve UI Design
- Add State Management
- Prepare for Production Build

---

Apa Selanjutnya?
Ini adalah fondasi yang solid. Dari sini, kamu bisa mengembangkannya lebih lanjut:

1. Fitur Edit & Hapus Transaksi: Tambahkan tombol edit/hapus di setiap item.
2. Layar Laporan yang Sesungguhnya: Gunakan library seperti react-native-svg-charts untuk membuat grafik Pie Chart dan Bar Chart.
3. Filter & Pencarian: Tambahkan fitur filter di layar Riwayat.
4. Manajemen Kategori: Buat layar untuk menambah, mengedit, dan menghapus kategori.
5. UI/UX yang Lebih Baik: Tambahkan animasi, loading state, dan feedback yang lebih baik.

## 👨‍💻 Author

Samuel Alvincent
