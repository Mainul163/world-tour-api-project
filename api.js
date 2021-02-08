fetch('https://restcountries.eu/rest/v2/all')
.then(response=>response.json())
.then(data=>displayCountry(data));


const displayCountry= country =>{

    const countriesDiv=document.getElementById("countries");
    for(let i=0;i<country.length;i++){
        const countrys=country[i];
       
        const countryDiv =document.createElement("div");
        countryDiv.className="country"
        // const h3=document.createElement("h3");
        // const p=document.createElement("p");

        // h3.innerText=countrys.name;
        // p.innerText=countrys.capital;

        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);
        const countryinfo=`
        <h3 class="country-name"> ${ countrys.name}</h3>
        <p> ${countrys.capital}</p>
        <button onclick="addcountry('${countrys.name}')">   click here </button>
        `
         countryDiv.innerHTML=countryinfo;
        countriesDiv.appendChild(countryDiv);

       
    }
}

const addcountry = name =>{
  const url=`https://restcountries.eu/rest/v2/name/${name}`
fetch(url)
.then(res=>res.json())
.then(data=>renderCountryInfo(data[0]))
}
const renderCountryInfo= country=>{

   const countryDiv= document.getElementById("detail");

   countryDiv.innerHTML=`
   <h3> name:${country.name}</h3>
   <p>population:${country.population}</p>
   <img src="${country.flag}">
   
   `
}