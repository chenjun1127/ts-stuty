// infer 关键字
type AB<T> = T extends Array<infer U> ? U : T;
type CD = AB<number>;
type EF = AB<string>;
var cd: CD = 1;
var ef: EF = '1';
