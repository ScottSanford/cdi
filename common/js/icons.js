angular.module('cdiApp')
    .factory('ItemIcons',function () {
    
        var Icons = {};

        Icons.cdiIcons = function() {
            var cdiIcons = [
                {type: 'pdf', icon: 'common/images/home/icon-pdf.png'},
                {type: 'ppt', icon: 'common/images/home/icon-pdf.png'},
                {type: 'png', icon: 'common/images/home/icon-pdf.png'},
                {type: 'jpg', icon: 'common/images/home/icon-pdf.png'},
                {type: 'jpeg', icon: 'common/images/home/icon-pdf.png'},
                {type: 'Video', icon: 'common/images/home/icon-video.png'},
                {type: 'video', icon: 'common/images/home/icon-video.png'}
            ];
            return cdiIcons;
        };
            

        return Icons;

    });
