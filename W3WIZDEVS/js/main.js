$(document).ready(function(){

    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")
        }
    });
    // navbar Collapse
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // toggle theme
    function toggleTheme() {
        if(localStorage.getItem("shala-theme") !== null ){
            if(localStorage.getItem("shala-theme") == "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark") ) {
            localStorage.setItem("shala-theme", "dark");
        }
        else{
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("bi-moon");
            $(".toggle-theme i").addClass("bi-sun");
        }
        else{
            $(".toggle-theme i").removeClass("bi-sun");
            $(".toggle-theme i").addClass("bi-moon");
        }
    }

})
