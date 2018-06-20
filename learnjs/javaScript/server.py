import socket

listener_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
listener_socket.bind(("localhost", 4000))
listener_socket.listen(1)

while True:
    (client_socket, address) = listener_socket.accept()
    request = client_socket.recv(1024)
    print(request)
    f1 = open("index.html")
    client_socket.send(
"""HTTP/1.1 200 OK
Content-Type: text/html
\r\n
""")
    for element in f1:
        client_socket.send(element)
    client_socket.close()