var name = prompt("Enter Your Name");
var fname = prompt("Enter Your Father Name");
var seat = prompt("Enter Your Seat no.");
var htmlper = prompt("Enter Your percentage in HTML test");
var css1per = prompt("Enter Your percentage in CSS test 1");
var css2per = prompt("Enter Your percentage in CSS test 2");
function calcGrade(per) {
    if(per >= 80)
    return "A+";
    else if(per < 80 && per >=70 )
    return "A";
    else if(per <70 && per >=60)
    return "B";
    else if(per <60 && per >=50)
    return "C";
    else if(per <50 && per >=40)
    return "D";
    else
    return "FAIL";
}
var gradehtml = calcGrade(htmlper);
var gradecss1 = calcGrade(css1per);
var gradecss2 = calcGrade(css2per);
var avgper = (parseFloat(htmlper)+parseFloat(css1per)+parseFloat(css2per))/3;
var gradeavg = calcGrade(avgper); 





