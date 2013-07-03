/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'beast-awards-icon-font\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-close-x' : '&#xe000;',
			'icon-caret-up' : '&#xe001;',
			'icon-caret-right' : '&#xe002;',
			'icon-caret-left' : '&#xe003;',
			'icon-caret-down' : '&#xe004;',
			'icon-replay' : '&#xe005;',
			'icon-close-x-circle-filled' : '&#xe006;',
			'icon-close-x-circle' : '&#xe007;',
			'icon-share' : '&#xe008;',
			'icon-search' : '&#xe009;',
			'icon-arrow-west' : '&#xe00a;',
			'icon-arrow-south' : '&#xe00b;',
			'icon-arrow-north' : '&#xe00c;',
			'icon-arrow-east' : '&#xe00d;',
			'icon-facebook' : '&#xe00e;',
			'icon-twitter' : '&#xe00f;',
			'icon-still_camera' : '&#xe010;',
			'icon-email' : '&#xe011;',
			'icon-expand' : '&#xe012;',
			'icon-contract' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};