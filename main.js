const faqQuestions = document.querySelectorAll(".faqQuestion");

faqQuestions.forEach((faqQuestion) => {
	faqQuestion.addEventListener("click", () => {
		if (faqQuestion.classList.contains("active")) {
			faqQuestion.classList.remove("active");
		} else {
			const faqQuestionsWithActive = document.querySelectorAll(".active");
			faqQuestionsWithActive.forEach((faqQuestionWithActive) => {
				faqQuestionWithActive.classList.remove("active");
			});
			faqQuestion.classList.add("active");
		}
	});
});