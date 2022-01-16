from app.views import TasksViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TasksViewSet)
urlpatterns = router.urls