from django.shortcuts import render
import pandas as pd


def home(request):
    data = pd.read_csv(r'D:\Project_BasisData\jadwal_film.cvs')
    data = data.to_dict(orient="records")
    return render(request,r'Home\home.html',{"data":data})