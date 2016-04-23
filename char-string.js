//output the number of times each letter is available in the word

function string(str){

	var strin = '';
	
	for(i=0;i <= str.length;i++) {

		var strin = strin + str.charAt(i);
			
	}

		return strin;
}

console.log(string('fly away'));



function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
console.log(getFrequency('come back'));