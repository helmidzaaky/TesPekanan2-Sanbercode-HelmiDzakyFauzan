function akarPangkatDua(x) {
  if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
    return;
  }

  if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
    return;
  }

  console.log("Akar pangkat dua dari " + x + " adalah " + Math.sqrt(x));
}

// Contoh pemanggilan fungsi
akarPangkatDua(16); // Akar pangkat dua dari 16 adalah 4
akarPangkatDua(-4); // Tidak bisa input bilangan negatif
akarPangkatDua(9);  // Tidak bisa input bilangan ganjil