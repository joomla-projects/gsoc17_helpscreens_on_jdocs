(function ($) {
    $(document).ready(function() {
        var userLang = navigator.language;
        var pathArray = window.location.href;

        var currentURL = userLang + '/';
        if(window.location.href.indexOf("&")>-1) {
            var shiv = pathArray.split('&');
            var option= shiv[0].split("option=")[1];
            var view = shiv[1].split("view=")[1];
            if(shiv[2] !=null) {
                var layout = shiv[2].split("layout=")[1];
            }
            if (option!=null && view !=null && layout !=null) {
                var filename =  option +'-'+ view + '-' + layout + '.' + 'json';
                var URL = option + '/' + filename;
            }
            if (option!=null && view!=null && layout ==null) {
                filename =  option +'-'+ view +'.' + 'json';
                URL = option + '/' + filename ;
            }
            if( option!=null && view==null && layout ==null )
            {
                filename =  option + '.' + 'json';
                URL =  option +  '/' + filename;
            }

            console.log('& present');
        }
        else{
            option = location.search.split('option=')[1];
            console.log(option);
            filename =  option + '.' + 'json';
            URL =  option +  '/' + filename;
        }
        // var currentURL = userLang + '/' + option + '/';
        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtn"><span class="icon"></span>Tour</button>';
        $('#toolbar').append(btn);
        var myItems;
        var s = window.location.pathname.split('/');
        nURL = window.location.protocol + '//' + window.location.host + '/' + s[1] + '/media/guide/' + navigator.language + '/'+ URL ;
        console.log(nURL);
        $.getJSON( nURL  , function(data) {
            myItems = data.items;
            var tour = {
                id: 'hello-hopscotch',
                steps: myItems
            };
            $("#startTourBtn").click(function () {
                hopscotch.startTour(tour);
            });
        });
    });

}(jQuery));
