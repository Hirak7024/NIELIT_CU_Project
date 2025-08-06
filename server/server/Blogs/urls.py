from django.urls import path
from . import views

urlpatterns = [
    path('blog/', views.get_all_blogs, name='get_all_blogs'),
    # path('blog/single/', views.get_single_blog, name='get_single_blog'),  # POST with blog_id
    path('blog/<int:blog_id>/', views.get_single_blog, name='get_single_blog'),
    path('blog/create/', views.create_blog, name='create_blog'),          # POST
    path('blog/update/', views.update_blog, name='update_blog'),          # PUT with blog_id
    path('blog/delete/', views.delete_blog, name='delete_blog'),          # POST with blog_id
]
