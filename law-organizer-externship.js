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
 *      @version 6.26
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
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' modifiers='striptags,htmlentities' />");
    var lastModifiedDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='last_modified' format='EEEE, MMMM d, yyyy' />");
    var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='publish_date' format='EEEE, MMMM d, yyyy' />");
    var contentId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />"); 
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />"); 




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var titleLink = '<h3 class="card-title visually-hidden">No Title Provided</h3>';
    var summary = '<p class="card-text visually-hidden subject location">No Subject or Location Provided</p>';
    var openCardBody = '<div class="card-body px-3">';
    var closeCardBody = '</div>';
    var openHiddenFields = '<div class="visually-hidden">';
    var closeHiddenFields = '</div>';
    var hiddenJurisdiction = '<span class="visually-hidden jurisdiction">No Jurisdiction Provided</span>';
    var hiddenType = '<span class="visually-hidden externshipType">No Type Provided</span>';
    var hiddenRegion = '<span class="visually-hidden region">No Region Provided</span>';
    var hiddenDescription = '<div class="visually-hidden description">No Description Provided</div>';
    var beginningHTML = '<div class="externshipWrapper contentItem col card border-0 w-100 my-2 shadow-sm" aria-label="' + externshipName + '" id="id' + contentId + '" data-position-default="Main" data-position-selected="Main">';
    var endingHTML = '</div>';




    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (agency != "") {
        titleLink = '<h3 class="card-title agency px-3"><a href="' + fullTextLink + '" class="card-link" title="View full ' + agency + ' profile">' + agency + '</a></h3>';
    } else {
        beginningHTML = '<div class="externshipWrapper contentItem col card border-0 w-100 my-2 shadow-sm visually-hidden" aria-label="' + externshipName + '" id="id' + contentId + '" data-position-default="Main" data-position-selected="Main">';
        titleLink = '<h3 class="card-title agency px-3 visually-hidden">' + externshipName + '</h3>';
    }




    /***
     *  confirm location and subject fields
     * 
     * */
    if (subject != "" && location != "") {
        summary = '<p class="card-text subject location">' + subject + ' (' + location + ')</p>';
    } else if (subject == "" && location != "") {
        summary = '<p class="card-text subject location">(' + location + ')</p>';
    } else if (subject != "" && location == "") {
        summary = '<p class="card-text subject location">' + subject + '</p>';
    } else {
        // When summary p is visually hidden compenstate for bottom margin in the card body
        openCardBody = '<div class="card-body mb-4 px-3">';
    }




    /***
     *  confirm jurisdiction
     * 
     * */
    if (jurisdiction != "") {
        hiddenJurisdiction = '<span class="visually-hidden jurisdiction">' + jurisdiction + '</span>';
    }




    /***
     *  confirm type
     * 
     * */
    if (externshipType != "") {
        hiddenType = '<span class="visually-hidden externshipType">' + externshipType + '</span>';
    }




    /***
     *  confirm region
     * 
     * */
    if (region != "") {
        hiddenRegion = '<span class="visually-hidden region">' + region + '</span>';
    }




    /***
     *  confirm description
     * 
     * */
    if (description != "") {
        hiddenDescription = '<div class="visually-hidden description">' + description + '</div>';
    }




    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(anchorTag);
    document.write(titleLink);
    document.write(openCardBody);
    document.write(summary);
    document.write(openHiddenFields);
    document.write(hiddenJurisdiction);
    document.write(hiddenType);
    document.write(hiddenRegion);
    document.write(closeHiddenFields);
    document.write(hiddenDescription);
    document.write(closeCardBody);
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}
