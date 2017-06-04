(function ($) {
    $(document).ready(function() {

        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtn"><span class="icon-trash"></span>Tour</button>';
        $('#toolbar').append(btn);

        var tour = {
                id: 'hello-hopscotch',
                steps: [
                    {
                        target: '#toolbar',
                        title: 'Welcome to Hopscotch!',
                        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
                        placement: 'bottom',
                        arrowOffset: 60
                    }
                ]
            };

        $("#startTourBtn").click(function(){
                hopscotch.startTour(tour);
        });
    });

}(jQuery));