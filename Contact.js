var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




/////////////////////////

function oInsert(opinion){


    opinion.createdDate=(new Date(opinion.created)).toDateString();
    opinion.willReturnMessage=opinion.willReturn?"I will return to this page.":"Sorry, one visit was enough.";

    const template = document.getElementById("opinionScript").innerHTML;
    const htmlWOp = Mustache.render(template,opinion);

    delete(opinion.createdDate);
    delete(opinion.willReturnMessage);

    return htmlWOp;

}

function oArray(sourceData){

    let htmlWithOpinions="";

    for(const opn of sourceData){
        htmlWithOpinions += oInsert(opn);
    }

    return htmlWithOpinions;

}

let opinions=[];
const opinionsElm=document.getElementById("myConteiner");

if(localStorage.myTreesComments){
    opinions=JSON.parse(localStorage.myTreesComments);
}

opinionsElm.innerHTML= oArray(opinions);

const BTN = document.getElementById("asdfg")
console.log(BTN);
let main = document.getElementById("result")

BTN.addEventListener('click', function(){
    let error = document.getElementById("error")
    error.style.display = "none";

    let browsers1 = document.getElementById("browsers1").value
    let inputName = document.getElementById("firstname").value;
    let textarea = document.getElementById("text").value;
    let myURL = document.getElementById("myURL").value;
    let email = document.getElementById("email").value;
    let petselect = document.getElementById("petselect").value;
    let k = document.getElementsByClassName('group_radio')
    let zirka1 = document.getElementById('subscribeNews1').value
    let zirka2 = document.getElementById('subscribeNews2').value
    let zirka3 = document.getElementById('subscribeNews3').value
    let zirka4 = document.getElementById('subscribeNews4').value

    let new_k = "";

    if (inputName !== "" && textarea !== "" && email!== "" && myURL !== "" && petselect !== "" && browsers1 !== "" ) {
        let isBoss = confirm("Your opinion has been stored!");
        console.group("--Opinion--")
        console.log("Name: ", inputName)
        console.log("Opinion text: ", textarea)
        console.log("Email:  ",email)
        console.log("URL:  ",myURL)
        console.log("Country", browsers1)
        console.log("Month: ", petselect)
        console.log("Zirka: ", zirka1)
        console.log("Zirka: ", zirka2)
        console.log("Zirka: ", zirka3)
        console.log("Zirka: ", zirka4)
        for (let i = 0; i<k.length;i++) {
            if(k[i].type == "radio" && k[i].checked){
                console.log('Type of housing', k[i].value)
                new_k = k[i].value
            }
        }

        console.groupEnd();
        const newOpinion =
        {
            name: inputName,
            comment: textarea,
            myURL,
            email,
            browsers1,
            petselect,
            new_k,
            created: new Date()

        };
        opinions.push(newOpinion);
        localStorage.myTreesComments = JSON.stringify(opinions);
    
    
        opinionsElm.innerHTML+=oInsert(newOpinion);
    
    } else {
        error.style.display = "block";
    }

});



function CheckEMail(eml)

{
    if (eml != "")
    {
        if (eml.indexOf("@") == -1)
        {
            alert("Внимание!\nЭлектронный адрес указан с ошибкой.");
        }
    }
}
function CheckmyURL(url)

{
    if (url != "")
    {
        if (url.indexOf("https://") == -1)
        {
            alert("Внимание!\n Адрес указан с ошибкой.");
        }
    }
}

function reset() {
    document.getElementById("asdfg").checked = false;
}


/*для строки, яка бежит сверху*/
var tit = document.title;
var c = 0;
//
function writetitle() {
    document.title = tit.substring(0,c);
    if(c==tit.length) {
        c = 0;setTimeout("writetitle()", 3000)
    } else {
        c++;
        setTimeout("writetitle()", 200)
    }
}
writetitle()













