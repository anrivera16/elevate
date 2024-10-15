from django.urls import reverse
from django.views.generic import ListView, CreateView, UpdateView, DetailView, DeleteView
from django.utils.translation import gettext_lazy as _
from ..teams_example.models import Player
from ..teams.mixins import LoginAndTeamRequiredMixin


class TestPlayerViewMixin(LoginAndTeamRequiredMixin):
    """
    Mixin class for all views in the example app.
    """

    model = Player

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["active_tab"] = "teams_example"
        context["page_title"] = _("Example App | {team}").format(team=self.request.team)
        return context


class TestPlayerListView(TestPlayerViewMixin, ListView):
    pass


