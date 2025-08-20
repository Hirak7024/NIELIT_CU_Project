# from django.db import models

# class ChatHistory(models.Model):
#     name = models.CharField(max_length=255, blank=True, null=True)
#     email = models.EmailField(blank=True, null=True)
#     session_id = models.CharField(max_length=255)
#     user_message = models.TextField()
#     bot_response = models.TextField()
#     timestamp = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Chat by {self.email or 'Anonymous'} at {self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}"

from django.db import models

class ChatHistory(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    session_id = models.CharField(max_length=255, unique=True)
    chats = models.JSONField(default=list)  # stores list of {"user": "...", "bot": "..."}
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Chats by {self.email or 'Anonymous'} at {self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}"
