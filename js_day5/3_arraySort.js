const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            //1. 배열값들을 오름차순 정렬하여 변경한다.    -알파벳순서
console.log(fruits)
fruits.reverse()          //2. 배열값들을 내림차순(역순) 정렬하여 변경한다.
console.log(fruits)     

const points = [40, 100, 1, 5, 25, 10];
points.sort();            //3. 정수값 배열 - 사전식 알파벳순서??? -> sort 에 콜백함수로 정렬 방법(값의 크기) 전달.
console.log(points)       //[1, 10, 100, 25, 40, 5] 생각한 값이 안나옴.

points.sort(function(a,b){return a-b}); //a>b 일때는 양수, a<b 일때는 음수, a==b 일때는 0 리턴 -> 이결과로 정렬
console.log(points)

points.reverse();           //points.sort 에서 한번 적용된 콜백함수 정렬기준이 계속 적용
console.log('**'+points)   

points.reverse(function(a,b){return a-b}); 
//points 배열을 처음 정렬한다면 역순은 이렇게 합니다.
//a>b 일때는 양수, a<b 일때는 음수, a==b 일때는 0리턴 -> 이 비교 결과로 정렬.
console.log(points)                     


//배열에서 최대값,최소값 찾기 Math.max.apply(~~), Math.min.apply(~~) 

//7.객체 배열 정렬 - 자바스크립트에서 객체 리터럴은 { } 기호로 표시
//  {type:'BMW', year:2010} 는 객체, 객체를 미리 클래스로 정의하지 않고 사용할 때 정의.(프로토타입)
const cars = [{type:'Volvo',year:2016},{type:'Saab',year:2001},{type:'BMW',year:2010}]      //객체를 3개 참조하는 배열
cars.sort(function(a,b){        //a,b는 객체타입 변수
    return a.year-b.year;
})
//남은 미션 : type 프로퍼티로 정렬하기.
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

