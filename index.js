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

 const drivers = [
   {
     name: 'Bobby',
     hometown: 'Pittsburgh' },
   {
     name: 'Sammy',
     hometown: 'New York' } ,
   {
     name: 'Sally',
     hometown: 'Cleveland' },
   {
     name: 'Annette',
     hometown: 'Los Angeles' },
   {
     name: 'Bobby',
     hometown: 'Tampa Bay' }
 ];
 findMatching(drivers, 'sammy');

 fuzzyMatch(drivers, 'Sa')
 matchName(drivers, 'bobby')
