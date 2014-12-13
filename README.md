# The History of OpenPlans

[openplans.github.io/history-of/](http://openplans.github.io/history-of/)


## Local Setup

[help.github.com/articles/using-jekyll-with-pages/](https://help.github.com/articles/using-jekyll-with-pages/)

`bundle exec jekyll serve`


## Deploying

To deploy this repository to gh-pages, run the following commands **within a
clean repository** (any files in the `_site` directory that are modified and
not checked in will find their way into the distribution if your repository 
is not clean):

    git add --all _site/
    git commit -m "Update the distribution files"
    git push
    git subtree push --prefix dist origin gh-pages

*(Subtree instructions from https://gist.github.com/cobyism/4730490)*

If you're missing subtree, [install it](http://engineeredweb.com/blog/how-to-install-git-subtree/).
