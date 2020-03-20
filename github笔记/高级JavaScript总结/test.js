// var obj1 = {
//   'name' : 'zhangsan',
//   'age' :  '18',
//   'language' : [1,[2,3],[4,5]],
// };
// var obj2 = obj1;
// obj2.name = "lisi";
// obj2.language[1] = ["二","三"];
// console.log('obj1',obj1)
// console.log('obj2',obj2)

// var obj1 = {
//   'name' : 'zhangsan',
//   'age' :  '18',
//   'language' : [1,[2,3],[4,5]],
// };
// var obj3 = shallowCopy(obj1);
// obj3.name = "lisi";
// obj3.language[1] = ["二","三"];
// function shallowCopy(src) {
//   var dst = {};
//   for (var prop in src) {
//       if (src.hasOwnProperty(prop)) {
//           dst[prop] = src[prop];
//       }
//   }
//   return dst;
// }
// console.log('obj1',obj1)
// console.log('obj3',obj3)

//赋值

// var obj1 = {
//   'name' : 'zhangsan',
//   'age' :  '18',
//   'language' : [1,[2,3],[4,5]],
// };
// var obj2=obj1;
// console.log(obj1.name);
// console.log(obj2.name);

// obj2.name='lisi';
// console.log(obj1.name);
// console.log(obj2.name);

// let a = "muyiy";
// let b = a;
// console.log(b);
// // muyiy

// a = "change";
// console.log(a);
// // change
// console.log(b);
// // muyiy

// var a="hello";
// var b=a;
// console.log(a);//hello
// console.log(b);//hello

// b="world";
// console.log(a);//hello
// console.log(b);//world

// var obj1={
//   name:'张三',
//   age:18,
//   hobbies:['play','sleep']
// };
// var obj2=obj1;
// console.log("将对象obj1赋值给obj2:")
// console.log("obj1:    ");
// console.log(obj1);
// console.log("obj2:    ");
// console.log(obj2);

// console.log("改变obj2的name属性和hobbies属性看obj1的变化：")
// obj2.name='李四';
// obj2.hobbies[0]='eat';
// console.log("obj1:    ");
// console.log(obj1);
// console.log("obj2:    ");
// console.log(obj2);

// let obj1 = {
//   name: "zhangsan",
//   hobby: ["游泳","乒乓球","羽毛球"]
// };
// let obj2 = obj1;//赋值得到的obj2
// //浅拷贝函数
// function shallowCopy (sourceObj) {
//   let result = {};
//   for (let v in sourceObj) {
//     if (sourceObj.hasOwnProperty(v)) {
//       result[v] = sourceObj[v];
//     } 
//   }
//   return result;
// }
// let obj3 = shallowCopy(obj1);//浅拷贝得到的obj3

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log("改变obj3中的name属性和hobby属性看obj1的变化：")
// obj3.name="lisi";
// obj3.hobby[0]='画画';
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// var obj1={
//   age:10,
//   sex:"男",
//   car:["奔驰","宝马","特斯拉","奥拓"],
//   dog:{
//     name:"大黄",
//     age:5,
//     color:"黑白色"
//   }
// };

//  var obj2={};//空对象
// //通过函数实现,把对象a中的所有的数据深拷贝到对象b中
// function deepCopy(a,b) {
//   for(var key in a){
//     //先获取a对象中每个属性的值
//     var item=a[key];
//     //判断这个属性的值是不是数组
//     if(item instanceof Array){
//       //如果是数组,那么在b对象中添加一个新的属性,并且这个属性值也是数组
//       b[key]=[];
//       //调用这个方法，把a对象中这个数组的属性值一个一个的复制到b对象的这个数组属性中
//       deepCopy(item,b[key]);
//     }else if(item instanceof Object){//判断这个值是不是对象类型的
//  //如果是对象类型的,那么在b对象中添加一个属性,是一个空对象
//       b[key]={};
//       //再次调用这个函数,把a对象中的属性对象的值一个一个的复制到b对象的这个属性对象中
//       deepCopy(item,b[key]);
//     }else{
//       //如果值是普通的数据,直接复制到b对象的这个属性中
//       b[key]=item;
//     }
//   }
// }

// deepCopy(obj1,obj2);
// console.dir(obj1);
// console.dir(obj2);
// console.log("改变obj2的属性看obj1的变化：");
// obj2.age=38;
// obj2.sex="人妖";
// obj2.car[0]="自行车";
// obj2.car[1]="三轮车";
// console.dir(obj1);
// console.dir(obj2);

// let obj = {
//   username: 'kobe'
//   };
// let obj2 = Object.assign({},obj);
// obj2.username = 'wade';
// console.log(obj);//{username: "kobe"}

// var obj1 = { 
//   a: 
//     {
//       a: "kobe",
//       b: 39
//     },
//   c:23
//   };
// var Obj2 = Object.assign({}, obj1);
// Obj2.a.a = "wade";
// Obj2.c=999;
// console.log(obj1); //{a:{a:'wade",b:39},c:23}
// console.log(Obj2);//{a:{a:'wade',b:39},c:999}

let arr = [1, 3, {
  username: 'kobe'
  }];
let arr2=arr.concat();
arr2[1]=333;   
arr2[2].username = 'wade';
console.log(arr); //[1,3,{username:'wade'}]
console.log(arr2)//[1,333,{username:'wade'}]

