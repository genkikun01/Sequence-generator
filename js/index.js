const syoko = document.getElementById("syoko");
    const btn = document.getElementById("btn");
    const atai = document.getElementById("konaninani");
    let kosu = document.getElementById("kousuu");
    const kekka = document.getElementById("kekka");
    let suretsu = [];
    btn.addEventListener("click", () => {
      keisan_kohi();
      console.log(String(suretsu));
      kekka.textContent = suretsu;
    });
    function keisan_kohi() {
      suretsu.push(Number(syoko.value));
      let atai_value = Number(atai.value);
      u = 0;
      i = 1;
      while( u < kosu.value ) {
        let owari = syoko.value * atai_value ** i;
        suretsu.push(String(owari));
        u++
        i++
