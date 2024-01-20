/*
    Sc Lumine-MD V2.0
    My Contact 0895-0808-2845
    
    Notes:
    BUKAN BUAT DIJUAL LAGI !!!
   
*/

const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
