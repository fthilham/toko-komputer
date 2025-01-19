function greeting(nama, bahasa) {
  if (bahasa === "inggris") {
    console.log(`good mornig ${nama}`);
  } else if (bahasa === "prancis") {
    console.log(`bonjour  ${nama}`);
  } else console.log(`selamat pagi ${nama}`);
}

greeting("ian", "ingg");
