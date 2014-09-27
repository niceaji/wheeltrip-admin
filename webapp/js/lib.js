

app.directive('daumMap',
    function ($rootScope, dmap) {

        return {
            restrict: 'E',
            scope: {
                lat: '=?',
                lng: '=?',
                level: '=?'
            },
            replace: true,
            template: '<div style="width:100%;height:100%;"></div>',
            link: function (scope, element) {
                dmap.init(element[0], scope.lat, scope.lng, scope.level);
//                dmap.putZoom();
//                dmap.putMaptype();
            }
        }
    });

app.factory('dmap', function ($window) {

    var maps = $window.daum.maps;

    return {

        init: function (el, lat, lng, level) {

            map = new maps.Map(el, {
                center: new maps.LatLng(lat, lng),
                level: level
            });

            return map;
        },
        map: function () {
            return map;
        },
        putZoom: function () {
            var zoomControl = new maps.ZoomControl();
            map.addControl(zoomControl, maps.ControlPosition.RIGHT);
        },
        putMaptype: function () {
            var mapTypeControl = new maps.MapTypeControl();
            map.addControl(mapTypeControl, maps.ControlPosition.TOPRIGHT);
        },
        putMarker: function (lat, lng, icon) {
            var img = 'http://wheeltrip.net/images/icon_local_'+ (icon || 'tourist') + '.png';
            var imageSize = new daum.maps.Size(45, 38);
            var markerImage = new daum.maps.MarkerImage(img, imageSize);

            var marker = new daum.maps.Marker({
                image:markerImage,
                position: new daum.maps.LatLng(lat, lng)

            });
            marker.setMap(map);

            return marker;
        },
        putOverlay: function (lat, lng, content) {
            var position = new daum.maps.LatLng(lat, lng);
            var overlay = new daum.maps.CustomOverlay({
                position: position,
                content: content,
                yAnchor: 3
            });
            overlay.setMap(map);

            return overlay;
        },
//        putInfowindow: function (content) {
//            var infowindow = new maps.InfoWindow({
//                content: '<p style="margin:7px 12px;">' + content + "</p>",
//                removable: false
//            });
//            return infowindow;
//        },

        panTo: function (lat, lng) {
            map.panTo(new daum.maps.LatLng(lat, lng));
        },


        click: function (callback) {
            maps.event.addListener(map, 'click', callback);

        }
    }
});