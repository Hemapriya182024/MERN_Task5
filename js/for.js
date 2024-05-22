
var jsonfor = {
    "MybasicsInfo": {
        "name": "HEMAPRIYA K",
        "email": "hemakarthikeyan2024@gmail.com",
        "phone": 6381212274,
        "degree": "M.sc",
        "location": {
            "address": "3/1 venkateshwara nagar,vikravandi",
            "postalCode": 605652,
            "city": "villupuram",
            "state": "Tamilnadu",
            "country": "India"
        }
    },
    "iterate": {
        "iterate1": "for",
        "iterate2": "forin",
        "iterate3": "forof",
        "iterate4": "foreach"
    }
};

// Get the keys of the jsonfor object
let keys = Object.keys(jsonfor);

// Use a for loop to iterate over the keys
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = jsonfor[key];
    console.log(value);
}

