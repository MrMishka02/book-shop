fetch('../books.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

//fisrt section
const div1 = document.createElement('div');
document.body.append(div1);
div1.className = "sect1";
const span1 = document.createElement('span');
const span2 = document.createElement('span');
div1.appendChild(span1);
div1.appendChild(span2);
span1.className = 'spans';
span2.className = 'spans';
span1.innerText = "welcome";
span2.innerText = "discover the best books with us";

//Collection
const div2 = document.createElement('div');
document.body.append(div2);
div2.className = "div2"
const myH1 = document.createElement('h1');
myH1.className = "myh1";
myH1.innerHTML = "Books Catalog";
div2.appendChild(myH1);

//Second section
const div3 = document.createElement('div');
document.body.append(div3);
div3.id = 'sect2';

//Books Catalog
function appendData(data) {
    const books = document.getElementById("sect2");
    for (var i = 0; i < data.length; i++) {
        var div4 = document.createElement("div");
        var img = document.createElement("img");
        var auth_p = document.createElement("p");
        var title_p = document.createElement("p");
        var price_p = document.createElement("p");

        div4.className = "container";
        img.className = "book_img";
        auth_p.className = "auth";
        title_p.className = "title";
        price_p.className = "price";

        var btnDiv = document.createElement("div");
        btnDiv.className = "btnDiv";
        var btnPop = document.createElement("button");
        btnPop.className = "btnPop";
        btnPop.id = "btnInfo";
        btnPop.onclick = popFunction;
        btnPop.innerHTML = "Show more";
        var btnBag = document.createElement("button");
        btnBag.className = "btnBag";
        btnBag.innerHTML = "Add to Bag";
        btnDiv.appendChild(btnPop);
        btnDiv.appendChild(btnBag);

        var descrDiv = document.createElement("div");
        var descrSpan = document.createElement("span");
        var descrBtn = document.createElement("button");

        descrDiv.id = "descrDiv";
        descrSpan.id = "descrSpan";
        descrBtn.id = "descrBtn";
        descrBtn.onclick = closeFunction;
        descrSpan.innerHTML = data[i].description;
        descrBtn.innerHTML = "close";
        descrDiv.appendChild(descrSpan);
        descrSpan.after(descrBtn);

        img.src = data[i].imageLink;
        auth_p.innerHTML = data[i].author;
        title_p.innerHTML = data[i].title;
        price_p.innerHTML = data[i].price + "$";
        div4.appendChild(img);
        img.after(auth_p);
        auth_p.after(title_p);
        title_p.after(price_p);
        price_p.after(btnDiv);
        btnDiv.after(descrDiv);
        books.appendChild(div4);
    }
  }

  function popFunction() {
    document.getElementById("descrDiv").style.display = "flex";
  }
  function closeFunction() {
    document.getElementById("descrDiv").style.display = "none";
  }