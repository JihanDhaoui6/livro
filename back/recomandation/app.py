# from flask import Flask, request, jsonify
# import pickle
# from sklearn.feature_extraction.text import CountVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# import pandas as pd

# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# class BookRecommender:
#     def __init__(self, data):
#         self.data = data
#         self.data['book-details'] = self.data["Book-Author"] + " " + self.data["Publisher"]
#         self.vector = self._vectorize()
#         self.similarity = cosine_similarity(self.vector)

#     def _vectorize(self):
#         cv = CountVectorizer(stop_words="english")
#         return cv.fit_transform(self.data["book-details"]).toarray()

#     def recommend(self, book_title):
#         book_title = book_title.replace(" ", "")
#         index = self.data[self.data["Book-Title"] == book_title].index[0]
#         distances = sorted(list(enumerate(self.similarity[index])), reverse=True, key=lambda x: x[1])
#         recommendations = [self.data.iloc[i[0]]["Book-Title"] for i in distances[1:6]]
#         return recommendations

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.json
#         book_title = data['book_title']
#         books_data = data['books_data']

#         df = pd.DataFrame(books_data)
#         df.columns = ['Book-Title', 'Book-Author', 'Publisher']

#         model = BookRecommender(df)
#         recommendations = model.recommend(book_title)
#         return jsonify({'recommendations': recommendations})
#     except KeyError as e:
#         return jsonify({'error': f"Missing key: {e}"}), 400
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
