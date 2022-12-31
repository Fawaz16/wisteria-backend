from django.shortcuts import render
import imp
from pydoc_data.topics import topics
from .models import Movie
from .models import Community
from .models import Comment
from .models import android_game
from .models import PC_game
from .models import game_article
from .models import Music
from .models import Meme
from .models import Discover_article
from .models import Did_you_know
from .models import Quotes
from .models import sport
from .models import Business
from django.shortcuts import redirect, render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
# Create your views here.

def home(request):
    '''render home page'''
    return render(request, 'index.html')


# @login_required
def community(request):
    ''''render the community page'''
    community_forum= Community.objects.all()[0]
   
    return render ( request , 'community-forum.html' , {'community':community_forum })


def signup(request):
    '''render signup page'''
    if request.method =='POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form= UserCreationForm()

    return render(request, 'signup.html', {'form': form})



def movie(request):
        '''render movie page'''
        movies=Movie.objects.all()

        return render(request , 'online-movies.html' ,{'movie':movies})


def stream(request, post_id):
    ''''render the download page'''
    stream=Movie.objects.get(id=post_id)
    return render(request, 'stream-movie.html', {'stream':stream})



def comment(request):
    if request.method == 'POST':
        body=request.POST["message"]
        owner=request.user
        id=request.POST["hiddenid"]
        id=int(id)
        post= Community.objects.get(id=id)
        comment=Comment.objects.create(post=post,owner=owner,body=body)
        comment.save()
        return HttpResponse("comment made")


def get_comment(request, id):
    '''get comments'''
    post= Community.objects.get(id=id)
    comments=Comment.objects.filter(post=post)
    return JsonResponse({"comments" : list(comments.values())})

def get_user(request, id):
    '''get comments'''
    user= User.objects.get(id=id)
    return JsonResponse({"user" :user})


def game(request):
    '''show game content'''
    game=android_game.objects.all()
    Pc=PC_game.objects.all()
    Article=game_article.objects.all()
    return render(request, 'online-games.html', {'game':game , 'pc':Pc, 'Article':Article})

def article(request,post_id):
    ''''render article page'''
    game_post=game_article.objects.get(id=post_id)
    return render(request, 'article.html', {'gamepost':game_post})

def music(request):
    '''render music page'''
    music=Music.objects.all()
    return render(request,'musics.html', {'music':music})


def discover(request):
    '''render discovery page'''
    discovery=Discover_article.objects.all()
    meme=Meme.objects.all()
    quote=Quotes.objects.all()
    did_you_know=Did_you_know.objects.all()
    return render(request, 'discover.html', {'discovery':discovery, 'meme':meme, 'did_you_know':did_you_know, 'quote':quote})


def sports(request):
    '''render sport page'''
    sports=sport.objects.all()
    return render(request, 'sport.html', {'sports':sports})


def sportnews(request,post_id):
    ''''render article page'''
    sportnews=sport.objects.get(id=post_id)
    return render(request, 'sportnews.html', {'sportnews':sportnews})


def discovernews(request,post_id):
    ''''render article page'''
    discover_news=Discover_article.objects.get(id=post_id)
    return render(request, 'discovernews.html', {'discover_post':discover_news})


def business(request):
    '''render business page'''
    business_article=Business.objects.all()
    return render(request, 'business.html' , {'business':business_article})



def businessnews(request,post_id):
    ''''render article page'''
    business_news=Business.objects.get(id=post_id)
    return render(request, 'businessarticle.html', {'business_post':business_news})



def Todo(request):
    '''render home page'''
    return render(request, 'todo-list.html')