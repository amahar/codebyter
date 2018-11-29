var val = document.getElementById('check');
var notVal = document.getElementById('notCheck');
//following example for iframe, in which we were trying to capture parent object and vice versa
var parentObj = window.parent.document.getElementById('myParentObject');
parentObj.style.color = 'blue';

console.log(val);
console.log(notVal);
console.log(parentObj);