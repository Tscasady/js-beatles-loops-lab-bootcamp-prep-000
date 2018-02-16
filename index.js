function theBeatlesPlay(musicArray, instrumentArray){
  var newArray = []
  for(var i = 0; i < musicArray.length; i++){
    var newString = musicArray[i] + 'plays' + instrumentArray[i]
    newArray.push(newString)
  }
  return newArray
}