(function () {
    'use strict';

    //https://github.com/nimbly/angular-formly
    var schema = [
        {
            key: 'editor',
            type: 'text',
            label: '작성자',
            description: ''
        },
        {
            key: 'email',
            type: 'text',
            label: '이메일',
            description: ''
        },
        {
            key: 'content',
            type: 'textarea',
            label: '요약'
        }
    ];

    var root = this;
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = schema;
        }
    } else {
        root.schema['ask'] = schema;
    }
}.call(this));

