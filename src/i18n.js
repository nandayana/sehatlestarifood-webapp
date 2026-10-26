import { ref, computed } from 'vue'

export const locale = ref('id')

export function setLocale(value) {
  if (messages[value]) {
    locale.value = value
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('site-locale', value)
    }
  }
}

export function initLocale() {
  if (typeof window === 'undefined') return
  const savedLocale = window.localStorage.getItem('site-locale')
  const browserLocale = navigator.language?.slice(0, 2)
  const initialLocale = savedLocale || browserLocale
  if (initialLocale && messages[initialLocale]) {
    locale.value = initialLocale
  }
}

const messages = {
  id: {
    categories: [
      {
        id: 1,
        title: 'Sehat Lestari Food',
        description: 'Kami menghadirkan cita rasa Indonesia yang kaya dan otentik ke seluruh dunia, yang diracik dari bahan-bahan lokal pilihan dan resep tradisional. Dengan sertifikasi Halal dan tanpa bahan pengawet serta melalui standar kualitas yang ketat, produk kami mempertahankan cita rasa khas masakan rumahan bagi pasar global yang mencakup Eropa, Timur Tengah, Tiongkok, dan wilayah lainnya.',
        image: 'category2.png'
      },
      /* {
        id: 2,
        title: 'Sehat Lestari Food X deHiro',
        description: 'Untuk melayani pasar Eropa, Sehat Lestari Food dengan bangga menjalin kemitraan bersama Dehiro, sebuah perusahaan produsen dan distributor makanan sehat yang berbasis di Belgia. Kolaborasi ini menghubungkan warisan kuliner Indonesia yang otentik secara langsung dengan rumah tangga, ritel, dan layanan makanan di Eropa.',
        image: 'category1.png'
      }, */
    ],
    "products": [
      {
        "category": "Bumbu",
        "product_name": "Bumbu Pecel Pedas",
        "slug": "bumbu-pecel-pedas",
        "description": "Perpaduan tradisional khas dari kacang tanah pilihan dan rempah-rempah alami. Menghasilkan profil rasa yang kaya, manis, gurih, dan pedas dengan sentuhan aroma herbal yang khas. Sangat pas untuk sayuran kukus segar, nasi, lontong, maupun hidangan pendamping.",
        "brand": "deHiro / Sehat Lestari Food",
        "net_weight": "200 gr",
        "image": "product0.png",
        "ingredients": [
          "Kacang tanah",
          "Gula aren",
          "Garam",
          "Daun jeruk purut",
          "Cabai merah",
          "Bawang putih",
          "Kencur"
        ],
        "allergen_warning": "Produk ini mengandung kacang tanah dan/atau mungkin mengandung jejak kacang tanah. Tidak direkomendasikan bagi individu dengan alergi kacang tanah.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kkal",
          "energy_from_fat": "330 kkal",
          "nutrients": [
            {
              "nutrient": "Total Lemak",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Karbohidrat",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Gula",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Natrium / Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Bumbu",
        "product_name": "Bumbu Pecel Sedang",
        "slug": "bumbu-pecel-sedang",
        "description": "Perpaduan tradisional khas dari kacang tanah pilihan dan rempah-rempah alami. Menghasilkan profil rasa yang kaya, manis, gurih, dan pedas dengan sentuhan aroma herbal yang khas. Sangat pas untuk sayuran kukus segar, nasi, lontong, maupun hidangan pendamping.",
        "brand": "deHiro / Sehat Lestari Food",
        "net_weight": "200 gr",
        "image": "product1.png",
        "ingredients": [
          "Kacang tanah",
          "Gula aren",
          "Garam",
          "Daun jeruk purut",
          "Cabai merah",
          "Bawang putih",
          "Kencur"
        ],
        "allergen_warning": "Produk ini mengandung kacang tanah dan/atau mungkin mengandung jejak kacang tanah. Tidak direkomendasikan bagi individu dengan alergi kacang tanah.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kkal",
          "energy_from_fat": "330 kkal",
          "nutrients": [
            {
              "nutrient": "Total Lemak",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Karbohidrat",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Gula",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Natrium / Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Bumbu",
        "product_name": "Bumbu Pecel Tidak Pedas",
        "slug": "bumbu-pecel-tidak-pedas",
        "brand": "deHiro / Sehat Lestari Food",
        "description": "Perpaduan tradisional khas dari kacang tanah pilihan dan rempah-rempah alami. Menghasilkan profil rasa yang kaya, manis, gurih, dan pedas dengan sentuhan aroma herbal yang khas. Sangat pas untuk sayuran kukus segar, nasi, lontong, maupun hidangan pendamping.",
        "net_weight": "200 gr",
        "image": "product2.png",
        "ingredients": [
          "Kacang tanah",
          "Gula aren",
          "Garam",
          "Daun jeruk purut",
          "Cabai merah",
          "Bawang putih",
          "Kencur"
        ],
        "allergen_warning": "Produk ini mengandung kacang tanah dan/atau mungkin mengandung jejak kacang tanah. Tidak direkomendasikan bagi individu dengan alergi kacang tanah.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kkal",
          "energy_from_fat": "330 kkal",
          "nutrients": [
            {
              "nutrient": "Total Lemak",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Karbohidrat",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Gula",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Natrium / Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Bumbu",
        "product_name": "Bumbu Sate",
        "slug": "bumbu-sate",
        "brand": "deHiro / Sehat Lestari Food",
        "description": "Saus kacang autentik dengan aroma yang menggugah selera dan cita rasa yang kaya serta seimbang. Dirancang khusus untuk melengkapi sate ayam, sapi, atau kambing, serta fleksibel digunakan sebagai saus cocolan maupun pelengkap hidangan nasi.",
        "net_weight": "200 gr",
        "image": "product4.png",
        "ingredients": [
          "Kacang tanah",
          "Gula aren",
          "Bawang merah kecil",
          "Bawang putih",
          "Cabai merah besar",
          "Cabai merah",
          "Daun jeruk purut",
          "Garam"
        ],
        "allergen_warning": "Produk ini mengandung kacang tanah dan/atau mungkin mengandung jejak kacang tanah. Tidak direkomendasikan bagi individu dengan alergi kacang tanah.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kkal",
          "energy_from_fat": "330 kkal",
          "nutrients": [
            {
              "nutrient": "Total Lemak",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Karbohidrat",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Gula",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Natrium / Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Bumbu",
        "product_name": "Bumbu Gado-Gado",
        "slug": "bumbu-gado-gado",
        "brand": "Sehat Lestari Food",
        "description": "Saus kacang lezat dan gurih yang diracik khusus untuk melengkapi hidangan sayuran campur khas Indonesia. Dibuat dari bahan-bahan alami pilihan, menghadirkan perpaduan sempurna antara rempah dan cita rasa autentik—sangat cocok disajikan bersama lontong, tahu, tempe, kerupuk, atau telur rebus.",
        "net_weight": "200 gr",
        "image": "product3.png",
        "ingredients": [
          "Kacang tanah",
          "Gula aren",
          "Garam",
          "Daun jeruk purut",
          "Kelapa",
          "Cabai merah",
          "Bawang putih",
          "Bawang merah",
          "Cabai rawit"
        ],
        "allergen_warning": null,
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kkal",
          "energy_from_fat": "330 kkal",
          "nutrients": [
            {
              "nutrient": "Total Lemak",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Karbohidrat",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Gula",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Natrium / Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Bumbu",
        "product_name": "Gula Kelapa Natural",
        "slug": "gula-kelapa-natural",
        "brand": "deHiro / Sehat Lestari",
        "description": "Murni diekstrak dari nira aren/kelapa untuk menghadirkan rasa manis alami dengan sentuhan aroma karamel yang khas. Pilihan pemanis sehat tanpa pemurnian buatan yang tepat untuk masakan, hidangan penutup, hingga minuman kekinian.",
        "net_weight": "227 gr",
        "image": "product5.png",
        "ingredients": [
          "Nira murni dari pohon aren pilihan"
        ],
        "allergen_warning": null,
        "nutrition_facts": {
          "servings_per_container": null,
          "serving_size": "15 gr",
          "total_energy": null,
          "energy_from_fat": "0 kkal",
          "nutrients": [
            {
              "nutrient": "Total Lemak",
              "amount": "0g",
              "daily_value_percent": "0%"
            },
            {
              "nutrient": "Total Karbohidrat",
              "amount": "14g",
              "daily_value_percent": "7%"
            },
            {
              "nutrient": "Gula",
              "amount": "14g",
              "daily_value_percent": "0%"
            },
            {
              "nutrient": "Natrium / Sodium",
              "amount": "0g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Kalium",
              "amount": "0.1mg / 100g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Kalsium",
              "amount": "1.2mg / 100g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Magnesium",
              "amount": "0.3mg / 100g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Protein",
              "amount": null,
              "daily_value_percent": "0.01%"
            },
            {
              "nutrient": "Serat Pangan",
              "amount": null,
              "daily_value_percent": "0.01%"
            }
          ]
        }
      },
      {
        "category": "Bumbu",
        "product_name": "Bawang Putih Goreng",
        "slug": "bawang-putih-goreng",
        "brand": "Sehat Lestari Food",
        "description": "Dibuat dari 100% bawang putih pilihan hasil panen petani lokal Indonesia. Diproses secara higienis tanpa bahan pengawet dan tanpa campuran tepung.",
        "net_weight": null,
        "image": "product6.png",
        "ingredients": [
          "Bawang putih",
          "Garam"
        ],
        "allergen_warning": null,
        "nutrition_facts": null
      },
      {
        "category": "Bumbu",
        "product_name": "Bawang Goreng",
        "slug": "bawang-goreng",
        "brand": "Sehat Lestari Food",
        "description": "Dibuat dari 100% bawang merah pilihan hasil panen petani lokal Indonesia. Diproses secara higienis tanpa bahan pengawet dan tanpa campuran tepung.",
        "net_weight": null,
        "image": "product7.png",
        "ingredients": [
          "Bawang merah",
          "Garam"
        ],
        "allergen_warning": null,
        "nutrition_facts": null
      }
    ],
    nav: {
      home: 'Home',
      produk: 'Produk',
      ulasan: 'Ulasan',
      tentang: 'Tentang',
      kontak: 'Kontak'
    },
    aria: {
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu'
    },
    footer: '© 2026 Sehat Lestari Food. Semua hak dilindungi.',
    home: {
      tag: 'Rasa alami Indonesia',
      title: 'Bumbu berkualitas tinggi, dibuat dari bahan alami pilihan.',
      subtitle: 'Nikmati beragam bumbu dan sambal khas Sehat Lestari Food yang siap mendukung resep keluarga dan ekspor internasional.',
      heroSlides: [
        {
          title: 'Bumbu berkualitas tinggi, dibuat dari bahan alami pilihan.',
          subtitle: 'Nikmati beragam bumbu dan sambal khas Sehat Lestari Food yang siap mendukung resep keluarga dan ekspor internasional.',
          image: 'hero1.png',
          country: 'Eropa'
        },
        {
          title: 'Produk Lokal Buatan Indonesia',
          subtitle: 'Kami bangga menyajikan cita rasa autentik Nusantara melalui ragam bumbu dan sambal buatan lokal berkualitas. Diproduksi dengan standar mutu tinggi dari bahan baku pilihan, Sehat Lestari Food tidak hanya melengkapi setiap masakan di meja makan keluarga Anda, tetapi juga siap membawa kekayaan rasa Indonesia ke pasar internasional.',
          image: 'hero2.png',
          country: 'Indonesia'
        },
        {
          title: 'Sudah Dipercaya di Beberapa Negara.',
          subtitle: 'Kualitas dan keaslian rasa Sehat Lestari Food telah menembus batas negara. Dipercaya oleh konsumen internasional, rangkaian produk bumbu dan sambal kami hadir sebagai pilihan utama untuk menghadirkan kelezatan khas Indonesia yang higienis, aman, dan berstandar ekspor di berbagai negara.',
          image: 'hero3.png',
          country: 'Indonesia'
        },
      ],
      viewProducts: 'Lihat Produk',
      orderWhatsApp: 'Pesan via WhatsApp',
      heroSlideLabel: 'Sorotan Hero',
      heroSlideDesc: 'Geser slide hero untuk melihat pilihan unggulan dan cerita brand kami.',
      reviews: 'Ulasan Pelanggan',
      sliderLabel: 'Slider Produk',
      sliderTitle: 'Pilihan produk unggulan Sehat Lestari Food',
      sliderDesc: 'Geser produk untuk melihat bumbu premium, bumbu lezat, dan paket ekspor terbaik kami.',
      prev: 'Sebelumnya',
      next: 'Berikutnya',
      slideStatus: 'Slide {current} / {total}',
      productButton: 'Lihat Produk',
      orderButton: 'Order via WhatsApp',
      stats: [
        { value: '1980', label: 'Manufaktur' },
        { value: 'Bahan', label: 'Pilihan' },
        { value: 'ISO', label: '22000 & HACCP' },
        { value: 'Halal', label: '100% Terjamin' }
      ],
      markets: ['Europe', 'Indonesia'],
    },
    product: {
      title: 'Solusi bumbu praktis untuk dapur rumahan dan ekspor.',
      description: 'Pilih dari lini bumbu siap saji Sehat Lestari Food yang diracik dengan rempah asli, halal, dan tersertifikasi untuk rasa terbaik.',
      sectionTitle: 'Formulasi bumbu terbaik untuk citarasa Indonesia.',
      panelTitle: 'Pilihan produk unggulan',
      advantageTitle: 'Keunggulan bumbu Sehat Lestari Food',
      advantageSub: 'Kami meracik bumbu dengan standar produksi yang ketat, menggunakan rempah asli Indonesia, dan memastikan kemasan siap ekspor.',
      advantageItems: [
        {
          title: 'Halal & Aman',
          subtitle: 'Sertifikat halal dan hygiene pangan terjamin.'
        },
        {
          title: 'Rasa Konsisten',
          subtitle: 'Formulasi stabil untuk setiap batch produksi.'
        },
        {
          title: 'Kemasan Ekspor',
          subtitle: 'Kemasan siap ekspor dengan label internasional.'
        },
        {
          title: 'Pilihan Varian',
          subtitle: 'Mulai dari gado-gado, sate, sampai pecel.'
        }
      ],
      orderCardTitle: 'Siap pesan sekarang?',
      orderCardText: 'Tanyakan stok, kemasan, dan potongan harga grosir langsung lewat WhatsApp.',
      detailHeading: 'Detail Produk',
      orderBanner: 'Order mudah lewat WhatsApp',
      weight: 'Berat',
      alergenAllert: 'Perhatian Alergen',
      ingredients: 'Komposisi',
      nutritionFact: 'Informasi Nilai Gizi',
      servingPerPackage: 'Sajian per Kemasan',
      servingSize: 'Ukuran Takaran Saji',
      totalEnergy: 'Energi Total',
      nutrient: 'Zat Gizi',
      ammountPerServing: 'Jumlah Per Saji',
      dailyValue: 'AKG'
    },
    tentang: {
      title: 'Tentang Sehat Lestari Food',
      subtitle: 'Kami menyediakan bumbu siap pakai dengan kualitas halal dan standar ekspor.',
      orderTitle: 'Pesan produk kami sekarang',
      orderText: 'Hubungi kami via WhatsApp untuk stok, harga, dan pengiriman cepat.',
      cardTitle: 'Komitmen kualitas dan layanan',
      cardText: 'Produk kami diracik dengan rempah asli, dikemas siap ekspor, dan didukung layanan pelanggan yang responsif.',
      step1: 'Produk halal dengan cita rasa otentik Indonesia.',
      step2: 'Kemasan siap ekspor yang ramah untuk pasar lokal dan internasional.',
      step3: 'Dukungan WhatsApp untuk pesanan dan pertanyaan cepat.',
      email: {
        sendEmail: 'Atau Hubungi Kami Melalui Email',
        name: 'Nama Anda',
        email: 'Email Anda',
        messages: 'Pesan Anda',
        send: 'Kirim',
        sending: 'Mengirim...'
      }
    },
    ulasan: {
      title: 'Testimoni pelanggan yang puas dengan Sehat Lestari Food.',
      review1: '“Bumbu Sehat Lestari Food selalu jadi andalan di dapur kami. Rasanya konsisten dan sangat otentik.”',
      review2: '“Pengiriman cepat dan kemasan rapi. Cocok untuk usaha katering kami.”',
      review3: '“Pilihan produk lengkap dan halal, jadi lebih percaya saat beli untuk acara keluarga.”',
      highlightTitle: 'Lebih dari sekadar produk.',
      highlightText: 'Pelayanan cepat, komunikasi ramah, dan dukungan pemesanan via WhatsApp membuat pengalaman belanja jadi mudah.',
      contactTitle: 'Hubungi kami',
      contactText: 'Pesan bumbu langsung dan cek stok sekarang.'
    },
    buttons: {
      backHome: 'Kembali ke Home',
      chatWhatsApp: 'Chat WhatsApp',
      orderNow: 'Order via WhatsApp'
    }
  },
  en: {
    categories: [
      {
        id: 1,
        title: 'Sehat Lestari Food',
        description: 'We bring the rich and authentic flavors of Indonesia to the world, crafted from carefully selected local ingredients and traditional recipes. With Halal certification, no preservatives, and strict quality standards, our products preserve the genuine taste of home-cooked meals for global markets including Europe, the Middle East, China, and beyond.',
        image: 'category2.png'
      },
      /* {
        id: 2,
        title: 'Sehat Lestari Food X deHiro',
        description: 'To serve the European market, Sehat Lestari Food proudly partners with Dehiro, a Belgium-based manufacturer and distributor of healthy food. This collaboration directly connects authentic Indonesian culinary heritage with households, retailers, and food services across Europe.',
        image: 'category1.png'
      }, */
    ],
    "products": [
      {
        "category": "Seasoning",
        "product_name": "Pecel Peanut Sauce Spicy",
        "slug": "bumbu-pecel-pedas",
        "description": "A signature traditional blend of selected premium peanuts and natural spices. It delivers a rich, sweet, savory, and mildly spicy flavor profile with a distinctive aromatic herbal note. Perfect for fresh steamed vegetables, rice, lontong, or side dishes.",
        "brand": "deHiro / Sehat Lestari Food",
        "net_weight": "200 gr",
        "image": "product0.png",
        "ingredients": [
          "Peanuts",
          "Palm sugar",
          "Salt",
          "Kaffir lime leaves",
          "Red chili",
          "Garlic",
          "Aromatic ginger"
        ],
        "allergen_warning": "This product contains peanuts and/or may contain traces of peanuts. Not recommended for individuals with a peanut allergy.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kcal",
          "energy_from_fat": "330 kcal",
          "nutrients": [
            {
              "nutrient": "Total Fat",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Carbohydrate",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Sugars",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Seasoning",
        "product_name": "Pecel Peanut Sauce Medium",
        "slug": "bumbu-pecel-sedang",
        "description": "A signature traditional blend of selected premium peanuts and natural spices. It delivers a rich, sweet, savory, and mildly spicy flavor profile with a distinctive aromatic herbal note. Perfect for fresh steamed vegetables, rice, lontong, or side dishes.",
        "brand": "deHiro / Sehat Lestari Food",
        "net_weight": "200 gr",
        "image": "product1.png",
        "ingredients": [
          "Peanuts",
          "Palm sugar",
          "Salt",
          "Kaffir lime leaves",
          "Red chili",
          "Garlic",
          "Aromatic ginger"
        ],
        "allergen_warning": "This product contains peanuts and/or may contain traces of peanuts. Not recommended for individuals with a peanut allergy.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kcal",
          "energy_from_fat": "330 kcal",
          "nutrients": [
            {
              "nutrient": "Total Fat",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Carbohydrate",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Sugars",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Seasoning",
        "product_name": "Pecel Peanut Sauce Mild",
        "slug": "bumbu-pecel-tidak-pedas",
        "brand": "deHiro / Sehat Lestari Food",
        "description": "A signature traditional blend of selected premium peanuts and natural spices. It delivers a rich, sweet, savory, and spicy flavor profile with a distinctive aromatic herbal note. Perfect for fresh steamed vegetables, rice, lontong, or side dishes.",
        "net_weight": "200 gr",
        "image": "product2.png",
        "ingredients": [
          "Peanuts",
          "Palm sugar",
          "Salt",
          "Kaffir lime leaves",
          "Red chili",
          "Garlic",
          "Aromatic ginger"
        ],
        "allergen_warning": "This product contains peanuts and/or may contain traces of peanuts. Not recommended for individuals with a peanut allergy.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kcal",
          "energy_from_fat": "330 kcal",
          "nutrients": [
            {
              "nutrient": "Total Fat",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Carbohydrate",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Sugars",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Seasoning",
        "product_name": "Satay Sauce",
        "slug": "bumbu-sate",
        "brand": "deHiro / Sehat Lestari Food",
        "description": "An authentic peanut sauce featuring an appetizing aroma and a deep, well-balanced taste. Specially crafted to complement grilled chicken, beef, or lamb satay, as well as serving as a versatile dipping sauce or pairing for rice dishes.",
        "net_weight": "200 gr",
        "image": "product4.png",
        "ingredients": [
          "Peanuts",
          "Palm sugar",
          "Small shallots",
          "Garlic",
          "Large red chili peppers",
          "Red chili peppers",
          "Kaffir lime leaves",
          "Salt"
        ],
        "allergen_warning": "This product contains peanuts and/or may contain traces of peanuts. Not recommended for individuals with a peanut allergy.",
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kcal",
          "energy_from_fat": "330 kcal",
          "nutrients": [
            {
              "nutrient": "Total Fat",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Carbohydrate",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Sugars",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Seasoning",
        "product_name": "Gado-Gado Peanut Sauce",
        "slug": "bumbu-gado-gado",
        "brand": "Sehat Lestari Food",
        "description": "A rich and savory peanut sauce crafted to accompany traditional Indonesian mixed vegetables. Made from fine natural ingredients, it offers a balanced combination of spices and authentic flavors—perfect when paired with rice cakes, tofu, tempeh, crackers, or boiled eggs.",
        "net_weight": "200 gr",
        "image": "product3.png",
        "ingredients": [
          "Peanuts",
          "Palm sugar",
          "Salt",
          "Kaffir lime leaves",
          "Coconut",
          "Red chili",
          "Garlic",
          "Shallots",
          "Bird's eye chili"
        ],
        "allergen_warning": null,
        "nutrition_facts": {
          "servings_per_container": 2,
          "serving_size": "100 gr",
          "total_energy": "540 kcal",
          "energy_from_fat": "330 kcal",
          "nutrients": [
            {
              "nutrient": "Total Fat",
              "amount": "37g",
              "daily_value_percent": "55%"
            },
            {
              "nutrient": "Protein",
              "amount": "13g",
              "daily_value_percent": "21%"
            },
            {
              "nutrient": "Total Carbohydrate",
              "amount": "39g",
              "daily_value_percent": "12%"
            },
            {
              "nutrient": "Total Sugars",
              "amount": "30g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Sodium",
              "amount": "60mg",
              "daily_value_percent": "4%"
            }
          ]
        }
      },
      {
        "category": "Seasoning",
        "product_name": "Coconut Palm Sugar",
        "slug": "gula-kelapa-natural",
        "brand": "deHiro / Sehat Lestari",
        "description": "Extracted from pure coconut/palm sap to deliver a rich, smoky sweetness and natural caramel aroma. An unrefined, healthy sweetener choice for cooking, desserts, and specialty beverages.",
        "net_weight": "227 gr",
        "image": "product5.png",
        "ingredients": [
          "Pure sap of carefully selected palm trees"
        ],
        "allergen_warning": null,
        "nutrition_facts": {
          "servings_per_container": null,
          "serving_size": "15 gr",
          "total_energy": null,
          "energy_from_fat": "0 kcal",
          "nutrients": [
            {
              "nutrient": "Total Fat",
              "amount": "0g",
              "daily_value_percent": "0%"
            },
            {
              "nutrient": "Total Carbohydrate",
              "amount": "14g",
              "daily_value_percent": "7%"
            },
            {
              "nutrient": "Sugars",
              "amount": "14g",
              "daily_value_percent": "0%"
            },
            {
              "nutrient": "Sodium",
              "amount": "0g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Potassium",
              "amount": "0.1mg / 100g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Calcium",
              "amount": "1.2mg / 100g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Magnesium",
              "amount": "0.3mg / 100g",
              "daily_value_percent": null
            },
            {
              "nutrient": "Protein",
              "amount": null,
              "daily_value_percent": "0.01%"
            },
            {
              "nutrient": "Dietary Fiber",
              "amount": null,
              "daily_value_percent": "0.01%"
            }
          ]
        }
      },
      {
        "category": "Seasoning",
        "product_name": "Fried Garlic",
        "slug": "bawang-putih-goreng",
        "brand": "Sehat Lestari Food",
        "description": "Made from 100% garlic selected from the harvest of Indonesian local farmers. Processed hygienically without preservatives and without flour mixture.",
        "net_weight": null,
        "image": "product6.png",
        "ingredients": [
          "Garlic",
          "Salt"
        ],
        "allergen_warning": null,
        "nutrition_facts": null
      },
      {
        "category": "Seasoning",
        "product_name": "Fried Shallots",
        "slug": "bawang-goreng",
        "brand": "Sehat Lestari Food",
        "description": "Made from 100% shallots selected from the harvest of Indonesian local farmers. Processed hygienically without preservatives and without flour mixture.",
        "net_weight": null,
        "image": "product7.png",
        "ingredients": [
          "Shallots",
          "Salt"
        ],
        "allergen_warning": null,
        "nutrition_facts": null
      }
    ],

    nav: {
      home: 'Home',
      produk: 'Products',
      ulasan: 'Reviews',
      tentang: 'About Us',
      kontak: 'Contact'
    },
    aria: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    footer: '© 2026 Sehat Lestari Food. All rights reserved.',
    home: {
      tag: 'Natural Taste of Indonesia',
      title: 'High-quality seasonings made from select natural ingredients.',
      subtitle: 'Enjoy a variety of signature seasonings and chili pastes from Sehat Lestari Food, ready to complement family recipes and international exports.',
      heroSlides: [
        {
          title: 'High-quality seasonings made from select natural ingredients.',
          subtitle: 'Enjoy a variety of signature seasonings and chili pastes from Sehat Lestari Food, ready to complement family recipes and international exports.',
          image: 'hero1.png',
          country: 'Europe'
        },
        {
          title: 'Local Products Made in Indonesia',
          subtitle: 'We take pride in presenting authentic flavors of the Archipelago through a variety of quality local seasonings and sauces. Produced to high standards using selected raw materials, Sehat Lestari Food complements your family dining table and brings rich Indonesian tastes to global markets.',
          image: 'hero2.png',
          country: 'Indonesia'
        },
        {
          title: 'Trusted in Multiple Countries.',
          subtitle: 'The quality and authentic taste of Sehat Lestari Food have crossed borders. Trusted by international consumers, our seasoning and sauce lineup is the top choice for delivering hygienic, safe, and export-ready Indonesian delicacies worldwide.',
          image: 'hero3.png',
          country: 'Indonesia'
        },
      ],
      viewProducts: 'View Products',
      orderWhatsApp: 'Order via WhatsApp',
      heroSlideLabel: 'Hero Highlights',
      heroSlideDesc: 'Swipe the hero slides to discover featured products and our brand story.',
      reviews: 'Customer Reviews',
      sliderLabel: 'Product Slider',
      sliderTitle: 'Featured product selection from Sehat Lestari Food',
      sliderDesc: 'Slide through products to view our premium seasonings, delicious sauces, and best export packages.',
      prev: 'Previous',
      next: 'Next',
      slideStatus: 'Slide {current} / {total}',
      productButton: 'View Products',
      orderButton: 'Order via WhatsApp',
      stats: [
        { value: '1980', label: 'Manufacturing' },
        { value: 'Ingredients', label: 'Selected' },
        { value: 'ISO', label: '22000 & HACCP' },
        { value: 'Halal', label: '100% Guaranteed' }
      ],
      markets: ['Europe', 'Indonesia'],
    },
    product: {
      title: 'Practical seasoning solutions for home kitchens and export.',
      description: 'Choose from Sehat Lestari Food\'s ready-to-use seasoning line, crafted with authentic spices, certified Halal, and guaranteed for optimal taste.',
      sectionTitle: 'The finest seasoning formulations for authentic Indonesian flavor.',
      panelTitle: 'Featured Product Selection',
      advantageTitle: 'Advantages of Sehat Lestari Food Seasonings',
      advantageSub: 'We craft seasonings under strict production standards using authentic Indonesian spices and export-ready packaging.',
      advantageItems: [
        {
          title: 'Halal & Safe',
          subtitle: 'Guaranteed Halal certification and food hygiene standards.'
        },
        {
          title: 'Consistent Flavor',
          subtitle: 'Stable formulation ensured for every production batch.'
        },
        {
          title: 'Export Packaging',
          subtitle: 'Export-ready packaging featuring international labeling.'
        },
        {
          title: 'Variety of Options',
          subtitle: 'Ranging from gado-gado and satay to pecel sauce.'
        }
      ],
      orderCardTitle: 'Ready to order now?',
      orderCardText: 'Inquire about stock, packaging, and wholesale discounts directly via WhatsApp.',
      detailHeading: 'Product Details',
      orderBanner: 'Easy ordering via WhatsApp',
      weight: 'Weight',
      alergenAllert: 'Allergen Warning',
      ingredients: 'Ingredients',
      nutritionFact: 'Nutrition Facts',
      servingPerPackage: 'Servings per Pack',
      servingSize: 'Serving Size',
      totalEnergy: 'Total Energy',
      nutrient: 'Nutrients',
      ammountPerServing: 'Amount per Serving',
      dailyValue: 'DV'
    },
    tentang: {
      title: 'About Sehat Lestari Food',
      subtitle: 'We provide ready-to-use seasonings with Halal quality and export standards.',
      orderTitle: 'Order Our Products Now',
      orderText: 'Contact us via WhatsApp for stock availability, pricing, and fast shipping.',
      cardTitle: 'Commitment to Quality & Service',
      cardText: 'Our products are crafted with authentic spices, packed export-ready, and supported by responsive customer service.',
      step1: 'Halal products with authentic Indonesian flavors.',
      step2: 'Export-ready packaging suitable for local and international markets.',
      step3: 'WhatsApp support for fast ordering and inquiries.',
      email: {
        sendEmail: 'Or Contact Us via Email',
        name: 'Your Name',
        email: 'Your Email',
        messages: 'Your Messages',
        send: 'Send',
        sending: 'Sending...'
      }
    },
    ulasan: {
      title: 'Testimonials from satisfied Sehat Lestari Food customers.',
      review1: '“Sehat Lestari Food seasonings are always a staple in our kitchen. Consistent taste and truly authentic.”',
      review2: '“Fast delivery and neat packaging. Perfect for our catering business.”',
      review3: '“Complete product selection and Halal certified, giving us total peace of mind for family gatherings.”',
      highlightTitle: 'More than just products.',
      highlightText: 'Fast service, friendly communication, and seamless WhatsApp order support make shopping easy.',
      contactTitle: 'Contact Us',
      contactText: 'Order seasonings directly and check stock now.'
    },
    buttons: {
      backHome: 'Back to Home',
      chatWhatsApp: 'Chat on WhatsApp',
      orderNow: 'Order via WhatsApp'
    }
  }
}

function formatText(value, params) {
  if (!value) return ''
  return Object.entries(params).reduce((text, [key, val]) => text.replace(`{${key}}`, String(val)), value)
}

export function t(path, params = {}) {
  const value = path.split('.').reduce((obj, key) => obj?.[key], messages[locale.value])
  return formatText(value, params)
}

export const content = computed(() => messages[locale.value])

function buildWhatsappUrl(message) {
  return `https://wa.me/6281511238989?text=${encodeURIComponent(message)}`
}

export const whatsappText = computed(() => {
  if (locale.value === 'en') {
    return {
      home: buildWhatsappUrl('Hello Sehat Lestari Food, I would like to order spice products.'),
      product: buildWhatsappUrl('Hello Sehat Lestari Food, I would like to order the displayed product.'),
      bumbu: buildWhatsappUrl('Hello Sehat Lestari Food, I would like to order your spice products.'),
      resep: buildWhatsappUrl('Hello Sehat Lestari Food, I would like to order spices for recipes.'),
      ulasan: buildWhatsappUrl('Hello Sehat Lestari Food, I would like to order products based on reviews.')
    }
  }

  return {
    home: buildWhatsappUrl('Halo Sehat Lestari Food, saya ingin memesan produk bumbu Anda.'),
    product: buildWhatsappUrl('Halo Sehat Lestari Food, saya ingin memesan produk yang ditampilkan.'),
    bumbu: buildWhatsappUrl('Halo Sehat Lestari Food, saya ingin memesan produk bumbu Anda.'),
    resep: buildWhatsappUrl('Halo Sehat Lestari Food, saya ingin memesan bumbu untuk resep.'),
    ulasan: buildWhatsappUrl('Halo Sehat Lestari Food, saya ingin memesan produk berdasarkan ulasan.')
  }
})

export const slidesByLocale = {
  id: [
    {
      title: 'Bumbu Gado-Gado Extra',
      category: 'Bumbu Kacang',
      description: 'Bumbu kacang kental dengan rasa otentik, cocok untuk gado-gado dan lauk tradisional.',
      image: 'https://www.enakeco.com/wp-content/uploads/2022/11/gado-gado-front-thumb-optimized.jpg',
      link: '/bumbu'
    },
    {
      title: 'Bumbu Sate Ayam',
      category: 'Bumbu Masak',
      description: 'Rempah penuh aroma untuk sate ayam, memberi rasa manis dan gurih alami.',
      image: 'https://www.enakeco.com/wp-content/uploads/2022/11/sate-front-thumb-optimized.jpg',
      link: '/bumbu'
    },
    {
      title: 'Bumbu Pecel Pedas Vegan',
      category: 'Bumbu Pecel',
      description: 'Bumbu pecel pedas dengan cita rasa kacang alami dan bahan vegan ramah keluarga.',
      image: 'https://www.enakeco.com/wp-content/uploads/2024/05/pecel-pedas-vegan-59-copy-optimized.png',
      link: '/bumbu'
    }
  ],
  en: [
    {
      title: 'Gado-Gado Peanut Spice',
      category: 'Peanut Sauce',
      description: 'Rich peanut spice with authentic flavor, perfect for gado-gado and traditional dishes.',
      image: 'https://www.enakeco.com/wp-content/uploads/2022/11/gado-gado-front-thumb-optimized.jpg',
      link: '/bumbu'
    },
    {
      title: 'Chicken Satay Spice',
      category: 'Cooking Spice',
      description: 'Aromatic spice blend for chicken satay, delivering a balanced sweet and savory taste.',
      image: 'https://www.enakeco.com/wp-content/uploads/2022/11/sate-front-thumb-optimized.jpg',
      link: '/bumbu'
    },
    {
      title: 'Spicy Vegan Pecel Sauce',
      category: 'Pecel Sauce',
      description: 'Spicy vegan pecel spice with natural peanut flavor, ideal for fresh vegetable dishes.',
      image: 'https://www.enakeco.com/wp-content/uploads/2024/05/pecel-pedas-vegan-59-copy-optimized.png',
      link: '/bumbu'
    }
  ]
}
