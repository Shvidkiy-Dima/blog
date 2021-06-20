from django.urls import path
from work import views

urlpatterns = [
    path('', views.WorkListView.as_view()),
    path('<slug:slug>/', views.WorkDetailView.as_view())
]