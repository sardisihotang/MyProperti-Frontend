document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk membuka dan menutup chat
  function toggleChat() {
    const chatWidget = document.getElementById("chat-widget");
    const openChatBtn = document.getElementById("open-chat");

    if (chatWidget.style.display === "none" || !chatWidget.style.display) {
      chatWidget.style.display = "block";
      openChatBtn.style.display = "none"; // Sembunyikan tombol buka
    } else {
      chatWidget.style.display = "none";
      openChatBtn.style.display = "flex"; // Tampilkan tombol buka
    }
  }

  // Fungsi untuk menampilkan jawaban berdasarkan pilihan pertanyaan
  function answerQuestion() {
    const questionSelect = document.getElementById("question-select");
    const chatBody = document.getElementById("chat-body");
    const selectedQuestion = questionSelect.value;

    let answer = "";

    switch (selectedQuestion) {
      case "1":
        answer =
          "Tipe rumah yang tersedia meliputi rumah minimalis, rumah mewah, rumah tradisional, rumah kontemporer, rumah cottage, rumah duplex, dan apartemen. Setiap tipe memiliki desain dan fitur yang berbeda sesuai kebutuhan Anda.";
        break;
      case "2":
        answer =
          "Harga rumah bervariasi tergantung pada tipe, lokasi, dan ukuran properti. Untuk informasi lebih lanjut tentang harga rumah yang spesifik, silakan kunjungi halaman harga kami atau hubungi agen properti kami.";
        break;
      case "3":
        answer =
          "Proses pembelian rumah meliputi langkah-langkah berikut; mencari rumah yang sesuai, mengajukan penawaran, melakukan inspeksi properti, mengajukan KPR (jika diperlukan), menandatangani perjanjian jual beli, dan menyelesaikan pembayaran serta proses administrasi.";
        break;
      case "4":
        answer =
          "Anda dapat menjadwalkan kunjungan ke properti dengan menghubungi agen properti kami melalui telepon, email, atau WhatsApp menggunakan form yang telah kami sediakan. Silakan isi nama, nomor telepon, email, alamat, nama rumah yang diinginkan, lokasi rumah yang mau dibeli, budget, dan pesan Anda di form tersebut. Agen kami akan membantu Anda mengatur jadwal kunjungan sesuai waktu yang Anda inginkan.";
        break;
      case "5":
        answer =
          "Properti yang sedang dijual tersebar di berbagai lokasi strategis, termasuk daerah perkotaan dan pinggiran kota. Setiap lokasi memiliki akses mudah ke fasilitas umum seperti sekolah, rumah sakit, dan pusat perbelanjaan.";
        break;
      case "6":
        answer =
          "Syarat umum untuk mengajukan KPR meliputi fotokopi KTP, NPWP, slip gaji atau bukti penghasilan, rekening koran 3 bulan terakhir, dan surat keterangan kerja. Persyaratan dapat bervariasi tergantung pada bank atau lembaga keuangan yang Anda pilih.";
        break;
      default:
        answer = "Silakan pilih pertanyaan terlebih dahulu.";
    }

    // Menambahkan jawaban ke chat
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = answer;
    botMessage.style.margin = "10px 0";
    botMessage.style.padding = "10px";
    botMessage.style.backgroundColor = "#e0f7fa";
    botMessage.style.borderRadius = "5px";
    chatBody.appendChild(botMessage);

    chatBody.scrollTop = chatBody.scrollHeight; // Scroll ke bawah
  }

  // Mendapatkan elemen-elemen untuk chat widget
  const openChatBtn = document.getElementById("open-chat");
  const chatWidget = document.getElementById("chat-widget");
  const closeChatBtn = document.getElementById("close-chat");
  const askQuestionBtn = document.getElementById("ask-question");

  // Pastikan elemen-elemen tersebut ada
  if (openChatBtn && chatWidget && closeChatBtn && askQuestionBtn) {
    // Event Listener untuk membuka chat
    openChatBtn.addEventListener("click", toggleChat);

    // Event Listener untuk menutup chat
    closeChatBtn.addEventListener("click", toggleChat);

    // Event Listener untuk mengajukan pertanyaan
    askQuestionBtn.addEventListener("click", answerQuestion);
  } else {
    console.error("Elemen-elemen chat widget tidak ditemukan.");
  }
});
// Pilih elemen tombol dan form
const searchBtn = document.getElementById("search-btn");
const searchForm = document.querySelector(".search-form");

// Tambahkan event listener pada tombol
searchBtn.addEventListener("click", () => {
  // Toggle kelas 'hidden' pada form
  searchForm.classList.toggle("hidden");
});

// Opsional: Tutup form jika pengguna klik di luar form
document.addEventListener("click", (event) => {
  if (!searchForm.contains(event.target) && event.target !== searchBtn) {
    searchForm.classList.add("hidden");
  }
});
