let i = 1;
class Gempa {
    constructor(lokasi, skala) {
      this.lokasi = lokasi;
      this.skala = skala;
    }

    dampak() {
      let dskala;
      if (this.skala <= 2) {
        dskala = "Tidak Terasa";
      } else if (this.skala > 2 && this.skala <= 4) {
        dskala = "Bangunan Retak-retak";
      } else if (this.skala > 4 && this.skala <= 6) {
        dskala = "Bangunan Roboh";
      } else if (this.skala > 6) {
        dskala = "Roboh dan Berpotensi Tsunami";
      }

      return dskala;
    }

    infoGempa() {
      let xhtml = `<tr>`;
      xhtml += `<td clss="text-center">${i++}</td>`;
      xhtml += `<td>${this.lokasi}</td>`;
      xhtml += `<td>${this.skala}</td>`;
      xhtml += `<td>${this.dampak()}</td>`;
      xhtml += `</tr>`;
      document.getElementById("dataTable").innerHTML += xhtml
    }
  }

  data1 = new Gempa("Bandung", "2.3");
  data2 = new Gempa("Jakarta", "3.2");
  data3 = new Gempa("Borneo", "5.5");
  data4 = new Gempa("Denpasar", "6.3");
  data5 = new Gempa("Yogyakarta", "2.5");
  data6 = new Gempa("Karawang", "1.2");
  data7 = new Gempa("Madura", "4");
  data8 = new Gempa("Medan", "2");
  data9 = new Gempa("Maluku", "1.3");
  data10 = new Gempa("Jambi", "5");

  data1.infoGempa();
  data2.infoGempa();
  data3.infoGempa();
  data4.infoGempa();
  data5.infoGempa();
  data6.infoGempa();
  data7.infoGempa();
  data8.infoGempa();
  data9.infoGempa();
  data10.infoGempa();
