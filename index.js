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

	/**
	 * Fetch a single entry about a certain Discord user
	 * @param {String} owner_id The Discord ID of the user whose entry you want to get.
	 */
	async selfentry(owner_id) {
		let i = await fetch(`https://repldex.com/api/selfentry/${owner_id}`).then((res) => { 
    		return res.json();
  		}).catch((err) => {
			throw new Error(err);
		});
		
		return i;
	}
}

module.exports = Client;