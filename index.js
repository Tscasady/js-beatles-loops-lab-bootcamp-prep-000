function theBeatlesPlay(musicArray, instrumentArray){
  var newArray = []
  for(var i = 0; i < musicArray.length; i++){
    var newString = musicArray[i] + 'plays' + instrumentArray[i]
    newArray.push(newString)
  }
  return newArray
}

function johnLennonFacts(factArray){
  var iterer = 0 
  var newArray = []
  while(iterer < factArray.length){
    newArray[iterer] = `${factArray[iterer]}!!!`
    iterer++
  }
}