const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

//arrow function
console.log(materials.map(material => material.length));

console.log(
  materials.map(function(mat) {
    return mat.length;
  })
);
// expected output: Array [8, 6, 7, 9]
