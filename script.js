function label_creation(tagname1, attr1, attrVal1, txt) {
    var label = document.createElement(tagname1)
    label.setAttribute(attr1, attrVal1)
    label.innerHTML = txt
    return label
}

function break_creation(gap) {
    return document.createElement(gap)
}

function input_creation(tagname, attr, attrVal, type, ph) {
    var input = document.createElement(tagname)
    input.setAttribute(attr, attrVal)
    input.type = type
    input.placeholder = ph
    return input
}
//Main div
var main = document.createElement("div")
main.className = "main"
//Left-div
var d1 = document.createElement("div")
d1.className = "left-div"
//Right-div
var d2 = document.createElement("div")
d2.className = "right-div"

// Heading-1
var heading = document.createElement("h2");
heading.innerHTML = "Form<br>Submission:";
d1.append(heading)

// First Name
var FirstName_Label = label_creation("label", "for", "fname", "First Name:");
var FirstName_gap = break_creation("br");
var FirstName_Input = input_creation("input", "id", "fname", "text", "First Name");
var FirstName_gap2 = break_creation("br");

var firstname = d1.append(FirstName_Label, FirstName_gap, FirstName_Input, FirstName_gap2)

// Last Name
var LastName_Label = label_creation("label", "for", "lname", "Last Name:");
var LastName_gap = break_creation("br");
var LastName_Input = input_creation("input", "id", "lname", "text", "Last Name");
var LastName_gap2 = break_creation("br");

var lastame = d1.append(LastName_Label, LastName_gap, LastName_Input, LastName_gap2);

// Address Line 1
var Address1_Label = label_creation("label", "for", "add1", "Address Line 1:");
var Address1_gap = break_creation("br");
var Address1_Input = input_creation("input", "id", "add1", "text", "Address Line 1");
var Address1_gap2 = break_creation("br");

var add1 = d1.append(Address1_Label, Address1_gap, Address1_Input, Address1_gap2);

// Address Line 2
var Address2_Label = label_creation("label", "for", "add2", "Address Line 2:");
var Address2_gap = break_creation("br");
var Address2_Input = input_creation("input", "id", "add2", "text", "Address Line 2");
var Address2_gap2 = break_creation("br");

var add2 = d1.append(Address2_Label, Address2_gap, Address2_Input, Address2_gap2);

// Pincode
var PIN_Label = label_creation("label", "for", "pin", "PIN:");
var PIN_gap = break_creation("br");
var PIN_Input = input_creation("input", "id", "pin", "number", "PIN");
var PIN_gap2 = break_creation("br");

var pincode = d1.append(PIN_Label, PIN_gap, PIN_Input, PIN_gap2);

// Gender
var gender_label = document.createElement("label");
gender_label.setAttribute("for", "gender");
gender_label.innerHTML = "Gender:";
var g_gap = break_creation("br");

var gender = d1.append(gender_label, g_gap);

function gender_selection(tagname, type, typeVal, idname, name, Valname) {
    var g = document.createElement(tagname)
    g.setAttribute(type, typeVal)
    g.id = idname
    g.name = name
    g.value = Valname
    return g
}

var male_label = label_creation("label", "for", "male", "Male")
var male_input = gender_selection("input", "type", "radio", "male", "gen", "Male")
var female_label = label_creation("label", "for", "female", "Female")
var female_input = gender_selection("input", "type", "radio", "female", "gen", "female")
var g_gap = break_creation("br")

var gender_options = d1.append(male_input, male_label, female_input, female_label, g_gap)

// Food Choice-Label
var food_Label = label_creation("label", "for", "food", `Choice of Food: <i>\Must choose atleast 2 <br> out of 5 options:</i>`);
var fgap1 = break_creation("br");
d1.append(food_Label, fgap1);

function food_selection(tagname, type, typeVal, idname, name, Valname){
    var fs = document.createElement(tagname)
    fs.setAttribute(type, typeVal)
    fs.id = idname
    fs.name = name
    fs.value = Valname
    return fs
}

// Food Choice-Options
// NorthIndian
var NI_Label = label_creation("label", "for", "ni", "North Indian");
var NI_Input = food_selection("input", "type", "checkbox", "ni","food","North Indian");
var NI_gap = break_creation("br");
var ni = d1.append(NI_Input, NI_Label, NI_gap);
// SouthIndian
var SI_Label = label_creation("label", "for", "si", "South Indian");
var SI_Input = food_selection("input", "type", "checkbox", "si","food", "South Indian");
var SI_gap = break_creation("br");
var si = d1.append(SI_Input, SI_Label, SI_gap);
// Chinese
var chinese_Label = label_creation("label", "for", "chinese", "Chinese");
var chinese_Input = food_selection("input", "type", "checkbox", "chinese","food", "Chinese");
var chinese_gap = break_creation("br");
var ch = d1.append(chinese_Input, chinese_Label, chinese_gap);
// Japanese
var japanese_Label = label_creation("label", "for", "japanese", "Japanese");
var japanese_Input = food_selection("input", "type", "checkbox", "japanese","food", "Japanese");
var japanese_gap = break_creation("br");
var jpn = d1.append(japanese_Input, japanese_Label, japanese_gap);
// Sea Food
var sf_Label = label_creation("label", "for", "sf", "Sea Food");
var sf_Input = food_selection("input", "type", "checkbox", "sf","food", "Sea Food");
var sf_gap = break_creation("br");
var sf = d1.append(sf_Input, sf_Label, sf_gap);

// State
var State_Label = label_creation("label", "for", "state", "State:");
var State_gap = break_creation("br");
var State_Input = input_creation("input", "id", "state", "text", "State");
var State_gap2 = break_creation("br");
var state = d1.append(State_Label, State_gap, State_Input, State_gap2);

// Country
var Country_Label = label_creation("label", "for", "country", "Country:");
var Country_gap = break_creation("br");
var Country_Input = input_creation("input", "id", "country", "text", "Country");
var Country_gap2 = break_creation("br");
var country = d1.append(Country_Label, Country_gap, Country_Input, Country_gap2);

// Submit button
var submit_btn_gap = break_creation("br");
var submit_btn = document.createElement("button");
submit_btn.setAttribute("type", "submit");
submit_btn.addEventListener("click", result);
submit_btn.innerHTML = "Submit";
var submit = d1.append(submit_btn_gap, submit_btn);

// Heading-2
var database = document.createElement("h2");
database.innerHTML = "Temporary Database:";
d2.append(database)

//Table Creation
//Table-Top
var table = document.createElement("table")
table.className = "table"

var thead = document.createElement("thead")
thead.className = "thead-dark"

var tr1 = document.createElement("tr")

//th_creation
function th_creation(tagname, scope, scopeVal, txt) {
    var th = document.createElement(tagname)
    th.setAttribute(scope, scopeVal)
    th.innerHTML = txt
    return th
}
var th1 = th_creation("th", "scope", "col", "First Name")
var th2 = th_creation("th", "scope", "col", "Last Name")
var th3 = th_creation("th", "scope", "col", "Address")
var th4 = th_creation("th", "scope", "col", "PIN")
var th5 = th_creation("th", "scope", "col", "Gender")
var th6 = th_creation("th", "scope", "col", "Choice of Food")
var th7 = th_creation("th", "scope", "col", "State")
var th8 = th_creation("th", "scope", "col", "Country")

function result() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var a1 = document.getElementById("add1").value;
    var a2 = document.getElementById("add2").value;
    var p = document.getElementById("pin").value;
    var gd = document.querySelector('input[name="gen"]:checked').value;
    var fd =  [];
    document.querySelectorAll('input[name="food"]:checked').forEach(function(checkbox) {
        fd.push(checkbox.value);
    });
    var st = document.getElementById("state").value;
    var ct = document.getElementById("country").value;

    var tr2 = document.createElement("tr")

    //td_creation
    function td_creation(tdname, tdtxt) {
        var td = document.createElement(tdname)
        td.innerHTML = tdtxt
        return td
    }
    var td1 = document.createElement("td");
    td1.innerHTML = fn;
    var td2 = document.createElement("td");
    td2.innerHTML = ln;
    var td3 = document.createElement("td");
    td3.innerHTML = a1 +" "+a2;
    var td4 = document.createElement("td");
    td4.innerHTML = p;
    var td5 = document.createElement("td");
    td5.innerHTML = gd;
    var td6 = document.createElement("td");
    td6.innerHTML = fd.join(", ")
    var td7 = document.createElement("td");
    td7.innerHTML = st;
    var td8 = document.createElement("td");
    td8.innerHTML = ct;

    tr2.append(td1,td2,td3,td4,td5,td6,td7,td8)
    thead.append(tr2)
}

tr1.append(th1, th2, th3, th4, th5, th6, th7, th8)
thead.append(tr1)
table.append(thead)

d2.append(table)

main.append(d1, d2)
document.body.append(main)
