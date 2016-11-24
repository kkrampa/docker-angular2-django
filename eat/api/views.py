from django.http.response import JsonResponse


def view(request):
    return JsonResponse({'test': 'test'})
