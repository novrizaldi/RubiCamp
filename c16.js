
class Tyre {
    constructor (merk, size){
        this.merk = merk;
        this.size = size;
    }
}

class Car {
    constructor(merkBan, ukuranBan, kursi, pintu, tahun, warranty ) {
        this.ban = new Tyre (merkBan, ukuranBan);
        this.tahun = tahun;
        this.kursi = kursi;
        this.pintu = pintu;
        this.warranty = warranty;
    }
}

class Fortuner extends Car {
    constructor(tahun){
    super('dunlop', '200/70', 8, 4, tahun);
    this.varian = 'fortuner';
    this.warranty = 3;
    }
}

class Pajero extends Car {
    constructor(tahun) {
        super('Bridgeston', '200/110', 8, 4, tahun);
        this.varian = 'Pajero';
        this.warranty = 5;
    }
}

class CarFactory {
    constructor (){
        this.Car = [];
    }
    static random (){
        return Math.floor(Math.random() * 5 ) 
    }

    Produksi (tahun) {
        for (let i = 0; i < CarFactory.random(); i++) {
            this.Car.push(new Fortuner(tahun))            
        }
        for (let i = 0; i < CarFactory.random(); i++) {
            this.Car.push(new Pajero(tahun))
        }
    }
    Garansi (tahunSimulasi){
        console.log('hasil produksi ');
        this.Car.forEach (element => {
            console.log(` jenis varian : ${element.varian}
                            tahun pembuatan : ${element.tahun}
                            jumlah pintu : ${element.pintu}
                            jumlah kursi : ${element.kursi}
                            Ban          : merk :${element.ban.merk}, ukuran : ${element.ban.size}
                            garansi     : ${element.warranty} tahun
                            status garansi : ${(tahunSimulasi - element.tahun) > element.warranty ? 'expired' : 'aktif'} 
                            `);
            
        });
           
    }
}

let mobil = new CarFactory();
mobil.Produksi(2014);
// mobil.Produksi(2020);
mobil.Garansi(2023);

