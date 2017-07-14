let wrapper = document.querySelector('.wrapper')
let main = document.querySelector('main')

let title = document.createElement('h1');
let titleText = document.createTextNode('Internal Company Directory');
title.appendChild(titleText);

wrapper.appendChild(title);

let profile = document.createElement('ul');
let data = customers.results;

  for (let i = 0; i < data.length; i++) {
    let info = document.createElement('li');

    let details = `
        <img src=${data[i].picture.large}>
        <h4><span>${data[i].name.first} ${data[i].name.last}</span><h4>
        <p class ="info email">${data[i].email}</p>
        <p class ="info">${data[i].location.street}</p>
        <p class ="info">${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}</p>
        <p class ="info">${data[i].phone}</p>
        <p class ="info" id ="ssn">${data[i].id.value}</p>
    `;
    console.log(details);
    info.innerHTML = details;
    profile.appendChild(info);

    main.appendChild(profile);
    wrapper.appendChild(main);
  }
