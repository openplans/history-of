## Help tell the story of OpenPlans! 

This history is a work in progress. 

[Submit a pull request](https://help.github.com/articles/creating-a-pull-request/) 
to share your updates, or [add an issue](https://github.com/openplans/history-of/issues).

Format your contributions [with Markdown](https://help.github.com/articles/github-flavored-markdown/).

You can add issues directly to the existing year files (e.g. `2006.md`). 
Or, make a reverse-dated file, like `20061023.md` for an event taking place on Oct 23, 2006.

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
