/**
 * Created by colinjlacy on 12/4/15.
 */
module.exports = function() {
	var done = this.async(),
		questions = [
			{
				name: 'directiveName',
				message: 'What would you like to name your directive?',
				default: 'awesomeDir'
			}
		];

	this.prompt(questions, (answers => {
		this.data = answers;
		this.log(this.data);
		done();
	}).bind(this));
};