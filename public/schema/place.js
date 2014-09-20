(function () {
    'use strict';

    //https://github.com/nimbly/angular-formly
    var schema = [
        {
            key: 'name',
            type: 'text',
            label: '장소명',
            required: true,
            description: ''
        },
        {
            key: 'address',
//            type: 'text',
            template: '<address-map></address-map>',
            label: '주소'
        },
        {
            key: 'latitude',
            type: 'text',
            label: '위도',
            required: true,
            disabled: true
        },
        {
            key: 'longitude',
            type: 'text',
            label: '경도',
            required: true,
            disabled: true
        },
        {
            key: 'image_0',
            template: '<upload-btn></upload-btn>',
            label: '이미지1'
        },
        {
            key: 'image_1',
            template: '<upload-btn></upload-btn>',
            label: '이미지2'
        },
        {
            key: 'image_2',
            template: '<upload-btn></upload-btn>',
            label: '이미지3'
        },
        {
            key: 'image_3',
            template: '<upload-btn></upload-btn>',
            label: '이미지4'
        },
        {
            key: 'image_4',
            template: '<upload-btn></upload-btn>',
            label: '이미지5'
        },
        {
            key: 'description',
            type: 'textarea',
            label: '요약'
        },
        {
            key: 'homepage',
            type: 'text',
            label: '홈페이지'
        },
        {
            key: 'category',
            type: 'text',
            label: '카테고리'
        },
        {
            key: 'area',
            type: 'text',
            label: '지역'
        }
    ];

    var root = this;
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = schema;
        }
    } else {
        root.schema['place'] = schema;
    }
}.call(this));

