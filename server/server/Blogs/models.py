from django.db import models

class Blog(models.Model):
    heading = models.CharField(max_length=255)
    subheading = models.CharField(max_length=255, blank=True)
    image_url = models.URLField(max_length=500, blank=True)
    content = models.TextField()  # Rich text from jodit-react
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.heading
