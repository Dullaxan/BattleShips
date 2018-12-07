var NameShips = [ "Avrora" , "Pobeda" , "Beda" , "HoHoHo" , "GL&HF"];
var myShips = { };
var mapa = [];

var StartBattle = {
    Start: function () {
        this.MapSize = parseInt(prompt("Enter Map Size?"));
        this.Ships = parseInt(prompt("How many Ships?"));
        this.GenerateShips();
        this.BoxGen();
        this.ShowMAP();
        this.GenMapBox();
        this.HideShips();
    }, //старт
    GenerateShips: function () {
        for (i = 0; i < StartBattle.Ships; i++) {
            myShips["Shipname" + i] = (NameShips[Math.floor(Math.random() * NameShips.length)]);
            myShips["ShipSize" + i] = prompt("Enter Size of Ship");
            while (myShips["ShipSize" + i] > StartBattle.MapSize) { // Проверка коробля на размер
                alert("To BIG MAX SIZE IS " + StartBattle.MapSize);
                myShips["ShipSize" + i] = prompt("Enter New Size of Ship");
            }
            // document.write("The Map size is " + StartBattle.MapSize + " Name of Ship " + myShips["Shipname" + i] + " and his Coordinats is " + myShips["Shipcoords" + i ] + "<br>");
        }
    }, //Генерируем имя и размер коробля
    BoxGen: function () {
        var xMap = this.MapSize;
        for (y = 0; y < this.MapSize * this.MapSize; y++) {
            mapa.push("<div id=" + y + " class='sea' onclick='StartBattle.checkShip(" + y + ")'>" + "</div>");
            if (y == (xMap - 1)) {
                mapa.push("<br>");
                xMap = xMap + this.MapSize;
            }
        }
    }, // Рисуем карту с id
    checkShip: function (idship) {
        if (1 > 0) {
            alert(idship);

        }
    }, // Проверка на попадание
    ShowMAP: function () {
        for (i = 0; i < mapa.length; i++) {
            document.write(mapa[i]);
        }
    }, // Рисуем карту
    MapBox: [], //Границы поля
    GenMapBox: function () {
        var mapp = this.MapSize;
        var genx = Math.pow(this.MapSize, 2) - this.MapSize;
        var chekpoint = [];
        for (i = 0; i < this.MapSize; i++) {
            this.MapBox.push(i);
        }
        for (i = 0; i < (this.MapSize - 2); i++) {
            this.MapBox.push(mapp);
            this.MapBox.push(mapp + (this.MapSize - 1));
            mapp = mapp + this.MapSize;
        }
        for (i = 0; i < this.MapSize; i++) {
            this.MapBox.push(genx + i);

        }
    },//Генерим Границы поля в MapBox
    HideShips: function () {
        var numberShip = 0;
        for (i = 0; i < StartBattle.Ships; i++) {
            var check = 1;
            while (check) {
                var RND = Math.floor(Math.random() * Math.pow(this.MapSize, 2));
                if (this.CHECKRND(RND,StartBattle.MapBox)) {
                    var ShipHIDE = document.getElementById(RND);
                    console.log(RND);
                    ShipHIDE.outerHTML = "<div id=" + RND + " class='ship' onclick='StartBattle.ShipHIT(" + numberShip + ")'>" + "</div>";
                    numberShip = numberShip + 1;
                    check = 0;
                    break;
                }
            }
            }
        },//Начальная точка корабля
    ShipHIT: function () {
        alert("HITTED");
    },
    CHECKRND: function(numberRND,WhereHE) {
    for ( i = 0;i<WhereHE.length;i++)
        if (numberRND == WhereHE[i]) {
            return true;
            break;
        };
} // Проверка что Кординат на краю карты
    }

StartBattle.Start();

/* Взрыв мозга
var HIDDENSHIP = [];
var TempHide = []
function RR(numberOne) {
        for (i=0;i< myShips.length/2;i++) {
            var RRR = Math.floor(Math.random() * Math.pow(this.MapSize, 2));
            for (x=0;x<myShips["ShipSize" + i];i++);
            {
                if (StartBattle.CHECKRND(RRR, HIDDENSHIP)) {
                    var size = myShips["ShipSize" + i];
                    TempHide.push(RRR);
                    RRR
                }
            }
    }
}
*/
