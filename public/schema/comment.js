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
            key: 'content',
            type: 'textarea',
            label: '요약'
        },
        {
            key: 'score',
            type: 'text',
            label: '평가',
            placeholder: ''
        }
    ];

    var root = this;
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = schema;
        }
    } else {
        root.schema['comment'] = schema;
    }
}.call(this));

