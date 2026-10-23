import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran IPAS
 * Kelas 5 SD - Kurikulum Merdeka
 * Bab III: Majulah Daerahku!
 *
 * Lingkup Materi:
 * 1. Bagaimana Aku Memenuhi Kebutuhanku
 * 2. Dari Mana Barang Berasal & Proses Kegiatan Ekonomi
 * 3. Pelaku Ekonomi & Jenis Kegiatan Ekonomi di Daerahku
 * 4. Pengaruh Kondisi Geografis, SDA & Faktor Pendukung Ekonomi Daerah
 * 5. Jenis-jenis Kebutuhan Manusia & Kebutuhan Berdasarkan Sosial Budaya
 * 6. Aku Pelaku Ekonomi yang Bijak
 * 7. Masalah Kegiatan Ekonomi di Daerah & Cara Mengatasinya
 *
 * Komposisi Soal:
 * - 35 Butir Pilihan Ganda (PG) [Nomor 1 - 35] (Bobot: 2 poin/butir = 70 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 36 - 40] (Bobot: 6 poin/butir = 30 poin)
 * Total: 40 Butir Soal = 100 Poin (Standar KKTP = 70)
 *
 * 3 Elemen Capaian Pembelajaran / Tujuan Pembelajaran:
 * TP 1: Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)
 * TP 2: Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)
 * TP 3: Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)
 */

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN I: 35 SOAL PILIHAN GANDA (PG)
  // ==========================================

  // --- ELEMEN 1: BAGAIMANA AKU MEMENUHI KEBUTUHANKU & ASAL-USUL BARANG ---
  {
    id: 1,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Hierarki Jenis Kebutuhan Manusia',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Disajikan piramida kebutuhan, siswa dapat mengidentifikasi tingkatan kebutuhan dasar (primer) yang mutlak harus dipenuhi manusia.',
    image: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="pyr1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="pyr2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="pyr3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
      </defs>
      <rect width="460" height="210" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="230" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Piramida Intensitas Kebutuhan Manusia</text>
      
      <!-- Puncak: Kebutuhan Tersier -->
      <polygon points="230,42 165,95 295,95" fill="url(#pyr1)" stroke="#b45309" stroke-width="1.5"/>
      <text x="230" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">TERSIER</text>
      <text x="230" y="84" font-family="sans-serif" font-size="9" fill="#fef3c7" text-anchor="middle">(Barang Mewah/Hiburan)</text>
      
      <!-- Tengah: Kebutuhan Sekunder -->
      <polygon points="163,98 297,98 350,148 110,148" fill="url(#pyr2)" stroke="#1e40af" stroke-width="1.5"/>
      <text x="230" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SEKUNDER</text>
      <text x="230" y="136" font-family="sans-serif" font-size="9.5" fill="#dbeafe" text-anchor="middle">(Pelengkap: Meja, Sepatu, Kipas Angin)</text>

      <!-- Dasar: Kebutuhan Primer -->
      <polygon points="108,151 352,151 405,200 55,200" fill="url(#pyr3)" stroke="#065f46" stroke-width="1.5"/>
      <text x="230" y="174" font-family="sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">PRIMER (POKOK)</text>
      <text x="230" y="191" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ecfdf5" text-anchor="middle">Pangan (Makan), Sandang (Pakaian), Papan (Rumah)</text>
    </svg>`,
    text: 'Perhatikan diagram piramida kebutuhan di atas! Kebutuhan manusia yang paling mendasar dan wajib dipenuhi terlebih dahulu agar kelangsungan hidup manusia tetap terjaga dinamakan kebutuhan ...',
    options: [
      { id: 'A', text: 'Primer' },
      { id: 'B', text: 'Sekunder' },
      { id: 'C', text: 'Tersier' },
      { id: 'D', text: 'Kolektif' },
    ],
    correctAnswer: 'A',
    explanation: 'Kebutuhan primer adalah kebutuhan pokok yang mutlak harus dipenuhi oleh setiap manusia untuk bertahan hidup, mencakup pangan (makanan), sandang (pakaian), dan papan (tempat tinggal).'
  },
  {
    id: 2,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Kebutuhan Primer Manusia',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengelompokkan contoh kebutuhan primer yang harus dipenuhi dalam kehidupan sehari-hari.',
    text: 'Di bawah ini kelompok kebutuhan yang semuanya termasuk ke dalam kebutuhan primer adalah ...',
    options: [
      { id: 'A', text: 'Beras untuk makan, seragam sekolah, dan rumah tinggal sederhana' },
      { id: 'B', text: 'Mobil sport, perhiasan emas, dan liburan ke luar negeri' },
      { id: 'C', text: 'Televisi layar datar, lemari pendingin, dan sepeda gunung' },
      { id: 'D', text: 'Smartphone model terbaru, kamera digital, dan tas bermerek' },
    ],
    correctAnswer: 'A',
    explanation: 'Beras (pangan), seragam (sandang), dan rumah (papan) merupakan kebutuhan pokok manusia yang tergolong kebutuhan primer.'
  },
  {
    id: 3,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Kebutuhan Sekunder Manusia',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan tujuan manusia memenuhi kebutuhan sekunder setelah kebutuhan primer terpenuhi.',
    text: 'Kebutuhan sekunder adalah kebutuhan yang dipenuhi setelah kebutuhan pokok (primer) terpenuhi. Manusia memenuhi kebutuhan sekunder dengan tujuan utama untuk ...',
    options: [
      { id: 'A', text: 'Menambah kenyamanan hidup dan mempermudah aktivitas sehari-hari' },
      { id: 'B', text: 'Memamerkan kekayaan dan gengsi kepada lingkungan sekitar' },
      { id: 'C', text: 'Sekadar mempertahankan kelangsungan hidup biologis manusia' },
      { id: 'D', text: 'Menghabiskan kelebihan uang yang tersisa di dompet' },
    ],
    correctAnswer: 'A',
    explanation: 'Kebutuhan sekunder seperti meja belajar, buku bacaan, sepeda, atau kipas angin bertujuan untuk meningkatkan kenyamanan hidup dan membantu kelancaran kegiatan sehari-hari.'
  },
  {
    id: 4,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Kebutuhan Tersier dan Gaya Hidup',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis contoh kebutuhan tersier yang berkaitan dengan kemewahan dan status sosial.',
    text: 'Pak Nyoman membeli sebuah mobil mewah seharga miliaran rupiah dan jam tangan berlapis berlian. Pembelian barang-barang tersebut digolongkan ke dalam pemenuhan kebutuhan ...',
    options: [
      { id: 'A', text: 'Tersier' },
      { id: 'B', text: 'Sekunder' },
      { id: 'C', text: 'Primer' },
      { id: 'D', text: 'Mutlak' },
    ],
    correctAnswer: 'A',
    explanation: 'Kebutuhan tersier adalah kebutuhan akan barang-barang mewah yang dipenuhi setelah kebutuhan primer dan sekunder tercukupi, umumnya untuk prestise atau kepuasan pribadi.'
  },
  {
    id: 5,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Dari Mana Barang Berasal & Rantai Kegiatan Ekonomi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Disajikan diagram rantai pasok beras dari sawah hingga piring makan, siswa dapat mengurutkan proses kegiatan ekonomi dengan benar.',
    image: `<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7"/>
        </marker>
      </defs>
      <rect width="520" height="120" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
      
      <!-- Kotak 1: Petani (Sawah) -->
      <g transform="translate(15, 20)">
        <rect width="95" height="75" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="47" y="25" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Petani Sawah</text>
        <text x="47" y="44" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Menanam padi</text>
        <text x="47" y="60" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">[PRODUKSI]</text>
      </g>
      <line x1="113" y1="58" x2="135" y2="58" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

      <!-- Kotak 2: Penggilingan Padi -->
      <g transform="translate(140, 20)">
        <rect width="95" height="75" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="47" y="25" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">2. Kilang Giling</text>
        <text x="47" y="44" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Gabah jadi beras</text>
        <text x="47" y="60" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">[PRODUKSI]</text>
      </g>
      <line x1="238" y1="58" x2="260" y2="58" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

      <!-- Kotak 3: Truk / Pedagang Beras -->
      <g transform="translate(265, 20)">
        <rect width="105" height="75" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="52" y="25" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">3. Pedagang/Pasar</text>
        <text x="52" y="44" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Distribusi beras</text>
        <text x="52" y="60" font-family="sans-serif" font-size="9" font-weight="bold" fill="#f59e0b" text-anchor="middle">[DISTRIBUSI]</text>
      </g>
      <line x1="373" y1="58" x2="395" y2="58" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

      <!-- Kotak 4: Keluarga / Konsumen -->
      <g transform="translate(400, 20)">
        <rect width="105" height="75" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="52" y="25" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">4. Rumah Tangga</text>
        <text x="52" y="44" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Memasak nasi</text>
        <text x="52" y="60" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ef4444" text-anchor="middle">[KONSUMSI]</text>
      </g>
    </svg>`,
    text: 'Perhatikan bagan alur rantai distribusi beras di atas! Beras yang kita makan setiap hari berasal dari padi di sawah. Urutan proses kegiatan ekonomi yang benar hingga nasi siap disantap adalah ...',
    options: [
      { id: 'A', text: 'Petani menanam padi (produksi) -> Digiling menjadi beras -> Didistribusikan ke pedagang beras -> Dimasak dan dimakan (konsumsi)' },
      { id: 'B', text: 'Beras langsung dibeli dari pabrik -> Ditanam di sawah -> Dimakan keluarga -> Dijual ke pasar' },
      { id: 'C', text: 'Konsumen menanam padi -> Distributor memasak nasi -> Produsen menjual di pasar' },
      { id: 'D', text: 'Petani menjual nasi kotak -> Pedagang menanam padi -> Konsumen menggiling padi di sawah' },
    ],
    correctAnswer: 'A',
    explanation: 'Alur kegiatan ekonomi beras dimulai dari petani menanam padi dan penggilingan (produksi), disalurkan melalui pedagang/toko beras (distribusi), kemudian dibeli dan dimasak oleh keluarga (konsumsi).'
  },
  {
    id: 6,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Dari Mana Pakaian Berasal',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan bahan baku alami utama yang digunakan dalam proses pembuatan pakaian seragam katun.',
    text: 'Baju seragam sekolah berbahan katun yang kita pakai sehari-hari berasal dari serat tumbuhan alami, yaitu tanaman ...',
    options: [
      { id: 'A', text: 'Kapas' },
      { id: 'B', text: 'Karet' },
      { id: 'C', text: 'Kelapa sawit' },
      { id: 'D', text: 'Kina' },
    ],
    correctAnswer: 'A',
    explanation: 'Kain katun dibuat dari pemintalan serat tanaman kapas menjadi benang, yang kemudian ditenun menjadi kain dan dijahit menjadi pakaian seragam.'
  },
  {
    id: 7,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Kebutuhan Berdasarkan Waktu Pemenuhan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan kebutuhan sekarang dengan kebutuhan masa yang akan datang.',
    text: 'Obat-obatan dan perawatan medis bagi seseorang yang sedang sakit parah tergolong kebutuhan ...',
    options: [
      { id: 'A', text: 'Sekarang (harus segera dipenuhi saat itu juga)' },
      { id: 'B', text: 'Masa depan (bisa ditunda bertahun-tahun)' },
      { id: 'C', text: 'Masa lampau (sudah lewat)' },
      { id: 'D', text: 'Tersier (hiburan mewah)' },
    ],
    correctAnswer: 'A',
    explanation: 'Kebutuhan sekarang adalah kebutuhan yang pemenuhannya tidak dapat ditunda karena menyangkut keselamatan atau hal mendesak, seperti obat saat sakit atau makanan saat lapar.'
  },
  {
    id: 8,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Kebutuhan Berdasarkan Sifat (Jasmani & Rohani)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi contoh kebutuhan rohani yang berkaitan dengan ketenangan jiwa dan pikiran.',
    text: 'Beribadah secara khusyuk, membaca buku cerita yang menghibur, dan rekreasi bersama keluarga merupakan contoh pemenuhan kebutuhan ...',
    options: [
      { id: 'A', text: 'Rohani' },
      { id: 'B', text: 'Jasmani' },
      { id: 'C', text: 'Primer fisik' },
      { id: 'D', text: 'Materiil' },
    ],
    correctAnswer: 'A',
    explanation: 'Kebutuhan rohani adalah kebutuhan yang berkaitan dengan kejiwaan, pikiran, rohani, dan batiniah manusia seperti ketenangan batin melalui ibadah, rekreasi, dan menuntut ilmu.'
  },
  {
    id: 9,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Kebutuhan Berdasarkan Faktor Sosial Budaya',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengaruh adat istiadat dan tradisi sosial budaya terhadap ragam kebutuhan masyarakat di Bali/Jembrana.',
    text: 'Masyarakat di Bali membutuhkan janur, bunga canang, bambu penjor, serta busana adat kamen dan kebaya saat hari raya keagamaan. Kebutuhan tersebut timbul karena dipengaruhi oleh faktor ...',
    options: [
      { id: 'A', text: 'Sosial budaya dan adat istiadat setempat' },
      { id: 'B', text: 'Kemajuan ilmu teknologi digital semata' },
      { id: 'C', text: 'Perubahan iklim kutub utara' },
      { id: 'D', text: 'Gengsi membeli barang impor luar negeri' },
    ],
    correctAnswer: 'A',
    explanation: 'Faktor sosial budaya, tradisi, dan ritual adat sangat memengaruhi jenis kebutuhan masyarakat setempat, seperti perlengkapan upacara adat dan pakaian adat di Bali.'
  },
  {
    id: 10,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Perbedaan Kebutuhan dan Keinginan',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan antara kebutuhan hakiki dengan keinginan yang dipicu faktor emosi/hawa nafsu.',
    text: 'Perbedaan paling tepat antara "kebutuhan" dan "keinginan" adalah ...',
    options: [
      { id: 'A', text: 'Kebutuhan harus dipenuhi agar hidup layak, sedangkan keinginan bersifat tambahan dan jika tidak terpenuhi tidak membahayakan hidup' },
      { id: 'B', text: 'Keinginan harus dipenuhi lebih cepat daripada kebutuhan dasar' },
      { id: 'C', text: 'Kebutuhan harganya selalu mahal, sedangkan keinginan selalu gratis' },
      { id: 'D', text: 'Kebutuhan hanya dimiliki orang dewasa, sedangkan anak-anak hanya memiliki keinginan' },
    ],
    correctAnswer: 'A',
    explanation: 'Kebutuhan adalah segala sesuatu yang harus dipenuhi untuk mempertahankan hidup dan beraktivitas normal, sedangkan keinginan merupakan hasrat tambahan yang apabila tidak terpenuhi tidak akan mengganggu kelangsungan hidup.'
  },
  {
    id: 11,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Sejarah Pemenuhan Kebutuhan (Barter ke Uang)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan istilah kegiatan saling menukar barang dengan barang pada zaman dahulu sebelum ditemukannya uang.',
    text: 'Pada zaman dahulu sebelum uang ditemukan, orang menukarkan sekarung beras dengan seekor kambing untuk saling memenuhi kebutuhan. Sistem pertukaran barang dengan barang ini disebut ...',
    options: [
      { id: 'A', text: 'Barter' },
      { id: 'B', text: 'Kredit' },
      { id: 'C', text: 'Transfer' },
      { id: 'D', text: 'Subsidi' },
    ],
    correctAnswer: 'A',
    explanation: 'Barter adalah sistem perdagangan kuno di mana orang saling menukarkan barang dengan barang lainnya tanpa perantara uang.'
  },
  {
    id: 12,
    type: 'pg',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Nilai Guna Suatu Barang',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis perubahan nilai guna suatu benda setelah diolah menjadi produk bermanfaat.',
    text: 'Kayu gelondongan di hutan memiliki nilai guna yang lebih tinggi setelah diolah oleh pengrajin mebel menjadi meja, kursi, dan lemari. Perubahan ini menunjukkan peningkatan nilai guna karena ...',
    options: [
      { id: 'A', text: 'Perubahan bentuk (Form Utility)' },
      { id: 'B', text: 'Perubahan kepemilikan semata' },
      { id: 'C', text: 'Perubahan musim hujan' },
      { id: 'D', text: 'Perubahan cuaca angin' },
    ],
    correctAnswer: 'A',
    explanation: 'Nilai guna bentuk (form utility) tercipta ketika bahan mentah (kayu gelondongan) diubah bentuknya menjadi barang yang lebih bermanfaat bagi manusia (meja, kursi).'
  },

  // --- ELEMEN 2: KEGIATAN EKONOMI DI DAERAHKU, KONDISI GEOGRAFIS & SDA ---
  {
    id: 13,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kegiatan Produksi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan kegiatan yang termasuk kategori kegiatan produksi dalam bidang perekonomian.',
    text: 'Kegiatan ekonomi yang bertujuan menghasilkan barang baru atau menambah nilai guna suatu barang/jasa disebut ...',
    options: [
      { id: 'A', text: 'Produksi' },
      { id: 'B', text: 'Distribusi' },
      { id: 'C', text: 'Konsumsi' },
      { id: 'D', text: 'Eksploitasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Produksi adalah kegiatan menghasilkan atau menciptakan barang dan jasa untuk memenuhi kebutuhan manusia. Pelakunya disebut produsen.'
  },
  {
    id: 14,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Pelaku Ekonomi (Produsen, Distributor, Konsumen)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Disajikan diagram interaksi 3 pelaku ekonomi, siswa dapat mengidentifikasi pihak yang berperan menyalurkan barang dari produsen ke konsumen.',
    image: `<svg viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <marker id="arr2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
      </defs>
      <rect width="480" height="130" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      
      <!-- Pelaku 1: Produsen -->
      <g transform="translate(20, 25)">
        <rect width="115" height="80" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <circle cx="57" cy="30" r="14" fill="#dbeafe"/>
        <text x="57" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">P</text>
        <text x="57" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">PRODUSEN</text>
        <text x="57" y="72" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Pembuat Produk</text>
      </g>
      <line x1="140" y1="65" x2="175" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr2)"/>

      <!-- Pelaku 2: Distributor -->
      <g transform="translate(182, 25)">
        <rect width="115" height="80" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="57" cy="30" r="14" fill="#fef3c7"/>
        <text x="57" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">D</text>
        <text x="57" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">DISTRIBUTOR</text>
        <text x="57" y="72" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Penyalur Barang</text>
      </g>
      <line x1="302" y1="65" x2="338" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr2)"/>

      <!-- Pelaku 3: Konsumen -->
      <g transform="translate(345, 25)">
        <rect width="115" height="80" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <circle cx="57" cy="30" r="14" fill="#d1fae5"/>
        <text x="57" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">K</text>
        <text x="57" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">KONSUMEN</text>
        <text x="57" y="72" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Pemakai Barang</text>
      </g>
    </svg>`,
    text: 'Berdasarkan bagan alur di atas, pihak perantara yang bertugas mengantarkan barang dari produsen sampai ke tangan konsumen dinamakan ...',
    options: [
      { id: 'A', text: 'Distributor' },
      { id: 'B', text: 'Konsumen' },
      { id: 'C', text: 'Investor' },
      { id: 'D', text: 'Mandor' },
    ],
    correctAnswer: 'A',
    explanation: 'Distributor adalah orang, kelompok, atau badan usaha yang bertugas menyalurkan barang dan jasa dari produsen kepada konsumen (misalnya pedagang grosir, agen, dan toko pengecer).'
  },
  {
    id: 15,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kegiatan Konsumsi Sehari-hari',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan kegiatan yang termasuk contoh kegiatan konsumsi.',
    text: 'Contoh kegiatan konsumsi yang dilakukan oleh seorang siswa sekolah dasar adalah ...',
    options: [
      { id: 'A', text: 'Memakan bekal roti dan meminum susu saat jam istirahat' },
      { id: 'B', text: 'Menjahit kain menjadi seragam merah putih' },
      { id: 'C', text: 'Mengirim paket buku ke luar kota menggunakan mobil ekspedisi' },
      { id: 'D', text: 'Menanam bibit padi di area persawahan' },
    ],
    correctAnswer: 'A',
    explanation: 'Memakan bekal roti dan minum susu adalah tindakan memakai/menghabiskan nilai guna barang, yang merupakan inti dari kegiatan konsumsi.'
  },
  {
    id: 16,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kondisi Geografis Pesisir Pantai & Mata Pencaharian',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi mata pencaharian utama masyarakat yang bertempat tinggal di wilayah pesisir pantai.',
    text: 'Masyarakat yang tinggal di daerah pesisir pantai seperti di pesisir Pengambengan dan Yeh Kuning Jembrana sebagian besar memanfaatkan potensi laut dengan bekerja sebagai ...',
    options: [
      { id: 'A', text: 'Nelayan penangkap ikan dan pembuat garam' },
      { id: 'B', text: 'Petani pemetik teh dan kopi' },
      { id: 'C', text: 'Penebang kayu di hutan belantara' },
      { id: 'D', text: 'Penambang batu bara di perut bumi' },
    ],
    correctAnswer: 'A',
    explanation: 'Wilayah pesisir laut kaya akan sumber daya perikanan dan air laut yang asin, sehingga penduduknya banyak berprofesi sebagai nelayan, petani tambak garam, dan budidaya rumput laut.'
  },
  {
    id: 17,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kondisi Geografis Dataran Tinggi & Perkebunan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Disajikan gambar bentang alam perbukitan/pegunungan, siswa dapat menghubungkan kondisi geografis dataran tinggi dengan komoditas pertanian yang cocok.',
    image: `<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="460" height="140" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <!-- Gunung / Perbukitan Hijau -->
      <path d="M 0 140 L 70 65 L 150 110 L 250 40 L 360 100 L 460 55 L 460 140 Z" fill="#86efac"/>
      <path d="M 40 140 L 140 75 L 230 120 L 330 60 L 460 115 L 460 140 Z" fill="#22c55e" opacity="0.6"/>
      <!-- Terasering & Tumbuhan -->
      <path d="M 120 125 Q 160 115 200 125" stroke="#15803d" stroke-width="2" fill="none"/>
      <path d="M 220 105 Q 260 95 300 105" stroke="#15803d" stroke-width="2" fill="none"/>
      <text x="230" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">Bentang Alam Dataran Tinggi / Pegunungan Sejuk</text>
      <rect x="110" y="90" width="240" height="36" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
      <text x="230" y="112" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">Suhu Sejuk • Ketinggian &gt; 500 mdpl • Tanah Subur</text>
    </svg>`,
    text: 'Perhatikan gambar bentang alam di atas! Daerah dataran tinggi memiliki udara yang sejuk dan tanah yang gembur. Jenis tanaman perkebunan yang sangat cocok dibudidayakan di daerah tersebut adalah ...',
    options: [
      { id: 'A', text: 'Kopi, cengkih, teh, dan aneka sayuran dataran tinggi' },
      { id: 'B', text: 'Pohon bakau (mangrove) dan kelapa pantai' },
      { id: 'C', text: 'Rumput laut dan tambak udang air payau' },
      { id: 'D', text: 'Kaktus gurun dan kurma kering' },
    ],
    correctAnswer: 'A',
    explanation: 'Dataran tinggi bersuhu sejuk sangat cocok untuk budidaya komoditas perkebunan seperti kopi, cengkih, teh, stroberi, wortel, dan kubis.'
  },
  {
    id: 18,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kondisi Geografis Dataran Rendah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis keunggulan dataran rendah sebagai pusat kegiatan permukiman, industri, dan pertanian padi sawah.',
    text: 'Wilayah dataran rendah banyak dipilih masyarakat sebagai pusat pemukiman, kawasan perkantoran, dan persawahan karena memiliki keunggulan berupa ...',
    options: [
      { id: 'A', text: 'Bentuk permukaan tanah relatif datar sehingga memudahkan mobilitas transportasi dan pembangunan' },
      { id: 'B', text: 'Sering terjadi salju lebat sepanjang tahun' },
      { id: 'C', text: 'Sulit dijangkau kendaraan roda dua maupun roda empat' },
      { id: 'D', text: 'Banyak jurang terjal yang berbahaya untuk jalan raya' },
    ],
    correctAnswer: 'A',
    explanation: 'Kontur tanah datar pada dataran rendah memudahkan pembangunan infrastruktur jalan, perumahan, kawasan industri, dan jaringan irigasi persawahan.'
  },
  {
    id: 19,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Potensi Sumber Daya Alam Daerah Jembrana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan sentra perikanan laut terbesar di Kabupaten Jembrana yang menjadi pusat kegiatan ekonomi nelayan.',
    text: 'Di Kabupaten Jembrana - Bali, salah satu pelabuhan perikanan dan sentra industri pengolahan hasil tangkapan laut terbesar terletak di daerah ...',
    options: [
      { id: 'A', text: 'Pengambengan' },
      { id: 'B', text: 'Kintamani' },
      { id: 'C', text: 'Ubud' },
      { id: 'D', text: 'Bedugul' },
    ],
    correctAnswer: 'A',
    explanation: 'Pengambengan di Kecamatan Negara, Kabupaten Jembrana merupakan pelabuhan perikanan nusantara yang terkenal sebagai pusat tangkapan ikan lemuru dan industri pengalengan ikan.'
  },
  {
    id: 20,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Potensi Perkebunan Kakao / Cokelat Jembrana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan produk olahan perkebunan unggulan dari Kabupaten Jembrana yang berhasil diekspor hingga ke mancanegara.',
    text: 'Selain hasil perikanan, Kabupaten Jembrana juga terkenal memiliki perkebunan unggulan yang telah diekspor ke berbagai negara di Eropa dan Asia karena kualitas fermentasinya, yaitu ...',
    options: [
      { id: 'A', text: 'Biji Kakao (Cokelat)' },
      { id: 'B', text: 'Gandum' },
      { id: 'C', text: 'Kurma' },
      { id: 'D', text: 'Apel malang' },
    ],
    correctAnswer: 'A',
    explanation: 'Kakao fermentasi dari Jembrana merupakan komoditas ekspor unggulan Bali yang terkenal memiliki kualitas cita rasa tinggi di pasar cokelat dunia.'
  },
  {
    id: 21,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kegiatan Usaha di Bidang Jasa',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan kegiatan ekonomi yang menghasilkan barang dengan kegiatan ekonomi yang menghasilkan jasa layanan.',
    text: 'Berikut ini profesi yang bekerja menghasilkan "layanan jasa" bagi masyarakat adalah ...',
    options: [
      { id: 'A', text: 'Dokter, guru, dan sopir angkutan umum' },
      { id: 'B', text: 'Petani padi, nelayan ikan, dan pembuat kue' },
      { id: 'C', text: 'Pengrajin genteng dan penjahit seragam' },
      { id: 'D', text: 'Pabrik pembuat sepatu dan pengolah minyak goreng' },
    ],
    correctAnswer: 'A',
    explanation: 'Dokter (jasa kesehatan), guru (jasa pendidikan), dan sopir (jasa transportasi) tidak membuat barang fisik yang dijual, melainkan memberikan layanan keahlian (jasa).'
  },
  {
    id: 22,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Faktor Pendukung Kegiatan Ekonomi Daerah (Pasar)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan fungsi keberadaan pasar tradisional di daerah sebagai sarana pendukung perekonomian masyarakat.',
    text: 'Pasar tradisional seperti Pasar Umum Negara di Jembrana memegang peranan sangat penting sebagai faktor pendukung ekonomi daerah karena berfungsi sebagai ...',
    options: [
      { id: 'A', text: 'Tempat bertemunya penjual dan pembeli untuk melakukan transaksi jual beli barang kebutuhan' },
      { id: 'B', text: 'Tempat mengubur sampah plastik dari rumah tangga' },
      { id: 'C', text: 'Tempat perlombaan balap sepeda motor liar' },
      { id: 'D', text: 'Kawasan terlarang bagi masyarakat umum' },
    ],
    correctAnswer: 'A',
    explanation: 'Pasar adalah tempat strategis bertemunya produsen/penjual dengan konsumen/pembeli untuk mendistribusikan aneka kebutuhan bahan pokok masyarakat.'
  },
  {
    id: 23,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Faktor Pendukung: Sarana Transportasi & Jalan Raya',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis dampak kondisi jalan yang rusak terhadap kegiatan ekonomi pengiriman barang di daerah.',
    text: 'Apabila jalan raya antar-desa mengalami kerusakan parah dan berlubang, dampak langsung yang akan dirasakan dalam kegiatan perekonomian daerah adalah ...',
    options: [
      { id: 'A', text: 'Distribusi barang menjadi terhambat, biaya angkut naik, dan pasokan barang di pasar terlambat' },
      { id: 'B', text: 'Hasil panen petani langsung berlipat ganda' },
      { id: 'C', text: 'Harga barang kebutuhan menjadi sangat murah' },
      { id: 'D', text: 'Masyarakat berhenti makan sayuran' },
    ],
    correctAnswer: 'A',
    explanation: 'Infrastruktur jalan raya yang memadai sangat penting bagi kelancaran distribusi. Kerusakan jalan menyebabkan biaya logistik bertambah dan pasokan barang terhambat.'
  },
  {
    id: 24,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Lembaga Keuangan Pendukung Ekonomi (Koperasi & Bank)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan peran koperasi simpan pinjam / LPD di Bali dalam membantu modal usaha pedagang kecil.',
    text: 'Lembaga keuangan desa seperti Lembaga Perkreditan Desa (LPD) dan Koperasi Unit Desa (KUD) di Bali membantu pedagang kecil dengan cara ...',
    options: [
      { id: 'A', text: 'Menyediakan pinjaman modal usaha dengan syarat mudah dan aman' },
      { id: 'B', text: 'Memaksa pedagang menutup usahanya' },
      { id: 'C', text: 'Mengharuskan pedagang berbelanja ke luar negeri' },
      { id: 'D', text: 'Mengambil alih seluruh barang dagangan tanpa membayar' },
    ],
    correctAnswer: 'A',
    explanation: 'Koperasi dan LPD berperan strategis membantu perekonomian masyarakat pedesaan melalui tabungan dan penyaluran kredit permodalan usaha kecil.'
  },
  {
    id: 25,
    type: 'pg',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Kegiatan Ekonomi Pariwisata Daerah',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi mata pencaharian yang berkembang pesat akibat adanya objek wisata alam dan budaya.',
    text: 'Berkembangnya objek wisata alam seperti Pantai Candikusuma dan Desa Wisata di Jembrana membuka peluang kerja baru bagi warga setempat dalam bidang ...',
    options: [
      { id: 'A', text: 'Pemandu wisata (tour guide), penyewaan perahu, dan penjual kuliner cendera mata' },
      { id: 'B', text: 'Pengeboran minyak bumi lepas pantai' },
      { id: 'C', text: 'Pabrik perakitan senjata berat' },
      { id: 'D', text: 'Penangkapan burung langka secara liar' },
    ],
    correctAnswer: 'A',
    explanation: 'Sektor pariwisata menciptakan lapangan kerja di bidang jasa pariwisata, perhotelan/homestay, pemandu lokal, transportasi wisata, dan kuliner khas daerah.'
  },

  // --- ELEMEN 3: AKU PELAKU EKONOMI YANG BIJAK & MASALAH EKONOMI DAERAH ---
  {
    id: 26,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Ciri-Ciri Konsumen yang Bijak',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan perilaku yang mencerminkan konsumen cerdas dan bijak dalam kehidupan sehari-hari.',
    text: 'Sikap berikut yang menunjukkan perilaku seorang konsumen yang bijak adalah ...',
    options: [
      { id: 'A', text: 'Membuat daftar belanja kebutuhan terlebih dahulu dan memeriksa tanggal kedaluwarsa barang' },
      { id: 'B', text: 'Membeli semua barang yang sedang diskon meski tidak dibutuhkan' },
      { id: 'C', text: 'Meminjam uang berlebih untuk membeli mainan demi gengsi' },
      { id: 'D', text: 'Langsung membeli barang tanpa mengecek kualitas dan harganya' },
    ],
    correctAnswer: 'A',
    explanation: 'Konsumen yang bijak merencanakan belanja sesuai kebutuhan, membandingkan kualitas dan harga secara rasional, serta memastikan keamanan barang yang dibeli.'
  },
  {
    id: 27,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Skala Prioritas Kebutuhan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Disajikan ilustrasi timbangan skala prioritas, siswa dapat memilih urutan belanja yang paling tepat sesuai skala prioritas.',
    image: `<svg viewBox="0 0 460 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="460" height="135" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="230" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Prinsip Skala Prioritas: Dahulukan yang Pokok &amp; Mendesak</text>
      
      <!-- Timbangan visual -->
      <!-- Tiang -->
      <line x1="230" y1="38" x2="230" y2="95" stroke="#78350f" stroke-width="4"/>
      <polygon points="220,95 240,95 248,115 212,115" fill="#78350f"/>
      <!-- Lengan Timbangan miring ke kiri (lebih berat/prioritas) -->
      <line x1="100" y1="65" x2="360" y2="45" stroke="#92400e" stroke-width="3"/>
      
      <!-- Piring Kiri: Kebutuhan Mendesak -->
      <line x1="100" y1="65" x2="70" y2="92" stroke="#b45309" stroke-width="1.5"/>
      <line x1="100" y1="65" x2="130" y2="92" stroke="#b45309" stroke-width="1.5"/>
      <ellipse cx="100" cy="94" rx="36" ry="7" fill="#15803d"/>
      <rect x="68" y="72" width="64" height="20" rx="4" fill="#dcfce7" stroke="#16a34a"/>
      <text x="100" y="86" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">Buku &amp; Makanan</text>

      <!-- Piring Kanan: Keinginan Sesaat -->
      <line x1="360" y1="45" x2="330" y2="72" stroke="#b45309" stroke-width="1.5"/>
      <line x1="360" y1="45" x2="390" y2="72" stroke="#b45309" stroke-width="1.5"/>
      <ellipse cx="360" cy="74" rx="36" ry="7" fill="#b91c1c"/>
      <rect x="328" y="52" width="64" height="20" rx="4" fill="#fee2e2" stroke="#ef4444"/>
      <text x="360" y="66" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Mainan Tren</text>
    </svg>`,
    text: 'Ayu memiliki uang saku tabungan sebesar Rp50.000,00. Pada saat yang bersamaan, pensil tulisnya habis, ia belum makan siang, dan temannya mengajak membeli boneka viral seharga Rp50.000,00. Berdasarkan skala prioritas belanja bijak, tindakan yang seharusnya Ayu ambil adalah ...',
    options: [
      { id: 'A', text: 'Membeli pensil untuk belajar dan makan siang terlebih dahulu, sisa uang ditabung' },
      { id: 'B', text: 'Menghabiskan seluruh uang untuk boneka viral dan membiarkan diri kelaparan' },
      { id: 'C', text: 'Membeli boneka viral lalu meminjam uang teman untuk makan siang' },
      { id: 'D', text: 'Menangis meminta uang tambahan kepada orang tua secara paksa' },
    ],
    correctAnswer: 'A',
    explanation: 'Skala prioritas mengajarkan untuk mendahulukan kebutuhan primer (makan siang) dan sarana belajar (pensil) di atas keinginan hiburan yang bisa ditunda (boneka viral).'
  },
  {
    id: 28,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Manfaat Gemar Menabung Sejak Dini',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan manfaat kebiasaan menyisihkan uang saku untuk ditabung.',
    text: 'Peribahasa "Hemat pangkal kaya" mengajarkan kita untuk gemar menabung. Manfaat utama membiasakan diri menabung sejak kecil adalah ...',
    options: [
      { id: 'A', text: 'Melatih hidup hemat, mandiri, dan memiliki dana cadangan untuk keperluan tak terduga' },
      { id: 'B', text: 'Agar dipuji teman sebaya sebagai orang pelit' },
      { id: 'C', text: 'Supaya uang simpanan dimakan rayap di celengan' },
      { id: 'D', text: 'Membuat kita tidak perlu belajar giat di sekolah' },
    ],
    correctAnswer: 'A',
    explanation: 'Menabung melatih kedisiplinan mengelola keuangan, menjauhkan dari perilaku konsumtif/boros, serta mempersiapkan masa depan.'
  },
  {
    id: 29,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Mencintai dan Menghargai Produk Lokal',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan dampak positif membeli dan mengonsumsi produk buatan UMKM daerah sendiri.',
    text: 'Jika kita lebih memilih membeli buah jeruk lokal, jajanan tradisional, dan kain tenun endek khas daerah Bali dibandingkan barang impor luar negeri, maka dampak positifnya adalah ...',
    options: [
      { id: 'A', text: 'Meningkatkan pendapatan petani dan pengrajin lokal serta memajukan perekonomian daerah' },
      { id: 'B', text: 'Membuat produk lokal menjadi langka dan punah' },
      { id: 'C', text: 'Merugikan pedagang kecil di lingkungan sekitar' },
      { id: 'D', text: 'Mengakibatkan pasar tradisional menjadi sepi pengunjung' },
    ],
    correctAnswer: 'A',
    explanation: 'Membeli produk UMKM lokal memutar roda perekonomian daerah, memperluas lapangan kerja warga sekitar, dan meningkatkan kesejahteraan produsen lokal.'
  },
  {
    id: 30,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Sikap Produsen yang Bertanggung Jawab',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi perilaku produsen makanan yang bertanggung jawab terhadap keselamatan konsumen.',
    text: 'Pak Ketut adalah produsen keripik singkong. Bentuk tanggung jawab Pak Ketut sebagai produsen yang bijak dan beretika adalah ...',
    options: [
      { id: 'A', text: 'Menggunakan bahan baku singkong segar berkualitas, minyak goreng higienis, dan tanpa bahan kimia berbahaya' },
      { id: 'B', text: 'Mencampur minyak goreng bekas yang hitam agar biaya produksi sangat murah' },
      { id: 'C', text: 'Memalsukan tanggal kedaluwarsa agar barang yang basi tetap laku terjual' },
      { id: 'D', text: 'Mengurangi timbangan berat keripik secara diam-diam' },
    ],
    correctAnswer: 'A',
    explanation: 'Produsen bertanggung jawab menjaga mutu, kesehatan, keselamatan konsumen, memberikan takaran timbangan yang jujur, dan tidak memakai zat aditif berbahaya.'
  },
  {
    id: 31,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Masalah Ekonomi: Kelangkaan Barang dan Dampaknya',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis penyebab terjadinya kelangkaan barang di pasar dan pengaruhnya terhadap kenaikan harga.',
    text: 'Ketika terjadi musim kemarau panjang, banyak sawah petani mengalami gagal panen sehingga pasokan beras ke pasar menjadi sangat sedikit, sementara masyarakat yang membutuhkan beras tetap banyak. Keadaan ini akan menimbulkan ...',
    options: [
      { id: 'A', text: 'Kelangkaan beras yang menyebabkan harga beras di pasar mengalami kenaikan' },
      { id: 'B', text: 'Beras berceceran di pasar dan harganya anjlok gratis' },
      { id: 'C', text: 'Semua toko beras terpaksa membagikan beras secara cuma-cuma' },
      { id: 'D', text: 'Masyarakat berhenti mengonsumsi karbohidrat selamanya' },
    ],
    correctAnswer: 'A',
    explanation: 'Kelangkaan terjadi jika jumlah barang yang tersedia lebih sedikit daripada jumlah kebutuhan manusia. Berkurangnya pasokan di tengah tingginya permintaan akan memicu kenaikan harga pasar.'
  },
  {
    id: 32,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Masalah Pencemaran Lingkungan Akibat Aktivitas Usaha',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Disajikan kasus limbah pengolahan industri rumah tangga, siswa dapat merumuskan cara penanganan limbah yang ramah lingkungan.',
    text: 'Sebuah pabrik pembuatan tahu di pinggir desa membuang air limbah kedelai yang berbau busuk langsung ke aliran sungai irigasi. Tindakan tepat yang harus dilakukan pemilik pabrik untuk mengatasi masalah pencemaran tersebut adalah ...',
    options: [
      { id: 'A', text: 'Membangun Instalasi Pengolahan Air Limbah (IPAL) sebelum air dibuang ke badan air' },
      { id: 'B', text: 'Membuang limbah pada malam hari agar tidak terlihat warga sekitar' },
      { id: 'C', text: 'Menambah debit limbah agar sungai cepat mengalir ke laut' },
      { id: 'D', text: 'Menutup aliran sungai dengan tumpukan pasir' },
    ],
    correctAnswer: 'A',
    explanation: 'Pengolahan limbah melalui Instalasi Pengolahan Air Limbah (IPAL) atau bio-digester menetralkan zat pencemar sehingga air limbah aman dan tidak merusak ekosistem sungai.'
  },
  {
    id: 33,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Solusi Mengatasi Masalah Sampah Plastik Konsumsi',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan tindakan konkret seorang pembeli untuk mengurangi penumpukan sampah kantong plastik belanja di pasar.',
    text: 'Sebagai konsumen yang peduli terhadap kelestarian lingkungan daerah, tindakan yang dapat kita lakukan saat berbelanja ke pasar adalah ...',
    options: [
      { id: 'A', text: 'Membawa tas belanja kain sendiri dari rumah yang dapat digunakan berulang kali' },
      { id: 'B', text: 'Meminta kantong plastik sebanyak-banyaknya untuk dibuang ke selokan' },
      { id: 'C', text: 'Membakar sampah kantong plastik di tengah keramaian pasar' },
      { id: 'D', text: 'Membungkus setiap buah menggunakan plastik berlapis tiga' },
    ],
    correctAnswer: 'A',
    explanation: 'Membawa kantong belanja kain ramah lingkungan (reuse) mengurangi pemakaian plastik sekali pakai yang mencemari lingkungan dan menyumbat saluran air.'
  },
  {
    id: 34,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Solusi Mengatasi Kenaikan Harga Pangan Rumah Tangga',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengevaluasi solusi mandiri yang dapat diterapkan keluarga dalam menghadapi lonjakan harga bumbu dapur seperti cabai.',
    text: 'Ketika harga cabai dan sayuran di pasar melonjak sangat tinggi menjelang hari raya, solusi bijak dan kreatif yang dapat diterapkan keluarga di rumah adalah ...',
    options: [
      { id: 'A', text: 'Memanfaatkan pekarangan rumah atau pot polybag untuk menanam cabai dan sayuran sendiri' },
      { id: 'B', text: 'Menimbun cabai dalam jumlah karungan sampai busuk' },
      { id: 'C', text: 'Memprotes pedagang pasar dengan kekerasan' },
      { id: 'D', text: 'Membeli cabai dengan cara berutang tanpa berniat melunasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Gerakan menanam bumbu dapur dan sayuran di pekarangan sendiri (urban farming/taman gizi keluarga) adalah solusi mandiri yang sangat efektif saat harga pangan melonjak.'
  },
  {
    id: 35,
    type: 'pg',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Pemanfaatan Energi Secara Bijak dalam Aktivitas Ekonomi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan hubungan antara perilaku hemat energi listrik dengan penghematan pengeluaran biaya ekonomi keluarga.',
    text: 'Ibu selalu mematikan televisi dan lampu kamar yang sudah tidak digunakan. Tindakan hemat energi listrik ini berdampak langsung bagi ekonomi keluarga, yaitu ...',
    options: [
      { id: 'A', text: 'Mengurangi tagihan rekening listrik bulanan sehingga uangnya dapat dialihkan untuk tabungan' },
      { id: 'B', text: 'Menyebabkan pasokan listrik dari PLN terputus seketika' },
      { id: 'C', text: 'Membuat rumah menjadi seram dan tidak berpenghuni' },
      { id: 'D', text: 'Meningkatkan biaya belanja rumah tangga menjadi boros' },
    ],
    correctAnswer: 'A',
    explanation: 'Perilaku hemat energi listrik secara langsung menekan pengeluaran tagihan bulanan keluarga, yang mencerminkan prinsip pelaku ekonomi yang bijak.'
  },

  // =========================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS (PGK) KATEGORI (BENAR / SALAH)
  // Masing-masing memuat 3 deskripsi/pernyataan yang harus dijawab.
  // Bobot: 6 poin/butir (2 poin per pernyataan) -> Total: 30 poin
  // =========================================================================

  {
    id: 36,
    type: 'pgk_kategori',
    element: 'Kegiatan Ekonomi di Daerahku (Pelaku Ekonomi, Jenis Kegiatan, Kondisi Geografis & Potensi SDA)',
    topic: 'Rantai Pasok Perikanan Laut di Daerah Pesisir',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Disajikan diagram rantai pasok ikan dari nelayan hingga konsumen, siswa dapat menentukan kebenaran peran masing-masing pelaku ekonomi.',
    image: `<svg viewBox="0 0 500 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <marker id="arrFish" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7"/>
        </marker>
      </defs>
      <rect width="500" height="135" rx="12" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5"/>
      <text x="250" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f766e" text-anchor="middle">Rantai Pasok Komoditas Perikanan Laut Jembrana</text>
      
      <!-- Nelayan -->
      <g transform="translate(15, 32)">
        <rect width="95" height="85" rx="8" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
        <text x="47" y="24" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0f766e" text-anchor="middle">1. Nelayan Laut</text>
        <text x="47" y="45" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Menangkap ikan</text>
        <rect x="10" y="58" width="75" height="18" rx="4" fill="#ccfbf1"/>
        <text x="47" y="70" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#115e59" text-anchor="middle">PRODUSEN</text>
      </g>
      <line x1="113" y1="74" x2="135" y2="74" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrFish)"/>

      <!-- TPI / Pengepul -->
      <g transform="translate(138, 32)">
        <rect width="105" height="85" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="52" y="24" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">2. TPI Pengambengan</text>
        <text x="52" y="45" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Lelang &amp; tampung</text>
        <rect x="12" y="58" width="81" height="18" rx="4" fill="#e0f2fe"/>
        <text x="52" y="70" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#075985" text-anchor="middle">DISTRIBUTOR 1</text>
      </g>
      <line x1="246" y1="74" x2="268" y2="74" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrFish)"/>

      <!-- Pedagang Ikan Pasar -->
      <g transform="translate(271, 32)">
        <rect width="100" height="85" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="50" y="24" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">3. Pedagang Pasar</text>
        <text x="50" y="45" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Jual eceran</text>
        <rect x="10" y="58" width="80" height="18" rx="4" fill="#e0f2fe"/>
        <text x="50" y="70" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#075985" text-anchor="middle">DISTRIBUTOR 2</text>
      </g>
      <line x1="374" y1="74" x2="396" y2="74" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrFish)"/>

      <!-- Konsumen Rumah Tangga -->
      <g transform="translate(399, 32)">
        <rect width="88" height="85" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
        <text x="44" y="24" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">4. Ibu Rumah Tangga</text>
        <text x="44" y="45" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Goreng &amp; makan</text>
        <rect x="8" y="58" width="72" height="18" rx="4" fill="#fee2e2"/>
        <text x="44" y="70" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#991b1b" text-anchor="middle">KONSUMEN</text>
      </g>
    </svg>`,
    text: 'Perhatikan bagan rantai pasok ikan laut di atas! Tentukan pernyataan berikut Benar atau Salah mengenai peran para pelaku ekonomi tersebut:',
    statements: [
      {
        id: 's1',
        text: 'Nelayan yang melaut dan menangkap ikan berperan sebagai produsen bahan pangan hewani laut.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Tempat Pelelangan Ikan (TPI) dan pedagang di pasar tradisional bertindak sebagai distributor yang menyalurkan hasil tangkapan laut kepada pembeli.',
        correctAnswer: true, // Benar
      },
      {
        id: 's3',
        text: 'Ibu rumah tangga yang membeli ikan di pasar lalu memasaknya untuk lauk makan keluarga berperan sebagai distributor barang.',
        correctAnswer: false, // Salah (seharusnya Konsumen)
      },
    ],
    explanation: 'Pernyataan 1 BENAR (nelayan adalah produsen);\nPernyataan 2 BENAR (TPI dan pedagang pasar adalah distributor perantara);\nPernyataan 3 SALAH karena ibu rumah tangga yang memasak ikan untuk keluarga bertindak sebagai konsumen, bukan distributor.'
  },
  {
    id: 37,
    type: 'pgk_kategori',
    element: 'Bagaimana Aku Memenuhi Kebutuhanku (Kebutuhan Hidup, Asal Barang & Rantai Kegiatan Ekonomi)',
    topic: 'Klasifikasi Kebutuhan Berdasarkan Tingkat Intensitas & Pengaruh Sosial Budaya',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi pernyataan mengenai pengelompokan jenis-jenis kebutuhan manusia dan pengaruh sosial budaya.',
    text: 'Tentukan Benar atau Salah pada setiap pernyataan mengenai jenis kebutuhan manusia berikut:',
    statements: [
      {
        id: 's1',
        text: 'Makanan pokok, air minum bersih, pakaian seragam, dan tempat berteduh merupakan contoh kebutuhan primer yang tidak dapat ditunda.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Perlengkapan sarana upacara keagamaan dan pakaian adat di Bali merupakan contoh kebutuhan yang dipengaruhi oleh nilai sosial budaya dan tradisi masyarakat setempat.',
        correctAnswer: true, // Benar
      },
      {
        id: 's3',
        text: 'Membeli perhiasan intan permata dan mobil mewah model terbaru adalah kebutuhan primer yang harus didahulukan sebelum membeli beras.',
        correctAnswer: false, // Salah (itu kebutuhan tersier)
      },
    ],
    explanation: 'Pernyataan 1 BENAR (kebutuhan primer mutlak diperlukan untuk bertahan hidup);\nPernyataan 2 BENAR (faktor sosial budaya membentuk kebutuhan khas daerah);\nPernyataan 3 SALAH karena perhiasan intan dan mobil mewah adalah kebutuhan tersier yang dipenuhi setelah kebutuhan primer dan sekunder tercukupi.'
  },
  {
    id: 38,
    type: 'pgk_kategori',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Pemanfaatan Sumber Daya Alam dan Kelestarian Lingkungan Usaha',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Disajikan infografis kelestarian SDA perikanan, siswa dapat menganalisis dampak eksploitasi berlebihan dan tanggung jawab kelestarian usaha.',
    image: `<svg viewBox="0 0 480 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="480" height="135" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="240" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Menjaga Keseimbangan Sumber Daya Alam dan Kegiatan Usaha</text>
      
      <!-- Kolom Kiri: Cara Terlarang & Rusak -->
      <g transform="translate(20, 36)">
        <rect width="210" height="85" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="105" y="24" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Eksploitasi Merusak (Dilarang)</text>
        <text x="105" y="45" font-family="sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">• Pukat Harimau &amp; Bom Laut</text>
        <text x="105" y="62" font-family="sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">• Terumbu karang rusak parah</text>
        <text x="105" y="76" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">-> Ikan punah, nelayan merugi</text>
      </g>

      <!-- Kolom Kanan: Cara Berkelanjutan -->
      <g transform="translate(250, 36)">
        <rect width="210" height="85" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
        <text x="105" y="24" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">Pemanfaatan Bijak (Lestari)</text>
        <text x="105" y="45" font-family="sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Jaring ramah lingkungan</text>
        <text x="105" y="62" font-family="sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Menjaga terumbu karang</text>
        <text x="105" y="76" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#15803d" text-anchor="middle">-> Hasil laut melimpah terus</text>
      </g>
    </svg>`,
    text: 'Tentukan Benar atau Salah pada setiap pernyataan mengenai pemanfaatan sumber daya alam laut daerah secara bijak berikut:',
    statements: [
      {
        id: 's1',
        text: 'Penggunaan bom ikan dan pukat harimau dapat menghancurkan terumbu karang dan mengancam masa depan mata pencaharian nelayan laut.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Pabrik pengolahan ikan yang menyaring dan membersihkan air limbahnya sebelum dibuang ke laut merupakan wujud pelaku ekonomi yang bertanggung jawab.',
        correctAnswer: true, // Benar
      },
      {
        id: 's3',
        text: 'Menangkap seluruh bibit ikan yang masih kecil dengan jaring bermata sangat rapat adalah cara bijak untuk melipatgandakan penghasilan laut.',
        correctAnswer: false, // Salah (menghabiskan regenerasi ikan)
      },
    ],
    explanation: 'Pernyataan 1 BENAR (bom ikan merusak ekosistem bawah laut);\nPernyataan 2 BENAR (pengolahan limbah menjaga kebersihan lingkungan pantai);\nPernyataan 3 SALAH karena menangkap ikan-ikan kecil akan memutus rantai regenerasi ikan di masa mendatang.'
  },
  {
    id: 39,
    type: 'pgk_kategori',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Perilaku Konsumen yang Bijak dan Pengelolaan Keuangan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi tindakan pengelolaan uang saku yang mencerminkan konsumen cerdas dan berprinsip hemat.',
    text: 'Tentukan Benar atau Salah pada setiap pernyataan mengenai sikap pelaku ekonomi yang bijak berikut:',
    statements: [
      {
        id: 's1',
        text: 'Menyusun catatan skala prioritas sebelum pergi berbelanja dapat mencegah seseorang membeli barang-barang yang tidak berguna.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Menghabiskan seluruh uang saku sekolah hanya untuk membeli jajanan manis dan mainan tren demi dipuji teman adalah contoh perilaku konsumen bijak.',
        correctAnswer: false, // Salah (itu perilaku boros/konsumtif)
      },
      {
        id: 's3',
        text: 'Menyisihkan sebagian uang saku ke dalam celengan secara rutin membantu melatih kebiasaan berhemat sejak usia dini.',
        correctAnswer: true, // Benar
      },
    ],
    explanation: 'Pernyataan 1 BENAR (skala prioritas mengontrol pengeluaran belanja);\nPernyataan 2 SALAH karena menghabiskan uang demi gengsi adalah sikap konsumtif/boros;\nPernyataan 3 BENAR (menabung secara disiplin melatih kemandirian finansial anak).'
  },
  {
    id: 40,
    type: 'pgk_kategori',
    element: 'Aku Pelaku Ekonomi yang Bijak (Konsumen/Produsen Bijak, Masalah Ekonomi Daerah & Solusinya)',
    topic: 'Masalah Kegiatan Ekonomi di Daerah dan Solusinya',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menganalisis permasalahan ekonomi di daerah berupa kelangkaan dan merumuskan solusi mengatasinya.',
    text: 'Tentukan Benar atau Salah pada setiap pernyataan mengenai masalah kegiatan ekonomi dan cara mengatasinya berikut:',
    statements: [
      {
        id: 's1',
        text: 'Keterlambatan pasokan barang dari pelabuhan akibat gelombang laut tinggi dapat memicu kelangkaan dan kenaikan harga barang kebutuhan di pasar daerah.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Mengembangkan perkebunan sayur keluarga di pekarangan rumah (taman gizi) merupakan salah satu solusi cerdas mengatasi tingginya harga sayur di pasar.',
        correctAnswer: true, // Benar
      },
      {
        id: 's3',
        text: 'Menimbun barang kebutuhan pokok dalam jumlah besar di gudang saat terjadi bencana merupakan tindakan terpuji untuk menjaga stabilitas ekonomi.',
        correctAnswer: false, // Salah (menimbun adalah tindakan ilegal dan merugikan masyarakat)
      },
    ],
    explanation: 'Pernyataan 1 BENAR (hambatan transportasi laut menyebabkan kelangkaan dan kenaikan harga);\nPernyataan 2 BENAR (urban farming mandiri mengurangi ketergantungan belanja pasar);\nPernyataan 3 SALAH karena menimbun barang saat krisis adalah perbuatan terlarang yang memperparah kelangkaan.'
  },
];
