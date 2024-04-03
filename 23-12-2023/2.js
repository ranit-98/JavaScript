//["nill datta","rupam Datta"] return as a array of object

const names = ["nill Datta", "rupam Datta"];
const objects = [];

for (let i = 0; i < names.length; i++) {
    const nameParts = names[i].split(' ');
    const obj = {
        firstName: nameParts[0],
        lastName: nameParts[1]
    };
    objects.push(obj);
}

console.log(objects);

