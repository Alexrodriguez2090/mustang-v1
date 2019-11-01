var contacts = [];

var contactsID = document.getElementById("contacts");

function getIndex() {
    var indexLoad = new XMLHttpRequest();
    indexLoad.open("GET", "https://mustang-index.azurewebsites.net/index.json");
    indexLoad.onload = function() {
        ourContacts = JSON.parse(indexLoad.responseText);
        console.log(ourContacts);
    for (i = 0; i < ourContacts.length; i++)
    	contacts.push(ourContacts[i].ContactURL)
}
    indexLoad.send();
}

function showContact() {
	for (i = 0; i < contacts.length; i++)
	console.log(contacts[i]);
	var ofIndexLoad = new XMLHttpRequest();
    ofIndexLoad.open("GET", contacts[i]);
    ofIndexLoad.onload = function() {
    	console.log(ofIndexLoad.responseText)
    	contactOfContacts = JSON.parse(ofIndexLoad.responseText);
    }
    ofIndexLoad.send()
}