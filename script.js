


document.getElementById('button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`)
        .then(res => res.json())
        .then(data => getFoodName(data))
})

const getFoodName = foodObj => {
    for (let i = 0; i < foodObj.meals.length; i++) {
        const foodName = foodObj.meals[i].strMeal;
        const foodDisplay = document.getElementById('food-display');
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = foodName;
        div.appendChild(h3);
        foodDisplay.appendChild(div);
        console.log(foodName);
    }
}

// function getFoodName(foodObj) {
    // for (let i = 0; i < foodObj.meals.length; i++) {
    //     const foodName = foodObj.meals[i].strMeal;
    //     const foodDisplay = document.getElementById('food-display');
    //     const div = document.createElement('div');
    //     const h3 = document.createElement('h3');
    //     h3.innerText = foodName;
    //     div.appendChild(h3);
    //     foodDisplay.appendChild(div);
    //     console.log(foodName);
    // }
//  }




