angular.module('codeforcesTags',[])
.factory('getCodeforcesTags',function(){
	tags=['2-sat','binary search','bitmasks','brute force',"chinese remainder theorem",'combinatorics','constructive algorithms','data structures','dfs and similar','divide and conquer','dp','dsu','expression parsing','fft','flows','games','geometry','graph matchings','graphs','greedy','hashing','implementation','interactive','math','matrices','meet-in-the-middle','number theory','probabilities','schedules','shortest paths','sortings','string suffix structures','strings',
	'ternary search','trees','two pointers'];
	return {tags};
});
