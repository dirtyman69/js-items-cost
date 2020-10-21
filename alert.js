'use strict';
{
  alert('hello');

  const answer = confirm('削除しますか？');
  if(answer) {
    console.log('削除しました');
  }else {
    console.log('キャンセルしました');
  }
}
