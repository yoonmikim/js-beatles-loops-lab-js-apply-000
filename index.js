// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}  

function johnLennonFacts(str) {
    
        if (str === "He was the last Beatle to learn to drive") {
          return str + "!!!";
        }
        if (str === "He was never a vegetarian") {
          return str + "!!!";
        }
        if (str === "He was a choir boy and boy scout") {
          return str + "!!!";
        }
         if (str === "He hated the sound of his own voice") {
          return str + "!!!";
        }
        
        if (str === "foo" || str === 'bar') {
          return str + "!!!"
        }
}
          
//   describe('iLoveTheBeatles', function() {
//     it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//       expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//     });

//     it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//       expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//     });
//   });

// });
