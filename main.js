const table = [
    {
        Name:'230 Fifth',
        Location: 'NY',
        Price:'$$$',
        Description:'Rooftop Bar',
    }, 
    {
        Name: "A10 Kitchen",
        Location: 'NY',
        Price: "$$",
        Description: "Cocktail Bar, Restaurant, Happy Hour, Brunch",
      },
      {
        Name: "Aarzu Modern Indian Bistro",
        Location: 'NJ',
        Price: "$$",
        Description: "Indian Restaurant",
      },
      {
        Name: "Amor Loco",
        Location: 'NY',
        Price: "$$",
        Description: "Mexican Restaurant, Bottomless",
      },
      {
        Name: "Antique Bar & Bakery",
        Location: 'NJ',
        Price: "$$$",
        Description: "Bar & Grill, Steakhouse",
      },
      {
        Name: "Antoya Korean BBQ",
        Location: 'NY',
        Price: "$$$",
        Description: "Korean Restaurant/BBQ",
      },
      {
        Name: "Anytime Kitchen",
        Location: 'NY',
        Price: "$$",
        Description: "Korean Restaurant",
      },
      {
        Name: "Aubi & Ramsa",
        Location: 'NY',
        Price: "$$$",
        Description: "Alcohol Ice Cream",
      },
      {
        Name: "Baar Baar",
        Location: 'NY',
        Price: "$$$",
        Description: "Indian Restaurant",
      },
      {
        Name: "Baby Brasa",
        Location: 'NY',
        Price: "$$$",
        Description: "Latin American/Peruvian Restaurant",
      },
      {
        Name: "Bocca Di Bacco",
        Location: 'NY',
        Price: "$$",
        Description: "Indian Restaurant, Bar",
      },
      {
        Name: "Boka",
        Location: 'NY',
        Price: "$$",
        Description: "Korean Restaurant",
      },
      {
        Name: "Boobie Trap",
        Location: 'NY',
        Price: "$$",
        Description: "Bar",
      },
      {
        Name: "Brownstone Pancake Factory",
        Location: 'NJ',
        Price: "$$",
        Description: "Restaurant, Brunch",
      },
      {
        Name: "Calabrije's Margaritas and Tacos",
        Location: 'NY',
        Price: "$$",
        Description: "Mexican Restaurant, Tacos, Cocktail Bar",
      },   
      {
        Name: "Cavanaugh's River Deck",
        Location: 'PA',
        Price: "$$",
        Description: "Dance Club, Bar",
      },   
      {
        Name: "Charrito's",
        Location: 'NJ',
        Price: "$$",
        Description: "Mexican Restaurant",
      },   
      {
        Name: "Cheese Grille",
        Location: 'NY',
        Price: "$$",
        Description: "Grilled cheese, Tomato soup, Mac and Cheese",
      },   
      {
        Name: "Chengdu 1 Palace",
        Location: 'NJ',
        Price: "$$",
        Description: "Sichuan restaurant, Dim Sum, Szechuan",
      },   
      {
        Name: "Cloud Social Rooftop Bar",
        Location: 'NY',
        Price: "$$",
        Description: "Rooftop Bar",
      },   
      {
        Name: "Cuzin's Seafood Clam Bar",
        Location: 'NJ',
        Price: "$$$",
        Description: "Seafood Restaurant, Steakhouse",
      },   
      {
        Name: "Dhamaka",
        Location: 'NY',
        Price: "$$$",
        Description: "Indian Restaurant",
      },   
      {
        Name: "El Vez",
        Location: 'PA',
        Price: "$$",
        Description: "Mexican Restaurant",
      },   
      {
        Name: "Electric Lemon",
        Location: 'NY',
        Price: "$$$",
        Description: "Restaurant, Pretty",
      },   
      {
        Name: "Fats Duvall's Rhum Cafe",
        Location: 'NY',
        Price: "$$$",
        Description: "Carribbean Restaurant, Cocktail Bar",
      },   
      {
        Name: "Five Senses",
        Location: 'NY',
        Price: "$$",
        Description: "Korean Restaurant",
      },   
      {
        Name: "Fuku",
        Location: 'NY',
        Price: "$$",
        Description: "Chicken Shop/Restaurant",
      },   
      {
        Name: "Gardenia Terrace",
        Location: 'NY',
        Price: "$$$",
        Description: "Hookah Bar, Mediterranean Restaurant",
      },   
      {
        Name: "Gazab",
        Location: 'NY',
        Price: "$",
        Description: "Indian Restaurant",
      },   
      {
        Name: "GITANO Garden of Love",
        Location: 'NY',
        Price: "$$$",
        Description: "Mexican Restaurant, Cocktail Bar",
      },   
      {
        Name: "Graffiti Bar",
        Location: 'PA',
        Price: "$$",
        Description: "Bar, Lounge",
      },   
      {
        Name: "GupShup",
        Location: 'NY',
        Price: "$$$",
        Description: "Indian Restaurant",
      },   
      {
        Name: "Gyu-Kaku Japanese BBQ",
        Location: 'NY',
        Price: "$$",
        Description: "Japanese BBQ",
      },   
      {
        Name: "Harry's",
        Location: 'NY',
        Price: "$$$",
        Description: "Steakhouse, Bottomless, Cafe, Bar",
      },   
      {
        Name: "Hunan Taste Chinese Restaurant",
        Location: 'NJ',
        Price: "$$",
        Description: "Chinese Restaurant",
      },   
      {
        Name: "IMM THAI",
        Location: 'NJ',
        Price: "$$",
        Description: "Thai Restaurant",
      },   
      {
        Name: "Jimmy SoHo",
        Location: 'NY',
        Price: "$$$",
        Description: "Rooftop Bar, Lounge",
      },   
      {
        Name: "Kinya Ramen Sushi Bar",
        Location: 'NJ',
        Price: "$$",
        Description: "Japanese Restaurant, Sushi Bar, Ramen",
      }
]

















const tableHeader = Object.keys(table[0]);
const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);


function loadTable(){
    let temp = `<table> <tr>`;
    tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
    temp+=`<tr>`
    table.forEach(row => {
        temp +=`
        <tr>
          <td>${row.Name}</td>
          <td>${row.Location}</td>
          <td>${row.Price}</td>
          <td>${row.Description}</td>
        </tr>
        `
    });

    temp+=`</table>`
    output.innerHTML = temp;
}


function filter(e){
let results;
let temp ="";

results = table.filter( item=> 
    item.Name.toLowerCase().includes(e.target.value.toLowerCase()) || 
    item.Location.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.Price.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.Description.toLowerCase().includes(e.target.value.toLowerCase())
    );
   console.log(results)
    if(results.length>0){
        temp = `<table> <tr>`;
        tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
        temp+=`<tr>`
        results.forEach(row => {
            temp +=`
            <tr>
              <td>${row.Name}</td>
              <td>${row.Location}</td>
              <td>${row.Price}</td>
              <td>${row.Description}</td>
            </tr>
            `
        });
        temp+=`</table>`  
    }else{
        temp =`<div class="no-item">Item Not Found </div>`
    }

    output.innerHTML=temp;
}



