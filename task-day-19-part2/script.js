// creating an h tag for displaying title
let heading = document.createElement("h1")
heading.innerHTML = "form with dom manipulation"
heading.setAttribute("id", "title")
document.body.appendChild(heading)

// crreating an paragraph tag for describing what is done
let para = document.createElement("p")
para.innerHTML = "creating an form and table with dom manipulation"
para.setAttribute("id", "description")
document.body.appendChild(para)


// creating the table element
let table = document.createElement("table")
table.setAttribute("class", "full-table")
let firsttablerow = document.createElement("tr")
firsttablerow.setAttribute("class", "firsttablerow")
let secondtablerow = document.createElement("tr")
secondtablerow.setAttribute("class", "secondtablerow")
let form = document.createElement("form")
form.setAttribute("id", "form")




// adding the above tags to the body
document.getElementById("body").appendChild(form)
form.appendChild(table)
table.appendChild(firsttablerow)
table.appendChild(secondtablerow)



// adding the form elemnets to the firsttablerow
let firstlabel = document.createElement("label")
firstlabel.innerHTML = "FirstName"
let firsttext = document.createElement("input")
firsttext.setAttribute("type", "text")
firsttext.setAttribute("placeholder", "enter first name")
firsttext.setAttribute("id", "first-name")


firsttablerow.appendChild(firstlabel)
firsttablerow.appendChild(firsttext)




let lastlabel = document.createElement("label")
lastlabel.innerHTML = "LastName"
let lasttext = document.createElement("input")
lasttext.setAttribute('type', "text")
lasttext.setAttribute('placeholder', "enter last name")
lasttext.setAttribute('id', "last-name")


firsttablerow.appendChild(lastlabel)
firsttablerow.appendChild(lasttext)



let addresslabel = document.createElement("label")
addresslabel.innerHTML = "address"
let addresstext = document.createElement("input")
addresstext.setAttribute('type', "text")
addresstext.setAttribute('placeholder', "enter address")
addresstext.setAttribute('id', "address")


firsttablerow.appendChild(addresslabel)
firsttablerow.appendChild(addresstext)


//  creating an div for gender
let genderdiv = document.createElement("div")
genderdiv.setAttribute("class", "gender-div")
firsttablerow.appendChild(genderdiv)



// gender label
let gender = document.createElement("label")
gender.innerHTML = "Gender :"

genderdiv.appendChild(gender)


// male gender
let malegender = document.createElement("label")
malegender.innerHTML = "Male"
let maleradio = document.createElement("input")
maleradio.setAttribute("type", "radio")
maleradio.setAttribute("name", "gender")
maleradio.setAttribute("id", "male")

genderdiv.appendChild(malegender)
genderdiv.appendChild(maleradio)




// female gender
let femalegender = document.createElement("label")
femalegender.innerHTML = "Female"
let femaleradio = document.createElement("input")
femaleradio.setAttribute("type", "radio")
femaleradio.setAttribute("name", "gender")
femaleradio.setAttribute("id", "female")

genderdiv.appendChild(femalegender)
genderdiv.appendChild(femaleradio)



// other gender
let othergender = document.createElement("label")
othergender.innerHTML = "others"
let otherradio = document.createElement("input")
otherradio.setAttribute("type", "radio")
otherradio.setAttribute("name", "gender")
otherradio.setAttribute("id", "other")

genderdiv.appendChild(othergender)
genderdiv.appendChild(otherradio)


// craeting an diov for choice of food 
let choicediv = document.createElement("div")
choicediv.setAttribute("class", "choice-div")
firsttablerow.appendChild(choicediv)

let br = document.createElement("br")

// choice of food
let choice = document.createElement("label")
choice.innerHTML = "choice of food :"

choicediv.appendChild(choice)
// choicediv.appendChild(br)



// chapati 
let chapati = document.createElement("label")
chapati.innerHTML = "chapati"
let chapatiin = document.createElement("input")
chapatiin.setAttribute("type", "checkbox")
chapatiin.setAttribute("value", "chapati")


choicediv.appendChild(chapati)
choicediv.appendChild(chapatiin)



// parota
let parota = document.createElement("label")
parota.innerHTML = "parota"
let parotain = document.createElement("input")
parotain.setAttribute("type", "checkbox")
parotain.setAttribute("value", "parota")


choicediv.appendChild(parota)
choicediv.appendChild(parotain)




// Egg rice
let eggrice = document.createElement("label")
eggrice.innerHTML = "egg rice"
let eggricein = document.createElement("input")
eggricein.setAttribute("type", "checkbox")
eggricein.setAttribute("value", "egg rice")


choicediv.appendChild(eggrice)
choicediv.appendChild(eggricein)



// Fried rice
let fried = document.createElement("label")
fried.innerHTML = "fried rice"
let friedin = document.createElement("input")
friedin.setAttribute("type", "checkbox")
friedin.setAttribute("value", "fried rice")


choicediv.appendChild(fried)
choicediv.appendChild(friedin)




// chicken rice
let chicken = document.createElement("label")
chicken.innerHTML = "chicken"
let chickenin = document.createElement("input")
chickenin.setAttribute("type", "checkbox")
chickenin.setAttribute("value", "chicken")



choicediv.appendChild(chicken)
choicediv.appendChild(chickenin)


let foodarray = [chapatiin, parotain, eggricein, friedin, chickenin]




// pincode 
let pincodelabel = document.createElement("label")
pincodelabel.innerHTML = "pincode"
let pincodetext = document.createElement("input")
pincodetext.setAttribute('type', "text")
pincodetext.setAttribute('placeholder', "enter pincode")
pincodetext.setAttribute('id', "pincode")


firsttablerow.appendChild(pincodelabel)
firsttablerow.appendChild(pincodetext)



// state 
let statelabel = document.createElement("label")
statelabel.innerHTML = "state"
let statetext = document.createElement("input")
statetext.setAttribute('type', "text")
statetext.setAttribute('placeholder', "enter state")
statetext.setAttribute('id', "state")


firsttablerow.appendChild(statelabel)
firsttablerow.appendChild(statetext)



// country
let countrylabel = document.createElement("label")
countrylabel.innerHTML = "country"
let countrytext = document.createElement("input")
countrytext.setAttribute('type', "text")
countrytext.setAttribute('placeholder', "enter country")
countrytext.setAttribute('id', "country")


firsttablerow.appendChild(countrylabel)
firsttablerow.appendChild(countrytext)


let btn = document.createElement("input")
btn.setAttribute("type", "button")
btn.setAttribute("value", "Submit")
btn.setAttribute("id", "Submit")


firsttablerow.appendChild(btn)





// creating an table for adding the information to the table
let sectable = document.createElement("table")
sectable.setAttribute("class", "sectable")
secondtablerow.appendChild(sectable)


let head = document.createElement("thead")
head.setAttribute("class", "thead")
sectable.appendChild(head)

let tr1 = document.createElement("tr")
tr1.setAttribute("class", "firsttable")
head.appendChild(tr1)


// head row element
let td1r1 = document.createElement("th")
td1r1.innerHTML = "FirstName"
tr1.appendChild(td1r1)

let td2r1 = document.createElement("th")
td2r1.innerHTML = "LastNmae"
tr1.appendChild(td2r1)

let td3r1 = document.createElement("th")
td3r1.innerHTML = "Address"
tr1.appendChild(td3r1)

let td4r1 = document.createElement("th")
td4r1.innerHTML = "Gender"
tr1.appendChild(td4r1)

let td5r1 = document.createElement("th")
td5r1.innerHTML = "choice of food"
tr1.appendChild(td5r1)

let td6r1 = document.createElement("th")
td6r1.innerHTML = "pincode"
tr1.appendChild(td6r1)

let td7r1 = document.createElement("th")
td7r1.innerHTML = "state"
tr1.appendChild(td7r1)

let td8r1 = document.createElement("th")
td8r1.innerHTML = "country"
tr1.appendChild(td8r1)


// creating an tbody tag for adding element using dom manipulation
let tbody = document.createElement("tbody")
tbody.setAttribute("class", "tbody")
sectable.appendChild(tbody)


function gendervalue() {
  if (maleradio.checked) {
    return "male"
  }
  else if (femaleradio.checked) {
    return "female"
  }
  else if (otherradio.checked) {
    return "other"
  }
}

function choicefood(data) {
  let sendback = []
  for (let list of data) {
    if (list.checked) {
      sendback.push(list.value)
    }
  }
  return sendback
}




// adding element in table using dom manipulation

let result = ""
btn.addEventListener("click", function () {

  if (firsttext.value != "") {

    let tr2 = document.createElement('tr')
    tbody.appendChild(tr2)

    result = `<td>${firsttext.value}</td>
        <td>${lasttext.value}</td>
        <td>${addresstext.value}</td>
        <td>${gendervalue()}</td>
        <td>${choicefood(foodarray)}</td>
        <td>${pincode.value}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>`
    tr2.innerHTML = result

    firsttext.value = ""
    lasttext.value = ""
    addresstext.value = ""
    pincodetext.value = ""
    state.value = ""
    country.value = ""
    maleradio.checked = false
    femaleradio.checked = false
    otherradio.checked = false
    chapatiin.checked = false
    parotain.checked = false
    eggricein.checked = false
    friedin.checked = false
    chickenin.checked = false
  }



})




