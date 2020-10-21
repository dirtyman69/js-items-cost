//オブジェクト

// const point = [100, 180];

'use strict';

{
  // const point = [100, 180];

  // const point = {x: 100, y: 180};

  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100, //プロパティ
    y: 180,
    ...otherProps,
  };

  const {x, r, ...others} = point;

  point.x = 120;

  console.log(point);
  console.log(point.x);
  console.log(point['y']);
  
  point.z = 90;
  delete point.y;


//配列にする
  const keys = Object.keys(point);

  keys.forEach(key => {
    console.log(`key: ${key} Value: ${point[key]}`);
  })

  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ]
  console.log(points[1].y);
}
