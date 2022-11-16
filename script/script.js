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
    var books = document.getElementById("sect2");
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
        btnPop.innerText = "Show more";
        btnDiv.appendChild(btnPop);

        var btnBag = document.createElement("button");
        btnBag.className = "btnBag";
        btnBag.innerHTML = "Add to Bag";
        btnDiv.appendChild(btnBag);

        var descrDiv = document.createElement("div");
        descrDiv.id = 'descrDiv';
        descrDiv.className = "descrDiv";

        var descrSpan = document.createElement("span");
        descrSpan.id = "descrSpan";
        descrSpan.innerHTML = data[i].description;

        var closeBtn = document.createElement("button");
        closeBtn.innerHTML = "close";
        closeBtn.id = 'closeBtn';
        closeBtn.onclick = closeFunction;
        descrDiv.appendChild(descrSpan);
        descrSpan.after(closeBtn);

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
      let btn = document.querySelectorAll('.btnPop');
      let divs = document.querySelectorAll('.descrDiv');
      for (var i = 0; i < btn.length; i++) {
        btn[0].addEventListener("click", function(){
        divs[0].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[1].addEventListener("click", function(){
        divs[1].style.display = "flex";
        divs[0].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[2].addEventListener("click", function(){
        divs[2].style.display = "flex";
        divs[1].style.display = "none";
        divs[0].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[3].addEventListener("click", function(){
        divs[3].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[0].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[4].addEventListener("click", function(){
        divs[4].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[0].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[5].addEventListener("click", function(){
        divs[5].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[0].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[6].addEventListener("click", function(){
        divs[6].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[0].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[7].addEventListener("click", function(){
        divs[7].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[0].style.display = "none";
        divs[8].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[8].addEventListener("click", function(){
        divs[8].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[0].style.display = "none";
        divs[9].style.display = "none";
        })
        btn[9].addEventListener("click", function(){
        divs[9].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
        divs[3].style.display = "none";
        divs[4].style.display = "none";
        divs[5].style.display = "none";
        divs[6].style.display = "none";
        divs[7].style.display = "none";
        divs[8].style.display = "none";
        divs[0].style.display = "none";
        })
      }
    function closeFunction() {
      let btn = document.querySelectorAll('#closeBtn');
      let divs = document.querySelectorAll('.descrDiv');
      for (var i = 0; i < btn.length; i++) {
        btn[i] = divs[i].style.display = "none";
        console.log(btn[i]);
      }
    }
  }