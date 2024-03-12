var mySentence = "Je suis le mot le plus long dans le dictionnaire, qui suis-je ?"

var splitSentence = mySentence.split(" ");
splitSentence.sort((a, b) => b.length - a.length);
console.log("le mot le plus long est : ", splitSentence[0], " dans la phrase :", mySentence);




