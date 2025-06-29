from django.urls import path
from .views import ChatHistorySaveView, ChatHistoryListView

urlpatterns = [
    path('save/', ChatHistorySaveView.as_view(), name='save-chat-history'),
    path('all/', ChatHistoryListView.as_view(), name='get-all-chats'), 
]
