/**
 * Created by colinjlacy on 12/4/15.
 */
module.exports = function() {
	var name = this.data.directiveName;
	this.fs.copy(this.templatePath('_html.txt'), this.destinationPath(`./components/${name}/${name}.tpl.html`));
	this.fs.copyTpl(this.templatePath('_js.txt'), this.destinationPath(`./components/${name}/${name}.directive.js`), {data: this.data});
};