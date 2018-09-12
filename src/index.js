/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var n = 0;
  for (var i=0; i<preferences.length; i++){
    var j = preferences[i]-1;
    var k = preferences[j]-1;
    if(preferences[i]===j+1 && preferences[j]===k+1 && preferences[k]===i+1 &&
      preferences[i]!==preferences[j] && preferences[i]!==preferences[k]){
      n++;
    }
  }
  return n/3;

};
