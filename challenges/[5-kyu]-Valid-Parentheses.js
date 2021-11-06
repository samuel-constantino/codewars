/*
Write a function that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

const validParentheses = (parens) => {
    let score = 0;

    parens.split('').forEach((b) => {
        if (score < 0) return false;
        switch (b) {
            case '(':
                score += 1;
                break;
            case ')': 
                score -= 1;
                break;
        }
    });

    const result = (score === 0)

    return result;

};

console.log(validParentheses('()'));