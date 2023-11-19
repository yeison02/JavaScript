/*Los opertadores logicos se utilizan para evaluar expresiones logicas


AND(&&): Devuelve (true) cuando ambos valores son verdaderos
true && true // → true
true && false // → false
false && false // → false


OR(||): Devuelve (true) cuando cualquiera de los dos valores es verdadero
true || true // → true
true || false // → true
false || false // → false

NOT(!): Invierte el valor de un valor booleano, se pone delante del valor que queremos invertir
!true // → false
!false // → true

Combinando operadores logicos, aritmeticos y de comparacion
2 < 3 && 3 < 4 // → true
3 < 2 && 3 < 4 // → false

(2 + 2) < 3 && (10 < (8 * 2)) // → false
Primero se hacen las operaciones aritméticas:
→ 4 < 3 && 10 < 16
Ahora las comparaciones:
→ false && true
Finalmente:
→ false
*/
