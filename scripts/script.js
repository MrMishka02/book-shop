//fisrt section
const div1 = document.createElement('div');
div1.className = "sect1";
document.body.append(div1);

const span1 = document.createElement('span');
span1.className = 'spans';
span1.innerText = "welcome";

const span2 = document.createElement('span');
span2.className = 'spans';
span2.innerText = "to amazing book shop!";

div1.appendChild(span1);
div1.appendChild(span2);

//Collection
const div2 = document.createElement('div');
div2.className = "div2"
document.body.append(div2);

const myH1 = document.createElement('h1');
myH1.className = "myh1";
myH1.id = "myH1";
myH1.innerHTML = "Books Catalog";
div2.appendChild(myH1);

const cartDiv = document.createElement("div")
cartDiv.className = "cartDiv";
div2.appendChild(cartDiv);

const cartImg = document.createElement("img");
cartImg.className = "cartImg";
cartImg.src = "../images/cart.png";
cartDiv.appendChild(cartImg);

const cartH2 = document.createElement("h2");
cartH2.className = "cartH2";
cartH2.innerText = "My Cart";
cartDiv.appendChild(cartH2);

const cartP = document.createElement("p");
cartP.className = "cartP";
cartP.innerHTML = 0;
cartDiv.appendChild(cartP);

//Second section
const div3 = document.createElement('div');
document.body.append(div3);
div3.id = 'sect2';

//Books Catalog
fetch("../books.json")
    .then(response => {
        if(!response.ok){
        throw Error('ERROR');
        }
    return response.json();
    })
    .then(data => {
        var info = data;
        info.map((arr) => {

        var div4 = document.createElement("div");
        div4.className = "container";
        var books = document.getElementById("sect2");
        books.appendChild(div4);

        var img = document.createElement("img");
        img.className = "book_img";
        img.src = `${arr.imageLink}`;
        div4.appendChild(img);

        var auth_p = document.createElement("p");
        auth_p.className = "auth";
        auth_p.innerHTML = `${arr.author}`;
        div4.appendChild(auth_p);

        var title_p = document.createElement("p");
        title_p.className = "title";
        title_p.innerHTML = `${arr.title}`;
        div4.appendChild(title_p);

        var price_p = document.createElement("p");
        price_p.className = "price";
        price_p.innerHTML = `${arr.price}` + "$";
        div4.appendChild(price_p);

        var btnDiv = document.createElement("div");
        btnDiv.className = "btnDiv";
        btnDiv.id = "btnDiv";
        div4.appendChild(btnDiv);

        var popDiv = document.createElement("dialog");
        popDiv.className = "popDiv";
        popDiv.id = "popDiv";
        div4.appendChild(popDiv);

        const popHead = document.createElement("div");
        popHead.className = "popHead";
        popDiv.appendChild(popHead)

        const popH2 = document.createElement("h2");
        popH2.innerHTML = `${arr.title}`;
        popHead.appendChild(popH2);

        const popClose = document.createElement("button");
        popClose.className = "popClose";
        popClose.innerHTML = "&times;";
        popHead.appendChild(popClose);

        const popP = document.createElement("p");
        popP.innerHTML = `${arr.description}`;
        popDiv.appendChild(popP);

        var btnPop = document.createElement("button");
        btnPop.className = "btnPop";
        btnPop.id = "btnPop";
        btnPop.innerText = "Show more";
        btnDiv.appendChild(btnPop);

        var btnBag = document.createElement("button");
        btnBag.className = "btnBag";
        btnBag.innerHTML = "Add to Bag";
        btnDiv.appendChild(btnBag);

    btnPop.onclick = function() {
        popDiv.showModal();
    }
    popClose.onclick = function() {
        popDiv.close();
    }
  })
});

    const cartBox = document.createElement("div");
    cartBox.className = "cartBox";
    document.body.append(cartBox);

    const cartHead = document.createElement("div");
    cartHead.className = "cartHead";
    cartBox.appendChild(cartHead);

    const cartTotal = document.createElement("div");
    cartTotal.className = "cartTotal"
    cartHead.appendChild(cartTotal)

    const cartH3 = document.createElement("h3");
    cartH3.innerHTML = "Total:";
    cartTotal.appendChild(cartH3);

    const totalP = document.createElement("p");
    totalP.className = "totalP";
    totalP.innerHTML = 0 + "$";
    cartTotal.appendChild(totalP);

    const cartClose = document.createElement("button");
    cartClose.className = "cartClose";
    cartClose.innerHTML = "&times;";
    cartHead.appendChild(cartClose);

    const cartCentdiv = document.createElement("div");
    cartCentdiv.className = "cartCentdiv";
    cartBox.appendChild(cartCentdiv)

    const cartBtndiv = document.createElement("div");
    cartBtndiv.className = "cartBtndiv";
    cartBox.appendChild(cartBtndiv)

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "confirmBtn";
    confirmBtn.innerHTML = "Confirm order";
    confirmBtn.onclick = redirect;
    cartBtndiv.appendChild(confirmBtn);

    const clearBtn = document.createElement("button");
    clearBtn.className = "clearmBtn";
    clearBtn.innerHTML = "Clear all"
    cartBtndiv.appendChild(clearBtn);

    function redirect () {
        window.location.href = "../pages/delivery.html";
    }

const cartShow = document.getElementsByClassName("cartBox");
cartDiv.addEventListener("click", function() {
    cartBox.style.visibility = "visible";
})
cartClose.addEventListener("click", function(){
    cartBox.style.visibility = "hidden";
})

const foot = document.createElement("div");
foot.className = "foot";

const footA = document.createElement("a");
footA.className = "footA";
footA.innerHTML = "Mikheil Gogia";
footA.href = 'https://github.com/MrMishka02';

const icon = document.createElement("i");
icon.className = "fa fa-github";
icon.style.fontSize = "24px";
icon.style.color = "#9B4802";
icon.style.cursor = "pointer";
icon.style.marginLeft = "2px";

foot.appendChild(footA);
footA.appendChild(icon);
document.body.append(foot);