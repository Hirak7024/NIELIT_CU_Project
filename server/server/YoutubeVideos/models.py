from django.db import models

class YouTubeVideo(models.Model):
    video_title = models.CharField(max_length=255)
    video_link = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically stores creation time

    def __str__(self):
        return self.video_title
