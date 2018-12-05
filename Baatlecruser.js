var NameShips = [ "Avrora" , "Pobeda" , "Beda" , "HoHoHo" , "GL&HF"];
var myShips = { };
var mapa = [];

var StartBattle = {
    Start: function() {
        this.MapSize = parseInt(prompt("Enter Map Size?"));
        this.Ships = parseInt(prompt("How many Ships?"));
        this.GenerateShips();
        this.BoxGen();
    }, //старт
    ShipHide: function () {
        var shipsize = prompt("Enter Size of Ship");
        while (shipsize > StartBattle.MapSize) { // Проверка коробля на размер
            alert("To BIG MAX SIZE IS " + StartBattle.MapSize );
            shipsize = prompt("Enter New Size of Ship");
        }

        var mysShipX = [];
        var randomloc = Math.floor(Math.random() * (StartBattle.MapSize - (shipsize - 1 )));
        for (x = 0; x < shipsize; x++) {
            mysShipX.push(randomloc);
            randomloc = randomloc + 1;
        }
        return mysShipX;
    }, //Получаем координаты короблей
    GenerateShips: function () {
        for ( i = 0;i < StartBattle.Ships ; i++) {
            myShips["Shipname" + i] = (NameShips[Math.floor(Math.random() * NameShips.length )]);
            myShips["Shipcoords" + i] = StartBattle.ShipHide();

           // document.write("The Map size is " + StartBattle.MapSize + " Name of Ship " + myShips["Shipname" + i] + " and his Coordinats is " + myShips["Shipcoords" + i ] + "<br>");
        }
    }, //Генерируем имя коробля и добавляем координаты
    BoxGen: function () {
        var xMap = this.MapSize;
        for (y = 0;y < this.MapSize*this.MapSize ; y++) {
            mapa.push("<div id="+y+" class='ship'>" + "</div>");
            if ( y == (xMap - 1)) {
                mapa.push("<br>");
                xMap = xMap + this.MapSize;
                console.log(xMap);
            }
        }
    }
}


StartBattle.Start();
for (i=0;i<mapa.length;i++) {
    document.write(mapa[i]);
}

