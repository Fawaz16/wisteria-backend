from telnetlib import GA
from django.contrib import admin
from .models import Business, Community ,Comment, Did_you_know, Discover_article, Meme,Movie, Music, PC_game, Quotes, Wallpapers, android_game, game_article, sport


# Register your models here.
admin.site.register(Community),
admin.site.register(Comment),
admin.site.register(Movie),
admin.site.register(android_game),
admin.site.register(game_article),
admin.site.register(PC_game),
admin.site.register(Music),
admin.site.register(Discover_article),
admin.site.register(Meme),
admin.site.register(Quotes),
admin.site.register(Did_you_know),
admin.site.register(sport),
admin.site.register(Business),
admin.site.register(Wallpapers),
