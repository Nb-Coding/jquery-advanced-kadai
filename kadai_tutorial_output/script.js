$(function() {
    $('.button-more').on('mouseover',function() {
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        }, 100);
    });
    $('.button-more').on('mouseout',function() {
        $(this).animate({
            opacity: 1,
            marginLeft: 0,
        }, 100);
    });

     // カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });


    $('#submit').on('click',function(event) {
        event.preventDefault();

        let result = inputCheck();

        // エラー判定とメッセージを取得
        let error = result.error;
        let message = result.message;

        if (error == false) {
            // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
            alert('お問い合わせを送信しました。');
        } else {
            // エラーメッセージを表示する
            alert(message);
        }
    });

    $('#name').blur(function() {
        inputCheck();
    });
    $('#furigana').blur(function() {
        inputCheck();
    });
    $('#email').blur(function() {
        inputCheck();
    });
    $('#tel').blur(function() {
        inputCheck();
    });
    $('#message').blur(function() {
        inputCheck();
    });
    $('#agree').click(function() {
        inputCheck();
    });

    function inputCheck() {
        console.log('inputCheck関数の呼び出し');

        // エラーのチェック結果
        let result;

        // エラーメッセージのテキスト
        let message='';

        // エラーがなければfalse、エラーがあればtrue
        let error = false;

        if ($('#name').val() == '') {
            // エラーあり
            $('#name').css('background-color','#f79999');
            error = true;
            message += 'お名前を入力してください。\n';
        } else {
            // エラーなし
            $('#name').css('background-color','#fafafa');
        }

        if ($('#furigana').val() == '') {
            $('#furigana').css('background-color','#f79999');
            error = true;
            message += 'フリガナを入力してください。\n';
        } else {
            $('#furigana').css('background-color','#fafafa');
        }

        if ($('#message').val() == '') {
            $('#message').css('background-color','#f79999');
            error = true;
            message += 'お問い合わせ内容を入力してください。\n';
        } else {
            $('#message').css('background-color','#fafafa');
        }

        if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || 
            $('#email').val().indexOf('.') == -1) {
                $('#email').css('background-color','#f79999');
                error = true;
                message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
        } else {
            $('#email').css('background-color','#fafafa');
        }

        if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
            $('#tel').css('background-color','#f79999');
            error = true;
            message += '電話番号に「-」が含まれていません。\n';
        } else {
            $('#tel').css('background-color','#fafafa');
        }

        if ($('#agree').prop('checked') == false) {
            error = true;
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
        }

        if (error == true) {
            $('#submit').attr('src', 'images/button-submit.png');
        } else {
            $('#submit').attr('src', 'images/button-submit-blue.png');
        }

        // オブジェクトでエラー判定とメッセージを返す
        result = {
            error: error,
            message: message
        }

        // 戻り値としてエラーがあるかどうかを返す
        return result;
    }
});