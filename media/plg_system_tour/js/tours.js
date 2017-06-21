(function ($) {
    $(document).ready(function() {


        var userLang = navigator.language;
        var pathArray = window.location.href;
        var shiv = pathArray.split('&');
        console.log(shiv);
        // console.log(pathArray);
        var option= shiv[0].split("option=")[1];
        var view = shiv[1].split("view=")[1];
        var currentURL = userLang + '/' + option;
        console.log(currentURL);

        if(shiv[2] != null) {
            var layout = shiv[2].split("layout=")[1];
        }
        if (option != null && view != null && layout != null) {
            console.log('if else');
            var filename =  option +'-'+ view + '-' + layout + '.' + 'json';
            console.log(filename);

        }
        if (option != null && view != null && layout == null) {
            var filename =  option +'-'+ view +'.' + 'json';
            var URL = currentURL + '/' + filename ;
            console.log(URL);

            console.log(filename);
            console.log('layout null')
        }
        if( option !=null && view == null && layout == null)
        {
            console.log('layout and viwe null')
            var filename =  option +  '.' + 'json';
            console.log(filename);

        }
        var currentURL = userLang + '/' + option + '/';
        // var filename =

        // var option = location.search.split("option=")[1];
        console.log(option);
        console.log(view);
        console.log(layout);


        // console.log(userLang);

        // var shivam =  $(location).attr('search');
        // console.log(shivam);

        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtn"><span class="icon"></span>Tour</button>';
        $('#toolbar').append(btn);
        var myItems;
        console.log('getting json data');
        nURL = 'http://localhost/gsoc17_helpscreens_on_jdocs/media/guide/'+URL ;
        console.log(nURL);
        $.getJSON( nURL  , function(data) {
            console.log('getting json data function');
            // console.log(data);
            myItems = data.items;
            console.log('getting json data data myitem');
            // console.log(myItems);
            // var obj = JSON.parse( myItems );

            console.log('getting json data data Json');

            console.log(myItems[0].target);

            // $('#results').html('Plugin name: ' + obj.title + '<br />Author: ' + obj.content);
            // // alert( obj.name === "John" )
            var tour = {
                id: 'hello-hopscotch',
                steps: [
                    // console.log('getting json data hopscotch');

                    {
                        target:  document.querySelectorAll('[class="icon-new"]')[0],

                        // target: myItems[0].target,
                        title: myItems[0].title,
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation a',
                        placement: 'bottom',
                        arrowOffset: -1
                    },
                    {
                        target: document.querySelectorAll('[class="icon-edit"]')[0],
                        title: myItems[1].title,
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentat',
                        placement: 'bottom',
                        arrowOffset: 0
                    },
                    {
                        target: document.querySelectorAll('[class="icon-publish"]')[0],
                        title: 'Welcome to Hopscotch! Publish',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read doc',
                        placement: 'bottom',
                        arrowOffset: 0
                    },
                    {
                        target: document.querySelectorAll('[class="icon-unpublish"]')[0],
                        title: 'Welcome to Hopscotch!npublish',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time',
                        placement: 'bottom',
                        arrowOffset: 0
                    },
                    {
                        target: document.querySelectorAll('[class="icon-trash"]')[0],
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of',
                        placement: 'bottom',
                        arrowOffset: 10
                    }
                ]
            };

            $("#startTourBtn").click(function(){
                hopscotch.startTour(tour);
            });
        });
    });

}(jQuery));
