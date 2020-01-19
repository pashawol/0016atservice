var wx=0;
var wy=0;
var scroll=0;
var mod=0;
var lmenu=0;
function isValidEmail (email, strict)
{
    if ( !strict ) email = email.replace(/^\s+|\s+$/g, '');
    return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(email);
}


function UpdateFilter()
{
    /*var vendor='';
    var country='';
    var ltp='';
    var _class='';
    var cover='';
    var depth='';
    var stpower='';
    var ost='';
    var dst='';
    var _for='';
    var eta='';
    var capacity='';
    var plus='';
    var korpus='';
    
    var color='';
    var pricemin=$('#flt_price_min').val();
    var pricemax=$('#flt_price_max').val();
    var group=$('#grid').val();
    var cname=$('#cname').val();
    
    $('#vendor .flb_act').each(function(){
        vendor=vendor+$(this).attr('rel')+'@';
    });
    $('#country .flb_act').each(function(){
        country=country+$(this).attr('rel')+'@';
    });
    $('#ltp .flb_act').each(function(){
        ltp=ltp+$(this).attr('rel')+'@';
    });
    $('#class .flb_act').each(function(){
        _class=_class+$(this).attr('rel')+'@';
    });           
    $('#cover .flb_act').each(function(){
        cover=cover+$(this).attr('rel')+'@';
    });
        
    $('#stpower .flb_act').each(function(){
        stpower=stpower+$(this).attr('rel')+'@';
    });
    
    $('#ost .flb_act').each(function(){
        ost=ost+$(this).attr('rel')+'@';
    });
    
    $('#dst .flb_act').each(function(){
        dst=dst+$(this).attr('rel')+'@';
    });
    
    $('#for .flb_act').each(function(){
        _for=_for+$(this).attr('rel')+'@';
    });
    
    $('#eta .flb_act').each(function(){
        eta=eta+$(this).attr('rel')+'@';
    });
    
    $('#capacity .flb_act').each(function(){
        capacity=capacity+$(this).attr('rel')+'@';
    });
    
    $('#plus .flb_act').each(function(){
        plus=plus+$(this).attr('rel')+'@';
    });
    
    $('#korpus .flb_act').each(function(){
        korpus=korpus+$(this).attr('rel')+'@';
    });*/
    
    var vendor=$('#vendor').val()+'@';
    var country=$('#country').val()+'@';
    var ltp=$('#ltp').val()+'@';
    var _class=$('#class').val()+'@';
    var cover=$('#cover').val()+'@';
    var stpower=$('#stpower').val()+'@';
    var ost=$('#ost').val()+'@';
    var dst=$('#dst').val()+'@';
    var _for=$('#for').val()+'@';
    var eta=$('#eta').val()+'@';
    var capacity=$('#capacity').val()+'@';
    var plus=$('#plus').val()+'@';
    var korpus=$('#korpus').val()+'@';
    
    var color='';
    var pricemin=$('#flt_price_min').val();
    var pricemax=$('#flt_price_max').val();
    var group=$('#grid').val();
    var cname=$('#cname').val();
            
    
    $.get("admin/ddx.php?act=filter",{vendor:vendor,_class:_class,cover:cover,country:country,ltp:ltp,stpower:stpower,ost:ost,dst:dst,_for:_for,eta:eta,capacity:capacity,plus:plus,korpus:korpus,pricemin:pricemin,pricemax:pricemax,group:group},function(data){
       //$('.grp_items').html(data);
       window.document.location=data;
    });
    
}

function UpdateFLTMain(ctid,itm)
{    
    var vendor=$(itm).parent().find('#t_vendor').val()+'@';
    var country=$(itm).parent().find('#t_country').val()+'@';
    var ltp=$(itm).parent().find('#t_ltp').val()+'@';
    var _class=$(itm).parent().find('#t_class').val()+'@';
    var cover=$(itm).parent().find('#t_cover').val()+'@';
    var stpower=$(itm).parent().find('#t_stpower').val()+'@';
    var ost=$(itm).parent().find('#t_ost').val()+'@';
    var dst=$(itm).parent().find('#t_dst').val()+'@';
    var _for=$(itm).parent().find('#t_for').val()+'@';
    var eta=$(itm).parent().find('#t_eta').val()+'@';
    var capacity=$(itm).parent().find('#t_capacity').val()+'@';
    var plus=$(itm).parent().find('#t_plus').val()+'@';
    var korpus=$(itm).parent().find('#t_korpus').val()+'@';
    
    var group=ctid;    
    
    $.get("admin/ddx.php?act=filter",{vendor:vendor,_class:_class,cover:cover,country:country,ltp:ltp,stpower:stpower,ost:ost,dst:dst,_for:_for,eta:eta,capacity:capacity,plus:plus,korpus:korpus,group:group},function(data){
       //$('.grp_items').html(data);
       window.document.location=data;
    });
}


var menutouch=false;

$(document).ready(function() {   
   
   //$('.photos a,.prod_image').fancybox({arrows : true});
   
   $('.swbtn').click(function(){
    $('.s_menu_holder').slideToggle('slow');
    $('body').toggleClass('fxx'); 
    $('.menu_holder').toggleClass('m_fix_mob');
    return false;
   });
   
   /*
   $('.cct_ddnn').each(function(){
       if($('#ctdn'+$(this).attr('rel')).find('a').length)
       {
        $(this).click(function(){
           $('#ctdn'+$(this).attr('rel')).slideDown('slow');
           return false; 
        });
       } 
    });*/
   
   
   
   $(window).scroll(function(){
    var ofs=$('.ofs').offset().top;
    if(ofs>215)
    {
        $('.menu_holder').addClass('m_fix');
        $('.ddn_menu'). addClass('ddn_fix');
        if(!menutouch)
        {
            $('.mddn').hide();
        }    
    }
    else
    {
        $('.menu_holder').removeClass('m_fix');
        $('.ddn_menu'). removeClass('ddn_fix');
        if(!menutouch)
        {
            $('.mddn').show();
        }
    }
    
   });
   
   
   
   $('.cab_holder .leftmenu a').unbind();
    $('.cab_holder .leftmenu a').click(function(){
        $('.cab_holder .leftmenu a').removeClass('active');
        $(this).addClass('active');
        var href=$(this).attr('href');
        LoadTpl(href);
        return false;
    });
   
   
    $('#_subs').click(function(){
        $('#sent').fadeIn('slow');
       var capt='Подписаться на рассылку';
       var details='';
       var name='';
       var phone='';
       var email=$('#subs_email').val();
       
       $.post("admin/ddx.php?act=sendForm",{capt:capt,details:details,name:name,phone:phone,email:email});
       
       return false;
    });
    
    $('#tocall').click(function(){
       $('#_order').find('._capt').html($(this).html());
       $('#_order').fadeIn('slow');
       
       $('#_order .ordering').hide();
        
       
       return false;
    });
    
    
   
   
   
   
   
    $('._cb_close').click(function(){
       $(this).parent().parent().parent().fadeOut('slow');
       return false; 
    });
    
    
    $('.ord').click(function(){
        $('#_order').find('._capt').html('Заказать обратный звонок');
       $('#_order').fadeIn('slow');
       $('.ordering').html('');
       $('.ordering').hide();
       return false; 
    });
    
    $('._cb_send').click(function(){
       $('#_order').fadeOut('slow');
       $('#sent').fadeIn('slow');
       var capt=$('#_order').find('._capt').html();
       var details=$('.ordering').html();
       var name=$('#as_name').val();
       var phone=$('#as_phone').val();
       var email=$('#as_email').val();
       
       $.post("admin/ddx.php?act=sendForm",{capt:capt,details:details,name:name,phone:phone,email:email});
       
       return false; 
    });
    
    $('.call a').click(function(){
       $('#sent').fadeIn('slow');
       return false; 
    });
    
    
    $('#oneclick').click(function(){
       $('#_order').find('._capt').html($(this).html());
       $('#_order').fadeIn('slow');
       $('#_order .ordering').html('');
       $('#_order .ordering').html($('.prod-page .name').html());
       if($('#_order .ordering').html()=='')
       {
        $('#_order .ordering').hide();    
       }
       else
       {
        $('#_order .ordering').show();
       }
       return false; 
    });
    
    
    $('#dolog').click(function(){
       $('#login').fadeIn('fast');
       return false; 
    });
    
    $('#logout').click(function(){
       Logout();
       return false; 
    });
    
    $('._cbin').click(function(){
       $('#_login').fadeIn('slow');
       return false; 
    });
    
    $('#_lgn').click(function(){
       
    var login=$('#as_login').val();
       var pass=$('#as_pass').val();
       $.post("/admin/ddx.php?act=login", { login: login,pass: pass },
	    function(data){
            if(data=='OK'){window.document.location='/my_profile';}
            else{$('#wrong').fadeIn('slow');}
	    });
       return false; 
    });
    
    var cl=false;
    
    $('#login').click(function(){
       if(!cl)
        $(this).fadeOut('fast'); 
    });
    
    $('.dialog').hover(function(){cl=true},function(){cl=false});
   
   
   
   $('.tablinks a').click(function(){
    var rel=$(this).attr('rel');
    $('.tablinks a').removeClass('active');
    $(this).addClass('active');
    $('.tbss').fadeOut('fast');
    $('#tab'+rel).fadeIn('slow');
    $('.lf_cap').removeClass('lf_cap1');
    $('.lf_cap').removeClass('lf_cap2');
    $('.lf_cap').removeClass('lf_cap3');
    $('.lf_cap').removeClass('lf_cap4');
    $('.lf_cap').addClass('lf_cap'+rel);
    return false;
   });
   
   $('.filter_sw_h a').click(function(){
        $('.ls_pda').slideToggle('slow');
   });
   
   $('.flt_button').click(function(){
    
        var rel=$(this).attr('rel');
        UpdateFLTMain(rel,$(this));
        return false;
   });
   
   $('.cct_ddnn').click(function(){
    var rl=$(this).attr('rel');
    if($('#ctdn'+rl).length)
    {
        $('.ct_ddn').slideUp('slow');
        $('#ctdn'+rl).slideDown('slow');
        return false;
    }
   });
   
   $('.tabs a').click(function(){
        var tb=$(this).attr('rel');
        $('.tabs a').removeClass('act');
        $(this).addClass('act');
        $('.fbody').slideUp('slow');
        $('#'+tb).slideDown('slow');
        return false;
   });
   
   
   $('#fb_add').click(function(){
       var  fok=true;
       
       var rating=$('#fb_rating').val();
       var name=$('#fb_name').val();
       var city=$('#fb_city').val();
       var comment=$('#fb_comment').val();
       var parent=$('#fb_parent').val();
       
       ///console.log(rating);
       $('.wrn').slideUp('slow');
       
       if(parseInt(rating)<1)
       {
        fok=false;
        $('#rate_warn').show();
       }
       if(name.length<3)
       {
        fok=false;
        $('#name_warn').show();
       }
       if(comment.length<10)
       {
        fok=false;
        $('#comment_warn').show();
       }
       
       
       if(!fok)
        return false;
        
       $(this).hide();
       $('.stars').hide();
       $('.add_otziv input,.add_otziv textarea').hide();
       $('#done').show();
        
       $.post('/admin/ddx.php?act=addcomment',{name:name,city:city,comment:comment,rating:rating,parent:parent});
        
       return false;       
    });
    $('.add_otziv .stars a').click(function(){
        var ind=parseInt($(this).attr('rel'));
        var stars=$('.add_otziv .stars a');
        $(stars).removeClass('yes');
        for(i=0; i<ind; i++)
        {
            $(stars[i]).addClass('yes');
        }
        starsind=ind;
        $('#fb_rating').val(starsind);
        return false;
    });
    
    $('.add_otziv .stars a').hover(function(){
        var ind=parseInt($(this).attr('rel'));
        var stars=$('.add_otziv .stars a');
        $(stars).removeClass('yes');
        for(i=0; i<ind; i++)
        {
            $(stars[i]).addClass('yes');
        }
    },function(){
        var stars=$('.add_otziv .stars a');
        $(stars).removeClass('yes');
        for(i=0; i<starsind; i++)
        {
            $(stars[i]).addClass('yes');
        }
    });
   
   
   
   $('.filter_block select').change(function(){
       //$(this).toggleClass('flb_act');
       UpdateFilter();
       $('.fl_apply').fadeIn('slow');
       return false; 
    });
    
    $('#filter_apply').click(function(){
       UpdateFilter();
       return false; 
    });
    
    $('#filter_reset').click(function(){
       var cname=$('#cname').val();
       window.document.location='/'+cname;
       return false; 
    });
   
   
   wy=$(window).height();
   mod=Math.ceil(wy/2)+100;
   $(window).scroll(function(){
        
    
   });
   $(window).resize(function(){
    arrange();
   });   
  arrange();
  
  
  if($('.slider_holder').length){
		$('.slider_holder').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		});
	}
    
    $('.sandwich').click(function(){
       $('.s_menu_holder').slideToggle('slow');
       $('body').toggleClass('fxx');
       return false; 
    });
    
    if($('.slc').length){
		$('.slc').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
            variableWidth: true					
		});
	}
    if($('.slc2').length){
		$('.slc2').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
            variableWidth: true						
		});
	}
  
  $('.mmholder>a').hover(function(){    
    /*if(lmenu==$(this).attr('rel'))
    {
        
        return;
    }
    else
    {
        lmenu=$(this).attr('rel');
    }*/
    var rel=$(this).attr('rel');
    $('.mmholder>a').removeClass('act');
    $(this).addClass('act');    
    $('.ddnmenu').slideUp('fast');
    var x=$(this).offset().left;
    var y=$(this).offset().top+$(this).height();
    $('#'+rel).find('.colb').width($(this).width());
    $('#'+rel).find('.colb').height($(this).height());
    $('#'+rel).find('.colb').css('marginTop','-'+$(this).height()+'px');
    $('#'+rel).css('left',x+'px');
    $('#'+rel).css('top',y+'px');
    $('#'+rel).slideDown('slow');    
  },function(){
    var rel=$(this).attr('rel');
    //$('#'+rel).slideUp('fast');
    if(!$('#'+rel).length)
    {
        $('.mmholder>a').removeClass('act');
    }
  });
  
  $('.ddnmenu').hover(function(){},function(){$(this).slideUp('fast');$('.mmholder>a').removeClass('act');});
  
  $('.bsi_plus').click(function(){
    var ob=$(this).parent().parent().parent();
    var quant=parseInt($(ob).find('#__quant').val());
    var price=parseFloat($(ob).find('#__price').val());
    var cur=parseInt($(ob).find('.bsi_quant').val());
    var id=$(ob).find('#__ids').val();
    cur++;
    if(!cur)
            cur=1;
    if(cur>quant)
        cur=quant;
    
    $(ob).find('.bsi_quant').val(cur);
    $(ob).find('#__sum').html(cur*price);
    RecalcBS(id,cur);    
        
    return false;
   });
   
   $('.bsi_minus').click(function(){
    var ob=$(this).parent().parent().parent();
    var price=parseFloat($(ob).find('#__price').val());
    var cur=parseInt($(ob).find('.bsi_quant').val());
    var id=$(ob).find('#__ids').val();
    cur--;
    if(!cur)
            cur=1;
    if(cur<1)
        cur=1;
    
    $(ob).find('.bsi_quant').val(cur);
    $(ob).find('#__sum').html(cur*price);
    RecalcBS(id,cur);    
        
    return false;
   });
   
   $('.bsi_quant').keyup(function(){
        var ob=$(this).parent().parent().parent();
        var cur=parseInt($(this).val());
        var quant=parseInt($(ob).find('#__quant').val());
        var price=parseFloat($(ob).find('#__price').val());
        var id=$(ob).find('#__ids').val();
        
        if(!cur)
            cur=1;
        
        if(cur>quant)
            cur=quant;
            
        if(cur<1)
            cur=1;
            
        $(this).val(cur);
        $(ob).find('#__sum').html(cur*price);
            
        RecalcBS(id,cur)
   });
  
  
 });


var event_id=0;
function Log(txt,mode)
{
    event_id++;
    if(!mode)
        console.log(event_id+'>>'+txt);
    else
    {
        switch(mode)
        {
            case "info":
                console.info(event_id+'>>'+txt);
            break;
            case "warn":
                console.warn(event_id+'>>'+txt);
            break;
            case "error":
                console.error(event_id+'>>'+txt);
            break;            
            default:
                console.log(event_id+'>>'+txt);
            break;
        }
    }
}


function arrange()
{
    wx=$(window).width();
    wy=$(window).height();
    //console.clear();
                
        
}



 function LoadTpl(tpl)
 {
    $('.cab_container').fadeOut('slow',function(){
        $('.cab_container').html('<div style="text-align: center; padding: 100px;"><img src="images/loading.gif"/></div>');
        $('.cab_container').show();
        $('.cab_container').load('/admin/tpls/tpl_loader.php?tpl='+tpl);
    });    
    
 }                