(function ($) {
    $(document).ready(function() {
        if(window.location.href.indexOf("&")>-1)
        {
            var URLsplit = window.location.href.split('&');
            console.log(URLsplit);
            var option= URLsplit[0].split("option=")[1];
            var view = URLsplit[1].split("view=")[1];
            var layout = '';
            var filename = '';
            var URL = '';
            if(option)  //case if their is presence of two paramteres and one of them is option
            {
                filename =  option;
                if(view)         //case if their is presence of two paramteres and they are view and option
                {
                    filename =  filename +'-'+ view;
                }
                if((window.location.href.indexOf("layout=")>0))   //case if their is presence of three paramteres and they are view and option and layout
                {
                    layout = URLsplit[2].split("layout=")[1];
                    filename =  filename + '-' + layout;
                }
                filename = filename + '.' + 'json';//made the file name to be fetched out
                URL = option + '/' + filename; // path from where the file to be fetched
            }
        }
        else
        {
            option = location.search.split('option=')[1];
            filename =  option + '.' + 'json';
            URL =  option +  '/' + filename;
        }
        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtn"><span class="icon"></span>Tour</button>';
        $('#toolbar').append(btn);
        var myItems;
        var tour;
        var nURL;
        var finalUrl;
        var tournotfound;
        var splitURL = window.location.pathname.split('/');
        nURL = window.location.protocol + '//' + window.location.host + '/' + splitURL[1] + '/media/guide/' + navigator.language + '/'+ URL ; //
        tournotfound = window.location.protocol + '//' + window.location.host + '/' + splitURL[1] + '/media/guide/' + navigator.language + '/jsonNotFound.json' ;// error JSON file if JSON file not found
        $.ajax({
            url:nURL,
            type:'HEAD',
            error: function()
            {
                finalUrl=tournotfound;
                $.getJSON( finalUrl  , function(data) {
                    myItems = data.items;
                    tour = {
                        id: 'hello-hopscotch',
                        steps: myItems
                    };
                });
            },
            success: function()
            {
                //file exists
                finalUrl=nURL;
                $.getJSON( finalUrl  , function(data) {
                    myItems = data.items;
                    tour = {
                        id: 'hello-hopscotch',
                        steps: myItems
                    };
                });
            }
        });
        $("#startTourBtn").click(function () {
            hopscotch.startTour(tour);
        });
    });
}(jQuery));
