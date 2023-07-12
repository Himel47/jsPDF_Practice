
// function savePDF() {
//     var element = document.getElementById('mainDiv')

//     var doc = new jsPDF()


//     doc.fromHTML(element, 10, 10, {
//         'witdh': 190
//     }, function () {
//         doc.save('htmlImage.pdf')
//     }
//     )
// }

function processingPDF(){

    html2canvas(document.querySelector('#mainDiv')).then((canvas)=>{
        let base64image = canvas.toDataURL('details/png')
        console.log(base64image)

        let pdf = new jsPDF('l', 'px', [1100, 950])
        pdf.addImage(base64image, 'PNG', 25, 25)

        pdf.save('personalDetails.pdf')
    })

}