function printEmployeesSmall(employee) {

    var i = 0;

    //write the table tags
    document.writeln("<table id='small' ><tr>");

    //loop through employee details array and print employee info and corresponding html
    for (i = 0; i < employee.details.length; i++) {
        document.writeln("<tr><td>");
        document.writeln("<table border = '1' width = 200 >");
		document.writeln("<tr><td><b>Picture</b></td><td width=100><img src='" + employee.details[i].img + "'alt='profile picture'></td></tr>");
        document.writeln("<tr><td><b>ID</b></td><td width=100>" + employee.details[i].id + "</td></tr>");
        document.writeln("<tr><td><b>Name</b></td><td width=100>" + employee.details[i].name + "</td></tr>");
        document.writeln("<tr><td><b>Age</b></td><td width = 100>" + employee.details[i].age + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td></tr>");
    }

    document.writeln("</tr></table>");
}


function printEmployeesLarge(employee) {

    var i = 0;

    //write the table tags
    document.writeln("<table id='large'><tr>");
	document.writeln("<th>Picture</th>");
    document.writeln("<th>ID</th>");
    document.writeln("<th>Name</th>");
    document.writeln("<th>Age</th></tr><tr>");

    //loop through employee details array and print employee info and corresponding html
    for (i = 0; i < employee.details.length; i++) {
		document.writeln("<td><img src='" + employee.details[i].img + "'alt='profile picture'></td>");
        document.writeln("<td>" + employee.details[i].id + "</td>");
        document.writeln("<td>" + employee.details[i].name + "</td>");
        document.writeln("<td>" + employee.details[i].age + "</td>");
        document.writeln("</tr>");
    }

    document.writeln("</tr></table>");
}


function WidthChange(mq) {
    if (mq.matches) {
        document.getElementById("small").style.display = "none";
        document.getElementById("large").style.display = "block";
    }
    else {
        document.getElementById("small").style.display = "block";
        document.getElementById("large").style.display = "none";
    }
}


//make an array of JSON employee objects
var employee = {
    "details": [

        { "img": "images/pp1.jpg","id": "01", "name": "Joe Cool", "age": "25" },
        { "img": "images/pp2.jpg","id": "02", "name": "Jack Johnson", "age": "33" },
        { "img": "images/pp3.jpg","id": "03", "name": "Bill Smith", "age": "26" },
        { "img": "images/pp4.jpg","id": "04", "name": "Sally Freeman", "age": "29" },
        { "img": "images/pp5.jpg","id": "05", "name": "Jill Garrett", "age": "55" },
        { "img": "images/pp6.jpg","id": "06", "name": "Simon O'Neil", "age": "43" },
        { "img": "images/pp7.jpg","id": "07", "name": "Frank McDonald", "age": "58" },
        { "img": "images/pp8.jpg","id": "08", "name": "Jessica McDonald", "age": "63" },
        { "img": "images/pp9.jpg","id": "09", "name": "John Doe", "age": "52" }]
};

printEmployeesLarge(employee);

printEmployeesSmall(employee);

//event listener to see if screen size changed to smaller size
var mq = window.matchMedia("(min-width:700px)")
WidthChange(mq); //call listener at run time
mq.addListener(WidthChange);
