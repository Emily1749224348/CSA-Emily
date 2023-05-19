setTimeout(() => {
  console.log('setTimeout start');//5
  new Promise((resolve) => {
    console.log('promise1 start');//6
    resolve();
  }).then(() => {
    console.log('promise1 end');//8
  })
  console.log('setTimeout end');//7
}, 0);
function promise2() {
  return new Promise((resolve) => {
    console.log('promise2');
    resolve();
  })
}
async function async1() {
  console.log('async1 start');//1
  await promise2();//2
  console.log('async1 end');//4
}
async1();
console.log('script end');//3

//呜呜呜我真的不会，为什么setTimeout没加时长也会在async1后面执行