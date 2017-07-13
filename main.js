let wrapper = document.querySelector('.wrapper')

let title = document.createElement('h1');
let titleText = document.createTextNode('Internal Company Directory');
title.appendChild(titleText);

wrapper.appendChild(title);




let profile = document.createElement('ul');
let data = customers.results;

  for (let i = 0; i < data.length; i++) {
    let info = document.createElement('li');

    let details = `
        <img src="" alt=""><br>
        <h5>${data[i].name.first} ${data[i].name.last}</h5>
        <p>${data[i].email}</p>
        <p>${data[i].location.street}</p>
        <p>${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}</p>
        <p>${data[i].phone}</p>
        <p id="ssn">${data[i].id.value}</p>
    `;
    console.log(details);
    info.innerHTML = details;
    profile.appendChild(info);
    let wrapper = document.querySelector('main');

    wrapper.appendChild(profile);
  }
