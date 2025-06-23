# loginSignUp/urls.py

from django.urls import path
from .views import (
    UserRegisterView, UserLoginView,
    AdminRegisterView, AdminLoginView
)

urlpatterns = [
    path('userSide/register/', UserRegisterView.as_view(), name='user-register'),
    path('userSide/login/', UserLoginView.as_view(), name='user-login'),
    path('adminSide/register/', AdminRegisterView.as_view(), name='admin-register'),
    path('adminSide/login/', AdminLoginView.as_view(), name='admin-login'),
]
