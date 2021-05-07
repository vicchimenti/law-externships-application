/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file law-organizer-externship.js
 *      @see Seattle University School of Law Externship Database
 *      law/organizer/externship
 *
 *      This content layout will be sorted by the organizer and will link to the
 *      full text layout to reveal the full externship profile.
 *
 *      Document will write once when the page loads
 *
 *      @version 6.2
 */




 try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var externshipId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship ID' output='normal' modifiers='striptags,htmlentities' />");
    var agency = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Agency' output='normal' modifiers='striptags,htmlentities' />");
    var subject = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Subject' output='normal' modifiers='striptags,htmlentities' />");
    var location = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Location' output='normal' modifiers='striptags,htmlentities' />");
    var jurisdiction = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Jurisdiction' output='normal' modifiers='striptags,htmlentities' />");
    var externshipType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Type' output='normal' modifiers='striptags,htmlentities' />");
    var region = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Region' output='normal' modifiers='striptags,htmlentities' />");
    var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship Description' output='normal' modifiers='medialibrary,nav_sections' />");
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' modifiers='striptags,htmlentities' />");
    var lastModifiedDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='last_modified' format='EEEE, MMMM d, yyyy' />");
    var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='publish_date' format='EEEE, MMMM d, yyyy' />");
    var contentId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />"); 
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />"); 




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var listOfTags = "<div class='newsroomArticle tags hidden'>No Tags Entered</div>";
    var titleLink = "";
    var listItems = "";
    var photoCredit = "";
    var authorByLine = "";
    var thumbNailString = "";
    var externalLinkString = "";
    var internalLinkString = "";
    var publishedLink = "";
    var hyphen = " - ";
    var events = "Events";
    var announcements = "Announcements";
    var suLawInTheNews = "SU Law in the News";
    var dateline = '<p class="newsroomArticlePublishedDate">' + publishedDate + '</p>';
    var beginningHTML = '<div class="newsroomCategoryFeedItem newsroomBlurb col-12 col-xs-12 card border-0" title="' + articleTitle + '" id="id<t4 type=\'meta\' meta=\'content_id\' data-position-default="Main" data-position-selected="Main" />">';
    var endingHTML = '<hr class="articleBorderBottom"></div>';







    /***
     *  parse the list of tags, add <li> tags
     * 
     * */
    // if (fieldTags != "") {
    //     var arrayOfTags = fieldTags.split(',');
    //     for (let i = 0; i < arrayOfTags.length; i++) {
    //         listItems += '<li class="tag rounded-pill">' + arrayOfTags[i] + '</li>';
    //     }
    //     listOfTags = '<div class="newsroomArticle tags"><ul class="categories">' + listItems + '</ul></div>';
    // }


    /***
     *  determine which link, if any, goes in the title
     *  and determine if a unique headline was added
     *  if no headline is added then use the title
     * 
     * */
    if (headline == "" && articleFullBody == "") {
        titleLink = '<h3 class="newsroomArticleTitle card-title">' + articleTitle + '</h3>';
    } else if (articleFullBody == "") {
        titleLink = '<h3 class="newsroomArticleTitle card-title">' + headline + '</h3>';
    } else if (headline == "") {
        titleLink = '<h3 class="newsroomArticleTitle card-title"><a href="' + fullTextLink + '">' + articleTitle + '</a></h3>';
    } else {
        titleLink = '<h3 class="newsroomArticleTitle card-title"><a href="' + fullTextLink + '">' + headline + '</a></h3>';
    }


    /***
     *  display byline only when provided 
     * 
     * */
    if (author == "") {
        authorByLine = '<p class="byLine hidden">No Author Provided</p>';
    } else {
        authorByLine = '<p class="byLine">By ' + author + '</p>';
    }


    /***
     *  determine if major feed
     * 
     * */
    if (isMajor == "major") {
        // ensure that an image was provided with the major feed
        if (frontPageImage == "") {
            thumbNailString = '<span class="newsroomImageWrapper hidden">No Image Provided</span>';
        } else {
            thumbNailString = '<span class="newsroomImageWrapper"><img src="' + frontPageImage + '" class="articleImage card-img-top" alt="' + frontPageImageCaption + '" /></span>';
        }
        // ensure that an image credit was provided
        if (photoCredit == "") {
            photoCredit = '<p class="byLine hidden">No Photographer Provided</p>';
        } else {
            photoCredit = '<p class="byLine">Image credit: ' + frontPageImageCredit + '</p>';
        }
    // if it's a minor article ignore any image provided in this feed
    } else {
        thumbNailString = '<span class="newsroomImageWrapper hidden"></span>';
    }





    /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, thumbNailString));
    document.write('<div class="newsroomArticleBlurb card-body">');
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleLink));
    document.write('<span class="newsroomArticleLead card-text"><p>' + articleSummary + '</p></span>');
    document.write('<div class="creditsWrapper card-text hidden">');
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, authorByLine));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, photoCredit));
    document.write('</div>'); // close credits div
    document.write(dateline);
    document.write('<div class="hidden">' + listOfTags + '</div>');
    document.write('<div class="hidden"><span class="articlePinned">' + pinned + '</span><span class="catPinned">' + catPin + '</span></div>');
    document.write('</div>'); // close newsroomArticleBlurb and row divs
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}