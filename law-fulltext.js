/***
 *      @author Victor Chimenti, MSCS
 *      @file law-fulltext.js
 *      @see Seattle University School of Law Externship Database
 *      law/fulltext
 *      ID: 5304
 *
 *      Fulltext layout for externship items
 *
 *      Document will write once when the page loads
 *
 *      @version 8.1
 */




try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var externshipName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var externshipId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship ID' output='normal' modifiers='striptags,htmlentities' />");
    var agency = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Agency' output='normal' modifiers='striptags,htmlentities' />");
    var subject = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Subject' output='normal' modifiers='striptags,htmlentities' />");
    var location = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Location' output='normal' modifiers='striptags,htmlentities' />");
    var jurisdiction = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Jurisdiction' output='normal' modifiers='striptags,htmlentities' />");
    var externshipType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Type' output='normal' modifiers='striptags,htmlentities' />");
    var region = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Region' output='normal' modifiers='striptags,htmlentities' />");
    var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship Description' output='normal' modifiers='medialibrary,nav_sections,striptags' />");
    var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='URL' output='normal' modifiers='striptags,htmlentities' />");
    var lastModifiedDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='last_modified' format='EEEE, MMMM d, yyyy' />");
    var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='publish_date' format='EEEE, MMMM d, yyyy' />");
    var contentId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var titleLink = '<h2 class="card-title visually-hidden hidden">No Title Provided</h2>';
    var subtitle = '<p class="card-text visually-hidden hidden subject location">No Subject or Location Provided</p>';
    var openCardBody = '<div class="card-body">';
    var closeCardBody = '</div>';
    var openHiddenFields = '<div class="visually-hidden hidden">';
    var closeHiddenFields = '</div>';
    var jurisdictionString = '<span class="visually-hidden hidden jurisdiction">No Jurisdiction Provided</span>';
    var typeString = '<span class="visually-hidden hidden externshipType">No Type Provided</span>';
    var hiddenRegion = '<span class="visually-hidden hidden region">No Region Provided</span>';
    var descriptionString = '<div class="visually-hidden hidden description">No Description Provided</div>';
    var beginningHTML = '<article class="externshipWrapper col card border-0 my-2 shadow-sm" id="externship' + contentId + '" aria-label="' + externshipName + '">';
    var endingHTML = '</article>';




    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (agency != "") {
        titleLink = '<h2 class="card-title agency"><a href="' + externalLink + '" class="card-link" target="_blank" title="View the ' + agency + ' website">' + agency + '</a></h2>';
    } else {
        beginningHTML = '<article class="externshipWrapper col card border-0 my-2 shadow-sm visually-hidden hidden" id="externship' + contentId + '" aria-label="' + externshipName + '">';
        titleLink = '<h2 class="card-title agency visually-hidden hidden">' + externshipName + '</h2>';
    }




    /***
     *  confirm location and subject fields
     * 
     * */
    if (subject != "" && location != "") {
        subtitle = '<p class="card-text subject location">' + subject + ' | ' + location + '</p>';
    } else if (subject == "" && location != "") {
        subtitle = '<p class="card-text subject location">' + location + '</p>';
    } else if (subject != "" && location == "") {
        subtitle = '<p class="card-text subject location">' + subject + '</p>';
    }




    /***
     *  confirm type
     * 
     * */
    if (externshipType != "") {
        typeString = '<p class="card-text externshipType">' + externshipType + '</p>';
    }




    /***
     *  confirm jurisdiction
     * 
     * */
    if (jurisdiction != "") {
        jurisdictionString = '<p class="card-text externshipType">' + jurisdiction + '</span>';
    }




    /***
     *  confirm description
     * 
     * */
    if (description != "") {
        descriptionString = '<div class="description">' + description + '</div>';
    }




    /***
     *  confirm region
     * 
     * */
    if (region != "") {
        hiddenRegion = '<span class="visually-hidden hidden region">' + region + '</span>';
    }









    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(anchorTag);
    document.write(openCardBody);
    document.write(titleLink);
    document.write(subtitle);
    document.write(typeString);
    document.write(jurisdictionString);
    document.write(descriptionString);
    document.write(openHiddenFields);
    document.write(hiddenRegion);
    document.write(closeHiddenFields);
    document.write(closeCardBody);
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}