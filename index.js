const fetch = require('node-fetch');

class Client {
	/**
	 * Fetch a single entry
	 * @param {String} entry_name The search query. This can either be the title, the id, or a fuzzy match for the title and content.
	 */
	async entry(entry_name) {
		let i = await fetch(`https://repldex.com/api/entry/${entry_name}`).then((res) => { 
    		return res.json();
  		}).catch(() => {
			throw new Error("Entry not Found!");
		});
		
		return i;
	}

	/**
	 * Fetch several entries
	 * @param {String} sort This either can be 'last_edited' or 'relevant'
	 * @param {Number} page The page number that you want to get the entries for. This is "0" indexed.
	 * @param {Number} limit How many entries will be returned per page.
	 * @param {String} search_query The search query. This can either be the title, the id, or a fuzzy match for the title and content.
	 */
	async fetchEntries(sort, page, limit, search_query) {
		// my arms hurt from typing so much
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