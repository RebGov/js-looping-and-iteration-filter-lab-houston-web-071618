// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName){
  return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partName) {
  let partNameLength = partName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0,partNameLength) === partName;
  });
}
 function matchName(drivers, name) {
   return drivers.filter(function (driverName) {
     return driverName.name.toLowerCase() === name.toLowerCase();
   });
 }
