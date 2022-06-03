function createroom()
{
	document.getElementsByClassName('content')[0].style.filter="blur(4px)";
	document.getElementsByClassName('pichalf')[0].style.filter="blur(6px)";
	document.getElementsByClassName('content')[0].style.pointerEvents="none";
	document.getElementsByClassName('IntoTheRoom')[0].style.visibility="visible";
	document.getElementsByClassName('IntoTheRoom')[0].style.opacity="1";
}
document.addEventListener('mouseup', function(e) {
				var container = document.getElementsByClassName('IntoTheRoom')[0];
				var container2 = document.getElementsByClassName('content')[0];
				var container3 = document.getElementsByClassName('pichalf')[0];
					if (!container.contains(e.target)) {
							container.style.visibility = 'hidden';
						container.style.opacity = '0';
						container2.style.filter="blur(0px)";
						container2.style.pointerEvents="all";
						container3.style.filter="blur(0px)";
					}
});
async function getUser(val)
{
	let url = 'https://codeforces.com/api/user.info?handles='+val;
	try {
			let res = await fetch(url);
			return await res.json();
		} catch (error) {
				console.log('hello');
						}
}
async function validatecfid(element)
{
	cfidelement=document.getElementsByClassName('cfid')[0];
	val=cfidelement.value;
	result=await getUser(val);
	if(result["status"]=='OK')
		element.submit();
	else
		document.getElementById('validation_message').className='visible';
}
