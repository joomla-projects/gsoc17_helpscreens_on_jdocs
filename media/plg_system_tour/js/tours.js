(function ($) {
    $(document).ready(function() {
        var userLang = navigator.language;
        var pathArray = window.location.href;
        var shiv = pathArray.split('&');
        var option= shiv[0].split("option=")[1];
        var view = shiv[1].split("view=")[1];
        var currentURL = userLang + '/' + option;
        if(shiv[2] != null) {
            var layout = shiv[2].split("layout=")[1];
        }
        if (option != null && view != null && layout != null) {
            var filename =  option +'-'+ view + '-' + layout + '.' + 'json';
        }
        if (option != null && view != null && layout == null) {
             filename =  option +'-'+ view +'.' + 'json';
            var URL = currentURL + '/' + filename ;
        }
        if( option !=null && view == null && layout == null)
        {
            var filename =  option +  '.' + 'json';
        }
        var currentURL = userLang + '/' + option + '/';
        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtn"><span class="icon"></span>Tour</button>';
        $('#toolbar').append(btn);
        var myItems;
        nURL = 'http://localhost/gsoc17_helpscreens_on_jdocs/media/guide/'+URL ;
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
