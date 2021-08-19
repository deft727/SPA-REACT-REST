from django.db import router
from django.urls import path
from rest_framework import routers
from .views import BlogCategoryViewset, BlogPostViewset

router = routers.SimpleRouter()

router.register('category', BlogCategoryViewset, basename='category')
router.register('posts', BlogPostViewset, basename='posts')

urlpatterns = [
]
urlpatterns += router.urls