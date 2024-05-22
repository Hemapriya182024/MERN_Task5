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

// Use Object.entries() to get an array of [key, value] pairs
let entries = Object.entries(jsonfor);

// Use forEach to iterate over the entries
entries.forEach(([key, value]) => {
    console.log(value);
});
 

