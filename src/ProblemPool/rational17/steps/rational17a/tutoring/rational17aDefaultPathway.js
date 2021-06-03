var hints = [{id: "rational17a-h1", type: "hint", dependencies: [], title: "The Least Common Denominator", text: "Find the LCD.", variabilization: {}}, {id: "rational17a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["xy"], dependencies: ["rational17a-h1"], title: "The Least Common Denominator", text: "What is the LCD?", variabilization: {}}, {id: "rational17a-h3", type: "hint", dependencies: ["rational17a-h2"], title: "Common Denominator", text: "Multiply each expression by the appropriate form of 1 to obtain xy as the denominator for each fraction.", variabilization: {}}, {id: "rational17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4y/xy"], dependencies: ["rational17a-h3"], title: "Common Denominator", text: "What is the first fraction?", variabilization: {}}, {id: "rational17a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10x/xy"], dependencies: ["rational17a-h4"], title: "Common Denominator", text: "What is the second fraction?", variabilization: {}}, {id: "rational17a-h6", type: "hint", dependencies: ["rational17a-h5"], title: "Adding Fractions", text: "Now that the expressions have the same denominator, we simply add the numerators to find the sum.", variabilization: {}}, {id: "rational17a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(4y+10x)/(xy)"], dependencies: ["rational17a-h6"], title: "Adding Fractions", text: "What is the final fraction?", variabilization: {}}, ]; export {hints};