
from flask import Flask, render_template, request
import pickle
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

class BookRecommender:
    def __init__(self, data):
        self.data = data
        self.data['book-details'] = self.data["Book-Author"] + " " + self.data["Publisher"]
        self.vector = self._vectorize()
        self.similarity = cosine_similarity(self.vector)
    
    def _vectorize(self):
        cv = CountVectorizer(stop_words="english")
        return cv.fit_transform(self.data["book-details"]).toarray()
    
    def recommend(self, book_title):
        book_title = book_title.replace(" ", "")
        index = self.data[self.data["Book-Title"] == book_title].index[0]
        distances = sorted(list(enumerate(self.similarity[index])), reverse=True, key=lambda x: x[1])
        recommendations = [self.data.iloc[i[0]]["Book-Title"] for i in distances[1:6]]
        return recommendations

# Charger le modèle
model_file_path = 'book_recommender_model.pkl'
try:
    with open(model_file_path, 'rb') as file:
        model = pickle.load(file)
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if model is not None:
        try:
            book_title = request.form['book_title']
            recommendations = model.recommend(book_title)
        except KeyError as e:
            recommendations = [f"Error: Missing form field {e}"]
        except ValueError as e:
            recommendations = [f"Error: Invalid value {e}"]
    else:
        recommendations = ["Error: Model is not loaded."]
   
    return render_template('index.html', recommendations=recommendations)

if __name__ == '__main__':
    app.run(debug=True)















