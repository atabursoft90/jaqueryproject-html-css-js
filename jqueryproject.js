//navbar background color change section start here

$(window).scroll(function(){
   $(".navbar").toggleClass('scrolled',$(this).scrollTop()>50);
});



//navbar background color change section start here


//text effect starts here
var typed = new Typed('.title', {
   strings: ['learn with fize',' I am a Fontent developer' ,' Software Engineering', ],
   typedSpeed:20,
   backSpeed:40,
   loop:true,
   smartBackspace: true,
 });

  //text effect End  here

  //to do  App
  $(".btn ").click(function(){
   var input =$(".input").val();
   console.log(input);
   var NewText=$("#ul").append('<p>'+input+ '<i class="bi bi-trash3"></i>'+'</p>')

  });
  $("#ul").on ('click', '.bi',function(){
   $(this).parent().hide();
  })


  //to do apps end here
// chart start

window.onload = function () {

   
   var option = {
      title: {
         text: "bar chart last 10 years"              
      },
      axisY:{
        title:"yearly value poarsent "
      },
      axisX:{
         title:"year with month %"
       },
      data: [              
      {
      
         type: "column",
         dataPoints: [
            { label: "January 2010",  y: 60  },
            { label: "anuary 2011", y: 90 },
            { label: "anuary 2012", y: 80 },
            { label: "anuary 2013",  y: 70  },
            { label: "anuary 2014",  y: 90 },
            { label: "anuary 2013",  y: 70  },
            { label: "anuary 2014",  y: 90 },
         ]
      }
      ]
   };
   
   $("#barchatContainer").CanvasJSChart(option);
   }
//chart end

//counter js starts here
 $(".count").counterUp({
    time:2000,
    delay:10
   
 })
 //carousel starts here

  
