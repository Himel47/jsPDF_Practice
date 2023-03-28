// window.jsPDF = window.jspdf.jsPDF;
// function saveHtmlToPDF() {
//     const divContent = document.querySelector("#htmlContent").textContent;

//     var doc = new jsPDF('p','mm','a4');

//     doc.text("hello World!",10,10);
//     doc.text(divContent, 10, 20);

//     doc.save('CodeOutput.pdf');
// }



function saveHtmlToPDF() {
    var doc = new jsPDF('p', 'mm', 'a4');

    var elementHTML = document.querySelector("#htmlContent");

    const htmlString = "<div>"+elementHTML.value+"</div>";
    console.log(htmlString);
    // doc.fromHTML(elementHTML,20,30);


    // Convert the HTML string to PDF and add it to the document
    doc.fromHTML(htmlString, 10, 10);
    doc.save('Output.pdf');
}
