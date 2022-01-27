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
 *      @version 7.2
 */



/***
 *      Import T4 Utilities
 */
 importClass(com.terminalfour.media.IMediaManager);
 importClass(com.terminalfour.spring.ApplicationContextProvider);
 importClass(com.terminalfour.publish.utils.BrokerUtils);
 importClass(com.terminalfour.media.utils.ImageInfo);
 
 
 
 
 /***
  *      Extract values from T4 element tags
  *      and confirm valid existing content item field and trim strings
  */
 function getContentValues(tag) {
 
     try {
 
         let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim()
 
         return {
             isError: false,
             content: _tag == '' ? null : _tag
         }
 
     } catch (error) {
 
         return {
             isError: true,
             message: error.message
         }
     }
 }
 
 
 
 
 /***
  *      Returns a media object
  */
 function getMediaInfo(mediaID) {
 
     let mediaManager = ApplicationContextProvider.getBean(IMediaManager);
     let media = mediaManager.get(mediaID, language);
 
     return media;
 }
 
 
 
 
 /***
  *      Returns a media stream object
  */
 function readMedia(mediaID) {
 
     let mediaObj = getMediaInfo(mediaID);
     let oMediaStream = mediaObj.getMedia();
 
     return oMediaStream;
 }
 
 
 
 
 /***
  *      Returns an array of list items
  */
 function assignList(arrayOfValues) {
 
     let listValues = '';
 
     for (let i = 0; i < arrayOfValues.length; i++) {
 
         listValues += '<li class="tag">' + arrayOfValues[i].trim() + '</li>';
     }
 
     return listValues;
 }
 
 
 
 
 /***
  *      Write the document
  */
 function writeDocument(array) {
 
     for (let i = 0; i < array.length; i++) {
 
         document.write(array[i]);
     }
 }
 




try {


    /***
     *      Dictionary of content
     * */
         let externDict = {

            externshipName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
            externshipId: getContentValues('<t4 type="content" name="Externship ID" output="normal" modifiers="striptags,htmlentities" />'),
            agency: getContentValues('<t4 type="content" name="Agency" output="normal" modifiers="striptags,htmlentities" />'),
            subject: getContentValues('<t4 type="content" name="Subject" output="normal" modifiers="striptags,htmlentities" />'),
            location: getContentValues('<t4 type="content" name="Location" output="normal" modifiers="striptags,htmlentities" />'),
            jurisdiction: getContentValues('<t4 type="content" name="Jurisdiction" output="normal" modifiers="striptags,htmlentities" />'),
            externshipType: getContentValues('<t4 type="content" name="Type" output="normal" modifiers="striptags,htmlentities" />'),
            region: getContentValues('<t4 type="content" name="Region" output="normal" modifiers="striptags,htmlentities" />'),
            description: getContentValues('<t4 type="content" name="Externship Description" output="normal" modifiers="medialibrary,nav_sections" />'),
            fullTextLink: getContentValues('<t4 type="content" name="Agency" output="fulltext" use-element="true" filename-element="Agency" modifiers="striptags,htmlentities" />'),
            lastModifiedDate: getContentValues('<t4 type="meta" meta="last_modified" format="EEEE, MMMM d, yyyy" />'),
            publishDate = getContentValues('<t4 type="meta" meta="publish_date" format="EEEE, MMMM d, yyyy" />'),
            contentId: getContentValues('<t4 type="meta" meta="content_id" />')
    
        }

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    // var externshipName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    // var externshipId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship ID' output='normal' modifiers='striptags,htmlentities' />");
    // var agency = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Agency' output='normal' modifiers='striptags,htmlentities' />");
    // var subject = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Subject' output='normal' modifiers='striptags,htmlentities' />");
    // var location = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Location' output='normal' modifiers='striptags,htmlentities' />");
    // var jurisdiction = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Jurisdiction' output='normal' modifiers='striptags,htmlentities' />");
    // var externshipType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Type' output='normal' modifiers='striptags,htmlentities' />");
    // var region = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Region' output='normal' modifiers='striptags,htmlentities' />");
    // var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Externship Description' output='normal' modifiers='medialibrary,nav_sections,striptags' />");
    // var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Agency' output='fulltext' use-element='true' filename-element='Agency' modifiers='striptags,htmlentities' />");
    // var lastModifiedDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='last_modified' format='EEEE, MMMM d, yyyy' />");
    // var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='publish_date' format='EEEE, MMMM d, yyyy' />");
    // var contentId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    let titleLink = '<h3 class="card-title visually-hidden hidden">No Title Provided</h3>';


    // var summary = '<p class="card-text visually-hidden hidden subject location">No Subject or Location Provided</p>';


    let openCardBody = '<div class="card-body px-3">';
    let closeCardBody = '</div>';
    var openHiddenFields = '<div class="visually-hidden hidden">';
    var closeHiddenFields = '</div>';
    var hiddenRegion = '<span class="visually-hidden hidden region">No Region Provided</span>';
    var hiddenDescription = '<div class="visually-hidden hidden description">No Description Provided</div>';


    let beginningHTML = '<article class="externshipWrapper col card border-0 w-100 my-2 shadow-sm" id="externship' + externDict.contentId.content + '" aria-label="' + externDict.externshipName.content + '">';
    let endingHTML = '</article>';




    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (agency) {
        titleLink = '<h3 class="card-title agency px-3"><a href="' + externDict.fullTextLink.content + '" class="card-link" target="_blank" title="View full ' + externDict.agency.content + ' profile">' + externDict.agency.content + '</a></h3>';
    } else {
        beginningHTML = '<article class="externshipWrapper col card border-0 w-100 my-2 shadow-sm visually-hidden" id="externship' + externDict.contentId.content + '" aria-label="' + externDict.externshipName.content + '">';
        titleLink = '<h3 class="card-title agency px-3 visually-hidden">' + externDict.externshipName.content + '</h3>';
        openCardBody = '<div class="card-body mb-4 px-3">';
    }




    /***
     *  confirm location and subject fields
     * 
     * */
    let subtitle = ({
        subject, location
    }) => (
        (!subject)
            ? '<p class="card-subtitle visually-hidden hidden subject location">No valid Location or Subject provided</p>'
            : (location)
            ? '<h4 class="card-subtitle mb-2 text-muted location">' + externDict.location.content + '</h4>'
            : '<h4 class="card-subtitle mb-2 text-muted subject location">' + externDict.subject.content + ' | ' + externDict.location.content + '</h4>'
    );


    /***
     *  confirm type
     * 
     * */
    let typeString =    (externshipType)
                        ? '<p class="card-text externshipType">' + externDict.externshipType.content + '</p>'
                        : '<span class="visually-hidden hidden externshipType">No Type Provided</span>';

    



    // if (subject != "" && location != "") {
    //     summary = '<p class="card-text subject location">' + subject + ' (' + location + ')</p>';
    // } else if (subject == "" && location != "") {
    //     summary = '<p class="card-text subject location">(' + location + ')</p>';
    // } else if (subject != "" && location == "") {
    //     summary = '<p class="card-text subject location">' + subject + '</p>';
    // } else {
    //     openCardBody = '<div class="card-body mb-4 px-3">';
    // }




    /***
     *  confirm jurisdiction
     * 
     * */
    let hiddenJurisdiction =    (jurisdiction) 
                                ? '<span class="visually-hidden hidden jurisdiction">' + externDict.jurisdiction.content + '</span>'
                                : '<span class="visually-hidden hidden jurisdiction">No Jurisdiction Provided</span>';











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
    document.write(titleLink);
    document.write(openCardBody);
    // document.write(summary);
    document.write(openHiddenFields);
    document.write(hiddenJurisdiction);
    document.write(hiddenType);
    document.write(hiddenRegion);
    document.write(closeHiddenFields);
    document.write(hiddenDescription);
    document.write(closeCardBody);
    document.write(endingHTML);


    /***
     *  write document once
     * 
     * */
     writeDocument(
        [
            beginningHTML,
            openCardBody,
            titleLink,
            subtitle,

            publishedLink,
            summaryString,

            typeString,


            dateline,
            openHidden,
            listOfCats,
            pinnedItem,
            closeHidden,
            closeCardBody,
            endingHTML
        ]
    );






} catch (err) {
    document.write(err.message);
}