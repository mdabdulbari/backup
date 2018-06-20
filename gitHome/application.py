import os
from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import hashlib
import string
import random
import smtplib

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login("githome.helpuser", "Iwantphone")

app = Flask(__name__)

username = 'bari'

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/home")
def index():
    return render_template("home.html")

@app.route("/help", methods=["GET", "POST"])
def help():
    if request.method == "POST":
        username = request.form.get("username")
        if username == "":
            message = "Please provide your username"
            return render_template("help.html", message=message, green_message="")
        connection = sqlite3.connect('gitdatabase.db')
        db = connection.cursor()
        emails = db.execute("SELECT email FROM users WHERE user='{}'".format(username))
        email = ""
        for element in emails:
            email = element[0]
        if email == "":
            message = "Username not found"
            return render_template("help.html", message=message, green_message="")
        random_string = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(6))
        hashed_password = hashlib.sha256(random_string).hexdigest()
        db.execute("UPDATE users SET password='{}' WHERE user='{}';".format(hashed_password, username))
        connection.commit()
        # Send random_string via email
        message = """
        Hi, we have successfully changed your password to: {}
        Please change your passwod once your login to your account.
        """.format(random_string)
        server.sendmail("githome.helpuser@gmail.com", email, message)
        green_message = "Successfully sent instructions to your registered email address."
        return render_template("help.html", message="", green_message=green_message)
    return render_template("help.html", message="", green_message="")

@app.route("/helpuser", methods=["GET", "POST"])
def helpuser():
    if request.method == "POST":
        email = request.form.get("email")
        if email == "":
            message = "Please provide your email address"
            return render_template("helpuser.html", message=message, green_message="")
        connection = sqlite3.connect('gitdatabase.db')
        db = connection.cursor()
        users = db.execute("SELECT user FROM users WHERE email='{}'".format(email))
        username = ""
        for element in users:
            username = element[0]
        if username == "":
            message = "Email not found"
            return render_template("helpuser.html", message=message, green_message="")
        # Send username via email
        message = """
        Hi, your username is: {}
        If you don't remember your password, please reset your password
        """.format(username)
        server.sendmail("githome.helpuser@gmail.com", email, message)
        green_message = "Successfully sent your username to your email address."
        return render_template("helpuser.html", message="", green_message=green_message)
    return render_template("helpuser.html", message="", green_message="")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        if username == "":
            message = "Please enter a username"
            return render_template("login.html", message=message)
        if password == "":
            message = "Invalid password"
            return render_template("login.html", message=message)

        hashed_password = hashlib.sha256(password).hexdigest()
        connection = sqlite3.connect('gitdatabase.db')
        db = connection.cursor()
        user = db.execute("SELECT user FROM users WHERE user='{}' AND password='{}'".format(username, hashed_password))
        logged_in = False
        for element in user:
            logged_in = True
        if logged_in:
            return redirect(url_for("index"))
        message = "Username and password don't match"
        return render_template("login.html", message=message)
    return render_template("login.html", message="")

@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")
        confirm_password = request.form.get("confirm_password")

        if not username:
            message = "Username must not be blank"
            return render_template("register.html", message=message)
        
        if "@" not in email:
            message = "Invalid Email address"
            return render_template("register.html", message=message)

        if len(password) < 8:
            message = "Password must be atleast 8 characters long"
            return render_template("register.html", message=message)

        if password != confirm_password:
            message = "Password must match"
            return render_template("register.html", message=message)
        connection = sqlite3.connect('gitdatabase.db')
        db = connection.cursor()
        users = db.execute("SELECT user, email FROM users WHERE user='{}' OR email='{}'".format(username, email))

        error = ""
        for element in users:
            if element[0] == username:
                error = "username"
            else:
                error = "email"

        if error == "username":
            message = "Username already taken"
            return render_template("register.html", message=message)
        elif error == "email":
            message = "Email already exists"
            return render_template("register.html", message=message)

        hashed_password = hashlib.sha256(password).hexdigest()
        db.execute("INSERT INTO users (user, password, email) VALUES ('{}', '{}', '{}')".format(username, hashed_password, email))
        connection.commit()
        return redirect(url_for("index"))

    message = ""
    return render_template("register.html", message = message)

@app.route("/settings")
def settings():
    return render_template("settings.html")

@app.route('/<path:path>')
def catch_all(path):
    os.chdir('/Users/inmabari/Documents/gitHome')   #Current working directory
    components = path.split('/')
    if components[0] == 'repositories':
        #check if username in repositories - pending
        files = []
        directories = []
        if components[1] == username:
            my_files = os.listdir('./repositories')
            os.chdir('repositories')
            if username not in my_files:
                if len(components) > 2 and components[2] != '':
                    return redirect(url_for("index"))    #MAYBE FIX THIS
                return render_template("repo.html", files=files, directories=directories, username=username)
            else:
                os.chdir(username)
                directories_to_enter = components[2:]

                for directory_to_enter in directories_to_enter:
                    files_in_the_directory = os.listdir('.')
                    if directory_to_enter in files_in_the_directory:
                        os.chdir(directory_to_enter)
                    else:
                        if directory_to_enter != "":
                            redirect(url_for('home'))  #FIX THIS
                my_files = os.listdir('.')
                for file1 in my_files:
                    if os.path.isdir('./{}'.format(file1)):
                        directories.append(file1)
                    else:
                        files.append(file1)
                return render_template("repo.html", files=files, directories=directories, username=username, path=path)
    return redirect(url_for("index"))