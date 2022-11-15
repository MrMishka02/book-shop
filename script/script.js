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
      div4.className = 'container';
      var img = document.createElement("img");
      img.className = "book_img";
      var auth_p = document.createElement("p");
      auth_p.className = "auth";
      var title_p = document.createElement("p");
      title_p.className = "title";
      var price_p = document.createElement("p");
      price_p.className = "price";
      var btnDiv = document.createElement("div");
      btnDiv.className = "btnDiv";
      var btnPop = document.createElement("button");
      btnPop.className = "btnPop";
      btnPop.innerHTML = "Show more";
      var btnBag = document.createElement("button");
      btnBag.className = "btnBag";
      btnBag.innerHTML = "Add to Bag";
      btnDiv.appendChild(btnPop);
      btnDiv.appendChild(btnBag);
      img.src = data[i].imageLink;
      auth_p.innerHTML = data[i].author;
      title_p.innerHTML = data[i].title;
      price_p.innerHTML = data[i].price + "$";
      div4.appendChild(img);
      div4.appendChild(auth_p);
      div4.appendChild(title_p);
      div4.appendChild(price_p);
      div4.appendChild(btnDiv);
      books.appendChild(div4);
    }
  }
function popup() {
    let pop_p = document.createElement("p");
    pop_p.className = "popuptext";
    pop_p.id = "myPopup";
    pop_p.innerHTML = data[i].description;
    
}