function FullName(firstname, lastname) {
    let fullname;
    fullname = firstname + " " + lastname;
    return fullname;
}
let fullname = FullName("I am called" + " " + "VICTORY", "EXCEL");
console.log(fullname);

function Height(size, unit) {
    let height;   
     height ="I am" + " " + size + unit + " " + "tall";
    return height;
}
let height = Height(1.52, "cm");
console.log(height);

function Country(name) {
    let country;
    country ="I come from" + " " + name;
    return country;
}
let country = Country("Cameroon");
console.log(country);