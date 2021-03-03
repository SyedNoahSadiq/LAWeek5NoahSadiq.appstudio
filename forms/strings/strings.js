let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
console.log(quoteString)
alert(`Upper case string is: ${quoteString.toUpperCase()}`)

let authorString = "- Henry Ford"
console.log(authorString)
alert(authorString)

let completeString = quoteString.concat('\n', authorString)
alert(completeString)

let found = completeString.includes("Henry")
found ? alert("Henry was in completeString") : alert("Henry was NOT in completeString")
