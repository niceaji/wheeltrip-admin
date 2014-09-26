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
            key: 'addr',
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
            key: 'image0',
            template: '<upload-btn></upload-btn>',
            label: '이미지1'
        },
        {
            key: 'image1',
            template: '<upload-btn></upload-btn>',
            label: '이미지2'
        },
        {
            key: 'image2',
            template: '<upload-btn></upload-btn>',
            label: '이미지3'
        },
        {
            key: 'image3',
            template: '<upload-btn></upload-btn>',
            label: '이미지4'
        },
        {
            key: 'image4',
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
            label: '홈페이지',
            placeholder: 'http://'
        },
        {
            key: 'category_name',
            type: 'select',
            label: '카테고리',
            required: true,
            options: [
                {
                    name: '휠체어',
                    value: '휠체어'
                },
                {
                    name: '충전',
                    value: '충전'
                },
                {
                    name: '관광지',
                    value: '관광지'
                },
                {
                    name: '화장실',
                    value: '화장실'
                },
                {
                    name: '식당',
                    value: '식당'
                },
                {
                    name: '숙박',
                    value: '숙박'
                },
                {
                    name: '병원',
                    value: '병원'
                },
                {
                    name: '복지',
                    value: '복지'
                }
            ]
        },
        {
            key: 'area_name',
            type: 'select',
            label: '지역',
            required: true,
            options: [
                {
                    name: '제주',
                    value: '제주'
                },
                {
                    name: '서울',
                    value: '서울'
                },
                {
                    name: '부산',
                    value: '부산'
                },
                {
                    name: '경기',
                    value: '경기'
                },
                {
                    name: '강원',
                    value: '강원'
                },
                {
                    name: '충청',
                    value: '충청'
                },
                {
                    name: '전라',
                    value: '전라'
                },
                {
                    name: '경상',
                    value: '경상'
                },
                {
                    name: '인천',
                    value: '인천'
                },
                {
                    name: '대전',
                    value: '대전'
                },
                {
                    name: '대구',
                    value: '대구'
                },
                {
                    name: '울산',
                    value: '울산'
                }
            ]
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

