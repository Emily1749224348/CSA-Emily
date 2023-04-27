/*
function factorial(x){
    if(x==1)
        return 1;
    else
        return x*factorial(x-1);
}*/
/*
function factorial(x){
    let re=1;
    for(i=1;i<=x;i++)
    {
        re*=i;
    }
    return re;
}*/
/*浅拷贝：用简单的赋值实现 */
let ins1={
    name:'Angel',
    age:20,
};
let ins2=ins1;
console.log(ins2);
/*深拷贝：用操作符实验一维数组的深拷贝，如slice()\concat()\Array.from()  */
let arr=[1,2,3,4,5];
let arr1=arr.slice();
arr1[0]=10;
console.log(arr1);
let arr2=arr.concat();
arr2[0]=259;
console.log(arr2);
let arr3=Array.from(arr);
arr3[0]=145;
console.log(arr3);
/*一维对象的深拷贝：Object.assign() */
let ins3=Object.assign({},ins1);
ins3.name="Jack";
console.log(ins3);