(function ($) {
    $(document).ready(function() {
        var userLang = navigator.language;
        var pathArray = window.location.href;
        var currentURL = userLang + '/';
        if(window.location.href.indexOf("&")>-1)
        {
            var shiv = pathArray.split('&');
            var option= shiv[0].split("option=")[1];
            var view = shiv[1].split("view=")[1];
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
                if(shiv[2])    //case if their is presence of three paramteres and they are view and option and layout
                {
                    layout = shiv[2].split("layout=")[1];
                    filename =  filename + '-' + layout;
                    URL = URL + '/' + filename;
                    console.log('layout');
                }
                filename = filename + '.' + 'json';//made the file name to be fetched out
                URL = option + '/' + filename; // path from where the file to be fetched
            }
        }
        else
        {
            console.log('else');
            option = location.search.split('option=')[1];
            console.log(option);
            filename =  option + '.' + 'json';
            URL =  option +  '/' + filename;
        }
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
