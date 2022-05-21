
/*let elem = document.getElementById("uls")
console.log(elem)
console.log(elem.nodeType)
console.log(elem.innerHTML)
console.log(elem.outerHTML)
console.log(elem.textContent)
console.log(elem.hidden)
console.log(elem.parentNode)
console.log(elem.childNodes)
let children = elem.childNodes
console.log(elem.nextSibiling)
console.log(elem.previousSibiling)

for (item of children) {
	console.log(item)
}

//let myName = prompt("Enter your Name");

//let elems = document.getElementsByTagName("body")
//elems[0].innerHTML = "<h1>"+myName+"</h1>";
/*alert(navigator.appName)
alert(navigator.appVersion)
alert(navigator.userAgent)
alert(navigator.cookieEnabled)
alert(navigator.platform)*/

/*alert(screen.height)
alert(screen.availHeight)
alert(screen.width)
alert(screen.availWidth)
alert(screen.colorDepth)*/

//window.history.back{}
/*function clickSwitch(){
    
  alert("Click complete")
  let elem = document.querySelector('body');
  elem.classList.toggle("dark-mode");
    
}*/

function go(e) {
    this.style = "background-color: #006625;";
}

function go1(e) {
    this.style = "background-color: #009135;";
}

function clickButton() {

    let elem = document.querySelector('#BasketNumber');
    let a = +elem.innerHTML;
    if (a < 9) {
        elem.innerHTML = a + 1;
    } else {
        alert("You can't add more items, other people want to buy it too!")
        for (item of BuyButton) {
            item.style.backgroundColor = "#b3b3b3";
            item.setAttribute('disabled', true);
            item.style.cursor = "not-allowed";

        }
    }
}

document.querySelector('#BusketButton').addEventListener('click', function () {
    let cart = JSON.parse(localStorage.getItem("cart"))

    let tableInner = "<tr><td>Name</td><td>Price</td><td>Count</td></tr>"
    for (let item in cart) {
        tableInner += `<tr data-id ='${item}'><td>${cart[item]["name"]}</td><td>${cart[item]["price"]}\u0024</td><td>${cart[item]["cnt"]}</td><td><span class = "smallCross">\u2013</span></td><td><span class = "smallPlus">+</span></td></tr>`
    }

    let cartTable = document.querySelector("#cart-table")
    cartTable.innerHTML = tableInner
    document.querySelector("#total-sum").innerHTML = `Total: ${updateTotalSum()} \u0024`
    document.querySelector('#cart').style = 'display: block';

    let closeIcons = document.querySelectorAll(".smallCross")
    let addIcons = document.querySelectorAll(".smallPlus")
    console.log(closeIcons)

    for (let smallCross of closeIcons) {
        smallCross.addEventListener("click", function () {
            //this.parentNode.parentNode.dataset.id
            let item = this.parentNode.parentNode.dataset.id
            console.log([item])
            console.log(cart[item])
            if (cart[item]["cnt"] > 1) {

                cart[item]["cnt"]--
                localStorage.setItem("cart", JSON.stringify(cart))
                this.parentNode.parentNode.querySelector("td:nth-child(3)").innerHTML = cart[item]["cnt"]
            } else {
                delete cart[item]
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                localStorage.setItem("cart", JSON.stringify(cart))
                this.parentNode.parentNode.querySelector("td:nth-child(3)").innerHTML = cart[item]["cnt"]
            }
            document.querySelector("#total-sum").innerHTML = `Total: ${updateTotalSum()} \u0024`
        })
    }
    for (let smallPlus of addIcons) {
        smallPlus.addEventListener("click", function () {
            //this.parentNode.parentNode.dataset.id
            let item = this.parentNode.parentNode.dataset.id
            console.log([item])
            console.log(cart[item])
            if (cart[item]["cnt"] < 9) {

                cart[item]["cnt"]++
                localStorage.setItem("cart", JSON.stringify(cart))
                this.parentNode.parentNode.querySelector("td:nth-child(3)").innerHTML = cart[item]["cnt"]
            }
            document.querySelector("#total-sum").innerHTML = `Total: ${updateTotalSum()} \u0024`
        })
    }
})

let closeButtons = document.querySelectorAll('.cart-button-close')
for (let button of closeButtons) {
    button.addEventListener('click', function () {
        document.querySelector('#cart').style = 'display: none';
    })
}

let items = document.querySelectorAll('.BuyButton')
for (let item of items) {
    item.addEventListener('click', function () {
        let itemID = +this.parentNode.dataset.id
        let itemName = this.parentNode.querySelector('h3').innerHTML
        let itemPrice = this.parentNode.querySelector('.price').innerHTML

        console.log(itemID)
        console.log(itemName)
        console.log(itemPrice)

        let cart = JSON.parse(localStorage.getItem("cart")) || {}
        if (cart[itemID]) {
            cart[itemID]["cnt"]++
        } else {
            cart[itemID] = {
                "name": itemName,
                "price": itemPrice,
                "cnt": 1
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    })
}

document.addEventListener('DOMContentLoaded', function () {
    localStorage.clear()
})

function updateTotalSum() {
    let totalSum = 0
    let cart = JSON.parse(localStorage.getItem('cart'))
    for (let item in cart) {
        totalSum += cart[item]["price"] * cart[item]["cnt"]
    }
    return totalSum
}

let orderButton = document.querySelector('.cart-button-1')
orderButton.addEventListener('click', function () {
    console.log(1)
    let cart = localStorage.getItem('cart')
    order.cart.value = cart
    console.log(order.cart.value)
    order.submit()
})
orderButton.addEventListener("mousedown", go);
orderButton.addEventListener("mouseup", go1);
/*function fieldChange(){
    let str = ""
    for (let item of form.elements){
        str += "type:" + item.type + "<br>"
        str += "name:" + item.name + "<br>"
        str += "value:" + item.value + "<br>"
        str += "fotrm:" + item.form.name + "<br><br><br>"
    }
    document.querySelector('#field').innerHTML = str
}
for (let item of form.elements){
    item.addEventListener('change', fieldChange)
}
for (let item of form.elements){
    item.addEventListener('focus', function(){
        this.style = "border-color:#006625; background-color:grey; border-width: 3px; "

})
}
/*for (let item of form.elements){
    item.addEventListener('blur', function(){
        this.style = "border-color:#006625; background-color:grey; border-width: 3px; "
        if (this.value != 1){
            alert("Неккоректный ввод")
        }
    })
}*/

/*function validate(){
    for (let item of form.elements){
        if (item.value == ""){
            alert(`Field ${element.name} mustn't be empty!`)
            return false
        }
        
    }
    return true
}
/*localStorage.removeItem('cart')


document.querySelector('#BusketButton').addEventListener('click', function){
    alert(localStorage.getItem('cart'))
}

let items= document.querySelectorAll('.items')

function getFromCart(){
    return JSON.parse(localStorage.getItem('cart'))
}

function AddToCart(){
    
    var itemID = this.dataset.id
    var itemName = this.dataset.name
    var itemPrice = this.dataset.price
    
    }
    let cart = getFromCart() || {}
    
    if (cart.hasOwnProperty(itemID)) {
        cart[itemID]['cnt'] ++
    }
    else{
        
        alert(itemName)
        
        let item = {
        
            name : itemName,
            price : itemPrice,
            cnt : 1
    }
        cart[itemID] = item
        }
    
    let items = {
        "1" : item
    }
    
    localStorage.setItem('cart', JSON.stringify(items))


/*buttonsCart = document.querySelector('#BasketButton')*/
buttons = document.querySelectorAll('#BuyButton', '.smallCross', '.smallPlus');
spans = document.querySelector('#slider_round');


/*for (button of buttonsCart) {
    button.addEventListener('click', clickButtonBasket)
*/
for (button of buttons) {
    button.addEventListener('click', clickButton)
    button.addEventListener("mousedown", go);
    button.addEventListener("mouseup", go1);
}
/*for (span of spans) {
    span.addEventListener('click', clickSwitch)
}*/




/*function greeting() {
    console.log("Hello")
}

let timer1;
let timerEnabled = false

document.querySelector('#startButton').addEventListener('click', function() {
   if (!timerEnabled){
    timer1 = setInterval(greeting, 2000);
    timerEnabled = true
   }
})
document.querySelector('#stopButton').addEventListener('click', function(){
   if (timerEnabled) {
    clearInterval(timer1)
    timerEnabled = false
   }
})

function addZero(number) {
    if (number < 10) {
        return "0" + number
    }
    else{
        return "" + number
    }
}

let date = new Date(2022,3,1,10)
//let date_str = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds()) + " " + addZero(date.getDate()) + "." addZero(date.getMonth()+1) + "." + date.getFullYear()
let date_current = new Date()
document.querySelector("#worldEnd").innerHTML = date - date_current*/

/*localStorage.setItem('user', 'Jaggernaut')
localStorage.setItem('role', 'admin')
//localStorage.removeItem('role')
alert(localStorage.getItem('role'))*/

//document.cookie = 'user = Jaggernaut'
//alert(document.cookie)
//document.cookie = 'role = '

//let func = Function('alert(\'Hello\')')
//func()

/*setTimeout(function(){
    let a = document.querySelector('#func').value;
    let func = Function(a)
    func()
}, 3000)*/

/*let cart = {
    
    'name' : 'Jaggernaut',
    'role' : 'admin',
    'mail' : 'Urnero@dotaplus.com',
    
    toString(){
        return `name: ${this.name}, role: ${this.role}, mail: ${this.mail}`
    }
    

}
    
let a = JSON.stringify(cart)
localStorage.setItem('cart', a)

let cart1 = JSON.parse(localStorage.getItem('cart'))
alert(cart1.name)

alert(a)

alert(cart)*/
