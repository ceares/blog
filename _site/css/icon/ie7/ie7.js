/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'7yeicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home2': '&#xe901;',
		'icon-pencil': '&#xe905;',
		'icon-folder-open': '&#xe930;',
		'icon-price-tag': '&#xe935;',
		'icon-price-tags': '&#xe936;',
		'icon-envelop': '&#xe945;',
		'icon-compass': '&#xe949;',
		'icon-clock': '&#xe94e;',
		'icon-calendar': '&#xe953;',
		'icon-bubble': '&#xe96b;',
		'icon-bubbles3': '&#xe96f;',
		'icon-user': '&#xe971;',
		'icon-search': '&#xe986;',
		'icon-fire': '&#xe9a9;',
		'icon-menu': '&#xe9bd;',
		'icon-link': '&#xe9cb;',
		'icon-bookmark': '&#xe9d2;',
		'icon-arrow-up2': '&#xea3a;',
		'icon-embed': '&#xea7f;',
		'icon-embed2': '&#xea80;',
		'icon-mail4': '&#xea86;',
		'icon-github': '&#xeab1;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
