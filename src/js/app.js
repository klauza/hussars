export const app = () => {


  
    /* battles section - siblings color change on hover*/
    $(".screen").hover(function() {
      $(this).siblings().addClass("screenJS");
    },                 function() {
      $(this).siblings().removeClass("screenJS");
    });
//
//  
//  
    // section click function
    var scrollLink = $('.scroll'); 
    
    scrollLink.click(function(d){
      d.preventDefault();
      $('body, html').animate({
        scrollTop: $(this.hash).offset().top - 50
      }, 1000 );
    });
//
//  
//  
    var scrollHistory = $('#history').offset().top; // top position of #history
    
    if(window.innerWidth > 992){
       $(window).scroll(function(){   //.on('scroll', function())
        if ($(this).scrollTop() > scrollHistory - 150) { 
            $('.nav-fixed').fadeIn(); 
        } else { 
            $('.nav-fixed').fadeOut(); 
        } 
    }); 
    } else {
       $('.nav-fixed').fadeOut(); 
    }
//
//  
//  
  /* highlight navbar */
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top - 150;
      if (sectionOffset <= scrollbarLocation ){
        $(this).parent().addClass('nav-active'); /* parent of this link - ( so it's li -> list item) */
        $(this).parent().siblings().removeClass('nav-active'); 
      }
    });
  });
//
//  
//  
  //click on Read more button - battles section
   
        let readMore = document.querySelectorAll('a.readMore');
        var scrollBattles = $('#battles').offset().top;
        var backButton = document.getElementById('backStoryButton');

        for(var i = 0; i < readMore.length; i++) {
            readMore[i].addEventListener('click', function(e){
                e.preventDefault();

                //hide navbar
                let navLinks = document.querySelectorAll('.nav-fixed ul li a');
                console.log(navLinks);
                navLinks.forEach((link) => link.style.display = "none");
                   //1. scroll to top of history section
                $('body, html').animate({
                    scrollTop: scrollBattles -50
                }, 400 ); 

                var screenCont = e.target.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling; //target parent 'row' and move 1 down
                
                //scroll to top of .screenContent while clicking the story
                 $(screenCont).animate({
                    scrollTop: 0
                }, 600 ); 

                //temp3 = .screen
                // var temp3 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
               

                //show clicked story
                screenCont.style.opacity = "1";
                screenCont.style.visibility = "visible"; 
                screenCont.style.zIndex = "5"; 
                backButton.style.opacity = "1"; 
                backButton.style.transition = "opacity 1s";
                $('body, html').css("overflow","hidden");
                
                const leaveStory = () => {
                    navLinks.forEach((link) => link.style.display = "block");
                    screenCont.style.opacity = "0";
                    screenCont.style.visibility = "hidden"; 
                    screenCont.style.zIndex = "1"; 
                    backButton.style.opacity = "0";
                    backButton.style.transition = "opacity 0s";
                    $('body, html').css("overflow","auto");
                }
                //hide clicked story on mouseAway
               

                backButton.addEventListener('click', function(){  //Mobile
                  leaveStory();
                });
            });
        }
    
    
//
//
//
    /* Tabs */
    var content = document.querySelectorAll(".boxContent");
    var button = document.querySelectorAll(".show-more");
    var descriptionBoxContainer = document.querySelectorAll('.boxContainerJS');
    var svgFill = document.querySelectorAll('.svg-fill');
    
    // Highlight weapon
    var containerArray = Array.from(descriptionBoxContainer);
    
    containerArray.forEach(function(theButton, i) {
        
      theButton.addEventListener('mouseenter', function() {
        svgFill[i].style.opacity = "0.8";
        svgFill[i].style.transition ="all 0.5s";
        svgFill[i].style.fill = "#ffeb00";
          
      });
        
        theButton.addEventListener("mouseleave", function() {   
            svgFill[i].style.fill = "rgba(0, 0, 0, 0)";

        });
        
    });
    
    /* ---------------------------------------------------------------------- */
    //Box content show & button inner text change - original
   
     for(var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {

            var tempBox = this.previousSibling.previousSibling;
            

            if (tempBox.id == ""){
                this.innerHTML = "Show less";
                tempBox.id ="open";
            } else{ 
                tempBox.id ="";
                this.innerHTML = "Show more";
            }
            
        });
    };
    
    
    
    window.addEventListener('mouseup', function(event){
        
        var box = document.querySelectorAll('.boxContainerJS');  //grab box content
        var box2 = document.querySelectorAll('.boxik');  //grab box content
        
        var but = document.querySelectorAll(".show-more");  //grab button 
        
            for(var j=0; j < box.length; j++){

            if(event.target != box[j] && event.target.parentNode != box[j] && event.target.parentNode.parentNode != box[j] && event.target.parentNode.parentNode.parentNode != box[j] && event.target.parentNode.parentNode.parentNode.parentNode != box[j]) {
                box2[j].id = ""; 
                but[j].innerHTML = "Show more";
           } 
           
                
                
        }
    });
    
    /* ---------------------------------------------------------------------- */
    //tab-2 Armour fade-to-left
    var armor = document.getElementsByClassName('armour')[0];
    var wings = document.getElementsByClassName('wings')[0];
    var tab2 = document.querySelector('.tabs li:nth-child(2)');
    var tab3 = document.querySelector('.tabs li:nth-child(3)');
    
    var otherTabs = document.querySelectorAll(".tabs li:nth-child(1), .tabs li:nth-child(3), .tabs li:nth-child(4) "); 
    var otherTabsThanWings = document.querySelectorAll(".tabs li:nth-child(1), .tabs li:nth-child(2), .tabs li:nth-child(4) "); 
    document.querySelector('#test2 p:nth-child(1)').style.color ="#fff";
    document.querySelector('#test3 p:nth-child(1)').style.color ="#fff";
   
    //tab-2 clicked
    tab2.addEventListener("click", function() {
        setTimeout(function(){
            
            document.querySelector('#test2 p:nth-child(1)').style.color ="#000";    //text transition to black
            armor.classList.add("armour-transition");   
        
        },1);
        
    });
    //when clicked other tab than tab-2
    otherTabs.forEach(function(tabButton) {
        tabButton.addEventListener("click", function() {
            if(tab2.classList.contains("armour-transition"))
                setTimeout(function(){ },1);
                armor.classList.remove("armour-transition");
                document.querySelector('#test2 p:nth-child(1)').style.color ="#fff";    //text back to white
            
        });
    });
    
    //tab-3 clicked
    tab3.addEventListener("click", function() {
        setTimeout(function(){
            
            document.querySelector('#test3 p:nth-child(1)').style.color ="#000";    //text transition to black
            wings.classList.add("wings-transition");   
        },1);
    });
    otherTabsThanWings.forEach(function(tabButton) {
        tabButton.addEventListener("click", function() {
            if(tab3.classList.contains("armour-transition"))
                setTimeout(function(){ },1);
                wings.classList.remove("wings-transition");
                document.querySelector('#test3 p:nth-child(1)').style.color ="#fff";    //text back to white
            
        });
    });

    /* ---------------------------------------------------------------------- */
    //sidenav implementation
      $('.sidenav').sidenav();
} //end of document ready

/*
setTimeout(function(){ 
    alert("This page has not been created for racism purposes, it's a website providing only historical events");
},1000);
*/













