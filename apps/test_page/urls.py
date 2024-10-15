from django.urls import path

from . import views

app_name = "test_page"

urlpatterns = [
    path('test-page/', views.TestPlayerListView.as_view(), name="test-page"),
]
