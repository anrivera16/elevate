from django.urls import path

from . import views

app_name = "test_page"

urlpatterns = [
    path("", views.PlayerListView.as_view(), name="player_list"),
]
