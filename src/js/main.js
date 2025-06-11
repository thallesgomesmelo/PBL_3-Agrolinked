// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menuToggle");
	const menuClose = document.getElementById("menuClose");
	const mobileMenu = document.getElementById("mobileMenu");
	const body = document.body;

	// Create overlay element
	const overlay = document.createElement("div");
	overlay.className = "overlay";
	body.appendChild(overlay);

	// Open menu
	menuToggle.addEventListener("click", () => {
		mobileMenu.classList.add("active");
		overlay.classList.add("active");
		body.style.overflow = "hidden";
	});

	// Close menu
	menuClose.addEventListener("click", closeMenu);
	overlay.addEventListener("click", closeMenu);

	function closeMenu() {
		mobileMenu.classList.remove("active");
		overlay.classList.remove("active");
		body.style.overflow = "";
	}

	// Close menu when clicking on a link
	const mobileLinks = mobileMenu.querySelectorAll("a");
	mobileLinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	// Set current year in footer
	const currentYearElements = document.querySelectorAll("#currentYear");
	const currentYear = new Date().getFullYear();
	currentYearElements.forEach((element) => {
		element.textContent = currentYear;
	});

	// Tabs functionality
	const tabButtons = document.querySelectorAll(".tab-btn");

	if (tabButtons.length > 0) {
		tabButtons.forEach((button) => {
			button.addEventListener("click", function () {
				const tabId = this.getAttribute("data-tab");

				// Remove active class from all buttons and content
				document.querySelectorAll(".tab-btn").forEach((btn) => {
					btn.classList.remove("active");
				});

				document.querySelectorAll(".tab-content").forEach((content) => {
					content.classList.remove("active");
				});

				// Add active class to clicked button and corresponding content
				this.classList.add("active");
				document.getElementById(tabId).classList.add("active");
			});
		});
	}

	// Newsletter form submission
	const newsletterForms = document.querySelectorAll(".newsletter-form");

	if (newsletterForms.length > 0) {
		newsletterForms.forEach((form) => {
			form.addEventListener("submit", function (e) {
				e.preventDefault();

				const input = this.querySelector("input");
				const button = this.querySelector("button");
				const originalText = button.textContent;

				// Show loading state
				button.textContent = "Enviando...";
				button.disabled = true;

				// Simulate form submission
				setTimeout(() => {
					button.textContent = "Enviado!";
					input.value = "";

					// Reset button after 2 seconds
					setTimeout(() => {
						button.textContent = originalText;
						button.disabled = false;
					}, 2000);
				}, 1000);
			});
		});
	}
});
