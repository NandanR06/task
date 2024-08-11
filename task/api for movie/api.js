
// const options = {
//   method: 'GET',
//   url: 'https://moviedatabase8.p.rapidapi.com/Search/Incep',
//   headers: {
//     'x-rapidapi-key': '9661f6a3c0msh9728e8adc3db4b3p1faaabjsn4a8e83e44ba1',
//     'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// ar val = async () => {
//     var k = await fetch(url);
//     console.log(k);
//     var v = await k.json();
//     console.log(v[0].text)
//     document.querySelector("#fact").innerHTML = v[4].text;

// } 


// const  api= async()=>{
//     const v=await fetch("https://moviedatabase8.p.rapidapi.com/Search/Incep");
//     console.log(v);
//     const s =  await v.json();
//     console.log(s);
// }
// axios.get('https://moviedatabase8.p.rapidapi.com/Search/Incep').then((res)=>{
//     console.log(res);

// }).catch((err)=>{
// console.log(err)
// })
// const url = 'https://seeking-alpha.p.rapidapi.com/symbols/get-metrics?symbols=ipoof%2Ctga%2Cesea%2Cbgfv%2Cgrin%2Cbbw&fields=quant_rating%2Cauthors_rating_pro%2Csell_side_rating%2Cmarketcap%2Cdividend_yield%2Cvalue_category%2Cgrowth_category%2Cprofitability_category%2Cmomentum_category%2Ceps_revisions_category';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '9661f6a3c0msh9728e8adc3db4b3p1faaabjsn4a8e83e44ba1',
// 		'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com'
// 	}
// };
// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '9661f6a3c0msh9728e8adc3db4b3p1faaabjsn4a8e83e44ba1',
// 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// try {
// 	const respon =  fetch(url);
	
// 	console.log(respon);
// } catch (error) {
// 	console.error(error);
// }

var ur = "https://cat-fact.herokuapp.com/facts";




// import axios from 'axios';
// const url ='https://linkedin-api8.p.rapidapi.com/get-profile-posts-comments?urn=7169084130104737792&sort=mostRelevant';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9661f6a3c0msh9728e8adc3db4b3p1faaabjsn4a8e83e44ba1',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

document.querySelector("#img")
const api=async ()=>{
    const value= await fetch( "https://jsonfakery.com/movies/random/3");
    console.log(value);
    const val = await value.json();
    console.log(val);
     var imk=val[0].poster_path;
     document.querySelector("#image").style.height="500px";
     document.querySelector("#image").style.width="500px"
    // document.querySelector(".pic").style.backgroundImage-url(imk);
     var v=document.querySelector("#image");
     v.src=imk;
      var name=val[0].original_title;
    document.querySelector(".pic").innerHTML=name;
}


// api();
// val=()=>{
//     axios.get(url).fetch((res)=>{
//         console.log(res)
//     })
// }
// val();