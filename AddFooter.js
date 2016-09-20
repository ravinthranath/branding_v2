//ExecuteOrDelayUntilScriptLoaded(loadFooter, '/Style Library/Mizuho.Branding/js/jquery.min.js'); 
 window.onload = loadFooter;
 
 var root = 'branding/SitePages/';



function loadFooter(){
/* For Root Home Page 
---------------------- */
if(document.location.href.toLowerCase().indexOf("sitepages") > -1 && document.location.href.toLowerCase().indexOf("sitepages/forms") == -1){
   $("#contentBox").prepend("<div class='mizuho-navigation-style'><div class='pagetitle-tile'>CS</div><h3>Corportate Site</h3><p>Description Here</p></div>");
}

if(window.parent.document.getElementsByClassName('mizuho-footer').length == 0){
    var subExtra = isRoot() ? "" : "<div class='mizuho-subsite-footer-top'><div class='contentwrapper'><ul><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/HUMAN_RESOURCES.png' /><p>HUMAN <br/>RESOURCES</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/POLICIES_PROCEDURES.png' /><p>POLICIES & <br/>PROCEDURES</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/COMPLIANCE.png' /><p>COMPLIANCE</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/MY_SITE.png' /><p>MY SITE</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/QUICK_LINKS.png' /><p>QUICK LINKS</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/ONBOARDING.png' /><p>ONBOARDING</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/MARKETING.png' /><p>MARKETING</p></a></li><li><a href='#'><img src='/Style Library/Mizuho.Branding/Images/subsiteFooter/TECHNICAL_SUPPORT.png' /><p>TECHNICAL<br/> SUPPORT</p></a></li></ul></div></div>";

var footerHTML = "<div class='mizuho-footer'>"+subExtra+"<div class='contentwrapper'><div class='all-addresses'><div class='sep-address'><a href='javascript:void(0);'><i class='fa fa-sitemap'></i> SITE MAP</a></div><div class='sep-address'><h5>New York</h5><p>Corporate Headquarters<br>Mizuho Securities USA Inc.<br>320 Park Avenue<br>12th Floor<br>New York, NY 10022<br>212-209-9300</p></div><div class='sep-address'><h5>Hoboken</h5><p>Waterfront Corporate Center<br>111 River Street<br>Suite 1100<br>Hoboken, NJ 07030<br>201-626-1000</p></div><div class='sep-address'><h5>Philadelphia</h5><p>Two Logan Square<br>100 N, 18th Street<br>Suite 326<br>Philadelphia, PA 19103<br>267-235-1722</p></div><div class='sep-address'><h5>Boston</h5><p>125 High Street<br>21st Floor<br>Boston, MA 02210<br>617-235-1722</p></div><div class='sep-address'><h5>Atlanta</h5><p>3455 Peachtree Road<br>5th Floor<br>Atlanta, GA 30326<br>404-995-6830</p></div><div class='sep-address'><h5>Chicago</h5><p>311 South Wacker Drive<br>Suite 700<br>Chicago, IL 60606<br>312-294-8800</p></div><div class='sep-address'><h5>San Francisco</h5><p>3 Embarcadero Center<br>Suite 1620<br>San Francisco, CA 94111<br>415-268-5500</p></div><div class='sep-address'><h5>London</h5><p>Futures Division<br>Bracken House<br>One Friday Street<br>London EC4M 9JA England<br>44-20-7776-5800</p></div></div></div></div>";
	
$("#s4-workspace").append(footerHTML);


}
//$($("#s4-workspace").not($("#s4-workspace").find('div.ms-dialogHidden'))).append(footerHTML);

}
function isRoot(){
	var url = document.location + '';
	url = url.toLowerCase();
	if(url.indexOf('kltech1')>=0){
		if(url.indexOf('branding/sitepages')>=0){
			return true;
		}else{
			return false;
		}
	}else{
		/*var httpSplit = url.split('://')[1];
		var sitePage = httpSplit.split('/')[1];
		sitePage = sitePage.toLowerCase();
		if(sitePage == 'sitepages'){
			return true;
		}else{
			return false;
		}*/
		if(_spPageContextInfo.webServerRelativeUrl == _spPageContextInfo.siteServerRelativeUrl){
			return true;
		}
                else{
			return false;
                }

	}      	

}
