(function () {
    "use strict";

    var mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var dia = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // Se llama a esta función cuando un usuario navega a esta página. Esta
        // rellena los elementos de la página con los datos de la aplicación.
        ready: function (element, options) {
            var item = options.item;
            //element.querySelector(".titlearea .pagetitle").textContent = item.group.title;
            element.querySelector(".pagetitle").textContent = item.title;
            element.querySelector("article .item-author").textContent = item.author;

            var d = item.pubDate;
            element.querySelector("article .item-pub-date").textContent = dia[d.getDay()] + ", " + d.getDate() + " de " + mes[d.getMonth()] + " de " + d.getFullYear() + ", " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            //Dando la información que da ahora mismo el rss esto no tiene sentido
           //element.querySelector("article .item-image").src = item.thumbnails[0].src;
            //element.querySelector("article .item-image").alt = item.thumbnails[0].alt;
            element.querySelector("article .item-content").innerHTML = window.toStaticHTML(item.description);
            element.querySelector(".content").focus();
        }
    });
})();
