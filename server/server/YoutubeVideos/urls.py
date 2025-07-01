from django.urls import path
from . import views

urlpatterns = [
    path('fetch/', views.fetch_videos, name='fetch-videos'),
    path('post/', views.post_video, name='post-video'),
    path('edit/', views.edit_video, name='edit-video'), 
    path('delete/', views.delete_video, name='delete-video'),
]
