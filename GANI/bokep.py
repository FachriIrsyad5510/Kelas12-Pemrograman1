import turtle
import math
import random

random.seed(7)

screen = turtle.Screen()
screen.setup(800, 480)
screen.bgcolor("#12001c")

t = turtle.Turtle()
t.speed(0)

def stars():
    t.penup()
    for_in:range(70)
    x = random.randint(-390, 390)
    y = random.randint(-230, 230)
    t.goto(x, y)
    t.dot(random.randint(2, 4), "white")

def stem():
    t.penup()
    t.goto(0, 60)
    t.setheading(-72)
    t.color("#2e9e5b")
    t.pensize(7)
    t.pendown()
    t.circle(-420, 34)

def stem():
    t.penup()
    t.goto(0, 60)