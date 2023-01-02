// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

const solution = str => {
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
			return false;
		}
	}

	return true;
};

module.exports = solution;
