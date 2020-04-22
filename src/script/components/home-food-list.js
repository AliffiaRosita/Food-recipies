import "../components/home-food-item.js"
// import $ from "jquery/dist/jquery.min.js";
 class HomeFoodList extends HTMLElement{
     set foods(foods){
         this._foods = foods;
         this.render();
     }

     render(){
         this.innerHTML = "";
         this._foods.forEach(food => {
          const foodElement = document.createElement("home-food-item");
          foodElement.classList.add("col-lg-4","col-6","mt-lg-3","mt-3");
          foodElement.food = food;
         
          this.appendChild(foodElement);
         });
     }
 }
 customElements.define("home-food-list", HomeFoodList);