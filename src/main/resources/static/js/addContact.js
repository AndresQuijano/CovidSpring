let contacts=[];

init();

function init() {
    document.querySelector("#btn-add-contact").addEventListener("click", addContact);
}

class Person{
    constructor(name/*,phonePrefix*/,phone,gender,status,friends){
        this.name=name;
        // this.phonePrefix=phonePrefix;
        this.phone=phone;
        this.gender=gender;
        this.status=status;
        this.friends=friends;
    }
}

function addContact(e){
    e.preventDefault();

    //let validator=new Validator();
        
	// let form=document.querySelector(#form-social);
	let name;
	// let phonePrefix;
	let phone;
	let genre;
	let status;

	name=document.querySelector("#inName").value;
	// phonePrefix=document.querySelector(".iti__selected-dial-code").innerHTML;
	phone=document.querySelector("#contactPhone").value;
	genre=getSelectedOption("form-personal","contactGender");
	status=getSelectedOption("form-personal","contactStatus");

	let contact=new Person(name,/*phonePrefix,*/phone,genre,status);

	contacts.push(contact);

	showContact(contact);

	//document.querySelector(`#form-social`).reset();
}

function showContact(contact){
    let btnRemove;
    let tr=document.createElement("tr");
    let td=document.createElement("td");

    btnRemove=document.createElement("button");
    btnRemove.innerHTML=`X`;
    btnRemove.classList.add("btn-remove");

    if(contact.status!=="unknown" && contact.status!=="uninfected")
        tr.innerHTML=`<td>${contact.name}<span class="sp-infected">*<span></td>`;
    else
        tr.innerHTML=`<td>${contact.name}`;
     
    // tr.innerHTML+=`<td>${contact.phonePrefix} ${contact.phone}</td>`;
    tr.innerHTML+=`<td class="contact-phone">${contact.phone}</td>`;

    td.appendChild(btnRemove);
    tr.appendChild(td);

    document.querySelector("table").appendChild(tr);

    btnRemove.addEventListener("click",deleteContact);
}

function deleteContact(evt){
    let bnClick=evt.target;
    let row=bnClick.parentElement.parentElement;
    let phoneNumber=row.querySelector(".contact-phone").innerHTML;

    for( var i = 0; i < contacts.length; i++){
        if ( /*contacts[i].phonePrefix + */contacts[i].phone===phoneNumber) {
            contacts.splice(i, 1);
            break;
        }
    }

    row.remove();
}

//Returns the value of the checked option from a set of radio buttons
//or undefined if there's no checked option
function getSelectedOption(nameOfForm,nameOfRadios){
    let val;
    let form;
    let radios;

    form=document.querySelector(`#${nameOfForm}`);
    radios =Array.from(form.querySelectorAll(`input[name=${nameOfRadios}]`));

    val=radios.find(element=>element.checked);

    return val===undefined?  val: val.value;
}