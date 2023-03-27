// window.jsPDF = window.jspdf.jsPDF;
// function saveHtmlToPDF() {
//     const divContent = document.querySelector("#htmlContent").textContent;

//     var doc = new jsPDF('p','mm','a4');

//     doc.text("hello World!",10,10);
//     doc.text(divContent, 10, 20);

//     doc.save('CodeOutput.pdf');
// }

window.jsPDF = window.jspdf.jsPDF;

function Convert_HTML_To_PDF() {
    var doc = new jsPDF('l','mm','1200','1810');
	
    var elementHTML = document.getElementById("htmlContent").value;

    var htmlElement = "<div>"+elementHTML+"</div>";
    // doc.fromHTML(htmlElement, {
    //     callback: function(doc) {
    //         doc.save('document-html.pdf');
    //     },
    //     margin: [10, 10, 10, 10],
    //     x: 0,
    //     y: 0,
    //     width: 190, //target width in the PDF document
    //     windowWidth: 675 //window width in CSS pixels
    // });

    doc.html(document.body, {
        callback: function (doc) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
            document.body.appendChild(iframe);
            iframe.src = doc.output('datauristring');
        }
    });
}