import random


class PasswordGenerator():

    @staticmethod
    def generate(input):
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
        password = ''.join(random.choice(characters) for i in range(12))
        return password