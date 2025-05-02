from django.urls import path
from .views import YouTubeVideoList, YouTubeVideoCreate

urlpatterns = [
    path('videos/', YouTubeVideoList.as_view(), name='youtube-video-list'),     # GET
    path('videos/create/', YouTubeVideoCreate.as_view(), name='youtube-video-create'),  # POST
]
