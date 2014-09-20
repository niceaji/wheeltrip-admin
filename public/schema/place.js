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
//            type: 'address-map',
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
            type: 'text',
            hide: true
        },
        {
            key: 'image_1',
            type: 'text',
            hide: true
        },
        {
            key: 'image_2',
            type: 'text',
            hide: true
        },
        {
            key: 'image_3',
            type: 'text',
            hide: true
        },
        {
            key: 'image_4',
            type: 'text',
            hide: true
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

