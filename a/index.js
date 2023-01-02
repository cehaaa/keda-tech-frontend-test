// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

// run this file with node index.js to check the result

const solution = x => {
	for (let i = 1; i <= x; i++) {
		if (i % 15 === 0) {
			console.log("fish bash");
		} else if (i % 3 === 0) {
			console.log("fish");
		} else if (i % 5 === 0) {
			console.log("bash");
		} else {
			console.log(i);
		}
	}
};

solution(15);
solution(30);

// module.exports = solution;
