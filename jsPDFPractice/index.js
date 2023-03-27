var github = new Image(), linkedin = new Image(), call = new Image();
var mail = new Image(), loc = new Image(), own = new Image();


var doc = new jsPDF()

//top part
doc.setDrawColor(0)
doc.setFillColor(55, 55, 120)
doc.rect(0, 0, 210, 65, 'F')

doc.setFontSize(35)
doc.setTextColor(255, 255, 255)
doc.text("Md.Shahriar Kabir Himel",37,20)
doc.setFontSize(20)
doc.text("Software Engineering Trainee",59,30)
doc.setFontSize(15)
doc.text("himel47",22,45)
doc.text("+880 1976 038365",52,45)
doc.text("shahriar himel",107,45)
doc.text("Jessore, Khulna, BD",150,45)
doc.text("himel84664@gmail.com",77,55)

//bottom divider
doc.setDrawColor(0, 0, 0) 
doc.setLineWidth(0.8)
doc.line(105, 75, 105, 283)

//bottom part
doc.setTextColor(0, 0, 0)

//Header Line//
doc.setLineWidth(0.6)
doc.line(12, 83, 100, 83)
doc.line(12, 118, 100, 118)
doc.line(12, 152, 100, 152)
doc.line(12, 222, 100, 222)
doc.line(12, 264, 100, 264)
doc.line(110, 83, 198, 83)
doc.line(110, 152, 198, 152)
doc.line(110, 217, 198, 217)

//Header//
doc.setFontSize(20)
//education
doc.text("Education",12,80)
//experience
doc.text("Professional Experience",12,115)
//skills
doc.text("Skills",12,149)
//achievement
doc.text("Achievements",12,219)
//certificate
doc.text("Certificates",12,261)
//projects
doc.text("Projects",110,80)
//non technical skill
doc.text("Non Technical Skills",110,149)
//interests
doc.text("Interests",110,214)


//Semi Header//
doc.setFontSize(15)
//education
doc.text("BSc in Software Engineering,",12,90)
doc.text("SUST,",12,96)
//experience
doc.text("Software Engineering Trainee,",12,124)
doc.text("Brainstation-23 Ltd,",12,130)
//skills
doc.text("Language",12,158)
doc.text("Database",12,172)
doc.text("FrameWork",12,186)
doc.text("DevOps and Others",12,200)
//achievement
doc.text("Codeforces",12,228)
doc.text("CodeChef",12,242)
//certificate
doc.text("CSS from Sololearn",12,272)
doc.text("REACT from Sololearn",12,280)
//projects
doc.text("ToDoNote",110,90)
doc.text("Shopping Cart",110,115)
//non technical skill
doc.text("Volunteering",110,158)
doc.text("Management",110,180)
//interests
doc.text("Youtube Channel",110,224)
doc.text("Playing",110,239)
doc.text("Others",110,254)


//Description//
doc.setFontSize(13)
//education
doc.text("(2019-Present)",12,102)
//experience
doc.text("Feb,2023 - Present | Dhaka, Bangladesh",12,136)
//achievement
doc.text("Solved 500+ Problems, Max Rating: 1368",12,234)
doc.text("Solved 100+ Problems, Max Rating: 1535",12,248)
//projects
doc.text("An API project on Dotnet Web Core API,",110,96)
doc.text("User can add, get, update, delete Notes,",110,102)

doc.text("A simple project, User can add items to",110,121)
doc.text("cart, see total price, remove items from",110,127)
doc.text("cart",110,133)
//non technical skill
doc.text("# SUST LICT Techfest 2019",110,165)
doc.text("# Orbitax SUST SWE Technovent 2023",110,172)
doc.text("Served As a Director of Cricket Game in",110,187)
doc.text("IICT Director's Sports Week 2022, organised",110,194)
doc.text("by SWE Society.",110,201)
//interests
doc.text("Gaming Content",110,230)
doc.text("Football, Cricket, Badminton",110,245)
doc.text("Photography, Cycle Riding",110,260)

doc.setFontSize(13)
//project language bold
doc.setFontStyle("bold")
doc.text("C#, Dotnet Core",110,108)
doc.text("TypeScript, React",110,139)

doc.setFontSize(10)
//skills italic font
doc.setFontStyle("italic")
doc.text("    C++, JS, TS, CSS",12,164)
doc.text("    MySQL, MS SQL",12,178)
doc.text("    NodeJS, React, Dotnet",12,192)
doc.text("    Git, Github",12,206)

github.src = '/github-mark-white.png';
linkedin.src = '/linkedin.png';
call.src = '/call.png';
mail.src = '/mail.png';
loc.src = '/location.png';
own.src = '/own.jpg';

function generatePDF(){

    //doc.addImage(own,'JPG',0,0,35,37)
    doc.addImage(github,'PNG',15,40,5,5)
    doc.addImage(call,'PNG',45,40,5,5)
    doc.addImage(linkedin,'PNG',100,40,5,5)
    doc.addImage(loc,'PNG',143,40,5,5)

    doc.addImage(mail,'PNG',70,50,5,5)
    doc.save('himel.pdf');
    //alert("PDF has been downloaded!");
}

