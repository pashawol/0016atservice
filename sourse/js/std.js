function AddToBasket(ids,fx)
{
    
    var options = {};
    options = { to: ".basket", className: "ui-transfer_gray" };
    
        
    $(fx).effect('transfer', options, 1000, function () {$('.basket').load('admin/basket.php?act=add_goods&id='+ids);});

    
    //$('#tocart').effect('pulsate', options, 1000, function(){});
      
}

function AddToCompare(ids,fx)
{
    
    $('#comp').slideDown('slow');
	var options = {};
    options = { to: "#comp", className: "ui-transfer_gray" };
    $(fx).effect('transfer', options, 1000, function () {$('#comp').load('admin/basket.php?act=add_compare&id='+ids);});
  
}

function AddToFavorites(ids)
{
    var options = {};
    options = { to: ".favorite", className: "ui-transfer_gray" };
    $('#ida'+ids).effect('transfer', options, 1000, function () {
        $.post('admin/ddx.php?act=add_favorites&id='+ids,{},function(data){
          $('.favorite').html(data);  
        });
    });
}

function ResetCompare()
{
	//$('#comparebox').slideUp('fast');
	$('#comp').load('admin/basket.php?act=compare_reset');
	
}

function DropCompare(ids)
{
	$('#comp').load('admin/basket.php?act=drop_compare&id='+ids);
}

function AddToBasketLst(ids,fx)
{
    //var v_id=$(fx).find('.sizesel .sel').html();
    
    var options = {};
    options = { to: ".basket", className: "ui-transfer_gray" };
    var variant=$('.sizesel .sel').html();    
    $(fx).effect('transfer', options, 1000, function () {$('.basket').load('admin/basket.php?act=add_goods&id='+ids+'&vname='+variant);});  
}
function Dummy()
{
    
}

function FastSearch()
{
    
    var SString=$('#ss').val();
    if(SString.length<3)
    {
        $('.fastsearch').slideUp('slow');
        return;
    }
    //$('.fastsearch').slideUp('slow');
    $.post("admin/ddx.php?act=search", { ss: SString },
    function(data){
        $('.fastsearch').load("admin/ddx.php?act=get");
    });
}

var defMsg='Поиск по сайту';
function ClearSS()
{
	var dt=$('#ss').val();
	if(dt==defMsg)
	{
		$('#ss').val('');	
	}    
}
function BlurSS()
{
    var dt=$('#ss').val();
    if(dt=='')
    {
        $('#ss').val(defMsg);
    }	
}

function closeBS()
{
    $('.basket_data').show();
    $('.basket_form').hide();
    $('.basket_bg').fadeOut('slow');
    $('#basket').load('admin/basket.php?act=basket_stat'); 
}
function LoadBasket()
{
    //$('.basket_sent').hide();
    //$('.basket_summary').show();
    $('#_basket_data').load('admin/basket.php?act=get_full');
    $('._summary').load('admin/basket.php?act=get_summary');
    //$('.basket_bg').fadeIn('slow');
}
function RecalcBS(ids,val)
{
    $('._summary').load('admin/basket.php?act=recalc_summary&id='+ids+'&val='+val);
    $('#basket').load('admin/basket.php?act=basket_stat'); 
}
function RecalcBSE()
{
    $('._summary').load('admin/basket.php?act=get_summary');
    $('#basket').load('admin/basket.php?act=basket_stat'); 
}
function delBSitem(ids)
{
    //$('.basket_data').load('admin/basket.php?act=del_bsi&id='+ids);
    $.post('admin/basket.php?act=del_bsi&id='+ids,function(data){
        $('#bsi'+ids).remove();
        $('body').append(data);
        RecalcBSE();    
    });
    
}
function ShowBSForm()
{
   var sbsc=true;
   $('.changevar').each(function(){
        $ob=$(this);
        if(($ob).val()=='na')
        {
            sbsc=false;
            //$($ob).parent().addClass('restrict');
		    $($ob).parent().effect('highlight',  1500, function(){});
        }
   });
   
   if(!sbsc)
    return false;
   $('.basket_sent').hide();
   $('.basket_summary').show();
   $('.basket_data').slideUp('slow');
   $('.basket_form').slideDown('slow');
   $('#fm').hide();
   $('#dv').show(); 
   PushST(2);
}
function CancelDelivery()
{
   $('#fm').show();
   $('#dv').hide(); 
   $('.basket_data').slideDown('slow');
   $('.basket_form').slideUp('slow');
}
function DeliveryOrder()
{
    
    console.log("Delivering order...");
    //$('.basket_data').load('admin/basket.php?act=deliveryOrder');
    
    var firstname=$('#firstname').val();
    var secondname=$('#secondname').val();
    var lastname=$('#lastname').val();
    
    var region=$('#form_region').val();
    var city=$('#form_city').val();
    
    var addr=$('#addr').val();
    var phone=$('#phone').val();
    var email=$('#email').val();
    var data=$('#form_data').val();
    
    var deliverysvc=$('#form_deliverysvc').val();
    var deliveryaddr=$('#form_deliveryaddr').val();
    var paymethod=$('#form_paymethod').val();
    
    if(phone.length<7)
    {
		var options = {};
		$('#phone').addClass('restrict');
		$('#phone').effect('pulsate', options, 1500, function(){$("#phone").removeClass('restrict')});
        console.log("Phone not entered canceling");
		return;    	
    }
    if(email.length<5)
    {
        var options = {};
		$('#email').addClass('restrict');
		$('#email').effect('pulsate', options, 1500, function(){$("#email").removeClass('restrict')});
        console.log("Email not entered canceling");
		return;   
    }
    
    
    $('.basket_sent').slideDown('slow');
    $('.basket_form').slideUp('slow'); 
    $('._summary').hide();
    
    $.post("admin/basket.php?act=deliveryOrder", { firstname: firstname, secondname: secondname, lastname: lastname, region:region, city:city, addr: addr, phone: phone, email: email, data: data, deliverysvc:deliverysvc, deliveryaddr:deliveryaddr, paymethod:paymethod },
    function(data){
        console.log(data);
        $('#basket').load('admin/basket.php?act=basket_stat'); 
    });
    PushST(3); 
}
function VarSwitch()
{
    $('.varswitch a').unbind();
    $('.varswitchlist a').unbind();
    
    $('.varswitch a').click(function(){
       $(this).parent().parent().find('.varswitchlist').slideToggle('fast');
       return false; 
    });
    
    $('.varswitchlist a').click(function(){
                        
        var OldLnk=$(this).parent().parent().find('.varswitch a').html();
        var OldSpan=$(this).parent().parent().find('.varswitch a span').html();
        var OldId=$(this).parent().parent().find('.varswitch a .vid').html();
        
        $(this).parent().parent().find('.varswitch a').html(($(this).html()));
        $(this).parent().parent().find('.varswitch a span').html(($(this).find('span').html()));
        $(this).parent().parent().find('.varswitch a .vid').html(($(this).find('.vid').html()));
        
                        
        
        $(this).parent().slideUp('fast');
        
        $(this).parent().parent().find('.price_n').html($(this).find('span').html()+' <span>грн.</span>');
        
        $(this).html(OldLnk);
        $(this).find('span').html(OldSpan);
        $(this).find('.vid').html(OldId);
        return false;        
    }); 
}

                