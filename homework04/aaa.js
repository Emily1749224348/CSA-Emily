//Lv1
//打印1-10
//方法一：
let arr=[];
for(let i=1;i<=10;i++){arr.push(i)};
for(i of arr){console.log(i)};
//方法二：
let iter=arr[Symbol.iterator]();
for(i=0;i<10;i++){console.log(iter.next())};

//创建Person类
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log(`name: ${this.name}`);
        console.log(`age:${this.age}`);
    }
}
let p1=new Person();
p1.name='anne';
p1.age=10;
p1.speak();
class Students extends Person{
    constructor(arr1){
    super();
    }
    sayName(){
        console.log(this.name);
        console.log(this.age);
    }
}
let s1=new Students();
s1.name="Frank";
s1.age=12;
s1.sayName();