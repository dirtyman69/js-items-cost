'use strict';

{
  const d = new Date();
  console.log(d);//2020/10/20
  d.getFullYear(); //2020
  d.getMonth(); //0-11 (Jan:0, Feb:1,...)
  d.getDate(); //1-31
  d.getDay(); //0-6 (Sun:0, Mon:1, ...)

  d.getHours(); //0-23
  d.getMinutes(); //0-59
  d.getSeconds(); //0-59
  d.getMilliseconds(); //0-999

  const d = new Date(2019, 10); //2020/11/1 00:00:00
  d.setHours(10, 20, 30); // 2020/11/01 10:20:30
  d.setDate(31); // 2020/21/01 10:20:30
  d.setDate(d.getDate() + 3); // 2020/21/01 10:20:30
  console.log(d);
}
