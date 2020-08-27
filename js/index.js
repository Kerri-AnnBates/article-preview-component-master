const shareBtn = document.querySelector(".share__btn");
const shareBtnBackground = document.querySelector(".footer__share button");
const shareBtnImage = document.querySelector(".share__btn img");
const shareElement = document.querySelector(".footer__share-more");
const iconArr = ["/images/icon-share.svg", "/images/icon-share-light.svg"];

shareBtn.addEventListener("click", () => {
	shareElement.classList.toggle("show");
	shareBtnBackground.classList.toggle("show");
	imageSource = shareBtnImage.src;

	if (!imageSource.includes(iconArr[1])) {
		shareBtnImage.src = iconArr[1];
	} else {
		shareBtnImage.src = iconArr[0];
	}
});