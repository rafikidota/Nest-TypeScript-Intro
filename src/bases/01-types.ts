export let name = 'David';
export const age = 24;
export const isValid = true;

name = 'rafiki';

export const template_string = ` This is a string
multiline
that can have
"" double
' simple
inject values ${name}
expressions ${1 + 1}
numbers ${age}
booleans ${isValid}
`;


console.log(template_string);