var items = [
  {all:"all",genre:"Biography",title:"Bossypants" ,author:"Tina Fey"},
  {all:"all",genre:"Biography",title:"Becoming" ,author:"Michelle Obama"},
  {all:"all",genre:"Biography",title:"Steave Jobs" ,author:"Walter Isaccson"},
  {all:"all",genre:"Fiction",title:"Tweet Cute" ,author:"Emma Lord"},
  {all:"all",genre:"Fiction",title:"Flipped",author:"Wendelin Van Drannen"},
  {all:"all",genre:"Fiction",title:"Turtles All The Way Down" ,author:"John Green"},
  {all:"all",genre:"Poetry",title:"Milk And Honey" ,author:"Rupi Kaur"},
  {all:"all",genre:"Poetry",title:"Deeper Than The Ocean",author:"Emma Rose"},
  {all:"all",genre:"Poetry",title:"Pillow Thoughts" ,author:"Courtney Peppernell"},
];


const $ = function (anna) { return document.getElementById(anna); };

const titlesort = function () {
  console.log('titlesort');
  items.sort((a, b) => {
    if(a.title > b.title){
      return 1
    } else {
      return -1
    }
  });
  show(target);
}

const authorsort = function () {
  console.log('authorsort');
  items.sort((a, b) => {
    if(a.author > b.author){
      return 1
    } else {
      return -1
    }
  });
  show(target);
}

const show = function (id) {
  $('display').innerHTML = '';
  for (let book of items) {
    if (id != 'All')
      if (id != book.genre)
        continue;
    let r = document.createElement('tr');
    let d = document.createElement('td');
    let t = document.createTextNode(`${book.author}, `);
    d.appendChild(t);
    r.appendChild(d);
    d = document.createElement('td');
    let i = document.createElement('i');
    t = document.createTextNode(`${book.title}`);
    i.appendChild(t);
    d.appendChild(i);
    r.appendChild(d);
    $("display").appendChild(r);
  }
}

const all = function (e) {
  target = e.target.id;
  show(target);
};

function allbtn() {
  $("All").addEventListener("click", all);
  $("Fiction").addEventListener("click", all);
  $("Biography").addEventListener("click", all);
  $("Poetry").addEventListener("click", all);
  $("auth").addEventListener("click", authorsort);
  $("title").addEventListener("click", titlesort);

}

var target = 'All';
show(target);
allbtn();
