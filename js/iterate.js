let json = {
    "MybasicsInfo": {
        "name": "HEMAPRIYA K",
        "email": "hemakarthikeyan2024@gmail.com.com",
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
    "iterate":{
    
        "iterate1": "for",
        "iterate2": "forin",
        "iterate3": "forof",
        "iterate4": "foreach"
    }
    



};
debugger

for(let key in json) {
    let value;
    value=json[key];
    console.log(value);
}
