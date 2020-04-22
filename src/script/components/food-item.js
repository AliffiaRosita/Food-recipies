class FoodItem extends HTMLElement{
    set food(food){
        this._food = food;
        this.render();
    }
    render(){
        this.innerHTML=`
        <div class="card mt-3 border-danger rounded-0">
        <div class="card-body">
        <div class="row">
          <div class="col-lg-4">
            <img src="${this._food.strMealThumb}" alt=""style="height:200px">
          </div>
          <div class="col-lg-8">
            <h5>${this._food.strMeal}</h5>
            <p>Cara memasak :
              ${this._food.strInstructions}
            </p>
            <a href="" class="btn btn-outline-danger rounded-0"> See Details</a>
          </div>
        </div>
      </div>
      </div>
        `
    }
}
customElements.define("food-item",FoodItem);