// window.jsPDF = window.jspdf.jsPDF;
// function saveHtmlToPDF() {
//     const divContent = document.querySelector("#htmlContent").textContent;

//     var doc = new jsPDF('p','mm','a4');

//     doc.text("hello World!",10,10);
//     doc.text(divContent, 10, 20);

//     doc.save('CodeOutput.pdf');
// }



function saveHtmlToPDF() {
    // var doc = new jsPDF('l', 'mm', 'a4');
    //// taking input from textarea
    // var elementHTML = document.querySelector("#htmlContent");

    // const htmlString = "<div>"+elementHTML.value+"</div>";

    ////Direct table html

    var image =
        ""


    var htmlContent =
    `<table style="border: navy solid 0.5px; border-radius: 15px; padding: 15px;">

        <tr><td colspan="2" rowspan="6">Hidden padding</td>
        <td colspan="2"><img src="https://th.bing.com/th/id/R.677885eba4294151def0790b3e3f9182?rik=31t3bUaK7ihdlw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature.jpg&ehk=%2ff%2fR4bPP9psiBBd1EA7240iH1BAGzGjzqWmm28g9%2bFQ%3d&risl=1&pid=ImgRaw&r=0" alt="" style="background-color: black; border-radius: 50%; margin-top: 10px; height: 180px;"></td></tr>
        <tr><td></td><td><td></td><h3 style="text-align: right; font-size: 28px; margin-bottom: -15px; margin-top: 25px;">Md. Shahriar Kabir Himel</h3></td></tr>
        <tr><td></td><td></td><td><p style="text-align: right; margin-bottom: -15px;"><b>Software Engineering Trainee</b></p></td></tr>
        <tr><td></td><td></td><td><p style="text-align: right; margin-bottom: -15px; font-size: 19px;">BrainStation-23 Ltd</p></td></tr>
        <tr><td></td><td></td><td><p style="text-align: right; margin-bottom: -15px;">Contact: +8801987654321</p></td></tr>
        <tr><td></td><td></td><td><p style="text-align: right; margin-bottom: 40px;">Rampura Bazar, Rampura, Dhaka</p></td></tr>
    
    </table>`;

    //var htmml = document.querySelector("#htmlContent").value

    // Convert the HTML string to PDF and add it to the document
    // doc.fromHTML(htmlContent, 10, 10, {
    //     'width': doc.internal.pageSize.getWidth() - 10,
    //     'height': doc.internal.pageSize.getHeight() - 10
    // }, function () {
    //     console.log("Rendered without issue!")
    //     doc.save('Output.pdf');
    // }
    // );

    var container = document.createElement('div');
    container.innerHTML = htmlContent.value;

    html2canvas(container, {
        ignoreElements: function (element) {
          return element.tagName === 'IFRAME';
        }
      }).then((canvas) => {
        let base64image = canvas.toDataURL('details/png')
        console.log(base64image)

        let pdf = new jsPDF('l', 'px', [1100, 950])
        pdf.addImage(base64image, 'PNG', 25, 25)

        pdf.save('Output.pdf')
    })
}
