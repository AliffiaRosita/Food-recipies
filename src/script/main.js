import $ from "jquery/dist/jquery.min.js";
import '../script/components/navbar.js';
import '../script/components/home-food-list';
import item from '../script/item.js';
import '../script/components/food-list';

const main = ()=>{
   
  const homeFoodListElement = document.querySelector("home-food-list");
  const resultCount = document.querySelector("#resultCount");
  const foodList = document.querySelector(".food-list");

  const searchFood = async(key)=>{
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`);
            const responseJson = await response.json();
            
            if(responseJson.meals == null){
                showNotFound(key)
            }else{
                resultCount.innerHTML = `${responseJson.meals.length} Found `;
                showFoodList(responseJson.meals);
            }
        }catch(error){
            alert(error);
        }
  };

  const showFoodList= (meals) =>{
      foodList.innerHTML="";
        meals.forEach(meal => {
            foodList.innerHTML +=
          `<div class="card mt-3 border-danger rounded-0">
          <div class="card-body">
          <div class="row">
            <div class="col-lg-4">
              <img src="${meal.strMealThumb}" alt=""style="height:300px">
            </div>
            <div class="col-lg-8">
              <h5>${meal.strMeal}</h5>
              <p>How To cook : <br>
                ${meal.strInstructions}
              </p>
              <button data-toggle="modal" data-target="#${meal.idMeal}" class="btn btn-outline-danger rounded-0"> See Details</a>
            
              </div>
          </div>
        </div>
        </div>

        <div class="modal fade" id="${meal.idMeal}" tabindex="-1" role="dialog" aria-labelledby="${meal.idMeal}" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="${meal.idMeal}">${meal.strMeal}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
          `;
      });
  }
  const showNotFound = (key)=>{
    foodList.innerHTML = ` <h3 class="text-center text-danger"> "${key}" not found</h3>`;
  }
  
  $("#searchFood").click(function(){
      const key =  $("#inputFood").val();
      searchFood(key);
    });

      homeFoodListElement.foods= item;
  

  
        
}

export default main;