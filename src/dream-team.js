module.exports = function createDreamTeam(members ) {
  let name=[];
  if (Array.isArray(members)){
   members.forEach(element => {
     if (typeof element == 'string'){
        name.push(element.replace(/ {1,}/g, '').charAt(0).toUpperCase());
    } else {
      return false;
    }
   });
   
   return name.sort().join('');
   }else{
     return false;
   }
};