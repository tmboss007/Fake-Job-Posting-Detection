document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Demo Form Logic (Mock Analysis)
    const analyzeBtn = document.getElementById('analyze-btn');
    const demoResult = document.getElementById('demo-result');
    const loader = document.querySelector('.loader');
    const resultContent = document.querySelector('.result-content');
    const resultScore = document.getElementById('result-score');
    const resultText = document.getElementById('result-text');
    const jobDescInput = document.getElementById('job-desc');

    analyzeBtn.addEventListener('click', () => {
        const text = jobDescInput.value.trim().toLowerCase();

        if (!text) {
            alert("Please enter a job description to analyze.");
            return;
        }

        // Reset UI
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Analyzing...';
        demoResult.classList.remove('hidden');
        loader.classList.remove('hidden');
        resultContent.classList.add('hidden');
        resultScore.className = 'score-badge';

        // Mock network delay (2 seconds)
        setTimeout(() => {
            loader.classList.add('hidden');
            resultContent.classList.remove('hidden');

            // Very basic mockup logic based on text content
            const redFlags = ['easy money', 'guaranteed', 'investment', 'urgent', 'act now', 'wire transfer'];
            let isFraud = false;

            for (let flag of redFlags) {
                if (text.includes(flag)) {
                    isFraud = true;
                    break;
                }
            }

            if (isFraud) {
                resultScore.textContent = '94% Fraudulent';
                resultScore.classList.add('fraud');
                resultText.innerHTML = '⚠️ <strong>High Risk Detected:</strong> Our NLP model found multiple red-flag keywords and suspicious structural patterns common in job scams.';
            } else {
                resultScore.textContent = '87% Legitimate';
                resultScore.classList.add('legit');
                resultText.innerHTML = '✅ <strong>Low Risk:</strong> The text structure and vocabulary align with standard, legitimate job postings. No major red flags detected.';
            }

            analyzeBtn.disabled = false;
            analyzeBtn.textContent = 'Analyze Another Posting';
        }, 2000);
    });

    // Simple scroll animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .metric-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});
