import "../components/food-item.js"
// import $ from "jquery/dist/jquery.min.js";
 class FoodList extends HTMLElement{
     set foodss(foods){
         this._foods = foods;
         this.render();
     }

     render(){
         this.innerHTML = "";
         this._foods.forEach(food => {
          const foodElement = document.createElement("food-item");
          foodElement.food = food;
         
          this.appendChild(foodElement);
         });
     }
 }
 customElements.define("food-list", FoodList);