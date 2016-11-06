from django.shortcuts import render, HttpResponse, redirect,HttpResponseRedirect

def work(request):
	return render(request,"s.html")