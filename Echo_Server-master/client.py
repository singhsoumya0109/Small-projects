import socket
import time

def Main():
    host = '127.0.0.1'
    port = 12345
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    print(f'Connected to server at {host}:{port}')
    message = input("Message: ")
    while True:
        start_time = time.time()  # Record the time before sending data
        send_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(start_time))
        s.send(message.encode('ascii'))
        print(f'Data sent to server at: {send_time}')
        
        data = s.recv(1024)
        end_time = time.time()  # Record the time after receiving data
        receive_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(end_time))
        interval = end_time - start_time

        print(f'Received from the server: {str(data.decode("ascii"))}')
        print(f'Data received from server at: {receive_time}')
        print(f'Time interval: {interval:.2f} seconds')

        ans = input('\nDo you want to continue (y/n): ')
        if ans.lower() == 'y':
            message = input("Message: ")
        else:
            break
    s.close()
    print('Connection closed')

if __name__ == '__main__':
    Main()
