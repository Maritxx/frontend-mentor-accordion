const faqButtons = document.getElementsByClassName(".faqQuestion");

faqButtons.forEach((FaqQuestion) => {
	faqQuestion.addEventListener("click", () => {
		if (faqQuestion.classList.contains("active")) {
			faqQuestion.classList.remove("active");
		} else {
			const faqQuestionsWithActive = document.getElementsByClassName(".active");
			faqQuestionsWithActive.forEach((faqQuestionWithActive) => {
				faqQuestionWithActive.classList.remove("active");
			});
			faqQuestion.classList.add("active");
		}
	});
});