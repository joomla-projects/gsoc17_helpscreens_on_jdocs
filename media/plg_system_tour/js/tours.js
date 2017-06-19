(function ($) {
    $(document).ready(function() {

        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtn"><span class="icon"></span>Tour</button>';
        $('#toolbar').append(btn);

        var tour = {
                id: 'hello-hopscotch',
                steps: [

                    {
                        target: document.querySelectorAll('[class="icon-new"]')[0],
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
                        placement: 'bottom',
                        arrowOffset: -1,
                        showCloseButton: true
                    },
                    {
                        target: document.querySelectorAll('[class="icon-edit"]')[0],
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
                        placement: 'bottom',
                        arrowOffset: 0
                    },
                    {
                        target: document.querySelectorAll('[class="icon-publish"]')[0],
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
                        placement: 'bottom',
                        arrowOffset: 0
                    },
                    {
                        target: document.querySelectorAll('[class="icon-unpublish"]')[0],
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
                        placement: 'bottom',
                        arrowOffset: 0
                    },
                    {
                        target: document.querySelectorAll('[class="icon-trash"]')[0],
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
                        placement: 'bottom',
                        arrowOffset: 10
                    },
                ]
            };

        $("#startTourBtn").click(function(){
                hopscotch.startTour(tour);
        });
    });

}(jQuery));
