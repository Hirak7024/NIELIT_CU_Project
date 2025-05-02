from django.db import models

class YouTubeVideo(models.Model):
    title = models.CharField(max_length=255)
    video_id = models.CharField(max_length=50)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
