from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

#def say_hello(request):
    #  return render(request,'hello.html')
    
#def say_hello(request):
 #   return HttpResponse('Hello Jmii')

def say_hello(request):
    return render(request, 'hello.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def architecture(request):
    return render(request, 'architecture.html')

def data(request):
    return render(request, 'data.html')

def testing(request):
    return render(request, 'testing.html')

def models(request):
    return render(request, 'models.html')

def team(request):
    return render(request, 'team.html')