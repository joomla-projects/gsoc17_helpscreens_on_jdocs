(function ($) {
    $(document).ready(function() {

        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtnh"><span class="icon-trash"></span>Tour-Boot</button>';
        $('#toolbar').append(btn);

        var tour = new Tour({
            storage : false
        });

        tour.addSteps([
            {
                element: "#container-collapse",
                placement: "bottom",
                title: "Welcome to our landing page!",
                content: "This tour will guide you through some of the features we'd like to point out."
            }
        ]);
        $("#startTourBtnh").click(function(){
            tour.start();
            e.preventDefault();
        });
    });

}(jQuery));