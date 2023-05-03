/* ATM uygulaması*/

let yeniSatir = "\r\n";
let bakiye = 1000;

let metin =
  "1-Bakiye Gçrüntüleme" +
  yeniSatir +
  "2-Para Çekme" +
  yeniSatir +
  "3-Para Yatırma" +
  yeniSatir +
  "4-Çıkış" +
  yeniSatir +
  "Lütfen bir değer seçiniz.";

let secim = prompt(metin);
switch (secim) {
  case "1":
    alert("Bakiyeniz :" + bakiye);
    break;

  case "2":
    let cekilenTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
    if (cekilenTutar < bakiye) {
      //başarılı
      bakiye = bakiye - cekilenTutar;
      alert("Güncel Bakiyeniz : " + bakiye);
    } else {
      alert(
        "Bakiyenizden fazla para çekemezsiniz!" +
          yeniSatir +
          "Bakiyeniz :" +
          bakiye +
          " " +
          "Çekilecek tutar : " +
          cekilenTutar
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz :"));
    bakiye = bakiye + yatirilacakTutar;
    alert("Güncel Bakiyeniz :" + bakiye);
    break;
  case "4":
    alert("Sistenden Çıkış Yapılmıştır...");
    break;

  default:
    alert("Lütfen 1-4 arası bir giriş yapınız!");
    break;
}
