/***
 *      @author Victor Chimenti, MSCS
 *      @file law-organizer-externship.js
 *      @see Seattle University School of Law Externship Database
 *      law/organizer/externship
 *      ID: 5304
 *
 *      This content layout will be sorted by the organizer and will link to the
 *      full text layout to reveal the full externship profile.
 *
 *      Document will write once when the page loads
 *
 *      @version 6.35
 *          
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
    var activeStatus = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Active Status' output='normal' modifiers='striptags,htmlentities' />");
    var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship Description' output='normal' modifiers='medialibrary,nav_sections,striptags' />");
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Agency' output='fulltext' use-element='true' filename-element='Agency' modifiers='striptags,htmlentities' />");
    var lastModifiedDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='last_modified' format='EEEE, MMMM d, yyyy' />");
    var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='publish_date' format='EEEE, MMMM d, yyyy' />");
    var contentId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var titleLink = '<h3 class="card-title visually-hidden hidden">No Title Provided</h3>';
    var subtitle = '<p class="card-text visually-hidden hidden subject location">No Subject or Location Provided</p>';
    var openCardBody = '<div class="card-body">';
    var closeCardBody = '</div>';
    var openHiddenFields = '<div class="visually-hidden hidden">';
    var closeHiddenFields = '</div>';
    var hiddenJurisdiction = '<span class="visually-hidden hidden jurisdiction">No Jurisdiction Provided</span>';
    var typeString = '<span class="visually-hidden hidden externshipType">No Type Provided</span>';
    var hiddenRegion = '<span class="visually-hidden hidden region">No Region Provided</span>';
    var hiddenDescription = '<div class="visually-hidden hidden description">No Description Provided</div>';
    var beginningHTML = '<article class="externshipWrapper col card border-0 my-2 shadow-sm" id="externship' + contentId + '" aria-label="' + externshipName + '">';
    var endingHTML = '</article>';
    var statusString = '<span class="visually-hidden hidden status">No valid status entered</span>';




    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (activeStatus != "") {
        statusString = '<span class="visually-hidden hidden status">' + activeStatus + '</span>';

        if (activeStatus == 0) {
            beginningHTML = '<article class="externshipWrapper col card border-0 my-2 shadow-sm visually-hidden hidden" id="externship' + contentId + '" aria-label="' + externshipName + '">';
        }
    }





    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (agency != "") {
        titleLink = '<h3 class="card-title agency"><a href="' + fullTextLink + '" class="card-link" target="_blank" title="View full ' + agency + ' profile">' + agency + '</a></h3>';
    } else {
        beginningHTML = '<article class="externshipWrapper col card border-0 my-2 shadow-sm visually-hidden hidden" id="externship' + contentId + '" aria-label="' + externshipName + '">';
        titleLink = '<h3 class="card-title agency visually-hidden hidden">' + externshipName + '</h3>';
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
    } else {
        // When subtitle p is visually hidden compenstate for bottom margin in the card body
        // openCardBody = '<div class="card-body mb-4 px-3">';
    }




    /***
     *  confirm type
     * 
     * */
    if (externshipType != "") {
        typeString = '<p class="card-text fst-italic externshipType">' + externshipType + '</p>';
    }




    /***
     *  confirm jurisdiction
     * 
     * */
    if (jurisdiction != "") {
        hiddenJurisdiction = '<span class="visually-hidden jurisdiction">' + jurisdiction + '</span>';
    }




    /***
     *  confirm region
     * 
     * */
    if (region != "") {
        hiddenRegion = '<span class="visually-hidden hidden region">' + region + '</span>';
    }




    /***
     *  confirm description
     * 
     * */
    if (description != "") {
        hiddenDescription = '<div class="visually-hidden hidden description">' + description + '</div>';
    }




    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(openCardBody);
    document.write(titleLink);
    document.write(subtitle);
    document.write(typeString);
    document.write(openHiddenFields);
    document.write(hiddenJurisdiction);
    document.write(hiddenRegion);
    document.write(hiddenDescription);
    document.write(statusString);
    document.write(closeHiddenFields);
    document.write(closeCardBody);
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}