# History of OpenPlans, Volume I

History is a work in progress. 

## Help tell the story of OpenPlans! 

[Submit a pull request](https://help.github.com/articles/creating-a-pull-request/) 
to share your updates, or [add an issue](https://github.com/openplans/history-of/issues).

All accepted pull requests submitted before Jan 29th will earn the submitter an OpenPlans t-shirt! 

New contributions go in `_posts/`, formatted [with Markdown](https://help.github.com/articles/github-flavored-markdown/), with filenames like `YYYY-MM-DD-title.md`.

We'll share a [nicely formatted version of this history in early 2015](http://blog.openplans.org/2014/12/whats-next-for-openplans-in-2015/).


## Local Setup

[help.github.com/articles/using-jekyll-with-pages/](https://help.github.com/articles/using-jekyll-with-pages/)

Run `bundle exec jekyll serve`.

Site should be available at `http://localhost:4000`.


## Deploying

To deploy this repository to gh-pages, run the following commands **within a
clean repository** (any files in the `_site` directory that are modified and
not checked in will find their way into the distribution if your repository 
is not clean):

    git add --all _site/
    git commit -m "Update the distribution files"
    git push
    git subtree push --prefix _site origin gh-pages

*(Subtree instructions from https://gist.github.com/cobyism/4730490)*

If you're missing subtree, [install it](http://engineeredweb.com/blog/how-to-install-git-subtree/).

Site should be available at [openplans.github.io/history-of/](http://openplans.github.io/history-of/).
