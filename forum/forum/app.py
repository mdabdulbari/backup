from flask import Flask, render_template, url_for
import sqlite3

app = Flask(__name__)

@app.route('/', methods=['GET'])
def homePage():
    conn = sqlite3.connect('posts.db')
    postsDB = conn.cursor()
    posts = postsDB.execute("SELECT * FROM posts_table")
    return render_template('homePage.html', posts=posts)