
WinJS.Namespace.define("Tools");

var mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var dia = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

Tools.Date = {
    toHuman: function (d) {
        return dia[d.getDay()] + ", " + d.getDate() + " de " + mes[d.getMonth()] + " de " + d.getFullYear() + ", " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    }
};
