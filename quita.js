var items = [
  {name: 'じゃがいも', price: 50, count: 3 },
  {name: 'にんじん', price: 60, count: 1 },
  {name: '豚肉', price: 200, count: 1 },
  {name: '玉ねぎ', price: 50, count: 2 }
];

function higherPrice (targetPrice) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].price * items[i].count > targetPrice){
      console.log(items[i].name);
      
    }
  }



  // name=price * count >= higherPrice;
  // console.log(name);
  
}

higherPrice(120);