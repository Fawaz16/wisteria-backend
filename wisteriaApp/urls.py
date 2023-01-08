from django.urls import path
from .import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.home, name='home'),
    path('community/',views.community, name='community'),
    path('signup/',views.signup, name='signup'),
    path('movie/',views.movie,name='movie'),
    path('stream/,<int:post_id>',views.stream,name='stream'),
    path('comment/',views.comment,name='comment'),
    path('get_comment/<int:id>',views.get_comment,name='get_comment'),
    path('get_user/<int:id>',views.get_user,name='get_user'),
    path('games/',views.game,name='game'),
    path('article/<int:post_id>',views.article,name='article'),
    path('music/',views.music,name='music'),
    path('discover/',views.discover,name='discover'),
    path('sports/',views.sports,name='sports'),
    path('business/',views.business,name='business'),
    path('sports/',views.sports,name='sports'),
    path('Todo/',views.Todo,name='Todo'),
    path('wallpaper/',views.wallpaper,name='wallpaper'),
    path('sportnews/<int:post_id>',views.sportnews,name='sportnews'),
    path('discovernews/<int:post_id>',views.discovernews,name='discovernews'),
    path('businessnews/<int:post_id>',views.businessnews,name='businessnews'),


]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)