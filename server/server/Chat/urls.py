from django.urls import path
from .views import (
    ChatHistorySaveView,
    ChatHistoryListView,
    RegisteredUsersChatView,
    UnregisteredUsersChatView,
)

urlpatterns = [
    path('save/', ChatHistorySaveView.as_view(), name='save-chat-history'),
    path('all/', ChatHistoryListView.as_view(), name='get-all-chats'), 
    path('registered/', RegisteredUsersChatView.as_view(), name='registered-chat-history'),
    path('unregistered/', UnregisteredUsersChatView.as_view(), name='unregistered-chat-history'),
]
