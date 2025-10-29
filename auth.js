// js/auth.js
function login() {
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();

  // Cek data siswa
  db.ref("siswa/" + userId).get().then(snapshot => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data.password === password) {
        alert("Login berhasil sebagai siswa!");
        window.location.href = "siswa.html";
      } else {
        alert("Password salah!");
      }
    } else {
      // Cek data guru
      db.ref("guru/" + userId).get().then(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.password === password) {
            alert("Login berhasil sebagai guru!");
            window.location.href = "guru.html";
          } else {
            alert("Password salah!");
          }
        } else {
          alert("Akun tidak ditemukan!");
        }
      });
    }
  });
}
