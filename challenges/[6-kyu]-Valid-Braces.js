/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/


/*
Nesse algorítimo foi usado duas tecnicas:
1º - usar regex para testar cada um dos 3 padrões ( (), {}, [] )
2º - user um 'replace' para substituir os matchs por strings vazías

Caso o tamanho de 'braces' conhtinue acima de zero quer dizer que 
não houve match em todos os casos. Retornando falso.

OBS: essa resolução foi baseada nas soluções já implementadas no codewars.
*/

const validBraces = (braces) => {
  const regBraces = /\(\)|\{\}|\[\]/g;

  while (regBraces.test(braces)) {
    console.log(braces)
    braces = braces.replace(regBraces, "");
  };
  return !braces.length;
};

console.log(validBraces('([{}])'));