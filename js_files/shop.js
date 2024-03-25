const product = [
	{
		id: 0,
		image:'shop_images/bay.jpg',
		title:'The Northaman',
		price: 10,
	},
	{
		id: 1,
		image:'shop_images/northman.jpg',
		title:'The Northman',
		price: 10,
	},
	{
		id: 2,
		image:'shop_images/Front.jpg',
		title:'Western Front',
		price: 10,
	},
	{
		id: 3,
		image:'shop_images/samaritan.jpg',
		title:'Samaritan',
		price: 10,
	},
	{
		id: 4,
		image:'shop_images/morbius1.jpg',
		title:'Morbius',
		price: 10,
	},
	{
		id: 5,
		image:'shop_images/TheAdamProject.jpg',
		title:'The Adam Project',
		price: 10,
	},
	{
		id: 6,
		image:'shop_images/DayShift.jpg',
		title:'Day Shift',
		price: 10,
	},
	{
		id: 7,
		image:'shop_images/BulletTrain.jpeg',
		title:'Bullet Train',
		price: 10,
	},
	{
		id: 8,
		image:'shop_images/lostCity.jpg',
		title:'The Lost Ciyt',
		price: 10,
	},
	{
		id: 9,
		image:'shop_images/uncharted2.jpeg',
		title:'Uncharted',
		price: 10,
	},
	{
		id: 10,
		image:'shop_images/luck.png',
		title:'Luck',
		price: 10,
	},
	{
		id: 11,
		image:'shop_images/howToTrainYourDragon.jpg',
		title:'How To Train Your Dragon',
		price: 10,
	},
	{
		id: 12,
		image:'shop_images/dc.jpg',
		title:'Super Pets',
		price: 10,
	},
	{
		id: 13,
		image:'shop_images/light.jpg',
		title:'Lightyear',
		price: 10,
	},
	{
		id: 14,
		image:'shop_images/minions.jpg',
		title:'Minions',
		price: 10,
	},
	{
		id: 15,
		image:'shop_images/mummies.jpg',
		title:'Mummies',
		price: 10,
	},
	{
		id: 16,
		image:'shop_images/panda.jpg',
		title:'Kungfu Panda',
		price: 10,
	},
	{
		id: 17,
		image:'shop_images/pussInBoots.jpg',
		title:'Puss In Boots',
		price: 10,
	},
	{
		id: 18,
		image:'shop_images/tangled.jpg',
		title:'Tangled',
		price: 10,
	},
	{
		id: 19,
		image:'shop_images/transylvania.jpg',
		title:'Hotel Transylvania',
		price: 10,
	},
	{
		id: 20,
		image:'shop_images/annabelle.jpg',
		title:'Annabelle',
		price: 10,
	},
	{
		id: 21,
		image:'shop_images/case.jpg',
		title:'Case 39',
		price: 10,
	},
	{
		id: 22,
		image:'shop_images/chucky.jpg',
		title:'Chucky',
		price: 10,
	},
	{
		id: 23,
		image:'shop_images/conjuring.jpg',
		title:'Conjuring',
		price: 10,
	},
	{
		id: 24,
		image:'shop_images/finalDestination.jpg',
		title:'Final Destination',
		price: 10,
	},
	{
		id: 25,
		image:'shop_images/it.jpg',
		title:'IT',
		price: 10,
	},
	{
		id: 26,
		image:'shop_images/mama.jpg',
		title:'Mama',
		price: 10,
	},
	{
		id: 27,
		image:'shop_images/nun.jpg',
		title:'Nun',
		price: 10,
	},
	{
		id: 28,
		image:'shop_images/oculus.jpg',
		title:'Oculus',
		price: 10,
	},
	{
		id: 29,
		image:'shop_images/unborn.jpg',
		title:'Unborn',
		price: 10,
	},
	{
		id: 30,
		image:'shop_images/bay.jpg',
		title:'Bay Watch',
		price: 10,
	},
	{
		id: 31,
		image:'shop_images/boys.jpg',
		title:'Good Boys',
		price: 10,
	},
	{
		id: 32,
		image:'shop_images/central.jpg',
		title:'Central Intelligence',
		price: 10,
	},
	{
		id: 33,
		image:'shop_images/english.jpg',
		title:'Johny Englis',
		price: 10,
	},
	{
		id: 34,
		image:'shop_images/jumanji.jpg',
		title:'Jumanji',
		price: 10,
	},
	{
		id: 35,
		image:'shop_images/kid.png',
		title:'Diary of a Wimpy Kid',
		price: 10,
	},
	{
		id: 36,
		image:'shop_images/meTime.jpg',
		title:'Me Time',
		price: 10,
	},
	{
		id: 37,
		image:'shop_images/naked.jpg',
		title:'Naked',
		price: 10,
	},
	{
		id: 38,
		image:'shop_images/ted.jpg',
		title:'Ted',
		price: 10,
	},
	{
		id: 39,
		image:'shop_images/vacation.jpg',
		title:'Vacation',
		price: 10,
	},
];
const categories = [...new Set(product.map((item)=>
	{return item}))]
	let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
	var {image,title,price} = item;
	return(
		`<div class='box'>
			<div class='img-box'>
				<img class='images' src=${image}></img>
			</div>
		<div class='bottom'>
		<p>${title}</p>
		<h2>$ ${price}.00</h2>`+
		"<button onclick='addtocart("+(i++)+")'><b>Add to cart</b></button>"+
		`</div>
		</div>`
	)
}).join('')

var cart =[];

function addtocart(a){
	cart.push({...categories[a]});
	displaycart();
}
function delElement(a){
	cart.splice(a, 1);
	displaycart();
}

function displaycart(a){
	let j=0, total=0;
	document.getElementById("count").innerHTML=cart.length;

	var button = document.getElementById("BuyNow");
	button.disabled = true;


	if(cart.length==0){
		document.getElementById('cartItem').innerHTML = "Your cart is empty";
		document.getElementById("total").innerHTML = "$"+0+".00";

		button.disabled = true;
		button.classList.add("disabled");
	
	}
	else{
		document.getElementById('cartItem').innerHTML = cart.map((items)=>
		{
			var {image,title,price} = items;
			total=total+price;
			document.getElementById("total").innerHTML = "$"+total+".00";

			button.disabled = false;
			button.classList.remove("disabled");
			
			return(
				`<div class='cart-item'>
				<div class='row-img'>
					<img class='rowimg' src=${image}>
				</div>
				<p style='font-size:16px; color: black'><b>${title}</b></p>
				<h2 style='font-size: 15px; color: black'>$ ${price}.00</h2>`+
				"<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
			);

		}).join('');

	}
}