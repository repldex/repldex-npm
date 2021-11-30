const fetch = require('node-fetch');

class Client {
	/**
	 * Fetch a single entry
	 * @param {String} entry The search query. This can either be the title, the id, or a fuzzy match for the title and content.
	 */
	async entry(entry) {
		let i = await fetch(`https://repldex.com/api/entry/${entry}`).then((res) => { 
    		return res.json();
  		}).catch(() => {
			throw new Error("Entry not Found!");
		});
		
		return i;
	}
}

module.exports = Client;