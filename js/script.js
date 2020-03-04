$(function(){
    $('.js-tab-trigger').on('click', function (e) {
        // すべてのタブメニューの'is-active'クラスを削除
        $('.js-tab-trigger').removeClass('is-active');
        // クリックしたタブメニューに'is-active'クラスを追加
        $(this).addClass('is-active');

        // ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
        let currentContent = $('#' + $(this).data('id'));

        // タブコンテンツを非アクティブにする
        $('.js-tab-target').removeClass('is-active');

        // 対象コンテンツ(指定したIDの要素があったら)を表示させる
        if (currentContent.length) {
            currentContent.addClass('is-active');
        }
    });
});
