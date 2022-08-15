document.body.getElementsByClassName("ue-c-article__premium")[0].remove();
activeP = null;
afterP = false;

for (let tag of document.body.getElementsByClassName("ue-c-article__body")[0].children) {
	switch (tag.tagName.toLowerCase()) {
		case 'p':
			activeP = tag;
			activeP.classList?.remove('hidden-content', 'signwall');
			afterP = true;
			break;
		case 'div':
			if (afterP) {
				strong = document.createElement("strong");
				strong.innerHTML = tag.innerHTML;
				activeP.appendChild(strong);
			}
			else {
				activeP.innerHTML = activeP.innerHTML + tag.innerHTML;
			}
			afterP = false;
			break;
		case 'strong':
			strong = document.createElement("strong");
			strong.innerHTML = tag.children[0].innerHTML;
			activeP.appendChild(strong);
			afterP = false;
			break;
		default:
			afterP = false;
			break;
	}
}