var addDishToCourse = function () {

}

var menu = {
    courses: {
        appetizers: ['Cream cheese wontons', 'Sweet and sour tofu', 'Steamed rice', 'Gnocchi soup', 'Breadsticks'],
        mains: ['Yellow curry', 'Pad thai', 'Garlic ramen', 'Chicken alfredo', 'Fried Zitti'],
        desserts: ['Mochi icecream', 'Fruity pebbles cereal', 'Cheesecake', 'Brownies', 'Chocolate lava cake'],
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        var dish = {
            name: dishName,
            price: dishPrice,
        }
        if (this.courses[courseName]) {
            this.courses[courseName].push(dish); 
        } else {
            console.log('Inavlid');
            
        }
    },
    getRandomDishFromCourse: function (courseName) {
        var dishes = this.courses[courseName];
        if (dishes.length === 0) {
            return 'None';
        }
        var randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex];
    },
    generateRandomMeal: function () {
        var appetizer = this.getRandomDishFromCourse('appetizers');
        var main = this.getRandomDishFromCourse('mains');
        var dessert = this.getRandomDishFromCourse('desserts');

        return {
            appetizer,
            main,
            dessert
        };
    }
}

var meal = menu.generateRandomMeal();
console.log(meal);
