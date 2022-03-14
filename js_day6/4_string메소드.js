let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);       //문자열 길이

//문자열 추출 : slice(), 음수 인덱스 추출가능.
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13)); 

//문자열 추출 : substring(), 음수 인덱스 추출불가.
let fr = "Apple, Banana, Kiwi";
console.log(fr.substring(7,13));

//문자열 추출 : substr(), 두번째 매개변수가 추출된 부분의 길이를 지정.
let fru = "Apple, Banana, Kiwi";
console.log(fru.substr(7,6));

let fruu = "Apple, Banana, Kiwi";
console.log(fru.substr(7));

//문자열 내용 바꾸기 : replace() 메서드는 지정된 값을 문자열의 다른 값으로 바꿉니다.
let tex = "Please visit Microsoft!";
console.log(tex.replace("Microsoft","W3Schools"));

//문자열을 한꺼번에 바꿔주기 위해서 : /전역일치/g를 사용
let textt = "Please visit Microsoft and Microsoft!";
console.log(textt.replace("Microsoft","W3Schools"));
console.log(textt.replace(/Microsoft/g,"W3Schools"));

//문자열을 대문자로 바꾸기 : toUpperCase()
let hel = "Hello World!";
console.log(hel.toUpperCase());
//문자열을 소문자로 바꾸기 : toLowerCase()
console.log(hel.toLowerCase());

//문자열 연결 : concat
let tt1 = "Hello";
let tt2 = " World!";
let tt3 = tt1.concat("", tt2);
console.log(tt3);

//문자열 트림 : trim() 문자열의 양쪽에서 공백을 제거함.
let xt1 = "        Hello World !           ";
let xt2 = xt1.trim();
console.log(xt2);

//문자열 패딩 : padStart()
let ts = "5";
console.log(ts.padStart(5,0));

//문자열 패딩 : padEnd()
let st = "5";
console.log(st.padEnd(5,0));

//해당인덱스 문자 추출(1) : charAt()
let aa = "HELLO WORLD";
console.log(aa.charAt(6));

//해당인덱스 문자 추출(2) : []
let bb =  "HELLO WORLD";
console.log(bb[0]);

//문자열 split() : 메소드를 사용하여 문자열을 배열로 변환할 수 있습니다.
let cc = "a,b,c,d,e,f";
cc.split(",");
for(let i=0;i<cc.length;i++){
    console.log(cc[i])
 }
