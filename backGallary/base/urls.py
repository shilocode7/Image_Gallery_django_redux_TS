from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.test),
    path('data', views.data),
    path('students', views.StuView.as_view()),
    path('students/<pk>', views.StuView.as_view()),
]
