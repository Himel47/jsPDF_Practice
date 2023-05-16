
function savePDF() {
    var element = document.getElementById('mainDiv')

    var doc = new jsPDF()


    doc.fromHTML(element, 10, 10, {
        'witdh': 190
    }, function () {
        doc.save('htmlImage.pdf')
    }
    )
}