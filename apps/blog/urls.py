from django.urls import path

from .views import *

ulrpatterns = [
    path('list', BlogListView.as_view())
]