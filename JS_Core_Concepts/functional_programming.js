/** Functions are first class in JS, Functions behave like Objects, You can pass them as arguements
 */

function mapEachElements(arr, fn) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    arr2.push(fn(arr[i]));
  }
  return arr2;
}

var arr1 = [1, 2, 3, 5, 6];
// mapEachElements(arr1, function(el) {
//   return el * 2;
// });

// var function1 = function(el,times) {
//     return el * times;
// };

var function2 = function(times) {
  return function(el, times) {
    return el * times;
  }.bind(this, 6);
};

mapEachElements(arr1, function2(5));
