/**
 * Created by colinjlacy on 12/4/15.
 */
const
	base = require('yeoman-generator').Base;

module.exports = base.extend({
	prompting: require('./prompting'),
	writing: require('./writing')
});