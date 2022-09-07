//edit search-input-form when media is moblie
const searchFrom = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click', function(){
    searchFrom.classList.toggle('active');
})

    

// edit scroll bar
window.onscroll  = () =>{
    searchFrom.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
    }else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}
// edit scroll bar
window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
    }else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}

// //edit login page
// let loginForm = document.querySelector('.login-form-container');
// //login
// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
// }

// //close-button
// document.querySelector('#close-login-btn').onclick = () =>{
//     loginForm.classList.remove('active');
// }
var swiper = new Swiper(".books-slider", {
    loop:true,
        centeredSlides: true,
        autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });
  // review form customer
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
     
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

/**-------------------------------inputItem to cart ------------------------------------ */
const btnCart = document.querySelectorAll('button');
// console.log(btnCart);
btnCart.forEach(function(button, index){
  // console.log(button, index);
  button.addEventListener('click', function(e){
    let btnCartItem = e.target;
    let btnCartItemPar = btnCartItem.parentElement.parentElement;
    let btnCartItem_Img = btnCartItemPar.querySelector("img").src;
    let btnCartItem_Name = btnCartItemPar.querySelector(".featureds-info a").innerText;
    let btnCartItem_Price = btnCartItemPar.querySelector(".featureds-info div").innerText.slice(0,7);

    addCart(btnCartItem_Img,btnCartItem_Name,btnCartItem_Price);
  })
})
function addCart(btnCartItem_Img,btnCartItem_Name,btnCartItem_Price){
  let addItem = document.createElement("tr");
  //check if the same item input ti cart??
  //not yet done

  let addTrItem = `<tr>
        <td style="display:flex; align-items: center;"><img style="width:30%;" src="${btnCartItem_Img}" alt=""><span class="product-name">${btnCartItem_Name}</span></td>
        <td class="product-price"><p><span class ="product-price">${btnCartItem_Price}</span><sup>đ</sup></p></td>
        <td><input style="width: 25%; outline:none;" type="number" value="1" min="0"></td>
        <td style="cursor:pointer;"><span class ="product-delete"><i class="fas fa-trash"></i></span></td>
      </tr>`;
  addItem.innerHTML = addTrItem;
  let creatTbody = document.querySelector('tbody');
  // console.log(creatTbody);
  creatTbody.append(addItem);

  totalCart();
  deleteCard();

}
 /**-----------------------------total in cart----------------------------------- */
function totalCart(){
  let secletTrTag = document.querySelectorAll('tbody tr');
  let total = 0;
  let len = secletTrTag.length;

  for(let i = 0; i < len; i++ ){
    let inputValue = secletTrTag[i].querySelector('input').value;
    let productPrice = secletTrTag[i].querySelector('.product-price').innerText.slice(0,7);
    totalItem = inputValue * productPrice*1000
    total += totalItem;
  }

  let cartTotal = document.querySelector('.price-total span');
  // console.log(cartTotal);
  cartTotal.innerHTML = total.toLocaleString('de-DE');
  updateQty();
}
/**-------------------------------delete in Cart------------------------------ */
function deleteCard(){
  let secletTrTag = document.querySelectorAll('tbody tr');
  let len = secletTrTag.length;
  for(let i = 0; i < len; i++ ){
    let deleteItem = document.querySelectorAll('.product-delete');
    // console.log(deleteItem);
    deleteItem[i].addEventListener('click', function(e){
      let cartDelete = e.target;
      let deleitem = cartDelete.parentElement.parentElement.parentElement;
      deleitem.remove();
      totalCart();
      // console.log(deleitem);
    })

  }

}

/**-------------------------------update qty in cart------------------------ */
function updateQty(){
  let secletTrTag = document.querySelectorAll('tbody tr');
  let len = secletTrTag.length;
  for(let i = 0; i < len; i++ ){
    let updateQtys = secletTrTag[i].querySelector('input');
    updateQtys.addEventListener('change',function(){
      totalCart();
    })  
}
}

