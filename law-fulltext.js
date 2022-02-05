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
 *      @version 8.6
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
    var country = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Country' output='normal' modifiers='striptags,htmlentities' />");
    var jurisdiction = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Jurisdiction' output='normal' modifiers='striptags,htmlentities' />");
    var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship Description' output='normal' modifiers='medialibrary,nav_sections' />");
    var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='URL' output='normal' modifiers='striptags,htmlentities' />");
    var prerequisites = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Pre Reqs' output='normal' modifiers='striptags,htmlentities' />");
    var supervisor = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Supervisor' output='normal' modifiers='striptags,htmlentities' />");
    var materials = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Materials' output='normal' modifiers='striptags,htmlentities' />");
    var deadline = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Deadline' output='normal' modifiers='striptags,htmlentities' />");
    var accepting = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Accepting' output='normal' modifiers='striptags,htmlentities' />");
    var hours = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Hours' output='normal' modifiers='striptags,htmlentities' />");
    var previousExterns = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Previous Externs' output='normal' modifiers='striptags,htmlentities' />");
    var activeStatus = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Active Status' output='normal' modifiers='striptags,htmlentities' />");
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
    var descriptionString = '<div class="visually-hidden hidden description">No Description Provided</div>';
    var beginningHTML = '<article class="externshipFulltext standardContent col card border-0" id="externship' + contentId + '" aria-label="' + externshipName + '" data-autonumber="' + externshipId + '" >';
    var endingHTML = '</article>';




    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (agency != "" && externalLink != "") {

        titleLink = '<h2 class="card-title agency"><a href="' + externalLink + '" class="card-link" target="_blank" title="View the ' + agency + ' website">' + agency + '</a></h2>';
    
    } else if (agency != "" && externalLink == "") {

        titleLink = '<h2 class="card-title agency">' + agency + '</h2>';
    
    } else {

        beginningHTML = '<article class="externshipWrapper col card border-0 my-2 shadow-sm visually-hidden hidden" id="externship' + contentId + '" aria-label="' + externshipName + '" data-autonumber="' + externshipId + '">';
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
     *  confirm jurisdiction
     * 
     * */
    if (jurisdiction != "") {
        jurisdictionString = '<p class="card-text externshipType"><strong>Jurisdiction: </strong>' + jurisdiction + '</p>';
    }




    /***
     *  confirm description
     * 
     * */
    if (description != "") {
        descriptionString = '<div class="externshipDescription"><h3>Externship Description</h3>' + description + '</div><h4>Program Details</h4>';
    }




    /***
     *  confirm prerequisites
     * 
     * */
    let prerequisiteString =    (prerequisites != "") 
                                ? '<p class="card-text prerequisites"><strong>Prerequisites: </strong>' + prerequisites + '</p>'
                                : '<span class="visually-hidden hidden prerequisites">No prerequisites provided</span>';




    /***
     *  confirm materials
     * 
     * */
    let materialString =   (materials != "") 
                            ? '<p class="card-text materials"><strong>Materials: </strong>' + materials + '</p>'
                            : '<span class="visually-hidden hidden materials">No materials provided</span>';




    /***
     *  confirm deadline
     * 
     * */
    let deadlineString =    (deadline != "") 
                            ? '<p class="card-text deadline"><strong>Deadline: </strong>' + deadline + '</p>'
                            : '<span class="visually-hidden hidden deadline">No deadline provided</span>';




    /***
     *  confirm applications
     * 
     * */
    let acceptingString =   (accepting != "") 
                            ? '<p class="card-text accepting"><strong>Accepts Applications: </strong>' + accepting + '</p>'
                            : '<span class="visually-hidden hidden accepting">No parameters provided</span>';




    /***
     *  confirm supervisor
     * 
     * */
    let supervisorString =  (supervisor != "") 
                            ? '<p class="card-text supervisor"><strong>Supervisor: </strong>' + supervisor + '</p>'
                            : '<span class="visually-hidden hidden supervisor">No supervisor provided</span>';




    /***
     *  confirm hours
     * 
     * */
    let hoursString =   (hours != "") 
                        ? '<p class="card-text hours"><strong>Hours: </strong>' + hours + '</p>'
                        : '<span class="visually-hidden hidden hours">No hours provided</span>';




    /***
     *  confirm previous externs
     * 
     * */
    let previousExternsString = (previousExterns != "") 
                                ? '<p class="card-text previousExterns"><strong>Previous Externs: </strong>' + previousExterns + '</p>'
                                : '<span class="visually-hidden hidden previousExterns">No previous externs provided</span>';






    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(anchorTag);
    document.write(openCardBody);
    document.write(titleLink);
    document.write(subtitle);
    document.write(deadlineString);
    document.write(acceptingString);
    document.write(prerequisiteString);
    document.write(materialString);
    document.write(descriptionString);
    document.write(supervisorString);
    document.write(hoursString);
    document.write(previousExternsString);
    document.write(jurisdictionString);
    document.write(closeCardBody);
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}