document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchmove", touch2Mouse, true);
document.addEventListener("touchend", touch2Mouse, true);


function touch2Mouse(e)
{
    let theTouch = e.changedTouches[0];
    let mouseEv;

    switch(e.type)
    {
        case "touchstart": mouseEv="mousedown"; break;  
        case "touchend":   mouseEv="mouseup"; break;
        case "touchmove":  mouseEv="mousemove"; break;
        default: return;
    }

    let mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);
}


$(document).ready(function(){

    $('.close').on('click', function(){
        $('#sidebarOfPage').addClass('hide');
        $('#collapsebtn').removeClass('hide');
    });
    
    $('#collapsebtn').on('click', function(){
        $('#collapsebtn').addClass('hide');
        $('#sidebarOfPage').removeClass('hide');
    });
    
    $('#collapsebtnMd').on('click', function(){
        if($('#sidebarCont').hasClass('d-none')){
            $('#sidebarCont').removeClass('d-none');
        }
        else{
            $('#sidebarCont').addClass('d-none');
        }
    });
      
    $( function() {
        $( "#sortableDiv" ).sortable();
        $( "#sortableDiv" ).disableSelection();
    } );
    
    $( function() {
        $( "#sortableList" ).sortable();
        $( "#sortableList" ).disableSelection();
    } );

});