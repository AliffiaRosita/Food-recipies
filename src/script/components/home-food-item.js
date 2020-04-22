class HomeFoodItem extends HTMLElement{
    set food(food){
        this._food = food;
        this.render();
    }
    render(){
        this.innerHTML=`
                <img src="${this._food.strMealThumb}" class="img-thumbnail" alt="">
        `
    }
}
customElements.define("home-food-item",HomeFoodItem);