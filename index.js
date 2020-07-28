class PhpDateTime {
	/**
	 * Date function
	 * 
	 * @param {*} formatStr 
	 * @param {*} timestamp 
	 */
	date = (formatStr, timestamp = null) => {
		let dateObj;

		// If there is a given timestamp create date object with that
		timestamp ? (dateObj = new Date(timestamp * 1000)) : (dateObj = new Date());
	
		// Pad left side of singular numbers with zero closure
		const leftPad = e => `0${e}`.slice(-2);
		
		// Data for format
		// Value titles are from https://www.w3schools.com/php/func_date_date_format.asp
		let formatDictionary = [
			{
				character: 'd',
				time: leftPad(dateObj.getUTCDate()),
				title: 'The day of the month (from 01 to 31)'
			},
			{
				character: 'm',
				time: leftPad(dateObj.getUTCMonth() + 1),
				title: 'A numeric representation of a month (from 01 to 12)'
			},
			{
				character: 'Y',
				time: dateObj.getFullYear(),
				title: 'A four digit representation of a year'
			},
			{
				character: 'H',
				time: leftPad(dateObj.getHours()),
				title: '24-hour format of an hour (00 to 23)'
			},
			{
				character: 'i',
				time: leftPad(dateObj.getMinutes()),
				title: 'Minutes with leading zeros (00 to 59)'
			},
			{
				character: 's',
				time: leftPad(dateObj.getSeconds()),
				title: 'Seconds, with leading zeros (00 to 59)'
			},
			// More will be added
		];
	
		let output = formatStr;
	
		// Replace characters with date values
		formatDictionary.forEach((e, i, o) => {
			output = output.replace(e.character, e.time);
		});
	
		return output;
	}
	
	/**
	 * Time function
	 */
	time = () => Math.floor(Date.now() / 1000);
}

module.exports = PhpDateTime;