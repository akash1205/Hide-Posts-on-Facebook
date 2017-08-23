page = document.querySelectorAll('._5pcr.fbUserPost');

//Add keywords in the below array
var check = ['sarahah.com','sarahah','Sarahah']

for(var i=0; i<page.length; i++)
{
    var len = check.length,
    j = 0;
    var count = 0;
    post = page[i].innerHTML.toLowerCase();

    for (; j < len; j++) {
        if (post.match(check[j])) {
            count++;
        }
    }

    if (count >= 1)
    {
        page[i].parentElement.parentElement.style.visibility = 'hidden';
    }

}
