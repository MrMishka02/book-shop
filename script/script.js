fetch('../books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
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

//second section
const div2 = document.createElement('div');
document.body.append(div2);
div2.className = 'sect2';
const myH1 = document.createElement('h1')
div2.appendChild(myH1);
myH1.innerText = "Books Catalog";
myH1.className = 'myh1'
const div3 = document.createElement('div');
div2.appendChild(div3);
div3.className = 'container';