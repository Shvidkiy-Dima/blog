from django.urls import path
from post import views

urlpatterns = [
    path('', views.PostListView.as_view()),
    path('tag/', views.PostTagListView.as_view()),
    path('<slug:slug>/', views.PostDetailView.as_view()),
]