from django.shortcuts import render
# Create your views here.


def say_hello(request):
    return render(request, 'hello.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def architecture(request):
    return render(request, 'architecture.html')
# bgd/views.py


# bgd/views.py
from django.shortcuts import render
from .models import Tweet

def data(request):
    # Query all documents from MongoDB collection
    tweets = Tweet.objects.all()
    return render(request, 'data.html', {'tweets': tweets})






def testing(request):
    return render(request, 'testing.html')

def models(request):
    return render(request, 'models.html')

def team(request):
    return render(request, 'team.html')

