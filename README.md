# USR Lab Website

This is Social Heterogeneous Multi-set Research Group Website.
## Todo
- [x] Fold Publication pages
- [x] Change maps
- [x] Collect content [content collection tables](https://docs.qq.com/doc/DR3R6QWppRHNpbWtk?u=e9c66e9abc7a4be594994d91be9ec1e5&no_promotion=1)
- [x] Design logo
- [x] Personal *introduce*
- [x] roso
- [ ] Replace top image[Ask]
- [x] Useless pages like teachings
- [ ] Animations when scrolling down
- [x] index page left alien
- [x] font color of research people and publication utilize





## How to
### Add a member on index pages
Go to [`_pages/index.md`](_pages/index.md), depending on the new member scroll to `feature_row_people`, and add a new member. Place the profile picture under `assets/images/people`. It is important that the format of the image is jpg (otherwise it will break the members system in the publications page) and that the filename only contains the name of the new member e.g. `alessio.jpg`. Also don't forget to update the list of members in the very top part under `excerpt`.
### Add publications on publication pages
Go to ['_pages/publications.md'](_pages/publications.md) and scroll to `accordion_items:`. To add new yearly section, create`title` and `content` with the same format as given layout. Don't forget `|` after `content:` to insert multiple lines under content. To add new publication under different year section, just copy the citation of the publications under the corresponding yearly section.



#### Old how-to reference
    ### Add a member
    Go to [`_pages/people.md`](_pages/people.md), depending on the new member scroll to `feature_row_professors`, `feature_row_postdocs`, `feature_row_phds` or `feature_row_masters` and add a new member. Place the profile picture under `assets/images/people`. It is important that the format of the image is jpg (otherwise it will break the members system in the publications page) and that the filename only contains the name of the new member e.g. `alessio.jpg`. Also don't forget to update the list of members in the very top part under `excerpt`.
    
    
    ## How-to
    ### Add a news
    Go to [`_pages/index.md`](_pages/index.md) and add the news at the top after `Most recent news`. If the list of most recent news is becoming long (3-4) consider moving one of the oldest news to the top of the old_news file: [`_pages/old_news.md`](_pages/old_news.md) (remember to add a heading with a new year if missing).
    
    Format for news: the date is in ***italic bold*** and contains the year if it is in the `index.md` file but *does not* once it is move to the `old_news.md`. Title of papers go in *italic*, awards go in **bold**, venues can go in italic but not necessarily. Try to also include relevant liks if possible.
    
    ### Remove a member
    Go to [`_pages/people.md`](_pages/people.md) and remove the member, also go to `assets/images/people` and delete their profile photo. Then put their name and former role in the Alumni section of [`_pages/people.md`](_pages/people.md). Also don't forget to update the list of members in the very top part under `excerpt`.
    
    ### Add a publication
    Place the publication picture (if any) under `assets/images/publications`. Go to [`_pages/index.md`](_pages/index.md) and add a new entry under `feature_row` *and* delete the last entry. Go to [`_pages/publications.md`](_pages/publications.md) and add the new entry under `feature_row`. If the list becomes very long, please consider removing the last entry from the `feature_row` and add the publication under `Older publications`. In that case, please remember to also delete the associated image under `assets/images/publications`!
    
    ## Local Development
    Install Jekyll: [Jekyll - Installation](https://jekyllrb.com/docs/installation/)
    
    Fetch and update bundled gems: run `bundle`
    
    Start the website: `bundle exec jekyll serve`
    