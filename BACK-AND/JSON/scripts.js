// Objeto em padrão JSON também é válido em um arquivo JS, porém um JS não é válido no JSON 
const obj = {
    "string": "Hello world!",
    "boolean": true,
    "array": ["Watch movie", 12, 12.5, true],
    "number": 12,
    "Null": null,
    "object": {
        "object_string": "value1",
        "object_number": 12,
        "object_array": [12, 12.5, "hello world", null]
    }
}

console.log("--------")
console.log(obj);
console.log(typeof obj)
console.log("--------")

//Objeto Javascript em texto padrão JSON
console.log("--------")
const objData = JSON.stringify(obj);
console.log(objData);
console.log(typeof(objData));
console.log("--------")

//Texto padrão JSON em objeto JS
console.log("--------")
const objJS = JSON.parse(objData);
console.log(objJS);
console.log(typeof(objJS));
console.log("--------")

