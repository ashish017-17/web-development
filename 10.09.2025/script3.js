const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red"
};

// 2) Update the color property.
car.color = "Blue";

// 3) Delete the year property.
delete car.year;

// 4) Print all properties using for...in.
for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}