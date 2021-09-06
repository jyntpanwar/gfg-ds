// finds the leaders in the array. The element is a leader if all elements to its right are smaller that it

const getLeaders = function(array) {
  currentLeader = array[array.length - 1]
  leaders = [currentLeader]
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > currentLeader) {
      currentLeader = array[i]
      leaders.unshift(currentLeader)
    }    
  }
  return leaders
}

array = [10, 60, 50 , 30, 7, 3]
console.log(getLeaders(array))