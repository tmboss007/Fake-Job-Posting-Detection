# Fake Job Posting Detection System

## 📌 Project Overview
This project is an end-to-end Machine Learning system designed to identify fraudulent job postings by analyzing both textual and structured job-related data. The model utilizes Natural Language Processing (NLP) techniques and ensemble classification models to accurately flag scam job postings, protecting job seekers from potential fraud.

## 🎯 Objectives
- Perform comprehensive Exploratory Data Analysis (EDA) on the fake job postings dataset.
- Clean and preprocess unstructured textual data (Job Descriptions, Requirements, Company Profiles) using NLTK.
- Extract features using **TF-IDF** and **CountVectorizer**.
- Engineer structured features (e.g., presence of logos, salary info, word counts, and red-flag keywords).
- Train and compare multiple ML models: Logistic Regression, Naive Bayes, Random Forest, and Gradient Boosting.
- Perform hyperparameter tuning to optimize model performance.
- Build a predictive function for real-world unseen data.

## 📊 Dataset
The dataset contains information about job postings, including structured data (employment type, company size, industry) and unstructured text (description, requirements). 
- **Legitimate Postings:** ~67%
- **Fraudulent Postings:** ~33%
*(Note: The dataset `fake_job_postings.csv` is included in this repository).*

## 🛠️ Technologies Used
- **Python 3.x**
- **Pandas & NumPy** (Data Manipulation)
- **Matplotlib & Seaborn** (Data Visualization)
- **NLTK** (Text Processing, Tokenization, Lemmatization, Stop-word removal)
- **Scikit-Learn** (Machine Learning, Vectorization, GridSearchCV, Evaluation Metrics)

## 🚀 Key Findings & Results
- **Text Vectorization:** TF-IDF outperformed standard CountVectorizer.
- **Top Features:** Presence of a company logo, presence of red-flag keywords ("earn", "guaranteed", "easy"), and detailed job requirements are the strongest predictors of legitimacy.
- **Best Model:** **Random Forest Classifier** achieved the highest F1-Score after hyperparameter tuning.

## ⚙️ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/tmboss007/Fake-Job-Posting-Detection.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Fake-Job-Posting-Detection
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Open the Jupyter Notebook:
   ```bash
   jupyter notebook Fake_Job_Posting_Detection.ipynb
   ```
5. Run all cells to see the data preprocessing, training, and evaluation in action.

## 📈 Limitations
- The model relies heavily on historical data patterns; highly sophisticated and new forms of fraud might bypass the initial filters.
- Imbalanced dataset considerations required careful metric selection (F1-Score and ROC-AUC rather than raw accuracy).

## 🧑‍💻 Author
Built as part of an Advanced AI/ML Internship.
