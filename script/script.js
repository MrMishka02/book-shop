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

//Books
function appendData(data) {
    const books = document.getElementById("sect2");
    for (var i = 0; i < data.length; i++) {
      var div4 = document.createElement("div");
      div4.className = 'container';
      div4.innerHTML = 'Author: ' + data[i].author + ' ' + data[i].title;
      books.appendChild(div4)
    }
  }