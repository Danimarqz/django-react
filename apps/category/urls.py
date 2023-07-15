from django.urls import path

from .views import *

ulrpatterns = [
    path('list', ListCategoriesView.as_view())
]