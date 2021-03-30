
//------1


let content = document.getElementById('content')
console.log(content["innerText"])


let rules1 = document.getElementById('rules')
console.log(rules1["innerText"])

content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, libero.'
rules1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore dolores ea illum laborum mollitia officia provident quis saepe suscipit!'

content.style.backgroundColor = 'black'
content.style.color ='blue'

rules1.style.backgroundColor = 'black'
rules1.style.color ='blue'

let ul = document.getElementsByTagName('ul')

ul[0].style.backgroundColor = 'black'


let lishka = document.getElementsByTagName('li')

for (let i = 0; i < lishka.length; i++){
lishka[i].style.color ='blue'
}


let fc = document.getElementsByClassName('fc bp')
console.log(fc)

let fcRules = document.getElementsByClassName('fc_rules')
console.log(fcRules)
for (let i = 0; i < fcRules.length; i++){
fcRules[i].style.color = 'red'
}




//-------2


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


for (let i = 0; i < users.length; i++){


let informationDiv = document.createElement('div')

informationDiv.innerHTML =` ${users[i].name} 
${users[i].age}  ${users[i].status} `;

document.body.appendChild(informationDiv)
    informationDiv.style.backgroundColor='grey';
    informationDiv.style.margin='15px';
    informationDiv.style.color = 'white';
    document.body.appendChild(informationDiv);

}






//--------


