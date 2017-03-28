function diff(txt1, txt2) {
	arr1 = txt1.split('\n');
	arr2 = txt2.split('\n');

	lcsResult = lcs(arr1, arr2);
	if(lcsResult.length == 0) {
		arr = [];
		for(i = 0; i < arr1.length; i++) {
			arr.push("- " + arr1[i])
		}
		for(i = 0; i < arr2.length; i++) {
			arr.push("+ " + arr2[i])
		}
		return arr.join('\n');
	}


	arr = [];
	s1 = 0, s2 = 0;
	for(i = lcsResult.length - 1; i >= 0; i--) {
		for(j = s1; j < lcsResult[i][0]; j++) {
			arr.push("- " + arr1[j]);
		}
		for(j = s2; j < lcsResult[i][1]; j++) {
			arr.push("+ " + arr2[j]);
		}
		arr.push("  " + arr1[lcsResult[i][0]]);
		s1 = lcsResult[i][0] + 1;
		s2 = lcsResult[i][1] + 1;
	}

	while(s1 < arr1.length) {
		arr.push("- " + arr1[s1]);
		s1++;
	}
	while(s2 < arr2.length) {
		arr.push("+ " + arr2[s2]);
		s2++;
	}



	return arr.join('\n');
}

function lcs(arr1, arr2) {
	matrix = [];
	route = [];
	for(i = 0; i < arr1.length + 1; i++) {
		matrix.push([]);
		route.push([]);
		for(j = 0; j < arr2.length + 1; j++) {
			matrix[i].push(0);
			route[i].push([]);
		}
	}
	for(i = 1; i < arr1.length + 1; i++) {
		for(j = 1; j < arr2.length + 1; j++) {
			if(arr1[i - 1] == arr2[j - 1]) {
				matrix[i][j] = matrix[i - 1][j - 1] + 1;
				route[i][j] = [[i - 1, j - 1]].concat(route[i - 1][j - 1]);
			}
			else if(matrix[i - 1][j] >= matrix[i][j - 1]) {
				matrix[i][j] = matrix[i - 1][j];
				route[i][j] = route[i - 1][j];
			}
			else if(matrix[i - 1][j] < matrix[i][j - 1]) {
				matrix[i][j] = matrix[i][j - 1];
				route[i][j] = route[i][j - 1];
			}
			else {
				console.log("unexpected error");
			}

		}
	}

	return route[i - 1][j - 1];
}

























