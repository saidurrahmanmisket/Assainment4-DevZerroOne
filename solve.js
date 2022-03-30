//Problem - 1 (budget calculator)

function allBill(computer, watch, coffee) {
    
    if (
        typeof computer == "number" &&
        typeof watch == "number" &&
        typeof coffee == "number" 
     ) {
        var sum = computer * 1000 + watch * 260 + coffee * 50;
        
    
        console.log("Your Total bill is : " + sum);
        


    }
    else {
        
        console.log("Make sure you didn't any mistack")

    }
};


allBill(1, 1, 1);
// allBill(1, "string", 1);                  //it will give error for string



// problem 1 end





// problem 2 start

function productName(uperCase) {



    var products = [{
            id: 1,
            title: "laptop",
            price: 567,
            description: "Laptop  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 2,
            title: "mobile",
            price: 367,
            description: "Mobile  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 3,
            title: "watch",
            price: 180,
            description: "Watch  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 4,
            title: "coffee",
            price: 40,
            description: "Coffee  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        }]




    if (uperCase.toLowerCase() == "laptop")
    {
        console.log(products[0]);
    }
    else if (uperCase.toLowerCase() == "mobile")
    {
        console.log(products[1]);
    }
    else if (uperCase.toLowerCase() == "watch")
    {
        console.log(products[2]);
    }
    else if (uperCase.toLowerCase() == "coffee")
    {
        console.log(products[3]);
    }
    else {
       console.log("Product Not Found")
    }
}
productName("Laptop");
// productName("Mobile");
// productName("CoffeE");
// productName("tea");



// Problem 2 end



// problem 3 start

function myPsc(year){
    if(year % 4 != 0){
        console.log("It Was Nonleap year, So Your Net Income is: " + 365*10 );
    }
    else{
        console.log(" It Was leap year, So Your Net Income is: " + 366*10);
    }
};
// myPsc(2006); //non  leep year date 
myPsc(2008);//leep year date


// prblem 3 end 
