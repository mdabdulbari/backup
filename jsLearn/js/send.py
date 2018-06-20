import socket
import select

def send_data(request, func):
    client_socket = socket.socket(socket.af_inet, socket.sock_stream)
    client_socket.setblocking(0)
    client_socket.connect(request)

    inputs = [client_socket]
    outputs = []
    error = []

    while True:
        readable, writable, error = select.select(inputs, outputs, error)

        if readable:
            data = client_socket.recv(1024)
            func(data)
