//1) Напишіть код, який :
//a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

let mainH = document.getElementById('main_header')
console.log(mainH)
mainH.style.color = 'grey'
mainH.innerText = 'mon-year'

//b) робить шириниу елементу ul 400px
let ul1 = document.getElementsByTagName('ul')
for (let i = 0; i < ul1.length; i++) {
    console.log(ul1[0])

    ul1[0].style.backgroundColor = 'green'
    ul1[0].style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%

 let link = document.getElementsByClassName('linkList')
for (let i = 0; i < link.length; i++) {
   link[i].style.width = '50%'

}

//d) отримує текст який зберігається в елементі з класом listElement2


let list = document.getElementsByClassName('listElement2')
console.log(list)

list[0].innerText = 'Lorem ipsum dolor sit amet.'



//e) отримує всі елементи li та змінює ім колір фону на сірий


let li1 = document.getElementsByTagName('li')
for (let i = 0; i < li1.length; i++) {
li1[i].style.backgroundColor = 'yellow'
}

//f) отримує всі елементи 'a' та додає їм клас anchor


let a1 = document.getElementsByTagName('a')
for (let i = 0; i < a1.length; i++) {
    console.log(a1[i])
    a1[i].classList.add('anchor')
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// тексту на 40 пікселів

let a1 = document.getElementsByTagName('a')
for (let i = 0; i < a1.length; i++) {
   if (i === 2){
       a1[i].style.fontSize ='40px'
   }

}



//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let header = document.getElementsByClassName('sub-header')

for (let i = 0; i < header.length; i++) {
    header[i].style.backgroundColor = prompt('background color?')
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()



let header = document.getElementsByClassName('sub-header')
for (let i = 0; i < header.length; i++)

header[1].style.backgroundColor = prompt(' color?')




// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()


let cont = document.getElementsByClassName('content_1')


cont[0].innerText = prompt('what text?')


//l) отримати елементи p та змінити їм padding на 20px


let par = document.getElementsByTagName('p')

for (let i = 0; i < par.length; i++) {
    console.log(par[i])


par[i].style.padding = '24px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


let text2 = document.getElementsByClassName('text2')

text2[0].innerHTML ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, perspiciatis!'



//----------------------------------


//2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];


for (let i = 0; i < rules.length; i++) {

    let rules1 = document.createElement('div')

        rules1.innerHTML =` <h2>${rules[i].title}</h2>  <p>${rules[i].body}</p> `

    document.body.appendChild(rules1)
    console.log(rules[i])
}


//----------



