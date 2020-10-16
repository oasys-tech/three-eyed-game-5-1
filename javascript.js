// 先攻のマーク
const FIRST_MARK = 'o';

// 後攻のマーク
const NEXT_MARK = 'x';

// ターン数
let count = 1;

// IDからオブジェクトを取得する
function $(id)
{
    return document.getElementById(id);
}

// 先攻のターンかどうかを判定する
function isFirstMove() {
    let isFirst = count % 2;
    return isFirst == 1;
}

// ターン表示を切り替える
function changeDisplayCount() {
    if (isFirstMove()) {
        // 先攻のターンを表示する
        $('display-count').innerHTML = FIRST_MARK + 'の番！';
    } else {
        // 後攻のターンを表示する
        $('display-count').innerHTML = NEXT_MARK + 'の番！';
    }
}

// マスを選択するアクション
function clickAction(event) {
    // イベントからクリックされたボタンのIDを取得する
    let id = event.target.id;

    // IDからオブジェクトを取得する
    let object = $(id);

    // 既にマークが設定されている場合はスキップ
    if (object.value !== '') {
        return;
    }

    // マス目にマークを設定する
    if (isFirstMove()) {
        object.value = FIRST_MARK;
    } else {
        object.value = NEXT_MARK;
    }

    // ターンを+1する
    count = count + 1;

    // ターン表示を切り替える
    changeDisplayCount();
}

// 画面を読み込んだ時の処理
function onloadAction() {
    // ボタンにイベントを設定する
    $('b1').onclick = clickAction;
    $('b2').onclick = clickAction;
    $('b3').onclick = clickAction;
    $('b4').onclick = clickAction;
    $('b5').onclick = clickAction;
    $('b6').onclick = clickAction;
    $('b7').onclick = clickAction;
    $('b8').onclick = clickAction;
    $('b9').onclick = clickAction;
}

// 画面読み込み時のイベントを設定
window.onload = onloadAction;