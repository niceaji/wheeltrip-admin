$(function () {
    'use strict';

    var url = '//wheeltrip.net/uploader/server/';

    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {

            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo('#files');
            });

            window.setTimeout(function () {
//                debugger;
                opener.callbackUploadWindow(data.result.files[0]);
                window.close();
            }, 1000);
//
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                    progress + '%'
            );
//            console.log(progress)
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});